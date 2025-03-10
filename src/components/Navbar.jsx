import React from 'react'
import image from "../assets/image.png"; // Adjust the path based on your file structure
const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white py-2'>
        <div className="logo flex cursor-pointer w-48">
            <span className="font-bold text-xl mx-9" > <img src={image} alt=""  /></span>
            {/* C:\Users\HP\Desktop\todolist\src\assets\image.png */}
        </div>
        <ul className="flex gap-7 mx-9">
            <li className='cursor-pointer font-semibold hover:font-bold transition-all  duration-50'>Home</li>
            <li className='cursor-pointer font-semibold hover:font-bold transition-all duration-50'>Your Task </li>
        </ul>
    </nav>
  )
}
export default Navbar
