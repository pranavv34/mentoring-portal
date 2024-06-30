import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { b1,b2,b3,b4,b5,b6 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    image: b1,
    title: "Thesis Statements",
    line1: "Crafting clear and concise thesis statements enhances the ability to articulate focused and compelling arguments in academic writing.",
  },
  {
    id: 2,
    image: b2,
    title: "Logical Reasoning",
    line1: "Developing logical reasoning skills enables effective analysis and critical thinking, essential for constructing well-reasoned arguments and problem-solving.",
  },
  {
    id: 3,
    image: b3,
    title: "Teamwork Exercises",
    line1: "Engaging in teamwork exercises cultivates collaborative skills, promoting effective communication and cooperation within a group setting.",
  },
  {
    id: 4,
    image: b4,
    title: "Reading Responses",
    line1: "Formulating thoughtful reading responses demonstrates the capacity to comprehend and critically engage with academic materials, showcasing analytical skills.",
  },
  {
    id: 5,
    image: b5,
    title: "Peer Assessment",
    line1: "Participating in peer assessment activities hones evaluative skills, encouraging constructive feedback and fostering a collaborative learning environment.",
  },
  {
    id: 6,
    image: b6,
    title: "Problem Solving",
    line1: "Engaging in problem-solving activities sharpens the ability to tackle challenges systematically, contributing to effective decision-making and innovative thinking.",
  },

];

const DiscoverCard = ({ card }) => {
  return (
    <div  className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
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
    <section id='co-curriculars-section' className="bg-[#F7F7F7] m-16 py-16 rounded-xl">
      <Container>
        <div className="text-center">
          <SectionTitle title="importance of co-curriculars" />
          <p className="text-lg mb-8 mt-7 mb-10 m-20" >
          Co-curricular activities play a pivotal role in holistic development, fostering skills such as teamwork, leadership, and time management, contributing to a well-rounded and versatile individual ready for diverse challenges in both academic and real-world settings.
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
