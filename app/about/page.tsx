"use client"
import Typewriter from 'typewriter-effect';
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image"

export default function About() {
    return (
        <div id='about' className='bg-white'>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
     <Image src={require("../../public/assets/saimmmm.jpg")} width={250} height={250} alt='about' className='w-80 rounded-2xl mx-auto object-centre object-cover h-96  '/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold">
        About Me
      </h1>
      <h5 className="mb-8 leading-relaxed">
      <span className="text-blue-700 font-bold text-xl">
            <Typewriter
                options={{
                    strings: ["Welcome To My About."],
                    autoStart: true,
                    loop: true,
                }}
                />     
      </span>
      <div className="flex items-center mt-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-blue-700 text-white flex-shrink-0">
            <div className='text-xl font-bold cursor-pointer '>
                  < FaLocationDot />
              </div>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-bold">
              HYDERABAD SINDH
            </h2>
          </div>
      </h5>
        <h5 className="mb-8 -mt-4 leading-relaxed font-semibold">
            Recently I am Completed my Matric with 80.18% from Board of Intermediate and Secondary Education Hyderabad Sindh.                
        </h5>
        <h5 className="mb-8 -mt-4 leading-relaxed font-semibold">
            Currently Persuing Software Development From Governor Sindh Initiative For Artificial Intelligance , Web 3.0 and Metaverse.              
        </h5>
  
    </div>
  </div>
</section>

        </div>
    )
}