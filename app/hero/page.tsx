"use client"
import Image from "next/image"
import Typewriter from 'typewriter-effect';
import Link from "next/link"

export default function Hero() {
    return (
<div className="bg-gray-200 rounded">
            <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-7 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 -mt-[3rem]">
            Hi. I Am 
            <span className="text-blue-700 font-bold">
            <Typewriter
                options={{
                    strings: ["Saim Amjad" , "FrontEnd Developor"],
                    autoStart: true,
                    loop: true,
                }}
                />     
            </span>
        </h1>
        <p className="mb-8 leading-relaxed text-black font-semibold italic">
        Build responsive, user-friendly websites and web applications using HTML, CSS, TypeScript,
        and modern frontend frameworks like Next.JS & Tailwind CSS Collaborate with designers and
        backend developers to deliver high-quality web experiences. Stay up-to-date with web
        development trends and best practices.
        </p>
        <Link href={"#contact"}>
        <div className="flex justify-center">
        <button className="text-white font-bold p-2 bg-blue-500 rounded-3xl px-4 hover:bg-transparent hover:text-black hover:bg-gray-100">
            Contact
        </button>
        </div>                
        </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image width={500} height={500} src={require("../../public/assets/saim.jpg")} alt="hero" className="w-[15rem] rounded-2xl md:ml-44  mx-auto object-centre object-cover" />
        </div>
    </div>
</section>
</div>

    )
}