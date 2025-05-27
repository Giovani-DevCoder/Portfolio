import React from 'react';
import blackHole01WEBP from '../../assets/blackHole01.webp';
import blackHole02WEBP from '../../assets/blackHole02.webp';
import blackHole01PNG from '../../assets/blackHole01.png';
import blackHole02PNG from '../../assets/blackHole02.png';
import ThreeCardsSection from "../cards/ThreeCardsSection";
import BlackHoleAnimation from "../BlackHole"; // Asegúrate de tener la ruta correcta

const Home = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen">
      {/* Reemplazamos las imágenes estáticas por el componente animado */}
      <BlackHoleAnimation 
        coreImageWEBP={blackHole01WEBP}
        coreImagePNG={blackHole01PNG}
        ringImageWEBP={blackHole02WEBP}
        ringImagePNG={blackHole02PNG}
      />

      <div className='m-8 flex flex-col items-center h-full relative bottom-1/25'>
        
        <div className="text-center z-20">
          <h1 className="text-5xl barlow-semi-condensed-extralight text-zinc-300 transform scale-y-150 origin-bottom">FULLSTACK DEVELOPER</h1>
          <p className='oswald text-4xl text-zinc-300'>GIOVANI LINARES PADRON</p>
        </div>
        
        <div className="h-6"></div>
        
        <div className="">
          <ThreeCardsSection />
        </div>
        
        <div className="flex-1"></div>
      </div>
    </section>
  );
};

export default Home;
