import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./BackToTop.css";

export default function BackToTop() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      setScrolledDown(scrollY > 600);
      // Hide once we're close to the very bottom of the page, so the
      // button never sits on top of the Submit button or the footer.
      setNearBottom(scrollY + viewportHeight > pageHeight - 280);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!scrolledDown || nearBottom) return null;

  return (
    <button
      className="back-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FiArrowUp size={28} />
    </button>
  );
}