import { useEffect, useState } from "react";
import { getAppSection } from "../services/appSection";
import AppleStore from '../assets/app-section/Apple.png';
import GooglePlay from '../assets/app-section/PlayStore.png';

const AppSection = () => {

  const [section, setSection] = useState(null);

  useEffect(() => {
    getAppSection().then(setSection);
  }, []);

  if (!section) return null;

  const appleUrl = section.meta.apple_store_url || "#";
  const googleUrl = section.meta.google_play_url || "#";
  const featuredImage = section._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <section className="w-full px-[24px] md:px-[80px] pt-[32px] pb-[64px] flex justify-center">
      <div className="w-full max-w-[1206px] bg-[#3C0C60] rounded-[24px] p-[24px] md:p-[40px] flex flex-col md:flex-row md:items-center md:justify-between gap-[24px] md:gap-[40px]">
        {/* Título e subtítulo */}
        <div className="text-[#EAE8E4] w-full md:w-[868.87px]">
          <h2 className="helvetica-medium font-[400] text-[24px] md:text-[40px] leading-[1] tracking-[0.02em] mb-[16px]">
            {section.title.rendered}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: section.content.rendered }}
            className="helvetica-light font-[400] text-[16px] md:text-[24px] leading-[1] tracking-[0.02em]">
          </p>
        </div>

        {/* Botões de download */}
        <div className="w-[264px] md:w-[217.13px] flex flex-col justify-between gap-[8px]">
          <a href={appleUrl} target="_blank">
            <img src={AppleStore} alt="App Store" className="w-[264px] h-[77.81px] md:w-full md:h-[64px] rounded-[8px] object-contain" />
          </a>
          <a href={googleUrl} target="_blank">
            <img src={GooglePlay} alt="Google Play" className="w-[264px] h-[77.81px] md:w-full md:h-[64px] rounded-[8px] object-contain" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
