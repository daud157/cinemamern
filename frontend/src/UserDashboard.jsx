import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import {useContext} from 'react'
import { MovieListContext } from './App';
export default function UserDashboard() {

  const {activeUser,setActiveUser}=useContext(MovieListContext);
  return (
    <div className='h-full w-screen bg-white flex mt-4 rounded-xl '>
        <div className='h-5/6 w-1/6 bg-black rounded-xl'>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocKQ1Qjs9QFGZNn5SXL75TKR88HykH3dQ5_VfThG7sxlUoE=s288-c-no" className='w-20 h-20 rounded-full bg-white inline mt-4 ml-10 text-white '></img>
            <p className='text-white text-xl inline ml-8'>{activeUser.userName}</p>
            <div className='h-1/1  text-center py-10 space-y-8 text-secondary'>
              <Link to="/userdashboard/booking" className= "block py-3 text-secondary  hover:bg-secondary hover:text-black  hover:rounded-tl-3xl hover:rounded-bl-3xl" >
                Home
              </Link>
              <Link to="/userdashboard/tickets" className=" block mt-4 py-3 text-center  hover:bg-secondary hover:text-black  hover:rounded-tl-3xl hover:rounded-bl-3xl">
                Your Tickets
              </Link>
              <Link to="/userdashboard/wishlist" className=" block  py-3 mt-4 hover:bg-secondary hover:text-black hover:rounded-tl-3xl hover:rounded-bl-3xl" >
               Your wishlist
              </Link>
              <Link to="/userdashboard/tickets " className=" block py-3 mt-4  hover:bg-secondary hover:text-black  hover:rounded-tl-3xl hover:rounded-bl-3xl " >
               Suggestions
              </Link>
              <Link to="/userdashboard/tickets" className=" block  py-3 ,t-4  hover:bg-secondary hover:text-black  hover:rounded-tl-3xl hover:rounded-bl-3xl ">
               History
              </Link>
              <Link to="/userdashboard/tickets " className=" block  py-3 mt-4  hover:bg-secondary hover:text-black   hover:rounded-tl-3xl hover:rounded-bl-3xl" >
               Profile
              </Link>
              <Link to="/userdashboard/tickets" className=" block  py-3 mt-4  hover:bg-secondary hover:text-black   hover:rounded-tl-3xl hover:rounded-bl-3xl" >
              Settings
              </Link>
              <p className='text-center'> CinePlex</p>
           
              </div>
            
            
        </div>

         <div className='h-5/6 w-5/6 mr-5 ml-5 bg-yellow-300 rounded-2xl'>


            <Outlet></Outlet>
         </div>

          



    </div>
  )
}
