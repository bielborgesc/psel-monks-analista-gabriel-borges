import { getProductsSection, getCards } from '../services/products';
import { useState, useEffect } from 'react';

const Products = () => {
  const [section, setSection] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getProductsSection().then(setSection);

    getCards()
      .then(setCards)
      .catch((err) => {
        console.error("Erro ao buscar cards:", err);
        setCards([]); // fallback
      });
  }, []);

  if (!section) return null;

  return (
    <div className="w-full flex justify-center bg-[#EAE8E4] py-[64px]">
      <div className="max-w-[1366px] w-full px-[24px] md:px-[80px]">
        {/* Title Box */}
        <div className="w-[312px] md:w-[1206px] mx-auto h-auto md:h-[121px]">
          <h3 className="text-[#2D2D2D] text-[24px] md:text-[40px] leading-[24px] md:leading-[54px] helvetica-medium tracking-[0.02em] w-[312px] md:w-auto text-left">
            {section.title.rendered}
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: section.content.rendered }}
            className="mt-[8px] text-[#2D2D2D] text-[16px] md:text-[24px] leading-[16px] md:leading-[32px] helvetica-light tracking-[0.02em] text-left"
          />
        </div>

        {/* Products */}
        {Array.isArray(cards) && cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px] mt-[36px] max-w-[1206px] mx-auto">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-[#FCFCFD] rounded-[8px] shadow-[0px_4px_24px_rgba(0,0,0,0.1)] p-[8px] flex flex-col gap-[16px] min-h-[314px] transition-all hover:shadow-lg hover:scale-[1.01] md:w-[283.5px]"
              >
                <div className="w-[300px] md:w-[267.5px] h-[180px] rounded-[8px] overflow-hidden mx-auto">
                  <img
                    src={card._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                    alt={card.title.rendered}
                    className="w-full h-full object-cover rounded-[8px]"
                  />
                </div>
                <div className="px-[8px]">
                  <h4 className="text-[#0C111D] text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] helvetica-medium mb-[8px] w-[284px] md:w-full">
                    {card.title.rendered}
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: card.content.rendered }}
                    className="text-[#0C111D] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] helvetica-light w-[284px] md:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;