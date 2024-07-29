import React from 'react'
import car3Png from "../../assets/mobil3.png";

const About = () => {
  return (
    <div className='dark:bg-dark dark:text-white duration-300 sm:min-h-[600]'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
            <div  data-aos="fade-right" className='my-8'>
                <img src={car3Png} alt='' className='sm:scale-105 sm:-translate-x-11 max-h-[300] drop-shadow-[2px_px_6px_rgba(0,0,0,0.50)]' />
            </div>
            <div data-aos='fade-left' className='pb-6 space-y-5 sm:p-16' >
                <h1 className='font-serif text-3xl font-bold sm:text-4xl'>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed error aliquid dolorum delectus fuga consequuntur, et nihil totam voluptates at libero sequi itaque minima accusantium provident corporis? Accusamus, voluptas eaque.</p>
                <button className='button-outline'>Get Started </button>
                </div>
            
            </div>

        </div>
    </div>
  )
}
export default About