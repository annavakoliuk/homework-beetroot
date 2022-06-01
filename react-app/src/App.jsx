import React from 'react';
import { useState, useEffect } from 'react';
import ActiveUser from './components/ActiveUser';
import './style/main.scss';



function App() {

  const [users, setUsers] = useState([]);
  const [activeId, setActiveId] = useState(1);

  useEffect(()=> {
    const request = async () => {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setUsers(data.users);
    }

    request();
    
  }, [])
  return (
    <div className='container'>
      <ActiveUser id={activeId}/>
      <div className='user-list-holder'>
        <ul className='user-list'>
          {users.map(user => (
            <li key={user.id} className='user-card'>
              <a href="#" className="user-link" onClick={(e) => {
                e.preventDefault();
                setActiveId(user.id);
              }}>
                <div className="image-holder">
                  <img src={user.image} alt="user" />
                </div>
                <div className="text-holder">
                  <span className='user-card-line'>{user.firstName}</span>
                  <span className='user-card-line'>{user.lastName}</span>
                </div>
              </a>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}



export default App;
