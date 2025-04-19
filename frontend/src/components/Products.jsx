import ImageCard1 from "../assets/products/ImageCard1.png";
import ImageCard2 from "../assets/products/ImageCard2.png";
import ImageCard3 from "../assets/products/ImageCard3.png";
import ImageCard4 from "../assets/products/ImageCard4.png";

const Products = () => {
  return(
    <div className="w-[1366px] h-[533px] pt-[64px] pr-[80px] pb-[32px] pl-[80px] gap-[40px]">
      {/* Title Box */}
      <div className="w-[1206px] h-[83px]">
        <div className="h-[47px] font-[400] text-[40px] text-[#2D2D2D] helvetica-medium leading-[54px] tracking-[2%]">
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
        </div>
        <div className="h-[28px] font-[400] text-[24px] text-[#2D2D2D] helvetica-light leading-[48px] tracking-[2%]">
          <p>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo </p>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-4 gap-[24px] w-[1206px] h-[314px] mt-[36px]">

        {/* Card 1 */}
        <div className="w-[283.5px] h-[314px] bg-[#FCFCFD] rounded-[8px] shadow-[0px_4px_24px_rgba(0,0,0,0.1)] pt-[6px] pr-[6px] pb-[16px] pl-[8px] gap-[24px]">
          <div className="W-[271.5px] h-[180px] rounded-[8px]">
            <img 
              src={ImageCard1} alt="Paisagem de cidade" 
              className="w-full h-full object-contain"/>
          </div>
            <div className="w-[271.5px] h-[140px] pl-[8px] pr-[8px] ">
              <div className=" w-[255.5px] h-[36px] gap-[10px]  font-[400] text-[24px] text-[#0C111D] helvetica-medium leading-[60px] tracking-[0.0em] mb-[20px]">
                <h4>Lorem ipsum dolor</h4>
              </div>
              <div className="w-[255.5px] h-[60px] font-[400] text-[20px] text-[#0C111D] helvetica-light leading-[30px] tracking-[0.0em]">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[283.5px] h-[314px] bg-[#FCFCFD] rounded-[8px] shadow-[0px_4px_24px_rgba(0,0,0,0.1)] pt-[6px] pr-[6px] pb-[16px] pl-[8px] gap-[24px]">
          <div className="W-[271.5px] h-[180px] rounded-[8px]">
            <img 
              src={ImageCard2} alt="Paisagem de cidade" 
              className="w-full h-full object-contain"/>
          </div>
          <div className="w-[271.5px] h-[140px] pl-[8px] pr-[8px] ">
            <div className=" w-[255.5px] h-[36px] gap-[10px]  font-[400] text-[24px] text-[#0C111D] helvetica-medium leading-[60px] tracking-[0.0em] mb-[20px]">
              <h4>Lorem ipsum dolor</h4>
            </div>
            <div className="w-[255.5px] h-[60px] font-[400] text-[20px] text-[#0C111D] helvetica-light leading-[30px] tracking-[0.0em]">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[283.5px] h-[314px] bg-[#FCFCFD] rounded-[8px] shadow-[0px_4px_24px_rgba(0,0,0,0.1)] pt-[6px] pr-[6px] pb-[16px] pl-[8px] gap-[24px]">
          <div className="W-[271.5px] h-[180px] rounded-[8px]">
            <img 
              src={ImageCard3} alt="Paisagem de cidade" 
              className="w-full h-full object-contain"/>
          </div>
          <div className="w-[271.5px] h-[140px] pl-[8px] pr-[8px] ">
            <div className=" w-[255.5px] h-[36px] gap-[10px]  font-[400] text-[24px] text-[#0C111D] helvetica-medium leading-[60px] tracking-[0.0em] mb-[20px]">
              <h4>Lorem ipsum dolor</h4>
            </div>
            <div className="w-[255.5px] h-[60px] font-[400] text-[20px] text-[#0C111D] helvetica-light leading-[30px] tracking-[0.0em]">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[283.5px] h-[314px] bg-[#FCFCFD] rounded-[8px] shadow-[0px_4px_24px_rgba(0,0,0,0.1)] pt-[6px] pr-[6px] pb-[16px] pl-[8px] gap-[24px]">
          <div className="W-[271.5px] h-[180px] rounded-[8px]">
            <img 
              src={ImageCard4} alt="Paisagem de cidade" 
              className="w-full h-full object-contain"/>
          </div>
          <div className="w-[271.5px] h-[140px] pl-[8px] pr-[8px] ">
            <div className=" w-[255.5px] h-[36px] gap-[10px]  font-[400] text-[24px] text-[#0C111D] helvetica-medium leading-[60px] tracking-[0.0em] mb-[20px]">
              <h4>Lorem ipsum dolor</h4>
            </div>
            <div className="w-[255.5px] h-[60px] font-[400] text-[20px] text-[#0C111D] helvetica-light leading-[30px] tracking-[0.0em]">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        

      </div>

    </div>
  )
}

export default Products;