import {useContext, useEffect, useState} from 'react'
import { MovieListContext } from './App';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

// import { UseGlobalContext } from './Context';
export default function Booking({setProgress}) {
  // const [totalCost,setTotalCost]=useContext(MovieListContext);
  const { totalCost, setTotalCost } = useContext(MovieListContext);
  const {movieDetails,setMovieDetails}=useContext(MovieListContext);
  const {activeUser,setActiveUser}=useContext(MovieListContext);
  // const [ticket,setTicket]=useState({


  //   name:'',
  //   email:'',
  //   movieName:'',
  //   ticketPrice:'',
  //   noOfTickets:'',
  //   total:'',
  //   Date:'',



  // })

  const Navigate=useNavigate();
    useEffect(()=>{

        setProgress(40);
      setTimeout(()=>{
      setProgress(100);
      
      },2000)
        },[]);
        const handleClick=()=>{

            axios.post("http://localhost:3000/userdashboard/booking",{
            
             name:activeUser.userName,
             email:activeUser.email,
             movieName:movieDetails.title,
             ticketPrice:movieDetails.price,
             noOfTickets:totalCost/movieDetails.price,
             total:totalCost,
             Date:movieDetails.year,

            })
            .then(result=>{console.log(result)
            window.alert("ticket booked")
            Navigate('/MoviesList');
          })
          .catch(err=>{console.log(err)})

        }

  return (
    <div className='bg-black  h-full flex w-full font-semibold'>
    <div  className='w-full h-full '>
    <p className='text-secondary text-center text-3xl mt-20 '>  Welcome Dear {activeUser.userName.toUpperCase()} to Cinplex!</p>
    <p className='text-secondary text-center text-md mt-10 '> Step into the Limelight: Elevate Your Experience with the Ultimate Cinematic Adventure – Your Exclusive Ticket to Unforgettable Movie Magic Awaits!</p>
  <div className='w-1/2 h-2/5 bg-secondary rounded-3xl flex mx-auto mt-20 justify-start'>

    <img src={movieDetails.poster} className='w-1/3 h-1/1 ml-0 inline-block rounded-tl-3xl rounded-bl-3xl'></img>
    
    {/* Title Div */}
    <div className='mt-6 text-xl text-black h-10 w-2/8 '>
    <p className='ml-10 text-3xl underline'>{movieDetails.title}</p>
    


    <div className=' h-1/2 mt-16 ml-10 text-sm font-semibold'>
      <p className=''>NAME: {activeUser.userName.toUpperCase()}</p>
      <p>EMAIL:{activeUser.email}</p>
      <p>DATE: { movieDetails.year}</p>
      <p>PRICE:{movieDetails.price}</p>
      <p>Tottal :{totalCost}</p>
      
      <div className='inline-block w-40'>
      
     
      <img  className=' h-10 w-10 rounded-xl mt-12 ml-28 inline-block'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyp6OLfj8Vgz3Owx5uOIJusLnTc5YU3hdAJ-RXXAwQFseBTj5yq8pwhjF_jw&s'></img>
     
      </div>

    </div>
  </div>
  <div className='w-1/5 h-full  border-r border-dashed ml-8 border-black'>
    <p className='text-xl text-bold mt-28 ml-4'>Adults {totalCost/movieDetails.price}</p>
    <p className='mt-6 ml-8'>Cineplex</p>
    <p className='ml-8'>Centaurus Mall,</p>
    <p className='ml-8'>Islambad</p>

    <p className=' mt-12'>Cineplex Cinemas</p>
    <button onClick={handleClick} className='h-16 mt-20 w-40 ml-28 rounded-2xl bg-yellow-700 text-white'>Confirm Booking</button>
   
  </div>
  <img className='h-full w-1/5 bg-transparent rounded-tr-3xl rounded-br-3xl' src='data:image/png;base64,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'></img>
  </div>
 
  </div> 
  
</div>
  )}
  