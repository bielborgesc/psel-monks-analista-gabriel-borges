import PrediosNaFrenteRio from '../assets/simple-gallery/PrediosNaFrenteRio.png'
import VariosPredios from '../assets/simple-gallery/VariosPredios.png'
import PredioFuturista from '../assets/simple-gallery/PredioFuturista.png'
import { useEffect, useState } from 'react';
import { getGallery } from '../services/gallery';

const SimpleGallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery().then(data => setGallery(data));
  }, []);

  if (gallery.length < 3) return null;

  const [left, ...right] = gallery;

  return (
    <div className="w-full max-w-[1366px] mx-auto px-[80px] py-[64px]">
      <div className="grid grid-cols-1 lg:grid-cols-[591px_auto] gap-x-[24px] gap-y-[34px] items-start">
        
        {/* Coluna da esquerda */}
        <div className="flex flex-col gap-[34px] w-[591px]">
          {/* Texto */}
          <div>
            <h4 className="font-[400] text-[40px] leading-[48px] tracking-[0.02em] text-[#2D2D2D] helvetica-medium mb-[10px]">
            {left.title.rendered}
            </h4>
            <p dangerouslySetInnerHTML={{ __html: left.content.rendered }} 
              className="font-[400] text-[24px] leading-[24px] tracking-[0.03em] text-[#2D2D2D] helvetica-light">
            </p>
          </div>

          {/* Imagem principal */}
          <div className="h-[525px] w-[591px] rounded-[24px] overflow-hidden">
            <img
              src={left._embedded['wp:featuredmedia'][0].source_url}
              alt={left.title.rendered}
              className="w-full h-full object-cover shadow-[0px_4px_24px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        {/* Coluna da direita */}
        <div className="flex flex-col gap-[24px] h-[717px] w-[591px]">
          {/* Imagens 1 */}
          {right.map((item) => (
            <div className="h-[346.5px] w-full rounded-[24px] overflow-hidden">
              <img
                src={item._embedded['wp:featuredmedia'][0].source_url}
                alt={item.title.rendered}
                className="w-full h-full object-cover shadow-[0px_4px_24px_rgba(0,0,0,0.1)]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimpleGallery
