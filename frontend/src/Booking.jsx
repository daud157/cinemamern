import { useContext, useEffect, useState } from 'react';
import { MovieListContext } from './App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Booking({ setProgress }) {
  const { totalCost, setTotalCost, movieDetails, activeUser } = useContext(MovieListContext);

  const [submitted, setSubmitted] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, []);

  const handleClick = () => {
    axios.post("http://localhost:3001/userdashboard/booking", {
      name: activeUser.userName,
      email: activeUser.email,
      movieName: movieDetails.title,
      ticketPrice: movieDetails.price,
      noOfTickets: totalCost / movieDetails.price,
      total: totalCost,
      Date: movieDetails.year,
    })
    .then(result => {
      console.log(result);
      setSubmitted(true);
      window.alert("Ticket booked");
    
      // Navigate('/userdashboard/tickets');
      // Navigate('/userdashboard/tickets');

    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div className='bg-black flex w-full font-semibold border rounded-xl h-full'>
      <div className='w-full h-full'>
        <p className='text-secondary text-center text-3xl mt-20'>Welcome Dear {activeUser.userName.toUpperCase()} to Cinplex!</p>
        <p className='text-secondary text-center text-md mt-10 mb-8'>Step into the Limelight: Elevate Your Experience with the Ultimate Cinematic Adventure – Your Exclusive Ticket to Unforgettable Movie Magic Awaits!</p>
        <div className='w-1/2 bg-secondary rounded-3xl flex flex-row mx-auto mb-20 justify-start '>
          <div className='w-1/4'>
          <img src={movieDetails.poster}
             className='  ml-0 block rounded-tl-3xl rounded-bl-3xl h-full ' alt='Movie Poster' />
          </div>
          <div className='mt-6 text-xl text-black h-10 w-2/8'>
            <p className='ml-10 text-3xl underline'>{movieDetails.title}</p>
            <div className='h-1/2 mt-16 ml-10 text-sm font-semibold'>
              <p>NAME: {activeUser.userName.toUpperCase()}</p>
              <p>EMAIL: {activeUser.email}</p>
              <p>DATE: {movieDetails.year}</p>
              <p>PRICE: {movieDetails.price}</p>
              <p>Total: {totalCost}</p>
              <img className='h-10 w-10 rounded-xl mt-12 ml-28 inline-block' src={activeUser.avatar} alt='User Avatar' />
            </div>
          </div>
          <div className='w-1/5 h-full border-r border-dashed ml-8 border-black'>
            <p className='text-xl text-bold mt-28 ml-4'>Adults {totalCost / movieDetails.price}</p>
            <p className='mt-6 ml-8'>Cineplex</p>
            <p className='ml-8'>Centaurus Mall,</p>
            <p className='ml-8'>Islamabad</p>
            <p className='mt-12'>Cineplex Cinemas</p>
          </div>
        </div>
        {/* <button onClick={handleClick} className='h-16 float-right mr-52 px-8 mb-20 rounded-2xl bg-yellow-700 text-white '>Confirm Booking</button> */}
        <div>
      {!submitted && (
        <button
          onClick={handleClick}
          className='h-16 float-right mr-52 px-8 mb-20 rounded-2xl bg-yellow-700 text-white'
        >
          Confirm Booking
        </button>
      )}
      {submitted && (
        <button
          className='h-16 float-right mr-52 px-8 mb-20 rounded-2xl bg-yellow-700 text-white opacity-50 cursor-not-allowed'
          disabled
        >
          Your Ticket has been booked!
        </button>
      )}
    </div>
      </div>
    </div>
  );
}
