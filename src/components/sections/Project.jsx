import React from 'react';
import projectAstronautaPNG from '../../assets/projectAstronauta.png'

const Project = () => {
  return (
    <section className="projects-section">
      <div className="section-content pl-20 pt-20">
        <div className="">
        <h1 className='text-6xl bold flex opacity-80'>MY PROJECTS</h1>
        
        {/* Contenedor para los rectángulos en dos columnas */}
        <div className="grid grid-cols-2 gap-6 max-w-[790px]">
          <div className="w-96 h-60 bg-white rounded-lg"></div>
          <div className="w-96 h-60 bg-white rounded-lg"></div>
          <div className="w-96 h-60 bg-white rounded-lg"></div>
        </div>
        </div>

      </div>
      <img className='absolute w-2xl h-auto translate-x-1/9 top-1/4 right-10 gravity' src={projectAstronautaPNG} alt='projectAstronauta' />
      <div className="absolute translate-x-1/9 -bottom-21 right-4 blob -z-20"></div>
    </section>
  )
}

export default Project