import React from 'react'
import './Carouse.css';

const Carousel = () => {
  return (
    <div className='carousel'>
        <div className='image'>
          <img class="animated delay-200 animate__bounceInLeft" src='/images/abvgiet2.jpeg' alt='' />
        </div>

        <div className='image'>
          <img class="animated delay-500 animate__bounceInDown" src='/images/abvgiet3.jpeg' alt='' />
        </div>

        <div className='image'>
          <img  class="animated delay-1000 animate__backInRight" src='/images/abvgiet.jpeg' alt='' />
        </div>
    </div>
  )
}

export default Carousel