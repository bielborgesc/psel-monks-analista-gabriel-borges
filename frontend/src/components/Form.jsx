import CallCenter from '../assets/form/CallCenter.png';

const Form = () => {
  return (
    <section className="w-full max-w-[1366px] h-[584px] bg-[#2D2D2D] px-[80px] py-[64px] flex gap-[40px] items-center justify-between">
      
      {/* Imagem à esquerda */}
      <div className="w-[314.55px] h-[300.87px] flex items-center justify-center">
        <img src={CallCenter} alt="Call Center" className="w-full h-auto object-contain" />
      </div>

      {/* Card do formulário */}
      <div className="w-[851.45px] h-[456px] bg-[#EAE8E4] rounded-[24px] p-[24px] flex flex-col gap-[32px] text-[#2D2D2D]">
        
        {/* Título e subtítulos */}
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-[40px] leading-[1] tracking-[0.02em] font-[400] helvetica-medium">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-[20px] leading-[30px] font-[400] helvetica-light">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque
          </p>
          <p className="text-[16px] leading-[1] font-[400] helvetica-light">
            *Lorem ipsum dolor sit amet consectetur
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-[18px]">
          <input
            type="text"
            placeholder="Categoria*"
            className="w-[392.73px] h-[42px] px-[10px] py-[6px] rounded-[8px] bg-white text-[20px] leading-[30px] text-[#777777] font-[400] helvetica-light"
          />
          <input
            type="text"
            placeholder="Categoria*"
            className="w-[392.73px] h-[42px] px-[10px] py-[6px] rounded-[8px] bg-white text-[20px] leading-[30px] text-[#777777] font-[400] helvetica-light"
          />
          <input
            type="text"
            placeholder="Categoria"
            className="w-[392.73px] h-[42px] px-[10px] py-[6px] rounded-[8px] bg-white text-[20px] leading-[30px] text-[#777777] font-[400] helvetica-light"
          />
          <input
            type="text"
            placeholder="Categoria"
            className="w-[392.73px] h-[42px] px-[10px] py-[6px] rounded-[8px] bg-white text-[20px] leading-[30px] text-[#777777] font-[400] helvetica-light"
          />
        </div>

        {/* Verificação de segurança */}
        <div className="flex items-center gap-[32px]">
          <span className="w-[281px] text-[24px] leading-[36px] font-[400] helvetica-medium">
            Verificação de segurança
          </span>

          <div className="flex items-center gap-[16px] bg-[#DFDCD5] px-[24px] rounded-[8px] h-[42px]">
            <span className="w-[34px] h-[24px] text-[20px] font-[400] leading-[1] text-[#7D26C9] helvetica-medium">427</span>
            <span className="w-[14px] h-[14px] text-[#2D2D2D] text-[20px] leading-[1]">+</span>
            <span className="w-[34px] h-[24px] text-[20px] font-[400] leading-[1] text-[#7D26C9] helvetica-medium">628</span>
          </div>

          <span className="w-[14px] h-[8px] text-[#2D2D2D] text-[20px] leading-[1]">=</span>

          <input
            type="text"
            placeholder="Resultado*"
            className="w-[392.73px] h-[42px] px-[10px] py-[6px] rounded-[8px] bg-white text-[20px] leading-[30px] text-[#777777] font-[400] helvetica-light"
          />
        </div>

        {/* Botão */}
        <button className="bg-[#DFBBFE] opacity-50 text-[#2D2D2D] text-[16px] leading-[24px] font-semibold px-[40px] py-[8px] rounded-[4px] w-fit mx-auto mt-[16px]">
          Lorem ipsum
        </button>
      </div>
    </section>
  );
};

export default Form;
