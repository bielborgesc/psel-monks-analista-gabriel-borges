import { useEffect, useState } from "react";
import { getSectionCards } from "../services/sectionCards";

const SectionCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getSectionCards().then((data) => setCards(data));
  }, []);

  return (
    <section className="w-full max-w-[1366px] px-[24px] md:px-[80px] pt-[32px] pb-[64px] mx-auto">
      <div className="flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-center md:items-start">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[312px] md:w-[375.33px] h-[276px] bg-white rounded-[16px] border-2 border-[#DFBBFE] p-[24px] shadow-[0px_2px_24px_0px_rgba(0,0,0,0.1)] flex flex-col gap-[24px]"
          >
            <div className="flex flex-col gap-[8px]">
              <h3 className="w-full text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] font-[400] text-[#2D2D2D] helvetica-medium">
                {card.title.rendered}
              </h3>
              <p
                dangerouslySetInnerHTML={{ __html: card.content.rendered }}
                className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#2D2D2D] helvetica-light"
              ></p>
            </div>
            <button className="bg-[#DFBBFE] text-[#2D2D2D] text-[16px] leading-[24px] font-semibold rounded-[4px] px-[40px] py-[8px] mx-auto">
              Lorem ipsum
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
