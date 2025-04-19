const cards = [
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra."
  },
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra."
  },
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra."
  }
];

const SectionCards = () => {
  return (
    <section className="w-full max-w-[1366px] px-[80px] pt-[32px] pb-[64px]">
      <div className="flex gap-[40px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[375.33px] h-[276px] bg-white rounded-[16px] border-2 border-[#DFBBFE] p-[24px] shadow-[0px_2px_24px_0px_rgba(0,0,0,0.1)] flex flex-col gap-[24px]"
          >
            <div className="flex flex-col gap-[8px]">
              <h3 className="w-[327.33px] h-[36px] text-[24px] font-[400] leading-[36px] text-[#2D2D2D] helvetica-medium">
                {card.title}
              </h3>
              <p className="w-[327.33px] h-[126px] text-[20px] leading-[30px] text-[#2D2D2D] helvetica-light">
                {card.text}
              </p>
            </div>
            <button className="bg-[#DFBBFE] text-[#2D2D2D] text-[16px] leading-[24px] font-semibold rounded-[4px] px-[40px] py-[8px] mx-auto">
              Lorem ipsum
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
