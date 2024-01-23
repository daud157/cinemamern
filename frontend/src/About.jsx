// AboutUsPage.js

import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-yellow-700 h-full flex justify-center ">
      <div className="bg-primary text-secondary mt-28 rounded-tl-3xl  rounded-br-3xl h-2/3 mb-20 w-2/3  shadow-md p-10 " >
        <h1 className="text-4xl font-bold mb-8 text-center ">About Cineplex</h1>
        <p className="mb-6 text-lg text-center">
          Welcome to Cineplex, your ultimate destination for an immersive movie-watching experience.
          We are committed to providing a diverse selection of films to cater to every movie enthusiast.
        </p>
        <p className="mb-4 text-lg text-center">
          At Cineplex, our team is driven by a passion for cinema, and we strive to keep you
          updated with the latest releases and ensure an enjoyable cinematic journey for all.
        </p>
        <h2 className="text-2xl font-semibold mt-4  text-center">Meet Our Team</h2>
        <ul className="list-disc list-inside flex flex-row items-center text-center mt-0">
          <li className="mb-4 mr-6 mt-20">
            <img
              className="w-24 h-24 rounded-full mb-2 ml-16 "
              src=""
              alt="John Doe"
            />
              <p className='underline font-semibold'>Ayesha Eman - Head of Content</p>
         
          </li>
          <li className="mb-4 mr-8 ml-48">
            <img
              className="w-32 h-32 rounded-full mb-2 ml-12"
              src="https://lh3.googleusercontent.com/a/ACg8ocIqzOkx-wHkdfe5rYUd4ot-3Hk5tlNiMYY5P0ymaDWFjg=s288-c-no"
         
              alt="Jane Smith"
            />
             <p className='underline font-semibold'>Daud Ahmed- Founder & CEO</p>
          </li>
          <li className=" ml-40 mt-20">
            <img
              className="w-24 h-24 rounded-full mb-2 ml-16"
              src="https://via.placeholder.com/100"
              alt="Sam Johnson"
            />
            <p className='underline font-semibold '>Ayesha Malik  - Lead Developer</p>
          </li>
     
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
