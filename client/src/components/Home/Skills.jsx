import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { a1,a2,a3,a4,a5,a6 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    image: a1,
    title: "Programming Skills",
    line1: "Proficiency in coding languages and problem-solving to develop effective software solutions.",
  },
  {
    id: 2,
    image: a2,
    title: "Communication Skills",
    line1: "Clear and concise articulation of ideas, both written and verbal, fostering effective collaboration.",
  },
  {
    id: 3,
    image: a3,
    title: "Leadership",
    line1: "Guiding and inspiring teams, showcasing initiative, and driving projects towards success.",
  },
  {
    id: 4,
    image: a4,
    title: "Adaptability",
    line1: "Swift adjustment to new environments and challenges, demonstrating flexibility in problem-solving.",
  },
  {
    id: 5,
    image: a5,
    title: "Business Awareness",
    line1: "Understanding the market and aligning efforts with organizational goals for strategic impact.",
  },
  {
    id: 6,
    image: a6,
    title: "Networking",
    line1: "Building professional relationships to create opportunities, enhance knowledge, and foster career growth.",
  },

];

const DiscoverCard = ({ card }) => {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
      <img src={card.image} alt="discover_image" className="w-70 h-auto rounded-lg object-cover m-2" />
      <div className="absolute bottom-4 left-0 right-0 text-center text-white p-4">
        <div className="capitalize text-xl font-bold">{card.title}</div>
        <p className="text-sm mt-1">{card.line1}</p>
      </div>
    </div>
  );
};


const CustomNextArrow = (props) => (
  <div
    {...props}
    style={{ ...props.style, color: 'black', fontSize: '24px', right: '-20px' }}
  >
    <div>&gt;</div>
  </div>
);

const CustomPrevArrow = (props) => (
  <div
    {...props}
    style={{ ...props.style, color: 'black', fontSize: '24px', left: '-20px' }}
  >
    <div>&lt;</div>
  </div>
);

export default function Discover() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900

,
    slidesToShow: 4,  // Change from 4 to 3
    slidesToScroll: 1,
    
  };

  return (
    <section id='skill-training-section' className="bg-[#F7F7F7] m-16 py-16 rounded-xl">
      <Container>
        <div className="text-center">
          <SectionTitle title="employability skills" />
          <p className="text-lg mb-8 mt-7 mb-10 m-20" >
          Employability skills are crucial for career success, enhancing one's ability to secure and thrive in diverse employment opportunities by combining technical proficiency with essential interpersonal, communication, and adaptability skills. 
          </p>
          <Slider {...settings}>
            {cards.map((card) => (
              <DiscoverCard card={card} key={card.id} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}
