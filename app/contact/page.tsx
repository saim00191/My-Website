
export default function Contact() {
    return (
<div id="contact" >
<section className="text-gray-600 body-font ">
  <div className="container px-3 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.8603139121105!2d68.37614567416047!3d25.375997624437712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70550546f7bf%3A0x2dae1d1405fb5791!2sHali%20Rd%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716273838467!5m2!1sen!2s"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md ">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 font-semibold">
            Hali Road Hyderabad Sindh Pakistan
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-blue-700 leading-relaxed">saimamjad198@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+923154397485</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 px-4 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">
      <h1 className="text-gray-900 mb-1 font-medium title-font text-3xl">
        Contact
      </h1>
      <form action="https://formspree.io/f/xnqeydnq" method="POST">
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
       </div>
                
       <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Phone Number
        </label>
          <input
          maxLength={11}
          minLength={10}
          type="number"
          id="phone"
          name="phone"
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
        Send Message
        </button>
        </form>
    
    </div>
  </div>
</section>

</div>
    )
}


