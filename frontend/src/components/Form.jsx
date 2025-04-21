import { useEffect, useState } from 'react';
import { sendContactForm, getFormConfig } from '../services/form';
import CallCenter from '../assets/form/CallCenter.png';

const soma1 = 427;
const soma2 = 628;

const Form = () => {
  const [campos, setCampos] = useState([]);
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    getFormConfig().then((campos) => {
      setCampos(campos);
      const camposIniciais = {};
      campos.forEach(campo => {
        camposIniciais[campo] = '';
      });
      camposIniciais.resultado = ''; // campo fixo de verificação
      setFormData(camposIniciais);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (parseInt(formData.resultado) !== soma1 + soma2) {
      setStatus({ type: 'error', message: 'Verificação incorreta.' });
      return;
    }

    try {
      const { resultado, ...dadosParaEnviar } = formData;
      await sendContactForm({ ...dadosParaEnviar, verificacao: parseInt(formData.resultado) });

      setStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      const reset = {};
      campos.forEach(campo => (reset[campo] = ''));
      reset.resultado = '';
      setFormData(reset);
    } catch (err) {
      setStatus({ type: 'error', message: 'Erro ao enviar. Tente novamente.' });
    }
  };

  return (
    <section className="w-full flex justify-center bg-[#2D2D2D] px-[24px] md:px-[80px] py-[64px]">
      <div className="w-full max-w-[1366px] flex flex-col md:flex-row gap-[40px] items-center justify-center">
        {/* Imagem */}
        <div className="w-[312px] h-[300px] flex items-center justify-center">
          <img src={CallCenter} alt="Call Center" className="w-full h-auto object-contain" />
        </div>

        {/* Formulário */}
        <div className="w-full md:w-[851.45px] bg-[#EAE8E4] rounded-[24px] p-[24px] flex flex-col gap-[32px] text-[#2D2D2D]">
          {/* Título */}
          <div className="flex flex-col gap-[8px] w-full max-w-[312px] md:max-w-none">
            <h2 className="text-[24px] md:text-[40px] tracking-[0.02em] font-[400] helvetica-medium leading-[24px] md:leading-[1]">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-[16px] md:text-[20px] helvetica-light leading-[24px] md:leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque
            </p>
            <p className="text-[16px] helvetica-light leading-[1]">
              *Lorem ipsum dolor sit amet consectetur
            </p>
          </div>

          {/* Inputs dinâmicos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
            {campos.map((campo) => (
              <input
                key={campo}
                name={campo}
                type="text"
                value={formData[campo]}
                onChange={handleChange}
                placeholder={`${campo.charAt(0).toUpperCase() + campo.slice(1)}*`}
                className="w-full h-[42px] px-[10px] py-[6px] rounded-[8px] bg-white text-[20px] text-[#777777] font-[400] helvetica-light"
              />
            ))}
          </div>

          {/* Verificação */}
          <div className="w-full flex flex-col md:flex-row md:items-center gap-[16px] md:gap-[16px]">
            <span className="text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] font-[400] helvetica-medium whitespace-nowrap">
              Verificação de segurança
            </span>

            <div className="flex items-center gap-[16px]">
              <div className="flex items-center justify-center gap-[8px] w-[123px] md:w-[224px] h-[42px] bg-[#DFDCD5] px-[8px] rounded-[8px]">
                <span className="text-[20px] text-[#7D26C9] helvetica-medium">{soma1}</span>
                <span className="text-[20px] text-[#2D2D2D]">+</span>
                <span className="text-[20px] text-[#7D26C9] helvetica-medium">{soma2}</span>
              </div>
              <span className="text-[20px] text-[#2D2D2D]">=</span>
              <input
                name="resultado"
                value={formData.resultado || ''}
                onChange={handleChange}
                type="text"
                placeholder="Resultado*"
                className="w-[95px] md:w-[234.45px] h-[42px] px-[10px] py-[6px] rounded-[8px] bg-white text-[16px] leading-[24px] text-[#777777] font-[400] helvetica-light"
              />
            </div>
          </div>

          {/* Botão */}
          <button
            onClick={handleSubmit}
            className="bg-[#DFBBFE] opacity-50 text-[#2D2D2D] text-[16px] font-semibold px-[40px] py-[8px] rounded-[4px] w-fit md:w-[144px] mx-auto mt-[16px]"
          >
            Enviar
          </button>

          {/* Feedback */}
          {status && (
            <p className={`text-center ${status.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>
              {status.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
