import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <header className="text-gray-600 body-font sticky top-0 z-50 bg-white">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={require("../../public/assets/Black_Gold_Elegant_Simple_Monogram_Initial_Name_Brand_Logo__2_-removebg-preview.png")} 
             alt="Saim Amjad"
             width={100}
             height={100}
             className="px-1 w-20 h-16  "/>          
        <h2 className="text-2xl text-blue-700 font-extrabold -px-2 mr-7">SAIM AMJAD</h2>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/"} className="mr-5 hover:text-blue-500 cursor-pointer font-semibold" >Home</Link>
        <Link href={"#skills"} className="mr-5 hover:text-blue-500 cursor-pointer font-semibold" >Skills</Link>
        <Link href={"#services"} className="mr-5 hover:text-blue-500 cursor-pointer font-semibold" >Services</Link>
        <Link href={"#about"} className="mr-5 hover:text-blue-500 cursor-pointer font-semibold" >About</Link>
        <Link href={"#contact"} className="md:mr-24 hover:text-blue-500 cursor-pointer font-semibold" >Contact</Link>
    </nav>
          
  </div>
</header>

    )
}


