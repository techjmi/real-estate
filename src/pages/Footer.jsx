import React from 'react'
import { Link } from 'react-router-dom'
import estate from "../assets/real-estate.jpg";
const Footer = () => {
  return (
    <div className='bg-black py-10 flex justify-between gap-6 text-white px-10'>
        <div className="left w-1/2">
        <Link to="/">
    <img src={estate} alt="Brand Logo" width={100} height={100} className="rounded-full" />
</Link>
<div className="text mt-3">
    <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam cum inventore omnis nisi delectus unde facere sit rem sapiente, dignissimos ex reiciendis eius tenetur saepe minus! Ducimus, natus! Aliquam!</p>
</div>
        </div>

        {/* form part of footer */}
        <div className="right bg-white w-1/2 relative self-start">
<h1>Get in Touch</h1>
        </div>
    </div>
  )
}

export default Footer