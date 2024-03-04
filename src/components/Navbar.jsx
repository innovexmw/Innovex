import React, { useState } from 'react'
import Hamburger from 'hamburger-react';
import logo from '/nav/logo.png';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);


    const toggleMenu = () => {
        setOpen(!isOpen);
    };
    return (
        <main className='sticky top-0 z-50  '>
            <div className='flex text-black bg-white w-full h-16 md:h-24 justify-between items-center  max-w-7xl mx-auto border-b-2 '>
                <img src={logo} alt="Innovex" className=' h-40 w-40 md:h-56 md:w-56 md:ml-0 ml-3 ' />
                <div className='hidden md:flex justify-center flex-grow text-black space-x-4'>
                    <button className="p-2 text-xl md:text-2xl font-semibold">About</button>
                    <button className="p-2 text-xl md:text-2xl font-semibold">Services</button>
                    <button className="p-2 text-xl md:text-2xl font-semibold ">Products</button>
                    <button className="p-2 text-xl md:text-2xl font-semibold">Blogs</button>
                    <button className="p-2 text-xl md:text-2xl font-semibold">Contact</button>
                </div>
                <div className='flex space-x-4 text-lg text-black '>
                    <button className="hidden md:inline-block  text-white  rounded-2xl px-4 py-2 bg-black  ">Get Started</button>
                    <button className="md:hidden" onClick={toggleMenu}>
                        <Hamburger color="#000000" size={28} toggled={isOpen} toggle={setOpen} />
                    </button>
                </div>
            </div>

            {/* Responsive Menu */}
            {isOpen && (
                <div className={`md:hidden w-full bg-white text-black text-lg p-4 transition-max-height duration-500 ${isOpen ? 'max-h-96' : 'max-h-0 hidden'} `}>
                    <button className="block mb-2 p-2">About</button>
                    <button className="block mb-2 p-2">Services</button>
                    <button className="block mb-2 p-2">Products</button>
                    <button className="block mb-2 p-2">Blogs</button>
                    <button className="block mb-2 p-2">Contact</button>
                    <button className="block mb-2 p-2 text-white bg-black rounded-lg">Get Started</button>
                </div>
            )}
        </main>
    )
}

export default Navbar