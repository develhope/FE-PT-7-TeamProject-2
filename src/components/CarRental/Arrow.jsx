import { useEffect, useState } from "react";
import "./Arrow.css";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`arrow-scroll-to-top-button ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      ⬆
    </button>
  );
}

