import React from 'react'
import whitelogo from "/footer/logo_white3.png"
import fb from "/footer/img_facebook.png"
import ig from "/footer/img_instagram.png"
import tx from "/footer/img_linkedin.png"
import linkedin from "/footer/img_twitterx.png"




const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='grid grid-cols-1 md:grid-cols-4 text-white  w-full max-w-7xl mx-auto py-8 px-4 md:px-0 border-b-2 border-white'>

                {/* Column 1 (Company Logo and Text) */}
                <div className='md:col-span-1 md:pr-8'>
                    <img src={whitelogo} alt="Company Logo" className=' w-28 h-14 md:w-60 md:h-32' />
                    <p className='text-lg'>Digital growth tailored to your business. </p>
                </div>

                {/* Column 2 (First Heading and Particulars) */}
                <div className='md:col-span-1 md:pr-8 mt-4 md:mt-0'>
                    <h4 className='text-2xl font-bold mb-4 '>About</h4>
                    <ul className='text-lg mb-4'>
                        <li>Overview</li>
                        <li>Stories</li>
                        <li>Our Team</li>
                    </ul>
                    <h4 className='text-2xl font-bold mb-4 '>Services</h4>
                    <ul className='text-lg mb-4'>
                        <li>Design</li>
                        <li>Development</li>

                    </ul>
                </div>

                {/* Column 3 (Second Heading and Particulars) */}
                <div className='md:col-span-1 md:pr-8 mt-4 md:mt-0'>
                    <h4 className='text-2xl font-bold mb-4 '>Products</h4>
                    <ul className='text-lg mb-4'>
                        <li>Web</li>
                        <li>Apps</li>
                        <li>Software</li>
                        <li>Ecommerce</li>
                    </ul>
                    <h4 className='text-2xl font-bold mb-4 '>Company</h4>
                    <ul className='text-lg mb-4'>
                        <li>Terms & Condition</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Column 4 (Get in Touch, Social Media, and Input) */}
                <div className='md:col-span-1 mt-4 md:mt-0'>
                    <h4 className='text-2xl font-bold mb-4 '>Get in Touch</h4>

                    {/* Social Media Icons */}
                    <div className='flex space-x-4'>
                        <img src={fb} alt="facebook" className='w-12 h-12' />
                        <img src={ig} alt="instagram" className='w-12 h-12' />
                        <img src={linkedin} alt="Linkedin" className='w-12 h-12' />
                        <img src={tx} alt="X" className='w-12 h-12' />

                    </div>

                    {/* Email Input and Button */}
                    <div className='mt-4 flex'>
                        <input
                            type='email'
                            placeholder='Enter your email address'
                            className='border  p-2 md:w-64 rounded-3xl text-black outline-none'
                        />
                        <button className='bg-sky-600 text-white px-2 w-40 rounded-3xl ml-2 '>Get Started</button>
                    </div>
                </div>

            </div>
            <h1 className=' text-white text-center mx-auto py-5 text-2xl'>&copy; 2024 Copyright: Innovex Malawi</h1>
        </div>
    )
}

export default Footer