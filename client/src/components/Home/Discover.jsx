import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { discover_1, discover_2, discover_3, discover_4,discover_5,discover_6 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    id: 1,
    image: discover_1,
    title: "Community Bonding",
    line1: "Foster unity and support by creating opportunities for student bonding within college groups.",
  },
  {
    id: 2,
    image: discover_2,
    title: "Enhanced Communication",
    line1: "Improve teacher-student communication beyond the classroom for a more open learning environment.",
  },
  {
    id: 3,
    image: discover_3,
    title: "Data Management",
    line1: "Maintain a database to track student performance, attendance, and dropouts for timely intervention.",
  },
  {
    id: 4,
    image: discover_4,
    title: "Holistic Growth Monitoring",
    line1: "Monitor both personal and professional growth, ensuring psychological well-being and academic progress.",
  },
  {
    id: 5,
    image: discover_5,
    title: "Attendance Resolution:",
    line1: "Proactively address attendance issues to ensure students are present and engaged.",
  },
  {
    id: 6,
    image: discover_6,
    title: "Feedback System",
    line1: "Provide sustained motivation and consistent feedback to students, parents, and institute authorities.",
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
    <section id='objectives-section' className="bg-[#F7F7F7] m-16 py-16 rounded-xl">
      <Container>
        <div className="text-center ">
          <SectionTitle title="objectives of mentoring" />
          <p className="text-lg mb-8 mt-7 mb-10 m-20" >
          Mentoring aims to foster personal and professional growth by providing guidance, support, and valuable insights, creating a supportive environment for mentees to achieve their goals. The primary objectives include enhancing skills, building confidence, and facilitating the mentee's overall success.
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
