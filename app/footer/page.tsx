import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image"
import { FaSnapchat } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <Image alt="logo" src={require("../../public/assets/Black_Gold_Elegant_Simple_Monogram_Initial_Name_Brand_Logo__2_-removebg-preview.png")} width={75} height={75}/>
      <span className="ml-3 text-xl font-semibold mr-14">Saim Amjad</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 font-bold sm:border-gray-200 sm:py-2 sm:mt-0 mt-2">
      © 2024-Saim Amjad 
      <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
      </a>
    </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://www.facebook.com/share/vqF8MsffpzqYwQYD/?mibextid=LQQJ4d" target="_blank" className="text-gray-500 text-2xl cursor-pointer hover:text-[#1877F2]">
      <FaFacebook />
      </a>
      <a href="http://wa.me/+923154397485" target="_blank" className="ml-3 text-gray-500 text-2xl cursor-pointer hover:text-[#075E54]" >
      <FaWhatsapp />
      </a>      
      <a href="https://github.com/saim00191" target="_blank" className="ml-3 text-gray-500 text-2xl cursor-pointer hover:text-[#24292e]">
      <FaGithub />
      </a>
      <a href="https://www.instagram.com/amjad_saim_9?igsh=MWVhdW16OXA3eDkyZA%3D%3D&utm_source=qr" target="_blank" className="ml-3 text-gray-500 text-2xl cursor-pointer hover:text-pink-500">
      <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/saim-raza-b7a7172b6/" target="_blank" className="ml-3 text-gray-500 text-2xl cursor-pointer hover:text-[#0077B5]">
      <FaLinkedin />
      </a>
      <a href="https://www.snapchat.com/add/amjad_saim9?share_id=eGz3nmtuQGWPPAEL3FOicw&locale=en_PK" target="_blank" className="ml-3 text-gray-500 text-2xl cursor-pointer hover:text-yellow-500" >
      <FaSnapchat />
      </a>
      
      
    </span>
  </div>
</footer>

    )
}

