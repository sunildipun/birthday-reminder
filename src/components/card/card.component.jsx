import React, { Component } from 'react'
import './card.style.css';


export default class Card extends Component {

    constructor() {
        super();

        this.state = {
            birthdays: [
                {
                    id: 1,
                    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
                    name: 'Bertie Yates',
                    age: 29
                },
                {
                    id: 2,
                    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
                    name: 'Hester Hogan',
                    age: 32
                },
                {
                    id: 3,
                    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
                    name: 'Larry Little',
                    age: 36
                },
                {
                    id: 4,
                    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
                    name: 'Sean Walsh',
                    age: 34
                },
                {
                    id: 5,
                    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
                    name: 'Lola Gardner',
                    age: 25
                }
            ]
        }
    }

    render() {
        return (
        <div className="card">
            <h3> 5 Birthday today</h3>
            {
                this.state.birthdays.map(({id, ...otherData}) =>
                    <h1 key={id}>Hello</h1>
                )
            }
        </div>
        )
    }
}


