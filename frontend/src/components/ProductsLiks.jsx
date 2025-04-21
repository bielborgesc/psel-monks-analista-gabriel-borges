import { useEffect, useState } from 'react';
import { getProductsLinksSection } from '../services/productsLinks';

const tags = [
  "Perfumaria", "Corpo e banho", "Hidratante", "Desodorante", "Cabelos",
  "Maquiagem", "Rosto", "Casa", "Infantil", "Shampoo", "Sabonete",
  "Body splash", "Óleo corporal", "Corretivo", "Proteção solar"
];

const ProductsLinks = () => {
  const [section, setSection] = useState(null);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getProductsLinksSection().then((data) => {
      setSection(data);
      const content = data?.content?.rendered || '';
      const tags = content.replace(/<[^>]+>/g, '').split(',').map(tag => tag.trim());
      setLinks(tags);
    });
  }, []);

  if (!section) return null;

  return (
    <div className="w-full max-w-[1366px] px-[24px] md:px-[80px] py-[32px] mx-auto">
      {/* Título */}
      <h2 className="w-[312px] md:w-full text-[24px] md:text-[40px] font-[400] leading-[24px] md:leading-[1] tracking-[0.02em] text-[#2D2D2D] helvetica-medium mb-[40px]">
        {section.title.rendered}
      </h2>

      {/* Tags */}
      <div className="w-full flex flex-wrap justify-center md:justify-start gap-[16px] md:gap-[24px]">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center justify-center h-[40px] md:h-[46px] px-[24px] md:px-[40px] py-[8px] rounded-[32px] border border-[#7D26C9] text-[#7D26C9] bg-[#DFDCD5] backdrop-blur-[16px] font-[400] text-[16px] md:text-[20px] leading-[24px] md:leading-[1] text-center helvetica-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductsLinks;
