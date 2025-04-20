import { useEffect, useState } from 'react';
import { getFooterInfo, getFooterLinks } from '../services/footer';
import Insta from '../assets/icon/insta.png';
import Zap from '../assets/icon/zap.png';
import Twitter from '../assets/icon/twitter.png';
import Face from '../assets/icon/face.png';

const Footer = () => {
  const [info, setInfo] = useState(null);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getFooterInfo().then(setInfo);
    getFooterLinks().then(setLinks);
  }, []);

  if (!info) return null;

  return (
    <footer className="w-full bg-[#2D2D2D] flex flex-col items-center justify-center pt-[32px] pb-[32px] gap-[32px] text-[#EAE8E4]">
      
      {/* Linha divisória */}
      <div className="w-[1206px] h-[1px] bg-[#DFBBFE]"></div>

      {/* Ícones sociais com links se disponíveis */}
      <div className="flex gap-[24px] w-[231px] h-[32px] justify-center items-center">
        {info.meta?.instagram_url && (
          <a href={info.meta.instagram_url} target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="Instagram" className="w-[32px] h-[32px] object-contain" />
          </a>
        )}
        {info.meta?.whatsapp_url && (
          <a href={info.meta.whatsapp_url} target="_blank" rel="noopener noreferrer">
            <img src={Zap} alt="Whatsapp" className="w-[32px] h-[32px] object-contain" />
          </a>
        )}
        {info.meta?.twitter_url && (
          <a href={info.meta.twitter_url} target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" className="w-[32px] h-[32px] object-contain" />
          </a>
        )}
        {info.meta?.facebook_url && (
          <a href={info.meta.facebook_url} target="_blank" rel="noopener noreferrer">
            <img src={Face} alt="Facebook" className="w-[32px] h-[32px] object-contain" />
          </a>
        )}
      </div>

      {/* Bloco de texto */}
      <div className="flex flex-col items-center gap-[16px]">
        {/* Título */}
        <h4 className="text-[20px] font-[400] leading-[36px] text-center helvetica-medium">
          {info.title.rendered}
        </h4>

        {/* Subcategorias dinâmicas */}
        <div className="flex gap-[40px] flex-wrap justify-center">
          {links.map(link => (
            <a
              key={link.id}
              href={link.meta?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[113px] text-center text-[16px] leading-[100%] helvetica-light hover:underline"
            >
              {link.title.rendered}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
