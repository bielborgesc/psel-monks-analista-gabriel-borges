import { useState, useEffect } from 'react';
import LogoMonks from '../assets/hero/LogoMonks.png';
import Scroll from '../assets/hero/Scroll.png';
import BgMonks from '../assets/hero/BgMonks.png';
import BgMonksMobile from '../assets/hero/BgMonksMobile.png';
import { getHeroContent, getCategories } from '../services/hero';
import  HamburgerIcon  from '../assets/icon/HamburgerIcon.png';

const Hero = () => {
  const [hero, setHero] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getHeroContent().then(setHero);
    getCategories().then(setCategories);
  }, []);

  if (!hero || !hero.title || !hero.content) return null;

  return (
    <header className="relative bg-[#2D2D2D] w-full h-[363px] md:h-[480px] flex flex-col md:flex-row justify-between md:rounded-b-[32px] md:overflow-hidden">
      {/* Imagem mobile (sobreposta e flutuante) */}
      <img
        src={BgMonksMobile}
        alt="Decoração roxa mobile"
        className="absolute top-0 right-0 translate-x-[24px] z-0 block md:hidden object-contain"
      />


      {/* Lado esquerdo (texto + navegação) */}
      <div className="relative z-10 flex flex-col w-full md:w-[860px] h-full md:py-[24px] md:pl-[80px]">
        
        {/* Navegação */}
        <nav className="flex items-center gap-[16px] px-[24px] pt-[16px] pb-[16px] h-[48px] md:gap-[40px] md:justify-between md:h-[24px] md:mb-[60px]">
          {/* Logo */}
          <img
            src={LogoMonks}
            alt=".monks logo"
            className="w-[93px] h-[16px] md:w-[120px] md:h-[24px] object-contain"
          />

          {/* Hamburger */}
          <img
            src={HamburgerIcon}
            alt="Menu"
            className="w-[18px] h-[12px] md:hidden object-contain"
          />

          {/* Menu de categorias no desktop */}
          <div className="hidden md:block w-[640px]">
            <ul className="flex tracking-[0.0em] font-[400] text-[20px] text-[#EAE8E4] helvetica-light justify-evenly text-center">
              {categories.map((cat) => (
                <li key={cat.id} className="w-[141px] h-[24px]">
                  <a href={`/categoria/${cat.slug}`}>{cat.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Conteúdo (texto + scroll) */}
        <div className="flex flex-col justify-between w-[236px] h-[363px] mt-[16px] pr-[32px] pb-[24px] pl-[24px] md:flex-1 md:max-w-[700px] md:w-full md:h-auto md:pt-0 md:pr-0 md:pb-0 md:pl-0">
          <div className="space-y-[16px] md:space-y-0">
            <h1 className="helvetica-heavy text-[24px] md:text-[48px] leading-[24px] md:leading-[56px] text-[#EAE8E4] font-normal tracking-[0.02em] max-w-[180px] md:max-w-[700px] mb-[8px] md:mb-0">
              {hero.title.rendered}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: hero.content.rendered }}
              className="text-[16px] md:text-[24px] leading-[16px] md:leading-[28px] text-[#EAE8E4] font-normal helvetica-thin max-w-[180px] md:max-w-[600px]"
            />
          </div>

          <div className="flex justify-center mt-[24px] md:mt-[24px]">
            <img
              src={Scroll}
              alt="Scroll"
              className="w-[48px] md:w-[72px] h-[80px] md:h-[100px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Imagem desktop (normal ao lado do conteúdo) */}
      <div className="hidden md:block w-[506px] h-full">
        <img
          src={BgMonks}
          alt="Decoração roxa desktop"
          className="w-full h-full object-cover"
        />
      </div>
    </header>


  );
};

export default Hero;
