import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    < div className='w-screen bg-slate h-screen'>
      <nav className="text-secondary bg-primary h-28 border-secondary  border-b-2 flex ">
        <div className=" bg-primary  h-23 w-full mt-2 rounded-tl-3xl ml-1 mr-1 rounded-tr-3xl">
          <div className="flex items-center justify-between px-5">
            <div className="font-bold text-3xl ">Cineplex</div>
            <div className="flex justify-center space-x-3 px-20   border border-secondary rounded-full shadow-md mt-6 ">
              <Link to="/" className=" px-3 py-2  transition ease-in-out delay-200  hover:scale-110  hover:text-black hover:border-secondary hover:bg-secondary rounded-3xl  duration-300 active:bg-secondary ..." >
                Home
              </Link>
              <Link to="/MoviesList" className="  px-3 py-2  transition ease-in-out delay-200  hover:scale-110  hover:text-black hover:border-secondary hover:bg-secondary rounded-3xl  duration-300 ... ">
                Movies
              </Link>
              <Link to="/MoviesList" className=" px-3 py-2  transition ease-in-out delay-200  hover:scale-110  hover:text-black hover:border-secondary hover:bg-secondary rounded-3xl  duration-300 ...">
              Trending
              </Link>
              <Link to="/MoviesList " className="  px-3 py-2  transition ease-in-out delay-200  hover:scale-110  hover:text-black hover:border-secondary hover:bg-secondary rounded-3xl  duration-300 ..." >
              UpComing
              </Link>
              <Link to="/about" className="  px-3 py-2  transition ease-in-out delay-200  hover:scale-110  hover:text-black hover:border-secondary hover:bg-secondary rounded-3xl  duration-300 ...">
                About Us
              </Link>
              <Link to="/contact " className="  px-3 py-2  transition ease-in-out delay-200  hover:scale-110  hover:text-black hover:border-secondary hover:bg-secondary rounded-3xl  duration-300 ..." >
                Contact us
              </Link>
              <Link to="/signup" className="  px-3 py-2  transition ease-in-out delay-200 hover:scale-110  hover:text-black hover:border-secondary hover:bg-secondary rounded-3xl  duration-300 ...">
                Sign up
              </Link>
            </div>
            <LoginButton />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

const LoginButton = () => {
  return (
    <Link to="login" className=" text-white text-2xl px-3 py-2 flex items-center  transition ease-in-out delay-200 hover:-translate-x-8 hover:scale-110  hover:text-black hover:border-secondary hover:bg-secondary rounded-3xl  duration-300 ..." >
      <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
      Login
    </Link>
  );
};

export default Navigation;
