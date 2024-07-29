import React from 'react';
import carPng from "../../assets/mobil1.png";
import car2Png from "../../assets/mobil2.png";


const Hero = ({theme})=> {
  return (
    <div className='dark:bg-black dark:text-white duration-300 relative -z-20'>
        <div className='container min-h-[520px] flex'>
          <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
            <div data-aos="zoom-in" className='order-1 sm:order-2'>
              <img src={theme === "dark" ? carPng:car2Png} alt='cars' className='relative -z-10 max-h-[600px] sm:scale-125' />
            </div>
            <div data-aos='zoom-in' className="order-2 sm:order-1 space-y-4 sm:pr-32">
              <p className='text-primary text-2xl font-serif font-semibold'>Effortless</p>
              <h1 className='text-4xl lg:text-6xl font-bold font-serif'>Car Rental</h1>
              <p className='mb-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis incidunt laudantium est corrupti, 
              </p>
              <button className='btn bg-primary text-black px-4 py-2 rounded-md hover:bg-primary/80 duration-300'> Get started</button>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero