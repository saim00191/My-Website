import { AiOutlineCheckSquare } from "react-icons/ai";

export default function Skills() {
    return (
    <div id="skills" className="bg-gray-200 w-full">
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2> */}
      <h1 className="sm:text-3xl text-2xl title-font text-gray-900 font-bold">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[3rem]">
     {/* Html */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full hover:bg-green-600 bg-blue-500 text-white flex-shrink-0">

                <AiOutlineCheckSquare />

            </div>
            <h2 className="text-gray-900 text-lg md:sm title-font font-bold">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
                <div className="relative h-1 w-100 bg-white ">
                  <div className="absolute h-1 bg-blue-500 w-[100%] rounded-3xl"></div>                      
                <p className="font-bold text-right text-blue-500 py-1">100%</p>    
            </div>
            
          </div>
        </div>
      </div>
      
    {/* Css */}
    <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full hover:bg-green-600 bg-blue-500 text-white flex-shrink-0">
            <AiOutlineCheckSquare />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-bold">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
                <div className="relative h-1 w-100 bg-white rounded-2xl">
                  <div className="absolute h-1 bg-blue-500 w-[92%] rounded-3xl"></div>                      
                <p className="font-bold text-right text-blue-500 py-1">92%</p>    
            </div>
            
          </div>
        </div>
      </div>                

    {/* JavaScript/TypeScript*/}
    <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full hover:bg-green-600 bg-blue-500 text-white flex-shrink-0">
            <AiOutlineCheckSquare />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-bold">
              TYPESCRIPT/JAVASCRIPT
            </h2>
          </div>
          <div className="flex-grow">
                <div className="relative h-1 w-100 bg-white rounded-2xl">
                  <div className="absolute h-1 bg-blue-500 w-[88%] rounded-3xl"></div>                      
                <p className="font-bold text-right text-blue-500 py-1">88%</p>    
            </div>
            
          </div>
        </div>
       </div>       

    {/* NEXTJS*/}
    <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full hover:bg-green-600 bg-blue-500 text-white flex-shrink-0">
            <AiOutlineCheckSquare />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-bold">
              NEXT.JS
            </h2>
          </div>
          <div className="flex-grow">
                <div className="relative h-1 w-100 bg-white rounded-2xl">
                  <div className="absolute h-1 bg-blue-500 w-[85%] rounded-3xl"></div>                      
                <p className="font-bold text-right text-blue-500 py-1">85%</p>    
            </div>
            
          </div>
        </div>
      </div> 
      
      {/* TAILWIND CSS*/}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full hover:bg-green-600 bg-blue-500 text-white flex-shrink-0">
            <AiOutlineCheckSquare />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-bold">
              TAILWIND CSS
            </h2>
          </div>
          <div className="flex-grow">
                <div className="relative h-1 w-100 bg-white rounded-2xl">
                  <div className="absolute h-1 bg-blue-500 w-[92%] rounded-3xl"></div>                      
                <p className="font-bold text-right text-blue-500 py-1">90%</p>    
            </div>
            
          </div>
        </div>
      </div> 

    </div>
  </div>
</section>

         </div>
     )
 }