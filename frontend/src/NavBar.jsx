import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-slate relative">
      <nav className="text-secondary bg-primary border-secondary border-b-2 flex sticky top-0 z-10 py-4">
        <div className="bg-primary w-full mt-2 rounded-tl-3xl ml-1 mr-1 rounded-tr-3xl">
          <div className="flex justify-between px-5 items-center">
            <div className="font-bold text-3xl "><img className=' w-20  inline-block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsp0MJ5R9EvJREUdpVsHxULCRaqYgoRKBFA&usqp=CAU" alt="immage not displayed"></img></div>
            <div className="md:hidden flex">
              <p className='mr-32 text-2xl font-bold'> Cineplex</p>
              <button
                onClick={toggleMenu}
                className={`text-secondary focus:outline-none transition-transform duration-300  transition ease-in-out delay-100 hover:-translate-y-1 ${
                  menuOpen ? 'transform rotate-90' : ''
                }`}
              >
                <Menu size="36" />
              </button>
            </div>
            <div className="hidden md:flex justify-center space-x-3 px-20 border border-secondary rounded-full shadow-md">
              <NavLink className="hover:bg-secondary hover:text-black transition-transform ease-linear h-0 w-0 delay-1000 duration-5000" to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/MoviesList" onClick={closeMenu}>Movies</NavLink>
              <NavLink to="/MoviesList" onClick={closeMenu}>Trending</NavLink>
              <NavLink to="/MoviesList" onClick={closeMenu}>UpComing</NavLink>
              <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
              <NavLink to="/contact" onClick={closeMenu}>Contact us</NavLink>
              <NavLink  to="/signup" onClick={closeMenu}>Sign up</NavLink>
            </div>
            <LoginButton />
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="top-0 left-0 w-full bg-primary z-10 flex justify-center sticky md:hidden">
          <div className="pt-2 pb-3 space-y-3 sm:px-3 flex flex-col absolute bg-primary w-full px-36 py-2 items-center ">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/MoviesList" onClick={closeMenu}>Movies</NavLink>
            <NavLink to="/MoviesList" onClick={closeMenu}>Trending</NavLink>
            <NavLink to="/MoviesList" onClick={closeMenu}>UpComing</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact us</NavLink>
            <NavLink to="/signup" onClick={closeMenu}>Sign up</NavLink>
            <button onClick={closeMenu} className="text-secondary border border-rounded-xl hover:bg-secondary hover:text-black px-3 py-2 text-sm font-medium transition duration-300 rounded-2xl ">Close Menu</button>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

const NavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-300 hover:bg-secondary hover:text-black px-4 py-2 rounded-md text-md font-medium transition duration-300 "
    >
      {children}
    </Link>
  );
};

const LoginButton = () => {
  return (
    <Link
      to="login"
      className="hidden text-white text-2xl px-3 py-2 md:flex items-center transition duration-300 hover:-translate-x-8 hover:scale-110 hover:text-black hover:bg-secondary rounded-3xl"
    >
      <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
      Login
    </Link>
  );
};

export default Navigation;
