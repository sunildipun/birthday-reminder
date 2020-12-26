import React from 'react';
import './list-item.style.css';

export const ListItem = ({id, name, image, age}) => {
    return (
        <div className="list-item">
            <img class="image" src={image} alt={name}/>
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </div>
    )
}
