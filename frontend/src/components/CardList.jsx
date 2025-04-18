import { useEffect, useState } from "react";
import api from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.get("/wp/v2/card").then((res) => {
      setCards(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="border p-4 rounded-lg shadow">
          <img src={card.featured_media_src_url || "https://via.placeholder.com/150"} alt={card.title.rendered} />
          <h2 className="text-xl font-bold" dangerouslySetInnerHTML={{ __html: card.title.rendered }} />
          <p dangerouslySetInnerHTML={{ __html: card.excerpt.rendered }} />
        </div>
      ))}
    </div>
  );
}
