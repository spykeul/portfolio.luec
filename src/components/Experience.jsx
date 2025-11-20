import React from 'react'
import img1 from "../imgs/Hackathonpic.jpg"
import img2 from "../imgs/interncerti.jpg";


const Experience = () => {
  return (
    <div id="experience" className='w-full px-8 md:px-20 py-20 bg-zinc-900 rounded-tl-3xl rounded-tr-3xl text-white border-t border-zinc-700'>
      <div className='Hackathon mb-20'>
        <div className='w-full flex flex-col md:flex-row gap-10 md:gap-16'>
          <div className='w-full md:w-1/2'>
            <h1 className='text-5xl md:text-6xl font-custom2 font-semibold text-royal-blue mb-12'>Experience</h1>
            <h2 className='text-3xl md:text-4xl font-custom2 mb-6 font-semibold text-white'>Hack with Uttarakhand (Hackathon)</h2>
            <p className='font-custom2 tracking-tight text-xl md:text-2xl text-gray-300 leading-relaxed'>
              My experience at my first hackathon, held at THDC IHT in Tehri Garhwal and organized by Hack with Uttarakhand,
              was incredibly enriching. It was an amazing opportunity to immerse myself in the world of web development and
              collaborate with passionate individuals. From the moment I started working on my project, I realized how much
              I love creating dynamic, user-friendly web applications that solve real-world problems. The experience further
              fueled my passion for web development, and I am more determined than ever to hone my skills and contribute to
              the tech community. The event not only allowed me to test my abilities under pressure but also inspired me
              to explore new ideas and techniques, reinforcing my deep interest in web development as both a craft and a career.
            </p>
          </div>
          <div className='w-full md:w-[500px] md:h-[400px] rounded-3xl bg-zinc-800 border-2 border-zinc-700 shadow-metallic-lg overflow-hidden hover:border-metallic-gray transition-all duration-300'>
            <img className='w-full h-full rounded-3xl object-cover hover:scale-105 transition-transform duration-500' src={img1} alt="Hackathon picture" />
          </div>
        </div>
      </div>

      <div className='Internship'>
        <div className='w-full flex flex-col-reverse md:flex-row gap-10 md:gap-16'>
          <div className='w-full md:w-[600px] md:h-[350px] rounded-3xl bg-zinc-800 border-2 border-zinc-700 shadow-metallic-lg overflow-hidden hover:border-metallic-gray transition-all duration-300'>
            <img className='w-full h-full rounded-3xl object-cover hover:scale-105 transition-transform duration-500' src={img2} alt="Internship certificate" />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-["Century_Gothic"] mb-6 font-semibold text-white'>Internship by CodexIntern</h2>
            <p className='font-custom2 tracking-tight text-xl md:text-2xl text-gray-300 leading-relaxed'>
              I had the incredible opportunity to attend my first internship with Codex Intern, and it was a fantastic experience.
              During my time there, I was able to apply my knowledge to real-world projects, which greatly enhanced my skills and
              understanding of the industry. I worked on several projects, each offering unique challenges that allowed me to
              grow both technically and professionally. The internship also provided me with valuable insights into teamwork,
              problem-solving, and meeting deadlines in a professional environment. I am proud to have completed the internship
              and received a certificate of completion, which further motivates me to continue pursuing my passion for web
              development and further develop my skill set.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
