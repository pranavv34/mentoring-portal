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

function Navbar2() {
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

  const handleSession = ()=>{
    const user = localStorage.getItem('user');
    console.log(user)
    localStorage.removeItem('user')
  }

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
              <img
                className="h-[85px] w-[650px]"
                src={logo}
                alt="Workflow"
              />
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
              <ScrollLink
                spy={true}
                smooth={true}
                offset={-70}
                duration={900

}
                className="hidden md:block text-[#264C20] font-bold hover:bg-[#971B1E] hover:text-white px-4 py-1 rounded-md cursor-pointer"
              >
              <Link to="/dashboard">
                Dashboard
                </Link>
              </ScrollLink>
              <ScrollLink
                to="signup-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                className="hidden md:block text-[#264C20] font-bold text-bold hover:bg-[#971B1E] hover:text-white px-4 py-1 rounded-md cursor-pointer">
              <Link to="/login" onClick={handleSession}>
                Logout
              </Link>
              </ScrollLink>
            </div>
          </div>

          {isMobileView && isOpen && (
            <MobileNavLinks handleNavLinkClick={handleNavLinkClick} />
          )}
        </Container>
      </nav>

      {isMobileView ? null : (
  <div className="bg-[#971B1E] h-10 flex items-center text-white">
    <ScrollLink
      to="dashboard-section"  // Assuming you have a section with id="dashboard-section"
      spy={true}
      smooth={true}
      offset={-70}
      duration={900}
      className="flex-1 text-center"
    >
    </ScrollLink>
  </div>
)}
    </div>
  );
}

export default Navbar2;