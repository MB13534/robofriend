import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    async componentDidMount() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');        
        this.setState({ robots: data });
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots ? 
             <h1>Loading...</h1>:
             (
                <div className="tc">
                <h1>RoboFriends</h1>
                
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
                
                </div>
            )            
        
        
    }
    
}

export default App;