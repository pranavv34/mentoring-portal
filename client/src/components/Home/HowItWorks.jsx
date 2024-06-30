import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { how_1, how_2, how_3, how_4 } from "../../assets/home";

const items = [
  {
    id: 1,
    icon: how_1,
    heading: "CGPA & SGPA",
    text: "Easily monitor both cumulative and semester-specific grades for the comprehensive academic overview.",
  },
  {
    id: 2,
    icon: how_2,
    heading: "ATTENDANCE",
    text: "Keep track of subject-wise attendance, student engagement & activity in academic commitments.",
  },
  {
    id: 3,
    icon: how_3,
    heading: "ACTIVITY POINTS",
    text: "Accrue points and receive certificates as acknowledgment of your accomplishments.",
  },
  {
    id: 4,
    icon: how_4,
    heading: "INTERNAL EVALUATION",
    text: "Internal evaluation, encompassing slip tests, mid-terms & attendance measure of student performance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="my-20">
      <Container>
        <SectionTitle title="WHY MENTORING portal?" classes="text-center"/>
        <div className="bg-[#971B1E]  px-8 py-14 rounded-md mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8 text-white">
            {items.map((item) => (
              <div
                className="text-center flex flex-col items-center justify-center"
                key={item.id}
              >
                <img src={item.icon} alt="icon" className="pb-4 w-24" />
                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
