const tags = [
  "Perfumaria", "Corpo e banho", "Hidratante", "Desodorante", "Cabelos",
  "Maquiagem", "Rosto", "Casa", "Infantil", "Shampoo", "Sabonete",
  "Body splash", "Óleo corporal", "Corretivo", "Proteção solar"
];

const ProductsLinks = () => {
  return (
    <div className="w-full max-w-[1366px] px-[80px] py-[32px] mx-auto">
      {/* Título */}
      <h2 className="w-full text-[40px] font-[400] leading-[1] tracking-[0.02em] text-[#2D2D2D] helvetica-medium mb-[40px]">
        Lorem ipsum dolor sit amet consectetur
      </h2>

      {/* Tags */}
      <div className="w-full flex flex-wrap justify-center gap-[24px]">
        {tags.map((tag, index) => (
          <span
            key={index}
            className=" flex items-center h-[46px] px-[40px] py-[8px] rounded-[32px] border border-[#7D26C9] text-[#7D26C9] bg-[#DFDCD5] backdrop-blur-[16px] font-[400] text-[20px] leading-[1] text-center helvetica-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductsLinks;
