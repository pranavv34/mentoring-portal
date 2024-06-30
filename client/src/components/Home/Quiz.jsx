import { quiz_illustration } from "../../assets/home";
import Container from "../Container";

export default function DownloadSection() {
  const customPdfUrl = "./mentoring.pdf"; // Update with the actual path

  return (
    <section id="download-section" className="my-14">
      <Container>
        <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
          <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
            <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
              Student Mentoring Diary & Progression Record Book
            </h1>
            <a
              href={customPdfUrl}
              download="mentoring.pdf"
              className="capitalize bg-white hover:bg-black hover:text-white transition-colors px-14 py-3 rounded-sm font-bold text-black"
            >
              Download
            </a>
          </article>
          <div className="absolute lg:right-[5%] right-[0] lg:-top-[0%] -top-[0%] md:block hidden">
            <img src={quiz_illustration} alt="illustration" className="w-72" />
          </div>
        </div>
      </Container>
    </section>
  );
}
