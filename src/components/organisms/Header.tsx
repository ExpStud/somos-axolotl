import { FC, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { HeaderContent } from "@components";
import { useWindowSize } from "src/hooks";
interface Props {
  showHeader?: boolean;
  type?: string;
  background?: string;
  headerRef: React.RefObject<HTMLDivElement>;
}

const Header: FC<Props> = (props: Props) => {
  const { type = "absolute", showHeader = true, background, headerRef } = props;

  const [animateHeader, setAnimateHeader] = useState<boolean>(true);
  const [winWidth] = useWindowSize();

  //scroll variables
  const scrollRef = useRef<number>();
  const { scrollY, scrollYProgress } = useScroll();
  const height = 104;
  const headerVariants: Variants = {
    show: {
      y: 0,
      transition: {
        delay: 0.25,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: -height,
      transition: {
        delay: 0.25,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // if (latest > 0.95) setAnimateHeader(true);
    if (latest < 0.01) setAnimateHeader(true);
  });

  //hide header on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    //first instance
    if (scrollRef.current === undefined) {
      setAnimateHeader(false);
      scrollRef.current = latest;
      return;
    }

    //scroll down
    if (scrollRef.current < latest) {
      if (scrollRef.current + 30 < latest) {
        setAnimateHeader(false);
        scrollRef.current = latest;
      }
      return;
    }

    //scroll up
    if (scrollRef.current > latest) {
      if (scrollRef.current > latest + 30) {
        setAnimateHeader(true);
        scrollRef.current = latest;
      }
      return;
    }
  });

  useEffect(() => {
    setAnimateHeader(showHeader);
  }, [showHeader]);

  const [numRepeats, setNumRepeats] = useState(0);
  const textWidth = 150; // Approximate width of the text in pixels
  const gap = 50; // Gap between each instance of the text

  useEffect(() => {
    // Calculate the number of times the text should be repeated
    const width = winWidth;
    setNumRepeats(Math.ceil(width / (textWidth + gap)));
  }, [winWidth]);

  const marqueeText = "USING ART TO SAVE XOCHIMILCO";

  return (
    <header
      className={`top-0 z-50 transition-all duration-500 w-full h-0 ${
        type === "scroll" ? "fixed" : type
      } 
      `}
    >
      {type !== "scroll" ? (
        <HeaderContent background={background} headerRef={headerRef} />
      ) : (
        <motion.div
          variants={headerVariants}
          initial={showHeader ? "show" : "hidden"}
          animate={animateHeader ? "show" : "hidden"}
        >
          <HeaderContent background={background} headerRef={headerRef} />
        </motion.div>
      )}
      <div className="h-[37px] w-full bg-somos-blue relative">
        <motion.div
          className="h-full text-somos-orange text-xl overflow-hidden flex items-center font-karantina absolute"
          initial={{ x: "0%" }} // Start from the right edge of the text
          animate={{ x: "-100%" }} // Move to the left edge of the text
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array(numRepeats)
            .fill(marqueeText)
            .map((text, i) => (
              <span key={i} className="mx-6 md:mr-0 md:ml-14 whitespace-nowrap">
                {text}
              </span>
            ))}
        </motion.div>
        <motion.div
          className="h-full text-somos-orange text-xl overflow-hidden flex items-center font-karantina absolute"
          initial={{ x: "100%" }} // Start from the right edge of the text
          animate={{ x: "0%" }} // Move to the left edge of the text
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array(numRepeats)
            .fill(marqueeText)
            .map((text, i) => (
              <span key={i} className="mx-6 md:mr-0 md:ml-14 whitespace-nowrap">
                {text}
              </span>
            ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
