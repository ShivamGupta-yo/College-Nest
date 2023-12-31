import React from 'react'
import Navbar from '../components/Navbar';
import Abvgiet from '../components/Abvgiet';
import Carousel from '../components/Carousel';
import Description from '../components/Description';
import Services from '../components/Services';

const Home = () => {
  const email =  localStorage.getItem("email");
  const name =  localStorage.getItem("name");
  return (
    <div>
    <Navbar/>
    <Abvgiet/>
    <Carousel/>
    <Description/>
    <Services/>
      
    </div>
  )
}

export default Home