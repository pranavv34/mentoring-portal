import React, { useState } from "react";
import { news_2, news_3, news_4, news_5 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    text: "Mentors conduct orientation meetings, track mentee data, and address academic and personal needs, referring concerns to department heads. They ensure holistic well-being, offering guidance on academics, career choices, and maintaining ongoing contact, while submitting regular reports to the Head of Department and Director of Student Affairs and Placement.",
    topic: "Roles & Responsibility of Mentor",
    image: news_2,
  },
  {
    id: 2,
    text: "Students should provide necessary data and documents, consistently fill in required information, and express their goals and needs to their mentor. They are encouraged to conduct Peer Mentoring, maintain a positive attitude, accept feedback gracefully, attend mentor meetings punctually, and actively communicate their progress for a successful mentor-mentee relationship.",
    topic: "Roles & Responsibility of Mentees",
    image: news_3,
  },
  {
    id: 3,
    text: "Coordinate monthly department mentor meetings for effective system oversight, providing crucial advice. Ensure prompt initiation of administrative actions and maintain timely communication with the Director of Student Affairs and Placement and the Principal to enhance the mentoring system's overall success. This collaborative approach fosters a dynamic mentoring environment, promoting continuous improvement and student support.",
    topic: "Roles & Responsibility of HoD's",
    image: news_4,
  },
  {
    id: 4,
    text: "Mentor assessment is a dynamic, student-centric process focusing on criteria such as punctuality, leadership, engagement, personal development, and interpersonal skills. The equal grading of each criterion on a scale of 1 to 10 allows for a comprehensive evaluation, with scores determining performance grades ranging from Excellent to Satisfactory.",
    topic: "Parameters for Mentee Assessment",
    image: news_5,
  },
];

export default function News() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleReadMoreClick = (id) => {
    setExpandedCard((prevId) => (prevId === id ? null : id));
  };

  const containerStyle = (id) => (expandedCard === id ? "h-auto" : "h-[400px]");

  const readMoreText = (id) => (expandedCard === id ? "Read Less" : "Read More");

  return (
    <section className="my-20">
      <Container className="h-auto">
        <div id="mentoringsection">
          <SectionTitle title="student mentoring system" classes="text-center" />
          <p className="text-lg mb-8 mt-7 mb-10 text-center m-20">
            Each faculty mentors a group of 20-25 students, with first-year students guided by faculty from basic sciences, Mathematics, and Humanities. From the second to fourth year, students have mentors from their parent department, maintaining a consistent mentoring relationship until graduation.
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
