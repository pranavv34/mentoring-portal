import React, { useState } from "react";
import { iscover_1, iscover_2,iscover_3,iscover_4 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    text: "Aim for a consistently excellent academic record, as it provides a distinct advantage. Additionally, non-Computer Science/Information Technology students should prioritize mastering the 'C' language. Boost your job-seeking efforts by seeking referrals from employed friends and enhance your chances by sharing your resume with friends and relatives working in desired companies.",
    topic:
      "Placements",
    image: iscover_1,
  },
  {
    id: 2,
    text: "Utilize job sites to connect with potential employers and streamline the initial stages of the recruitment process. Registering on various job platforms is crucial, as these sites serve as valuable gateways to job opportunities and company introductions. Take advantage of their role in facilitating the initial steps of recruitment for enhanced job search effectiveness.",
    topic:
      "Job Sites",
    image: iscover_2,
  },
  {
    id: 3,
    text: "Explore abundant opportunities in Defense Services such as Air Force, Army, and Navy, available for students. Initiate strategic planning for these career paths as early as the second year to maximize preparation and increase chances of success in joining these prestigious services.",
    topic:
      "Jobs in Defence",
    image: iscover_3,
  },
  {
    id: 4,
    text: "Explore international opportunities for higher studies in countries like the USA, Canada, and Europe, highlighting the significance of strong GRE and TOEFL scores. In India, consider pursuing postgraduate programs through the GATE exam for technical competence or opt for management education through exams like CAT, focusing on effective communication skills for success in renowned institutions.",
    topic: "Higher Studies",
    image: iscover_4,
  },
];


// ... (imports and cards array remain unchanged)

export default function News() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleReadMoreClick = (id) => {
    setExpandedCard((prevId) => (prevId === id ? null : id));
  };

  const containerStyle = (id) => (expandedCard === id ? "h-auto" : "h-[400px]");

  const readMoreText = (id) => (expandedCard === id ? "Read Less" : "Read More");

  return (
    <section id="career-guidance-section" className="my-20">
      <Container className="h-auto">
        <div>
          <SectionTitle title="career guidance" classes="text-center" />
          <p className="text-lg mb-8 mt-7 mb-10 text-center m-20">
          It is imperative to have a clear idea of career options right from the beginning of your engineering study. Following information will be helpful in this regard.
          </p>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-4 mt-8">
            {cards.map((card) => (
              <div
                className={`h-auto w-[320px] mx-auto px-2 pt-2 pb-4 rounded-md border-2 border-gray-200 relative z-10 ${containerStyle(card.id)}`}
                key={card.id}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img src={card.image} alt="fund1" />
                </div>
                <article className="px-2">
                  <h2 className="font-bold text-[23px] hover:text-[#971B1E] transition-colors cursor-pointer my-4">
                    {card.topic}
                  </h2>
                  <p className="font-light text-[14px] text-justify">
                    {expandedCard === card.id ? card.text : `${card.text.slice(0, 100)}...`}
                  </p>
                  <button
                    className="block mx-auto text-[#971B1E] mt-6"
                    onClick={() => handleReadMoreClick(card.id)}
                  >
                    {readMoreText(card.id)}
                  </button>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
