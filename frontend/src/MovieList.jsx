// src/components/MovieList.js
import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {MovieListContext} from './App';
import { useNavigate } from 'react-router-dom';


const movies = [
  {
    id: '1',
    title: 'Ozler',
    year: 'November 5, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAxMC4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00382570-acnkgqlgtx-portrait.jpg',
    price: 1000,
  },
  {
    id: '2',
    title: 'Hanuman',
    year: 'July 23, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS42LzEwICAxMjIuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311673-hgpjragdze-portrait.jpg',
   
    price: 1500,
  },
  {
    id: '3',
    title: 'Captain Miller',
    year: 'January 17, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAxOS40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00333139-epubenyrac-portrait.jpg',
    price: 1000,
  },
  {
    id: '4',
    title: 'Dhoom',
    year: 'September 7, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni42LzEwICAxMTMuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310760-uptdwxjtpu-portrait.jpg',
    price: 500,
  },
  {
    id: '5',
    title: 'Pk',
    year: 'November, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5LjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00350932-msfzkegjyg-portrait.jpg',
    price: 5000,
  },
  {
    id: '6',
    title: '3 idiots',
    year: 'October 17, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-OTkuNEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00369336-fsfapfkbfg-portrait.jpg',
    price: 2000,
  },
  {
    id: '7',
    title: 'Khilari',
    year: 'May 17, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA1MC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00355776-qpqyjgbymm-portrait.jpg',
    price: 3000,
  },
  {
    id: '8',
    title: 'Hanuman',
    year: 'January 6, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS42LzEwICAxMjIuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311673-hgpjragdze-portrait.jpg',
    price: 4000,
  },
  {
    id: '9',
    title: 'Mr 360',
    year: 'January 8, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4xLzEwICAzMzggVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379943-xvmvpunxej-portrait.jpg',
    price: 2000,
  },
  {
    id: '10',
    title: '  Events Hbitat',
    year: 'June 18, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00328846-tatlgnjnhy-portrait.jpg',
    price: 1000,
  },
  {
    id: 'Don',
    title: 'Movie 11',
    year: 'March 17, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni42LzEwICAxMTMuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310760-uptdwxjtpu-portrait.jpg',
    price: 4000,
  },
  {
    id: 'Krishna',
    title: 'Movie 12',
    year: 'January 17, 2022',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA1MC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00355776-qpqyjgbymm-portrait.jpg',
    price: 2000,
  },
];

const MovieList = () => {
    
  const navigate = useNavigate();

  const [ticketCounts, setTicketCounts] = useState({});
  const {totalCost,setTotalCost}=useContext(MovieListContext);
  const {movieDetails,setMovieDetails}=useContext(MovieListContext);
  const {loggedIn,setLoggedIn}=useContext(MovieListContext);
  const incrementTicket = (movieId) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [movieId]: (prevCounts[movieId] || 0) + 1,
    }));
  };

  const decrementTicket = (movieId) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [movieId]: Math.max((prevCounts[movieId] || 0) - 1, 0),
    }));
  };

   const handleBookNow = (event) => {
    event.preventDefault();
    if(loggedIn){
    const selectedMovieIds = Object.keys(ticketCounts);

    const totalCost = selectedMovieIds.reduce((acc, movieId) => {

    const movie = movies.find((m) => m.id === movieId);
    setMovieDetails(movie);
    console.log(movieDetails)
    return acc + (ticketCounts[movieId] || 0) * movie.price;

    }, 0);
    
    if(totalCost>0){
     
        //  window.alert(`Total Cost: $${totalCost.toFixed(2)}`);
         
        setTotalCost(totalCost);
          navigate('/userdashboard/booking');
  }
  else if(totalCost==0){

    // window.alert(`Select number of tickets`);
    // Navigate('')
     };
    }
    else{
      navigate('/login');
    }

   }
   
    

   

  return (
    
    <div className=" w-screen mx-auto bg-primary shadow-md border-b border-t border-t-secondary border-b-secondary ">
      <h5 className="text-3xl  text-white font-bold mb-4 py-8 px-16" >Premium Movies</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-52 mr-32 mb-16" >
        {movies.map((movie) => (
          <div key={movie.id} className=" p-4 ">
            <img
              src={movie.poster}
              alt={movie.title}
              className=" w-60 object-cover mb-2 border rounded-xl  shadow-md shadow-emerald-50  transition ease-in-out delay-100 hover:-translate-y-4  duration-300 hover:cursor-pointer .."
            />
            <h2 className="text-sm font-bold text-xl text-secondary mt-6 underline ">{movie.title.toUpperCase()}</h2>
            <p className=" text-secondary mt-2 text-md">{movie.year}</p>
            <p className="text-sm font-bold mt-2 text-secondary" >Rs:{' '}{movie.price.toFixed(2)}</p>
            <div className="flex mt-2 t ">
              <button 
                onClick={() => decrementTicket(movie.id)}
                className="px-2 py-1 rounded-l-2xl bg-secondary"
              >
                -
              </button>
              <span className="px-4 py-1 bg-secondary">{ticketCounts[movie.id] || 0}</span>
              <button
                onClick={() => incrementTicket(movie.id)}
                className="bg-secondary px-2 py-1 rounded-r-2xl"
              >
                +
              </button>
            </div>
            <Link
              onClick={handleBookNow}
              className="mt-4 bg-secondary text-primary px-4 py-2 rounded-3xl block text-center w-60  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-secondary hover:border-secondary border duration-300 ..."
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;