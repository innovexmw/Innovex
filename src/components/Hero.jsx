import React from 'react'
import img1 from '/hero/img_image1.png';
import img2 from '/hero/sipline.png';
import img3 from '/hero/img3.png';
import img4 from '/hero/img_goal.png';
import img5 from '/hero/img_mission.png';
import img6 from '/hero/img_vision.png';
import img7 from '/hero/img_ai.png';
import img8 from '/hero/img_apps.png';
import img9 from '/hero/img_chatbot.png';
import img10 from '/hero/img_web.png';
import img11 from '/hero/img_webdesign.png';
import img12 from '/hero/img_mobile.png';
import img13 from '/hero/img_ctaimg1.png';

const Hero = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-sky-950 to-white'>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto py-10 md:py-32">
          {/* Content on the left side */}
          <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 px-4 text-white">
            <h1 className="text-4xl md:text-7xl font-semibold mb-4 ">Digital Growth Tailored To Your Business</h1>
            <div className='flex flex-col md:flex-row items-center'>
              <button className="bg-blue-500 text-white md:text-2xl text-xl py-2 px-3 md:py-4 md:px-6  rounded-2xl mb-2 md:mb-0 md:mr-2 text-nowrap">
                Get Started
              </button>
              <p className="inline-block md:inline-block md:mr-2 mb-2 md:mb-0 text-2xl ">
                We help you reach new markets and stand out against the competition.
              </p>
            </div>
          </div>

          {/* Image on the right side */}
          <div className="md:w-1/2">
            <img
              src={img1}
              alt="Your Image"
              className="w-56 h-auto md:h-full md:w-96 mx-auto mt-4"  // Adjusted styling for small screens
            />
          </div>
        </div>
      </div>
      <div className=' md:h-52 '>
        <h1 className='text-center mx-auto text-3xl max-w-4xl mt-10 font-bold'>We design and build beautiful brands, websites and products for your business that stand out the crowd.</h1>
        <img src={img2} alt="sipline" className='mx-auto h-20 w-36 my-10' />
      </div>
      <div>
        <div className='bg-slate-200'>
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto py-32">
            {/* Content on the left side */}
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 px-4 text-black">
              <button className="bg-blue-200 text-blue-500 font-medium md:text-2xl text-xl py-2 px-3 md:py-4 md:px-6  rounded-2xl mb-2 md:mb-0 md:mr-2 text-nowrap">
                Who we are
              </button>
              <h1 className="text-xl md:text-3xl font-bold my-4 ">A combination of creative thinking and expertise</h1>
              <p className='text-black text-lg my-2 text-balance md:text-left'>We are willing to take bold action to achieve the extraordinary.Consulting and strategic planning for modern business involves providing advice and guidance to companies.</p>
              <div className='flex flex-col md:flex-row items-center'>
                <button className="bg-blue-500 text-white md:text-2xl text-xl py-2 px-3 md:py-4 md:px-6  rounded-2xl mb-2 md:mb-0 md:mr-2 text-nowrap">
                  Know more about us
                </button>
              </div>
            </div>

            {/* Image on the right side */}
            <div className="md:w-1/2">
              <img
                src={img3}
                alt="Your Image"
                className=" h-fit md:w-fit md:h-auto mx-auto mt-4"  // Adjusted styling for small screens
              />
            </div>
          </div>
        </div>
        <div className='bg-gray-300 py-5 md:py-20'>
          <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
            {/* First column */}
            <div className="w-full md:w-1/2 md:pr-4 mb-8 ">
              {/* First vertice box */}
              <div className="p-4 mb-4 border-2 border-blue-500 rounded-3xl">
                <img src={img4} alt="Logo 1" className="w-24 h-24 mx-auto mb-2" />
                <h2 className="text-2xl font-semibold mb-2 text-center">Mission</h2>
                <p className="text-xl text-center">Bridging The Digital Divide In Africa, Crafting Intelligent Solutions That Empower Communities And Unlock Sustainable Progress.</p>
              </div>

              {/* Second vertice box */}
              <div className="p-4 border-2 border-blue-500 rounded-3xl">
                <img src={img6} alt="Logo 2" className="w-24 h-24 mx-auto mb-2" />
                <h2 className="text-2xl font-semibold mb-2 text-center">Vision</h2>
                <p className="text-xl text-center">To Become The Trusted Digital Architect For Africa, Shaping A Vibrant Future Where Technology Fuels Human Potentials And Unlocks Limitless Possibilities.</p>
              </div>
            </div>

            {/* Second column */}
            <div className="w-full md:w-1/2 md:pl-4">
              {/* Single box with total height of two vertical boxes */}
              <div className="p-4  border-2 border-blue-500 rounded-3xl">
                <img src={img5} alt="Logo 3" className="w-24 h-24 mx-auto mb-2" />
                <h2 className="text-2xl font-semibold mb-2 text-center">Core Values</h2>
                <p className="text-xl mb-10 text-center">
                  Ingenuity & Innovation: We Embrace Bold Ideas, Challenge The Status Quo, And Solutions That Push The Boundaries Of Technology.
                </p>
                <p className="text-xl mb-12 text-center">
                  Impact & Collaboration: We Partner With Purpose, Ensuring Our Technology Serves A Greater Good And Fosters A Spirit Of Shared Achievement.
                </p>
                <p className="text-xl mb-6 text-center">
                  Human-Centered Design: We Put People First, Crafting Intuitive Experiences That Empower And Delight, Bridging The Gap Between Technology And Everyday Needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-5xl text-center py-10 underline'>Our Services</h1>
            {/* First row */}
            <div className="flex flex-wrap justify-center  md:space-x-20">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                {/* First box */}
                <div className=" p-4 rounded-md mb-4">
                  <img src={img7} alt="Logo 1" className="w-24 h-24 mx-auto mb-2" />
                  <h2 className="text-xl font-bold mb-2 text-center">AI-Powered Projects</h2>
                  <p className="text-lg text-center">Harness The Power Of Artificial Intelligence With Our Range Of AI Powered Products. From Predictive Analytics To Machine Learning Solutions, We Integrate AI Seamlessly Into Your Business Processes, Enabling Data-Driven Decision Making.</p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ">
                {/* Second box */}
                <div className=" p-4 rounded-md mb-4">
                  <img src={img8} alt="Logo 2" className="w-24 h-24 mx-auto mb-2" />
                  <h2 className="text-xl font-bold mb-2 text-center">Software Development</h2>
                  <p className="text-lg text-center">Our Skilled Team Of Developers Is Proficient In Creating Robust And Scalable Software Solutions. Whether It's A Mobile App Or A Web-Based Application, We Leverage The Latest Technologies To Ensure A Seamless User Experience.</p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                {/* Third box */}
                <div className=" p-4 rounded-md mb-4">
                  <img src={img9} alt="Logo 3" className="w-24 h-24 mx-auto mb-2" />
                  <h2 className="text-xl font-bold mb-2 text-center">Customised AI Chatbots</h2>
                  <p className="text-lg text-center">Elevate Your Customer Engagement With Our Bespoke AI Chatbots. We Design And Deploy Intelligent Chatbot Solutions That Align With Your Business Goals, Providing Personalized Interactions And Automating Routine Tasks.</p>
                </div>
              </div>
            </div>

            {/* Second row */}
            <div className="flex flex-wrap justify-center md:space-x-20">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                {/* Fourth box */}
                <div className=" p-4 rounded-md mb-4">
                  <img src={img10} alt="Logo 4" className="w-24 h-24 mx-auto mb-2" />
                  <h2 className="text-xl font-bold mb-2 text-center">Web Based Application</h2>
                  <p className="text-lg text-center">Our Web-Based Applications Are Tailored To Meet The Specific Requirements Of Businesses Seeking A Strong Online Presence. We Prioritize User-Friendly Interfaces And Efficient Functionalities To Optimize The User Experience.</p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                {/* Fifth box */}
                <div className=" p-4 rounded-md mb-4">
                  <img src={img11} alt="Logo 5" className="w-24 h-24 mx-auto mb-2" />
                  <h2 className="text-xl font-bold mb-2 text-center">UI/UX Design</h2>
                  <p className="text-lg text-center">Intuitive Designs, Powered By Innovation: Elevate Your Digital Presence With Our UI/UX Design Service. We Blend Creativity With User-Centric Design Principles To Deliver Captivating Experiences That Resonate With Your Audience, Driving Engagement And Growth.</p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                {/* Sixth box */}
                <div className=" p-4 rounded-md mb-4">
                  <img src={img12} alt="Logo 6" className="w-24 h-24 mx-auto mb-2" />
                  <h2 className="text-xl font-bold mb-2 text-center">Mobile Apps Development</h2>
                  <p className="text-lg text-center">We Specialize In Developing Feature Rich Mobile Applications For Both iOS And Android Platforms. Our Mobile Apps Are Designed To Enhance User Engagement And Provide A Competitive Edge In The Digital Landscape.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-sky-500'>
        <div className='max-w-6xl flex flex-col md:flex-row justify-between items-center mx-auto'>
        <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 px-4 text-white">
            <h1 className="text-4xl md:text-7xl font-semibold  ">Get Free Tech</h1>
            <h1 className="text-4xl md:text-7xl font-semibold mb-4 md:text-nowrap ">Cunsultation With Us.</h1>
            
            <p className="inline-block md:inline-block md:mr-2 mb-2 md:mb-4 text-2xl ">
              We help you reach new markets and stand out against the competition.
            </p>
              <button className="bg-blue-500 text-white md:text-2xl text-xl py-2 px-3 md:py-4 md:px-6  rounded-2xl mb-2 md:mb-0 md:mr-2 text-nowrap">
               Let's Get Started
              </button>
            
          </div>

          {/* Image on the right side */}
          <div className="md:w-1/2">
            <img
              src={img13}
              alt="Your Image"
              className="w-56 h-auto md:h-full md:w-96 mx-auto mt-4"  // Adjusted styling for small screens
            />
          </div>
        </div>
        </div>

      </div>
    </div>

  )
}

export default Hero