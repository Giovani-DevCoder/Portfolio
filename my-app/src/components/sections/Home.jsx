import React from 'react';
import blackHole01WEBP from '../../assets/blackHole01.webp'
import blackHole02WEBP from '../../assets/blackHole02.webp'
import blackHole01PNG from '../../assets/blackHole01.png'
import blackHole02PNG from '../../assets/blackHole02.png'

const Home = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen">

        <picture className='flex justify-center'>
          <source srcSet={blackHole01WEBP}  type="image/webp" />
          <img 
            src={blackHole01PNG} 
            className="black-hole-core" 
            alt="Bola oscura" 
          />
        </picture>

        {/* Imagen 2: Aro de luz */}
        <picture className='flex justify-center'>
          <source srcSet={blackHole02WEBP} type="image/webp" />
          <img 
            src={blackHole02PNG} 
            className="black-hole-ring" 
            alt="Aro de luz" 
          />
        </picture>

      <p className=''>giovani linares padron</p>
      <div className="flex items-start z-20">
        {/* Texto "DEVELOPER" vertical */}
        <div className="rajdhani mr-4 text-1xl tracking-widest transform rotate-180 [writing-mode:vertical-lr]">
          DEVELOPER
        </div>
        
        {/* Texto "FULLSTACK" */}
        <h1 className="text-8xl">FULLSTACK</h1>
      </div>

      <div className="flex gap-6">
        <button className="my-button my-button:hover">
          Github
        </button>
        <button className="my-button my-button:hover">
          CV
        </button>
      </div>
    </section>
  );
};

export default Home;
