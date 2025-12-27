import { useState, useEffect, useRef } from "react";

export const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px" } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // 🔑 stop observing after reveal
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
