import {
  Dispatch,
  SetStateAction,
  FC,
  useRef,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Gallery from "../molecules/Gallery";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { exitAnimation, midEnterAnimation } from "src/constants";
import { isMobile } from "react-device-detect";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
  handleViewChange: (value: boolean) => void;
}

const Home: FC<Props> = (props: Props) => {
  const { setAssets, handleViewChange } = props;
  const [showView, setShowView] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  //used to trigger header color change
  useEffect(() => {
    if (isInView) handleViewChange(true);
    else handleViewChange(false);
  }, [handleViewChange, isInView]);

  //show view timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowView(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowView(true);
  //     window.removeEventListener("scroll", handleScroll);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  // const isMobile = /* your condition for mobile devices */;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div
      id="home"
      className="inner-padding relative min-h-screen lg:h-screen w-screen bg-black overflow-hidden z-[1]"
      ref={ref}
    >
      {/* TODO: add bg video */}
      <div className="absolute inset-0 bg-black bg-opacity-75 -z-[5]"></div>

      {/* <Image
        src="/images/landing/intro-xs.jpg"
        alt="EXP"
        fill
        className="object-cover opacity-100 overflow-hidden -z-10"
        onLoad={() => handleAssetLoad(0, setAssets)}
      /> */}
      <motion.video
        ref={videoRef}
        src={`/videos/${
          isMobile ? "intro-video-xs.mp4" : "intro-video-sm.mp4"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover -z-[8]"
        {...midEnterAnimation}
      />

      <AnimatePresence mode="wait">
        {!showView ? (
          <motion.div key="logo" {...exitAnimation}>
            <Image
              src="/images/logos/lg.svg"
              height={162.04}
              width={230}
              alt="Somos Axolotl"
              priority
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140px] md:w-auto"
            />
          </motion.div>
        ) : (
          <motion.div
            className="relative flex flex-col gap-24 lg:gap-6 items-center justify-evenly 3xl:justify-center 3xl:gap-20 h-full pt-10 2xl:pt-0 min-h-[660px]"
            key="body"
            {...exitAnimation}
          >
            {/* content */}
            <div className="max-width flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-0 justify-center md:justify-between items-center md:items-end  pb-14 md:pb-6 lg:pb-12 md:w-full">
              <Image
                src="/images/logos/lg.svg"
                height={162.04}
                width={230}
                alt="Somos Axolotl"
                priority
                className="w-[110px] md:w-auto"
              />
              <div className="flex flex-col lg:flex-row gap-">
                <div className="flex flex-row md:flex-col-reverse items-end md:items-start md:gap-3 justify-between md:justify-start">
                  <h2 className="text-white text-[32px] md:text-[40px] w-[118px] md:w-[178px] leading-9">
                    Our Mission
                  </h2>
                  <Image
                    src="/images/design/squares-yellow.svg"
                    width={111}
                    height={18}
                    alt="Yellow Squares"
                  />
                </div>
                <p className="text-white xs:max-w-[293px]">
                  Somos Axolotl uses art and technology to help communities move
                  toward sustainable resource and environmental management -
                  first in Mexico, and then beyond.
                </p>
              </div>
            </div>
            <Gallery />
            <motion.svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:flex mb-4 animate-bounce"
            >
              <path
                d="M19.4531 38.4375L28.5253 47.3081C29.3451 48.1096 30.6549 48.1096 31.4747 47.3081L40.5469 38.4375M19.4531 21.5625L28.5253 12.6919C29.3451 11.8904 30.6549 11.8904 31.4747 12.6919L40.5469 21.5625"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M26.7188 29.7656C26.7188 31.7073 28.2927 33.2812 30.2344 33.2812C32.176 33.2812 33.75 31.7073 33.75 29.7656C33.75 27.824 32.176 26.25 30.2344 26.25C28.2927 26.25 26.7188 27.824 26.7188 29.7656Z"
                fill="white"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
