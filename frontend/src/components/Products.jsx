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

  return(
    <div className="w-[1366px] h-[533px] pt-[64px] pr-[80px] pb-[32px] pl-[80px] gap-[40px]">
      {/* Title Box */}
      <div className="w-[1206px] h-[83px]">
        <div className="h-[47px] font-[400] text-[40px] text-[#2D2D2D] helvetica-medium leading-[54px] tracking-[2%]">
          <h3>{section.title.rendered}</h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: section.content.rendered }}
            className="h-[28px] font-[400] text-[24px] text-[#2D2D2D] helvetica-light leading-[48px] tracking-[2%]">
        </div>
      </div>

      {/* Products */}
      {Array.isArray(cards) && cards.length > 0 && (
        <div className="grid grid-cols-4 gap-[24px] w-[1206px] h-[314px] mt-[36px]">
          {cards.map((card) =>
            <div key={card.id} className="w-[283.5px] h-[314px] bg-[#FCFCFD] rounded-[8px] shadow-[0px_4px_24px_rgba(0,0,0,0.1)] pt-[6px] pr-[6px] pb-[16px] pl-[8px] gap-[24px]">
            <div className="W-[271.5px] h-[180px] rounded-[8px]">
              <img 
                src={card._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                alt={card.title.rendered}
                className="w-full h-full object-contain"/>
            </div>
              <div className="w-[271.5px] h-[140px] pl-[8px] pr-[8px] ">
                <div className=" w-[255.5px] h-[36px] gap-[10px]  font-[400] text-[24px] text-[#0C111D] helvetica-medium leading-[60px] tracking-[0.0em] mb-[20px]">
                  <h4>{card.title.rendered}</h4>
                </div>
                <div dangerouslySetInnerHTML={{ __html: card.content.rendered }}
                  className="w-[255.5px] h-[60px] font-[400] text-[20px] text-[#0C111D] helvetica-light leading-[30px] tracking-[0.0em]">
                </div>
            </div>
          </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Products;