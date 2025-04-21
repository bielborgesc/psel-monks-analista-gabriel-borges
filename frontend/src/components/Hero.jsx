import { useState, useEffect } from 'react';
import LogoMonks from '../assets/hero/LogoMonks.png';
import Scroll from '../assets/hero/Scroll.png';
import BgMonks from '../assets/hero/BgMonks.png';
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
    <header className="bg-[#2D2D2D] w-full h-[480px] flex justify-between rounded-b-[32px] overflow-hidden">
      {/* Lado esquerdo */}
      <div className="flex flex-col w-[860px] h-full py-[24px] pl-[80px]">
      {/* Navegação */}
      <nav className="flex items-center gap-[40px] h-[24px] mb-[60px]">
        <img src={LogoMonks} alt=".monks logo" className="w-[140px] h-[24px] object-contain" />
        <div className="w-[640px]">
          <ul className="flex tracking-[0.0em] font-[400] text-[20px] text-[#EAE8E4] helvetica-light justify-evenly text-center">
            {/* {['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'].map((cat, idx) => (
              <li key={idx} className="w-[141px] h-[24px] gap-[10px]"><a href="#">{cat}</a></li>
            ))} */}
              {categories.map((cat) => (
                <li key={cat.id} className="w-[141px] h-[24px] gap-[10px]">
                  <a href={`/categoria/${cat.slug}`}>{cat.name}</a>
                </li>
              ))}
          </ul>
        </div>
      </nav>

      {/* Container flex que vai centralizar o texto e manter o scroll fixo no fim */}
      <div className="flex flex-col justify-between flex-1 max-w-[700px] w-full">
        {/* Título + Subtítulo */}
        <div>
          <h1 className="helvetica-heavy text-[48px] leading-[56px] text-[#EAE8E4] font-normal tracking-[0.02em] max-w-[700px]">
          {hero.title.rendered}
          </h1>
          <p dangerouslySetInnerHTML={{ __html: hero.content.rendered }} className="mt-[16px] text-[24px] leading-[28px] text-[#EAE8E4] font-normal helvetica-thin max-w-[600px]"></p>
        </div>

        {/* Scroll */}
        <div className="flex justify-center">
          <img src={Scroll} alt="Scroll" className="w-[72px] h-[100px] object-contain" />
        </div>
      </div>
    </div>
    {/* Imagem lateral */}
    <div className="w-[506px] h-full">
      <img
        src={BgMonks}
        alt="Decoração roxa"
        className="w-full h-full object-cover"
      />
    </div>

    </header>
  );
};

export default Hero;
