import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { MovieListContext } from './App';
export default function Tickets() {
  const {activeUser,setActiveUser}=useContext(MovieListContext);
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.post('http://localhost:3000/userdashboard/tickets',{email:activeUser.email})
    .then(result=>{console.log(result.data.users)
                   setUsers(result.data.users)
    })
    .catch(err=>{console.log(err)})


  })


  const headings = [
    'Name',
    'Email',
    'Movie Name',
    'Ticket Price',
    'No. of Tickets',
    'Total',
    'Date'
  ];

  return (
    <div className='h-full w-full bg-primary rounded-2xl'>
      <div className='text-3xl text-center text-secondary py-8 r'>Welcome {'   '} {activeUser.userName.toUpperCase()}{'  '}thats Your history Page! </div>
    <div className=" text-white p-4 mt-12 border ml-2 mr-2 rounded-xl">
      <div className="flex bg-red-100 bg-secondary py-4 rounded-3xl text-black ">
        {headings.map((heading, index) => (
          <div key={index} className="flex-1 text-center ">
            <h3 className="text-lg font-semibold">{heading}</h3>
          </div>
        ))}
      </div>

      {users.map((user, userIndex) => (
        <div key={userIndex} className="flex my-4 py-6 hover:bg-secondary hover:text-black rounded-3xl hover:cursor-pointer">
          {Object.keys(user).map((key, index) => (
            <div key={index} className="flex-1 text-center">
              <p className="">{user[key]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
  
          }
