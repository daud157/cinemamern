import React from 'react'
import './App.css'
import SignUp from './SignUp'
import Login from './Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import LoadingBar from 'react-top-loading-bar'
import { useState ,useContext } from 'react'
import HomeSlider from './HomeSlider'
import  MovieList  from './MovieList'
import About from './About'
import Contact from './Contact'
import UserDashboard from './UserDashboard'
import Booking from './Booking'
import Tickets from './Tickets'
const MovieListContext=React.createContext();



function App(){

  const [progress, setProgress] = useState(0)
  const [totalCost, setTotalCost] = useState(0);
  const [loggedIn,setLoggedIn]=useState(false);
  const [activeUser,setActiveUser]=useState({
    userName:'daud',
    email:'210@gmail.com'
  });
  const [movieDetails,setMovieDetails]=useState({

    id: '1',
    title: 'Movie 1',
    year: '2022',
    poster: 'https://example.com/poster1.jpg',
    price: 10,


  })


//  setTotalCost=90;
  return(


    <BrowserRouter>
            <LoadingBar className=''
        color='#CA8A04'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <MovieListContext.Provider  value={{totalCost,setTotalCost,movieDetails,setMovieDetails,loggedIn,setLoggedIn,activeUser,setActiveUser}}>
        <Routes>
          
             <Route path="/" element={<Home setProgress={setProgress}/>}>    
          
              <Route path="/" element={<HomeSlider />} />
            
              <Route path="/MoviesList" element={<MovieList /> }> </Route>
              <Route path="/about" element={<About />}></Route> 
              <Route path="/userdashboard" element={<UserDashboard/>}>
                 <Route path="/userdashboard/booking" element={<Booking setProgress={setProgress}/>}></Route>
                 <Route path="/userdashboard/wishlist" element={<Tickets/>}></Route>
                 <Route path="/userdashboard/tickets" element={<Tickets/>}></Route>

                
             </Route>

              <Route path="/contact" element={<Contact/> }> </Route>
              <Route path="/signUp" element={<SignUp /> }></Route>
              <Route path="/login" element={<Login />}></Route>
              </Route>

              
               <Route path="/MoviesList1" element={<MovieList /> }> </Route>
        </Routes>
    
    
        </MovieListContext.Provider>
    
    </BrowserRouter>
   
  )
}
export {MovieListContext,App};

