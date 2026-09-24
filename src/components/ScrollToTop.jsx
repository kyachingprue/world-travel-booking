import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";

// Hidden while the banner/hero is in view; appears after scrolling below it.
export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show/hide the scroll-to-top button
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.6);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          aria-label="Back to top"
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed right-5 bottom-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-gold text-navy shadow-xl sm:right-8 sm:bottom-8"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

