import Insta from '../assets/icon/insta.png'
import Zap from '../assets/icon/zap.png'
import Twitter from '../assets/icon/twitter.png'
import Face from '../assets/icon/face.png'

const Footer = () => {
  return (
    <footer className="w-full bg-[#2D2D2D] flex flex-col items-center justify-center pt-[32px] pb-[32px] gap-[32px] text-[#EAE8E4]">
      
      {/* Linha divisória */}
      <div className="w-[1206px] h-[1px] bg-[#DFBBFE]"></div>

      {/* Ícones sociais */}
      <div className="flex gap-[24px] w-[231px] h-[32px] justify-center items-center">
        <img src={Insta} alt="Instagram" className="w-[32px] h-[32px] object-contain" />
        <img src={Zap} alt="Whatsapp" className="w-[32px] h-[32px] object-contain" />
        <img src={Twitter} alt="Twitter" className="w-[32px] h-[32px] object-contain" />
        <img src={Face} alt="Facebook" className="w-[32px] h-[32px] object-contain" />
      </div>

      {/* Bloco de texto */}
      <div className="flex flex-col items-center gap-[16px]">
        {/* Título */}
        <h4 className="text-[20px] font-[400] leading-[36px] text-center helvetica-medium">
          Lorem ipsum dolor sit amet
        </h4>

        {/* Subcategorias */}
        <div className="flex gap-[40px]">
          <span className="w-[113px] text-center text-[16px] leading-[100%] helvetica-light">Lorem ipsum</span>
          <span className="w-[113px] text-center text-[16px] leading-[100%] helvetica-light">Lorem ipsum</span>
          <span className="w-[113px] text-center text-[16px] leading-[100%] helvetica-light">Lorem ipsum</span>
          <span className="w-[113px] text-center text-[16px] leading-[100%] helvetica-light">Lorem ipsum</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
