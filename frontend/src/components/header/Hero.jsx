import { useState } from 'react';
import LogoMonks from '../../assets/hero/LogoMonks.png';

const HeroLp = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-[#2D2D2D] h-[480px] w-full flex rounded-b-[32px]">
      <div className="w-[860px] h-full pt-[24px] pb-[24px] pl-[80px]">

        {/* Header*/}
        <nav className="flex gap-[6px] h-[24px] "> {/*h tem que ser de acordo com o tamanho interno, mudar dps*/}

          {/* Logo */}
          <div className="w-[140px] h-[24px]">
            <img 
              src={LogoMonks}
              alt=".monks logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Categorias flex justify-center*/}
          <div className="w-[640px]">
            <ul className="flex tracking-[0.0em] font[400] text-[20px] text-[#EAE8E4] helvetica-light justify-evenly text-center">
              <li className="w-[141px] h-[24px] gap-[10px]"><a href="#">Categoria 1</a></li>
              <li className="w-[141px] h-[24px] gap-[10px]"><a href="#">Categoria 2</a></li>
              <li className="w-[141px] h-[24px] gap-[10px]"><a href="#">Categoria 3</a></li>
              <li className="w-[141px] h-[24px] gap-[10px]"><a href="#">Categoria 4</a></li> 
            </ul>
          </div>

        </nav>
      </div>

      {/*
      <div className="flex items-center space-x-2 font-bold text-2xl tracking-tight">
        <span className="text-white">.monks</span>
      </div>
      
      <nav className="hidden lg:flex gap-10 text-base font-normal tracking-wide">
        <a href="#">Categoria 1</a>
        <a href="#">Categoria 2</a>
        <a href="#">Categoria 3</a>
        <a href="#">Categoria 4</a>
      </nav>


      <button
        className="lg:hidden text-white"
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-purple-200 text-black p-6 space-y-4 z-50 transition-all">
          <ul className="space-y-4 font-medium">
            <li><a href="#">Categoria 1</a></li>
            <li><a href="#">Categoria 2</a></li>
            <li><a href="#">Categoria 3</a></li>
            <li><a href="#">Categoria 4</a></li>
          </ul>
          <div className="mt-8 text-sm italic text-center">
            <p className="inline-block border px-3 py-1 border-black rounded-full">← back</p>
          </div>
        </div>
      )}
      */}
    </header>
  );
};

export default HeroLp;
