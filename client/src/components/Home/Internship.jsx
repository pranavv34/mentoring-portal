import React, { useState } from "react";
import { iscover_5,iscover_6,iscover_7,iscover_8 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    text: "Internships offer a firsthand understanding of job intricacies within one's field, providing practical insights into the professional landscape. Upon completion, individuals not only acquire job-specific knowledge but also gain valuable formal work experience, enhancing their readiness for future career endeavors.",
    topic:
      "Internships",
    image: iscover_5,
  },
  {
    id: 2,
    text: "Apprenticeships, provided by organizations like Defence Labs, BHEL, HAL, and BDL, enable students to acquire technical skills through hands-on training. The Government of India offers one-year apprenticeships for graduate engineers with a monthly stipend, facilitated through applications available at TASK, and interested individuals can contact the Training and Placement Section for additional details.",
    topic:
      "Apprenticeships",
    image: iscover_6,
  },
  {
    id: 3,
    text: "Consider enrolling in training programs for cutting-edge technologies like Artificial Intelligence, Machine Learning, Deep Learning, and Blockchain, as proficiency in these areas enhances opportunities for absorption in IT and ITES industries. Staying updated with state-of-the-art technologies is crucial for a competitive edge in the evolving job market.",
    topic:
      "Training Programs",
    image: iscover_7,
  },
  {
    id: 4,
    text: "Engaging in short-term projects provides students with practical insights into their field, contributing to enhanced proficiency and improved interview performance. The hands-on experience gained through projects facilitates a more confident and effective approach during interviews.",
    topic:
      "Short Term Projects",
    image: iscover_8,
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
    <section id="internship-training-section" className="my-20">
      <Container className="h-auto">
        <div>
          <SectionTitle title="internship & training programs" classes="text-center" />
          <p className="text-lg mb-8 mt-7 mb-10 text-center m-20">
          Internship and training programs are pivotal for bridging the gap between academic learning and real-world application, providing invaluable hands-on experience that hones practical skills and enhances employability, ultimately preparing individuals for successful and impactful careers. 
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
