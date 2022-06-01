import React from 'react'
import { useState, useEffect } from 'react'

export default function ActiveUser(props) {

    const [currentUser, setCurrentUser] = useState([]);

    useEffect(()=> {
        const request = async () => {
        const response = await fetch(`https://dummyjson.com/users/${props.id}`);
        const user = await response.json();
        setCurrentUser(user);
        }

        request();
        
    }, [props.id])

    return (
        <div className='active-user'>
            <div className="image-holder">
                <img src={currentUser.image} alt="user" />
            </div>
            <div className="text-holder">
                <span className="user-card-line name">{currentUser.firstName}</span>
                <span className="user-card-line name">{currentUser.lastName}</span>
                <span className="user-card-line">Gender: {currentUser.gender}</span>
                <span className="user-card-line">Age: {currentUser.age}</span>
                <span className="user-card-line">E-mail: {currentUser.email}</span>
            </div>
        </div>
    )
}
