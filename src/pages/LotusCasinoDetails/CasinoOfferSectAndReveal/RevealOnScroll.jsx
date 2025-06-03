import { useEffect } from "react";

const useRevealOnScroll = (selector) => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(selector);
    const observerOptions = { threshold: 0.1 };
    const revealOnScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new window.IntersectionObserver(revealOnScroll, observerOptions);
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
};

export default useRevealOnScroll;