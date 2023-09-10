import React, { useEffect } from "react";

export default function NavBar() {
  // Function to handle link hover
  const handleLinkHover = (e) => {
    const links = document.querySelectorAll(".nav-bar a");

    links.forEach((link) => {
      if (link !== e.target) {
        link.style.filter = "blur(2px)";
      }
    });
  };

  // Function to handle mouse leave (clear blur)
  const handleMouseLeave = () => {
    const links = document.querySelectorAll(".nav-bar a");

    links.forEach((link) => {
      link.style.filter = "blur(0)";
    });
  };

  // Add event listeners when the component mounts
  useEffect(() => {
    const links = document.querySelectorAll(".nav-bar a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="nav-bar">
      <nav>
        <a href="#">Home</a>
        <a href="#">Store</a>
        <a href="#">Contact</a>
        <a href="#">Login</a>
      </nav>
    </div>
  );
}