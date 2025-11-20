import React, { useState } from 'react'
import Javascriptlogo from "../imgs/Javascript_logo.webp"
import Reactlogo from "../imgs/React.js_logo.webp"
import Tailwindlogo from "../imgs/tailwind_logo.webp"
import SkillOverlay from './SkillOverlay'
import { skillsData } from '../skillsData'


const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skillId) => {
    const skill = skillsData.find(s => s.id === skillId);
    setSelectedSkill(skill);
  };

  const handleCloseOverlay = () => {
    setSelectedSkill(null);
  };

  return (
    <div id="skills" className='w-full min-h-screen px-8 md:px-20 py-20 bg-zinc-900 rounded-tl-3xl rounded-tr-3xl border-t border-zinc-700'>
      <div className='border-b-[1px] pb-10 border-zinc-700 mb-16'>
        <h1 className='text-5xl md:text-6xl font-custom2 font-semibold text-royal-blue'>Skills</h1>
        <p className='text-gray-400 mt-4 text-lg'>Click on a skill to explore my learning journey</p>
      </div>

      <div className='circles flex flex-col md:flex-row justify-center gap-8 md:gap-10 text-white'>
        <div
          onClick={() => handleSkillClick('javascript')}
          className='javascript font-custom2 bg-zinc-800 w-full md:w-[28vw] min-h-[480px] p-8 md:p-10 rounded-2xl border border-zinc-700 hover:border-metallic-gray hover:scale-105 transition-all duration-300 shadow-metallic hover:shadow-metallic-lg cursor-pointer group'>
          <img className='w-full md:w-[18vw] h-auto max-h-[200px] object-contain mb-6 group-hover:scale-110 transition-transform duration-300' src={Javascriptlogo} alt="JavaScript" />
          <h1 className='text-2xl md:text-3xl font-medium text-royal-blue mb-3'>JAVASCRIPT</h1>
          <p className='text-base md:text-lg text-gray-300 leading-relaxed'>A versatile and powerful language that drives interactivity on the web. Skilled in using
            JavaScript for both front-end and back-end development.</p>
          <div className='mt-4 text-sm text-royal-blue font-semibold'>Click to explore →</div>
        </div>

        <div
          onClick={() => handleSkillClick('tailwind')}
          className='javascript font-custom2 bg-zinc-800 w-full md:w-[28vw] min-h-[480px] p-8 md:p-10 rounded-2xl border border-zinc-700 hover:border-metallic-gray hover:scale-105 transition-all duration-300 shadow-metallic hover:shadow-metallic-lg cursor-pointer group'>
          <img className='w-full md:w-[12vw] h-auto max-h-[140px] object-contain mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300' src={Tailwindlogo} alt="Tailwind CSS" />
          <div className='note2'>
            <h1 className='text-2xl md:text-3xl font-medium text-royal-blue mb-3'>TAILWIND CSS</h1>
            <p className='text-base md:text-lg text-gray-300 leading-relaxed'>A utility-first CSS framework that makes styling websites faster and more efficient.
              Proficient in using Tailwind to create responsive, modern designs with minimal effort.</p>
            <div className='mt-4 text-sm text-royal-blue font-semibold'>Click to explore →</div>
          </div>
        </div>

        <div
          onClick={() => handleSkillClick('react')}
          className='javascript font-custom2 bg-zinc-800 w-full md:w-[28vw] min-h-[480px] p-8 md:p-10 rounded-2xl border border-zinc-700 hover:border-metallic-gray hover:scale-105 transition-all duration-300 shadow-metallic hover:shadow-metallic-lg cursor-pointer group'>
          <img className='w-full md:w-[14vw] h-auto max-h-[180px] object-contain mb-6 group-hover:scale-110 transition-transform duration-300' src={Reactlogo} alt="React.js" />
          <div className='note3'>
            <h1 className='text-2xl md:text-3xl font-medium text-royal-blue mb-3'>REACT.JS</h1>
            <p className='text-base md:text-lg text-gray-300 leading-relaxed'>A popular JavaScript library for building dynamic and responsive user interfaces. Experienced in
              creating reusable components and managing state with React.</p>
            <div className='mt-4 text-sm text-royal-blue font-semibold'>Click to explore →</div>
          </div>
        </div>
      </div>

      {/* Skill Overlay Modal */}
      {selectedSkill && (
        <SkillOverlay skill={selectedSkill} onClose={handleCloseOverlay} />
      )}
    </div>
  )
}

export default Skills