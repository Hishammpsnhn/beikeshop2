import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Header from "../../components/header/Header1";
import Nav from "../../components/header/Nav";
import Carouse from "../../components/carousel/Carouse";
import HomeCategory from "../../components/home-cards/HomeCategory";
import Footer from "../../components/footer/Footer";
import ExampleCarouselImage from '../../public/images/banner/D-1.0-UHP-2307204-LA-z20-P1-tommy-mokobara-upto60.webp';
import Banner2 from '../../public/images/banner/D-1.0-UHP-2307204-LA-z20-P2-panash-trink-under799.webp';
import Banner3 from '../../public/images/banner/D-1.0-UHP-2307204-LA-z20-P3-asio-timex-upto50.jpg';
import strip from '../../public/images/banner/M-21072024-TrendsSIS-fallwinter24strip.jpg';
import stripService from '../../public/images/banner/Icon Strip-Desktop.jpg';

function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Carouse Banner1={Banner2} Banner2={Banner3} Banner3={ExampleCarouselImage} />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', textAlign: 'center', py: 2, mt: 2, borderRadius: 1 }}>
        <Typography variant="h6">New Today, Gone Tomorrow</Typography>
      </Box>
      <Carouse Banner1={Banner3} Banner2={ExampleCarouselImage} Banner3={Banner2} />
      <Box sx={{ width: '100%', mt: 2 }}>
        <img className='w-100' src={strip} alt="banner" />
      </Box>
      <HomeCategory />
      <Box sx={{ width: '100%', mt: 2 }}>
        <img className='w-100' src={stripService} alt="banner" />
      </Box>
      <Footer />
    </>
  );
}

export default Home;
