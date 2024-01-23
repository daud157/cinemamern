import React from 'react';
// import './styles.css'; // Import your Tailwind CSS styles
import './sliding.css';
// import './index.css';
const SlidingText = () => {
  return (
    <div className="sliding-text-container overflow-hidden mt-5">
      <div className="sliding-text">
        <p className="text-secondary border border-secondary rounded-full w-full h-8 px-10 text-xl mt-2">
          🎬 Explore the Cinematic Wonders at Cinex World! 🍿 Don't miss our Blockbuster Specials! 🎥 Get 2 tickets for the price of 1! 🎉 Limited time offer. Book now|Login Now|Limited Seats Left| 🎟️
        </p>
      </div>
    </div>
  );
}

export default SlidingText;
