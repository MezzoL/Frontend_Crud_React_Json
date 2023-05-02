import React from 'react';
import ProjectItem from './ProjectItem';
import Geto from '../assets/Geto.png';
import Gojo from '../assets/Gojo.png';
import Megumi from '../assets/Megumi.png';
import Yuji from '../assets/Yuji.png';



const Projects = () => {
  return (
    <div id = 'projects' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#00b15e]'>Projects</h1>
      <p className='text-center py-8 text-[#001b5e]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItem img={Geto} title='Geto App'/>
          <ProjectItem img={Gojo} title='Gojo App'/>
          <ProjectItem img={Megumi} title='Megumi App'/>
          <ProjectItem img={Yuji} title='Yuji App'/>
        </div>
    </div>
  )
}

export default Projects;