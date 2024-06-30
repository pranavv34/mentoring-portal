import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { logo } from "../assets/home";
import Container from "./Container";

function MobileNavLinks({ handleNavLinkClick }) {
  return (
    <div className="bg-[#971B1E] py-2 text-white mt-4">
      <ScrollLink
        to="/"
        spy={true}
        smooth={true}
        offset={-70}
        duration={900
}
        className="block py-2 px-4 hover:bg-[#971B1E] hover:text-white"
      >
        Home
      </ScrollLink>
      {/* ... (repeat for other ScrollLink components) */}
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [notifications, setNotifications] = useState([
    "Exciting News: Launching New Mentorship Programs Tailored for Your Success!",
    "Portal Upgrade Alert: Enhanced Features and Resources to Boost Your Learning Journey.",
    "Update: Streamlined Scheduling for Effortless Planning of Mentorship Sessions.",
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Notifications */}
      <div className="bg-[#971B1E] text-white py-2 text-center overflow-hidden">
        <div className="flex items-center justify-start">
          <div className="flex items-center pr-4">
            <span className="text-sm mx-5 font-bold">ANNOUNCEMENTS</span>
          </div>
          <marquee>
            {notifications.map((notification, index) => (
              <span key={index}>{notification} | </span>
            ))}
          </marquee>
        </div>
      </div>

      {/* Navbar */}
      <nav className="py-5 z-42 relative">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to='/'>
              <img
                className="h-[85px] w-[650px]"
                src={logo}
                alt="Workflow"
              />
              </Link>
              {isMobileView ? (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden text-900

 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              ) : (
                <div className="hidden md:block">
                  {/* Additional content if needed */}
                </div>
              )}
            </div>

            <div className="flex gap-4 items-center">
  <Link to="/login">
    <button
      // onClick={() => {
      //   const loginSection = document.getElementById('login-section');
      //   loginSection.scrollIntoView({ behavior: 'smooth' });
      // }}
      className="hidden md:block text-[#264C20] font-bold hover:bg-[#971B1E] hover:text-white px-4 py-1 rounded-md cursor-pointer"
    >
      Login
    </button>
  </Link>
  <Link to="/register">
    <button
      // onClick={() => {
      //   const signupSection = document.getElementById('signup-section');
      //   signupSection.scrollIntoView({ behavior: 'smooth' });
      // }}
      className="hidden md:block text-[#264C20] font-bold hover:bg-[#971B1E] hover:text-white px-4 py-1 rounded-md cursor-pointer"
    >
      Signup
    </button>
  </Link>
</div>
          </div>

          {isMobileView && isOpen && (
            <MobileNavLinks handleNavLinkClick={handleNavLinkClick} />
          )}
        </Container>
      </nav>

      {/* Red color bar with centered columns separated by a white line */}
      {isMobileView ? null : (
        <div className="bg-[#971B1E] h-10 flex items-center text-white">
          <ScrollLink
            to="home-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900

}
            className="flex-1 text-center"
          >
            Home
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="mentoringsection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900

}
            className="flex-1 text-center"
          >
            Mentoring System
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="objectives-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900

}
            className="flex-1 text-center"
          >
            Objectives
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="career-guidance-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900

}
            className="flex-1 text-center"
          >
            Career Guidance
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="skill-training-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900

}
            className="flex-1 text-center"
          >
            Skill Training
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="internship-training-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900

}
            className="flex-1 text-center"
          >
            Internship & Training
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="co-curriculars-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900

}
            className="flex-1 text-center"
          >
            Co-curriculars
          </ScrollLink>
          <div className="w-px h-full bg-white"></div> {/* White line */}
          <ScrollLink
            to="download-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900

}
            className="flex-1 text-center"
          >
            Download Book
          </ScrollLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
