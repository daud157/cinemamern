import React, { useEffect } from 'react'
import NavBar from './NavBar';
// import HomeSlider from './HomeSlider'
// import { Outlet } from 'react-router-dom';
export default function Home({setProgress}){
  useEffect(()=>{

  setProgress(40);
setTimeout(()=>{
setProgress(100);

},2000)
  },[]);
  return (
    <div className=' '>
     <NavBar/>
   
     
    </div>
  )
}
