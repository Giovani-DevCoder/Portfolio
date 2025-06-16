import React from 'react';
import blackHole01WEBP from '../../assets/blackHole01.webp';
import blackHole02WEBP from '../../assets/blackHole02.webp';
import blackHole01PNG from '../../assets/blackHole01.png';
import blackHole02PNG from '../../assets/blackHole02.png';
import ThreeCardsSection from "../cards/ThreeCardsSection";
import BlackHoleAnimation from "../BlackHole";
import ShootingStars from '../Shooting-stars';
import FloatingTechIcons from "../FloatingTechIcons"


const Home = () => {
  return (
    <section>
      <ShootingStars side="both" frequency={4} />

      <div className='relative'>
          <BlackHoleAnimation 
            coreImageWEBP={blackHole01WEBP}
            coreImagePNG={blackHole01PNG}
            ringImageWEBP={blackHole02WEBP}
            ringImagePNG={blackHole02PNG}
          />
          <FloatingTechIcons />
          </div>

      <div className='relative bottom-29 z-30 m-8 h-full'>
        
          <div className="text-center cursor-default">
            <h1 className="text-6xl font-extralight tracking-wider bg-[#1b1b1b] text-zinc-300 mb-2">DESARROLLADOR FULLSTACK</h1>
            <h1 className="text-6xl text-zinc-300 font-light tracking-widest">GIOVANNI LINARES PADRON</h1>
          <div className="h-4"></div>
            <p className=" text-lg text-zinc-400 mt-4 font-light tracking-wide">
              Bienvenido a mi portafolio, donde la tecnología y la creatividad se unen para crear experiencias digitales únicas.</p>
          </div>
          
          <div className="h-7"></div>
          
            <ThreeCardsSection />
        
        <div className="flex-1"></div>
      </div>
    </section>
  );
};

export default Home;
