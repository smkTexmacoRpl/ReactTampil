import React from 'react'
import { useNavigate } from 'react-router-dom'
import Mobil1 from '../../assets/Mr1.png'
import Mobil2 from '../../assets/Mr2.png'
import Mobil3 from '../../assets/Mr4.png'

// const navigate = useNavigate();

const MobilList =[
{
name: "BMW UX",
price:45,
image:Mobil1,
aosDelay:"0",
},
{
  name: "Inova ",
  price:40,
  image:Mobil2,
  aosDelay:"500",
  },
  {
    name: "Avanza",
    price:30,
    image:Mobil3,
    aosDelay:"1000",
    },
]
const Mobil = () => {
  return (
    <div className='pt-12 pb-24 text-center bg-white dark:bg-dark dark:text-white '>
      <div className="container">
        {}
        <h1 data-aos='fade-up' className='mb-3 font-serif text-3xl font-semibold sm:text-4xl'>Car List</h1>
        <p data-aos='fade-up' className='pb-10 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit iusto esse dolores libero! Nesciunt magnam porro quis, iste cumque sint, debitis et quaerat reprehenderit id cupiditate excepturi? Autem, ad.
        </p>
        <div>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3'>
          {MobilList.map((data) =>{
            return(
            <div  key={data.name}
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className='relative p-3 space-y-3 border-2 border-gray-300 hover:border-primary rounded-xl group'>
           
              <div className='w-full h-[120px]'>
                <img  className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-500' src={data.image} alt={data.name} />
              </div>
              <div className='space-y-2'>
                <h1 className='text-2xl font-semibold text-primary'>
                  {data.name} 
                </h1>
                <div className='flex items-center justify-between text-xl font-semibold'>
                <p >$ {data.price} / day</p>
                <a href='whatsapp://send?text=Hello&phone=+6285385232301' className='duration-300 hover:bg-primary hover:p-2 hover:rounded-lg'>Detail</a> 
                </div>

              </div>
            </div>
            );

          })}

          </div>
        </div>
      </div>
    </div>
  )
}
export default Mobil