import React from 'react'
import style from './Protofilo.module.css'
import image1 from '../../assets/images/poert1.png';
import image2 from '../../assets/images/port2.png';
import image3 from '../../assets/images/port3.png';





export default function Protofilo() {
  return (
  <div className="w-4/5  bg-white flex-col mx-auto  gap-x-5   mt-16 mb-16       ">
    

  <div className="fff flex    w-full mx-auto space-x-12 "><div className="rrr relative group     w-1/3">
   <img src={image1} alt="3" className='   rounded-xl'  /> <div className="  m-auto absolute top-0 right-0   bg-emerald-800    bg-opacity-90 text-gray-900 hidden group-hover:block  w-full   h-full   ">
   <i className="fa-solid fa-plus"></i>
   </div>
  </div>
  <div className="rrr relative group  w-1/3"><img src={image2} alt="1" className='   rounded-xl' /> <div className="  m-auto absolute top-0 right-0   bg-emerald-800    bg-opacity-90 text-gray-900 hidden group-hover:block  w-full   h-full   ">
   <i className="fa-solid fa-plus"></i>
   </div></div>
  <div className="rrr relative group  w-1/3"><img src={image3} alt="2" className='   rounded-xl' /> <div className="  m-auto absolute top-0 right-0   bg-emerald-800    bg-opacity-90 text-gray-900 hidden group-hover:block  w-full   h-full   ">
   <i className="fa-solid fa-plus"></i>
   </div></div></div>
 
  <div className="fff flex   mt-9   w-full mx-auto space-x-12 "><div className="rrr relative group  w-1/3">
   <img src={image1} alt="3" className='   rounded-xl'  /> <div className="  m-auto absolute top-0 right-0   bg-emerald-800    bg-opacity-90 text-gray-900 hidden group-hover:block  w-full   h-full   ">
   <i className="fa-solid fa-plus"></i>
   </div>
  </div>
  <div className="rrr relative group  w-1/3"><img src={image2} alt="1" className='   rounded-xl' /> <div className="  m-auto absolute top-0 right-0   bg-emerald-800    bg-opacity-90 text-gray-900 hidden group-hover:block  w-full   h-full   ">
   <i className="fa-solid fa-plus"></i>
   </div></div>
  <div className="rrr relative group  w-1/3"><img src={image3} alt="2" className='   rounded-xl' /> <div className="  m-auto absolute top-0 right-0   bg-emerald-800    bg-opacity-90 text-gray-900 hidden group-hover:block  w-full   h-full   ">
   <i className="fa-solid fa-plus"></i>
   </div></div></div>
 








  </div>
  )
}
