import React from "react";
import Header from "../../components/header/Header1.jsx";
import Nav from "../../components/header/Nav.jsx";
import Carouse from "../../components/carousel/Carouse.jsx";
import HomeCategory from "../../components/home-cards/HomeCategory.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ExampleCarouselImage from '../../public/images//banner/D-1.0-UHP-2307204-LA-z20-P1-tommy-mokobara-upto60.webp';
import Banner2 from '../../public/images//banner/D-1.0-UHP-2307204-LA-z20-P2-panash-trink-under799.webp';
import Banner3 from '../../public/images//banner/D-1.0-UHP-2307204-LA-z20-P3-asio-timex-upto50.jpg';
import strip from '../../public/images/banner/M-21072024-TrendsSIS-fallwinter24strip.jpg'
import stripService from '../../public/images/banner/Icon Strip-Desktop.jpg'
function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Carouse Banner1={Banner2} Banner2={Banner3} Banner3={ExampleCarouselImage}/>
      <div className="bg-dark mt-2  text-center  text-light p-2 rounded-top">New Today, Gone Tomorrow</div>
      <Carouse  Banner3={Banner2} Banner1={Banner3} Banner2={ExampleCarouselImage}/>
      <img className='w-100' src={strip} alt="banner" />
      <HomeCategory/>
      <img className="w-100" src={stripService} alt="banenr"/>

      <Footer/>
    </>
  );
}

export default Home;
