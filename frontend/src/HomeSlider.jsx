import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import the styles for Swiper
import './App.css'; 
import MovieList from './MovieList';
import Footer from './Footer.jsx';
import AboutUsPage from './About.jsx';
import HeadLine from './HeadLine.jsx';
import SlidingText from './SlidingText.jsx';
// import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='bg-primary'>
      <Swiper 
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      
      >
          <SwiperSlide>
          <img src='   https://cinepax.com/IT-CDN/Themes/Customv1/Images/Posters/Banner1.jpg'  style={{width:"100%" ,height:"40vh"}}  alt='Slide 3' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='  https://cinepax.com/IT-CDN/Themes/Customv1/Images/Posters/Banner4.jpg'  style={{width:"100%" ,height:"40vh"}}  alt='Slide 3' />
        </SwiperSlide>
        <SwiperSlide>
          
          <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1703752989440_movies99web.jpg'  style={{width:"100%" ,height:"40vh"}} alt='Slide 2' />
        </SwiperSlide>
        <SwiperSlide  className='h-1/4'>
          <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1705063794203_offerw.jpg'  style={{width:"100%" ,height:"40vh"}}  alt='Slide 1' />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1703930188975_web.jpg'  style={{width:"100%" ,height:"40vh"}}  alt='Slide 3' />
        </SwiperSlide>


      
        <SwiperSlide>
          <img src='https://cinepax.com/IT-CDN/Themes/Customv1/Images/Posters/Banner2.jpg'  style={{width:"100%" ,height:"40vh"}}  alt='Slide 3' />
        </SwiperSlide>
      
        <SwiperSlide>
          <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1704958137348_desklolla.jpg'  style={{width:"100%" ,height:"40vh"}}  alt='Slide 3' />
        </SwiperSlide>
 
      </Swiper>
      <SlidingText></SlidingText>
      <HeadLine></HeadLine>
      
   <MovieList></MovieList>
   <AboutUsPage></AboutUsPage>
   <Footer></Footer>
  </div>
  );
}
