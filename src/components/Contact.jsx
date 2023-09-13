import React from 'react'
import ContactImage from "../assets/ContactImage.png"
import telephone from "../assets/telephone.png"
import mail from "../assets/mail.png"
import instagram from "../assets/instagram.png"

function Contact() {
  return (
    <section className="w-full h-full bg-[#14121E]">
      <div className="max-w-[1200px] mx-auto px-12 py-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="">
            <img src={ContactImage} alt=""className='w-[90%]'/>
          </div>
          <div className="">
          <h1 className='text-white text-3xl font-bold ml-10 mb-7'>Get In Touch</h1>
          <div className="text-white">
            <div className="">
              <label>Name</label>
              <input type="text" className='outline-none py-2 border-t-2 border-solid border-white bg-transparent w-full mt-6'/>
            </div>
            <div className="flex flex-col lg:gap-7 lg:flex-row">
              <div className="">
                <label>Email</label>
                <input type="text" className='outline-none py-2 border-t-2 border-solid border-white bg-transparent w-full mt-6' />
              </div>
              <div className="">
                <label>Phone Number</label>
                <input type="text" className='outline-none py-2 border-t-2 border-solid border-white bg-transparent w-full mt-6' />
              </div>
            </div>
            <div className="">
              <label>Message</label>
              <input type="text" className='outline-none py-2 border-t-2 border-solid border-white bg-transparent w-full mt-6'/>
            </div>
            <div className="my-2 text-center">
              <button className='bg-[#0030ff] px-6 py-2 rounded-full'>Submit Now</button>
            </div>
          </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white my-9 rounded-full"></div>
        <div className="flex flex-col lg:flex-row justify-between text-white gap-10 lg:mx-6">
          <div className="flex items-center gap-4">
            <img src={telephone} alt="telephone" />
            <p className='text-lg'>+91-7011112666</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={mail} alt="mail" />
            <p className='text-lg'>info@Ricoz.in</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={instagram} alt="instagram" />
            <p className='text-lg'>Ricoz.in</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact
