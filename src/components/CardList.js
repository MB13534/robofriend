import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    // if(true) {
    //     throw new Error('NO');
    // }
    
    return (
    <>
    {
        robots.map((robot, index) => {
            return (
                <Card 
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email} 
                key={robots[index].id} 
                />
                )
        })
    }
    </>
    );
}

export default CardList