import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-zinc-900 text-white py-12 px-8 md:px-20 border-t border-zinc-700">
      <div className='w-1/2 p-14'>
        <h1 className='text-4xl font-semibold text-royal-blue'>Contact Us</h1>
      </div>
      <div className='container flex justify-between'>
        <div className='flex gap-16'>
          <div className='pl-14 w-[20vw]'>
            <h1 className='font-light text-gray-300'>Ready to start a project with me? Let's create something amazing together</h1>
          </div>
          <div className='font-light text-gray-300'>
            <h1>viv13handari@gmail.com</h1>
            <h1>+91 7505172363</h1>
          </div>
          <div className='font-light text-gray-300'>
            <h1>Nandprayag chamoli</h1>
            <h1>Utttarakhand</h1>
            <h1>246449</h1>
          </div>
        </div>
        <div className='pr-40 flex flex-col gap-6 font-light'>
          <a className='text-gray-300 hover:text-royal-blue transition-colors duration-300' href="https://www.instagram.com/viviiiee27?utm_source=qr&igsh=MWNkY2trZ3RseGw3eg==">Instagram</a>
          <a className='text-gray-300 hover:text-royal-blue transition-colors duration-300' href="https://www.linkedin.com/in/vivek-bhandari-b57a2b302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linked In</a>
          <a className='text-gray-300 hover:text-royal-blue transition-colors duration-300' href="https://github.com/viv1coder/viv1coder">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer