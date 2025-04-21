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
    <div className="w-full max-w-[1366px] mx-auto px-[24px] md:px-[80px] py-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-[591px_auto] gap-x-[24px] gap-y-[34px] items-start">
        {/* Coluna da esquerda */}
        <div className="flex flex-col gap-[34px] w-full md:w-[591px]">
          {/* Texto */}
          <div className="w-[312px] md:w-auto">
            <h4 className="font-[400] text-[24px] md:text-[40px] leading-[24px] md:leading-[48px] tracking-[0.02em] text-[#2D2D2D] helvetica-medium mb-[10px]">
              {left.title.rendered}
            </h4>
            <p
              dangerouslySetInnerHTML={{ __html: left.content.rendered }}
              className="font-[400] text-[16px] md:text-[24px] leading-[16px] md:leading-[24px] tracking-[0.03em] text-[#2D2D2D] helvetica-light"
            ></p>
          </div>

          {/* Imagem principal */}
          <div className="h-[300px] md:h-[525px] w-[312px] md:w-[591px] rounded-[24px] overflow-hidden">
            <img
              src={left._embedded['wp:featuredmedia'][0].source_url}
              alt={left.title.rendered}
              className="w-full h-full object-cover shadow-[0px_4px_24px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        {/* Coluna da direita */}
        <div className="flex flex-col gap-[24px] w-full md:h-[717px] md:w-[591px]">
          {right.map((item) => (
            <div
              key={item.id}
              className="h-[200px] md:h-[346.5px] w-[312px] md:w-full rounded-[24px] overflow-hidden"
            >
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
  );
};

export default SimpleGallery;