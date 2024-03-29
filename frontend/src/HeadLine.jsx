import React, { useState, useEffect } from 'react';

const HeadLine = () => {
  const headlines = [
    {
      text: "Experience Cinema Like Never Before",
      color: "text-pink-500",
    },
    {
      text: "Discover the Magic of Movies at ForxCinema",
      color: "text-secondary",
    },
    {
      text: "Explore the World of Cinematic Wonders",
      color: "text-orange-500",
    },
    {
      text: "Immerse Yourself in the Art of Filmography",
      color: "text-green-500",
      
      
    },
    // Add more headlines as needed
  ];

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const currentHeadlineColor = headlines[currentHeadlineIndex].color;

  return (
    <div className={`${currentHeadlineColor} h-full mb-12 xl:mb-60 mt-16  `}>
      <div className={`border border-secondary xl:w-2/3 p-12 xl:p-0 h-full mx-auto rounded-full text-center bg-black `}>
        <h1 className='text-xl xl:text-3xl mt-4'>Welcome to Cinplex </h1>
        <h1 className="text-xl  xl:text-3xl font-extrabold mb-3 mt-5">{headlines[currentHeadlineIndex].text}</h1>
        <p className="text-lg  xl:text-xl ${currentHeadlineColor} mt-5">Discover the magic of movies at ForxCinema</p>
        <button className='bg-secondary mt-10  text-md  xl:w-30 xl:h-15 p-3 xl:mb-8 rounded-full xl:text-3xl text-black border  xl:mt-12' >Book Your Ticket Now</button>
      </div>
    </div>
  );
};

export default HeadLine;
