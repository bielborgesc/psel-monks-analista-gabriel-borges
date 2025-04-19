import AppleStore from '../assets/app-section/Apple.png';
import GooglePlay from '../assets/app-section/PlayStore.png';

const AppSection = () => {
  return (
    <section className="w-full max-w-[1366px] h-[312px] px-[80px] pt-[32px] pb-[64px]">
      <div className="w-[1206px] h-[216px] bg-[#3C0C60] rounded-[24px] p-[40px] flex items-start justify-between flex gap-[40px]">
        
        {/* Título e subtítulo */}
        <div className="w-[868.87px] text-[#EAE8E4]">
          <h2 className="helvetica-medium font-[400] text-[40px] leading-[1] tracking-[0.02em] mb-[16px] items-center">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="helvetica-light font-[400] text-[24px] leading-[1] tracking-[0.02em]">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra
          </p>
        </div>

        {/* Botões de download */}
        <div className="w-[217.13px] h-[136px] flex flex-col justify-between gap-[8px]">
          <img
            src={AppleStore}
            alt="Download na App Store"
            className="w-[217.13px] h-[64px] rounded-[8px] object-contain"
          />
          <img
            src={GooglePlay}
            alt="Download no Google Play"
            className="w-[217.13px] h-[64px] rounded-[8px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AppSection;
