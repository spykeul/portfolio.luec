import React, { useState } from 'react'
import Calc from "../imgs/calculatorimg.jpg"
import Todo from "../imgs/tasktrackerimg.jpg"
import Weather from "../imgs/weatherimage.jpg"
import Ecom from "../imgs/Ecomimg.jpg"
import ProjectOverlay from './ProjectOverlay'
import { projectsData } from '../projectsData'


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    setSelectedProject(project);
  };

  const handleCloseOverlay = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className='w-full px-8 md:px-20 py-20'>
      <div className='w-full border-b-[1px] border-zinc-700 pb-10 mb-16'>
        <h1 className='text-5xl md:text-6xl font-semibold font-custom2 text-royal-blue'>Featured Projects</h1>
        <p className='text-gray-400 mt-4 text-lg'>Click on a project to explore the details</p>
      </div>
      <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-2xl font-semibold font-["Century_Gothic"]'>
        <div
          onClick={() => handleProjectClick('calculator')}
          className='card rounded-2xl bg-zinc-800 border-2 border-zinc-700 hover:border-royal-blue hover:scale-105 transition-all duration-300 shadow-metallic hover:shadow-metallic-lg overflow-hidden group cursor-pointer'>
          <div className='relative h-[250px] overflow-hidden bg-zinc-900'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' src={Calc} alt="Calculator" />
            <div className='absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6'>
              <span className='text-white text-lg font-bold'>View Details →</span>
            </div>
          </div>
          <div className='p-6'>
            <h3 className='text-xl text-white group-hover:text-royal-blue transition-colors duration-300 text-center'>Advanced Calculator</h3>
          </div>
        </div>

        <div
          onClick={() => handleProjectClick('todo')}
          className='card rounded-2xl bg-zinc-800 border-2 border-zinc-700 hover:border-royal-blue hover:scale-105 transition-all duration-300 shadow-metallic hover:shadow-metallic-lg overflow-hidden group cursor-pointer'>
          <div className='relative h-[250px] overflow-hidden bg-zinc-900'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' src={Todo} alt="Todo App" />
            <div className='absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6'>
              <span className='text-white text-lg font-bold'>View Details →</span>
            </div>
          </div>
          <div className='p-6'>
            <h3 className='text-xl text-white group-hover:text-royal-blue transition-colors duration-300 text-center'>Task Tracker Pro</h3>
          </div>
        </div>

        <div
          onClick={() => handleProjectClick('weather')}
          className='card rounded-2xl bg-zinc-800 border-2 border-zinc-700 hover:border-royal-blue hover:scale-105 transition-all duration-300 shadow-metallic hover:shadow-metallic-lg overflow-hidden group cursor-pointer'>
          <div className='relative h-[250px] overflow-hidden bg-zinc-900'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' src={Weather} alt="Weather App" />
            <div className='absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6'>
              <span className='text-white text-lg font-bold'>View Details →</span>
            </div>
          </div>
          <div className='p-6'>
            <h3 className='text-xl text-white group-hover:text-royal-blue transition-colors duration-300 text-center'>Weather Dashboard</h3>
          </div>
        </div>

        <div
          onClick={() => handleProjectClick('ecommerce')}
          className='card rounded-2xl bg-zinc-800 border-2 border-zinc-700 hover:border-royal-blue hover:scale-105 transition-all duration-300 shadow-metallic hover:shadow-metallic-lg overflow-hidden group cursor-pointer'>
          <div className='relative h-[250px] overflow-hidden bg-zinc-900'>
            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' src={Ecom} alt="E-commerce" />
            <div className='absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6'>
              <span className='text-white text-lg font-bold'>View Details →</span>
            </div>
          </div>
          <div className='p-6'>
            <h3 className='text-xl text-white group-hover:text-royal-blue transition-colors duration-300 text-center'>E-Commerce Platform</h3>
          </div>
        </div>
      </div>

      <p className='font-custom2 tracking-tight text-2xl md:text-3xl mt-16 text-gray-400 leading-relaxed text-center max-w-4xl mx-auto'>
        The following projects are currently under maintenance or being upgraded. They
        will be back online soon with improvements. Thank you for your patience!
      </p>

      {/* Project Overlay Modal */}
      {selectedProject && (
        <ProjectOverlay project={selectedProject} onClose={handleCloseOverlay} />
      )}
    </div>
  )
}

export default Projects