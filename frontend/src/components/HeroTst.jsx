import HeroImage from '../assets/Hero-LP.png';
import ScrollImage from '../assets/Scroll.png';

export function Hero() {
  return (
    <section className="w-full bg-[#1A1A1A] text-white py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Esquerda - Textos e Scroll */}
        <div className="w-full md:w-1/2 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-neutral-100">
            Lorem ipsum dolor sit amet <br /> consectetur
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mt-6 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra
          </p>

          {/* Scroll */}
          <div className="absolute -bottom-24 left-4">
            <img
              src={ScrollImage}
              alt="Scroll icon"
              className="w-20 md:w-24"
            />
          </div>
        </div>

        {/* Direita - Imagem */}
        <div className="w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="Monks Illustration"
            className="w-full max-w-md md:max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}


export default Hero;