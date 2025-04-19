import { useState } from 'react';
import LogoMonks from '../assets/hero/LogoMonks.png';
import Scroll from '../assets/hero/Scroll.png';
import BgMonks from '../assets/hero/BgMonks.png';

const Hero = () => {
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
        
        {/* Texto Hero */}
        <div className="w-[700px] h-[408px]">{/*h tem que ser de acordo com o tamanho interno, mudar dps*/}
            {/* Titulo e Subtitulo */}
            <div className="w-[700px] h-[300px] pt-[65px]">
                <div className="w-[700px] h-[114px] helvetica-heavy font-[400] text-[48px] text-[#EAE8E4] leading-[56px]">
                  <h1>Lorem ipsum dolor sit amet consectetur</h1>
                </div>

                <div className="max-w-[600px] h-[81px]">
                  <div className="helvetica-thin font-[400] text-[24px] text-[#EAE8E4] leading-[28px]">
                    <h2>
                      Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra
                    </h2>
                  </div>
                </div>
            </div>

            {/* Scrool */}
            <div className="w-[100%] flex justify-center">
              <div className="w-[72px] h-[100px] pl[1px] pr-[1px]">
                <img 
                  src={Scroll}
                  alt="Imagem Scrool" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
        </div>
      </div>

      <div className="w-[506px] h-[480px] flex items-center justify-end">
      <img 
        src={BgMonks}
        alt="Decoração roxa"
        className="w-[506px] h-[480px] max-w-none object-contain"
      />
    </div>

    </header>
  );
};

export default Hero;
