import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import random from "../../assets/home/random.png";

const NewsCard = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={random} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">CBIT</h1>
        <p className="text-[#BFBFC8]">@cbithyd</p>
      </div>
    </div>
  </div>
);

export default function Stories() {
  return (
    <section className="my-14 ">
      <Container className="px-4">
        <div className="pt-14 pb-4  flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <article className="lg:w-2/5 pb-4 flex flex-col items-start">
            <SectionTitle title="success stories" />
            <p className="text-[#5B6469]">Let's see what people say about us</p>
          </article>
          <div className="flex gap-4 sm:flex-nowrap flex-wrap lg:w-3/5">
            <div className="rounded-md w-full lg:w-1/2 flex flex-col gap-3 items-end">
              <NewsCard text="Aditi, a computer science student, soared to success with her mentor Rohit's guidance, mastering coding concepts and becoming an influential contributor to open-source projects." />
              <NewsCard text="Raj, a mechanical engineering student, secured his dream job in the automotive industry with mentor Priya's support, including resume guidance, mock interviews, and valuable industry insights." />
              <NewsCard text="Neha, an electrical engineering student, discovered her leadership potential through mentor Anand, leading campus robotics competitions and leaving an indelible mark on her college community." />
            </div>
            <div className="rounded-md w-full lg:w-1/2 flex flex-col gap-3 items-end">
              <NewsCard text="Karthik, a final-year electronics engineering student, transformed his passion for innovation into reality with mentorship, leading to the development of a cutting-edge project showcased at a national tech expo." />
              <NewsCard text="Pooja, a materials science student, broadened her horizons by connecting with mentors from diverse engineering disciplines through the portal, leading to a research collaboration that resulted in a published paper." />
              <NewsCard text="Aryan, a computer engineering graduate, turned his entrepreneurial dreams into a reality with mentorship, launching a tech startup that gained recognition for its innovative solutions in the education sector." />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
