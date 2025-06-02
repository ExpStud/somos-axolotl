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
import { useTranslation } from "next-i18next";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
  handleViewChange: (value: boolean) => void;
}

const Home: FC<Props> = (props: Props) => {
  const { setAssets, handleViewChange } = props;
  const [showView, setShowView] = useState(false);

  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref);

  //used to trigger header color change
  useEffect(() => {
    if (isInView) handleViewChange(true);
    else handleViewChange(false);
  }, [handleViewChange, isInView]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div
      id="home"
      className="inner-padding relative min-h-screen lg:h-screen w-screen bg-black overflow-hidden z-[1]  "
      ref={ref}
    >
      {/* video */}
      <div className="absolute inset-0 bg-black bg-opacity-75 -z-[5]"></div>
      <motion.video
        ref={videoRef}
        src={`${process.env.CLOUDFLARE_STORAGE}/videos/${
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
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/landing/intro.jpg`}
        fill
        className="absolute inset-0 w-full h-full object-cover -z-[9]"
        alt="Somos"
      />

      <AnimatePresence mode="wait">
        {!showView ? (
          <motion.div
            key="logo"
            {...exitAnimation}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140px] md:w-auto flex  flex-col items-center gap-2"
          >
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/square-new.svg`}
              width={191}
              height={290}
              alt="Somos Axolotl"
              priority
              className="w-[110px] md:w-[191px] mb-4 md:mb-0"
            />

            <button
              onClick={() => setShowView(true)}
              className="hover-opacity  text-somos-white border border-somos-white rounded-sm px-9 lg:px-12 py-1.5 lg:py-2 mt-10 lg:text-xl"
            >
              {" "}
              {t("ENTER")}
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="relative flex flex-col gap-16 lg:gap-6 items-center justify-start 3xl:justify-center 3xl:gap-20 h-full pt-0 2xl:pt-0 min-h-[660px] pb-4"
            key="body"
            {...exitAnimation}
          >
            {/* content */}
            <div className="max-width flex flex-col md:flex-row gap-20 md:gap-14 lg:gap-0 justify-between md:justify-between items-center md:items-end  pb-0 pt-10 md:pt-0 md:pb-6 lg:pb-16 md:w-full">
              <Image
                src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/square-new.svg`}
                height={162}
                width={245}
                alt="Somos Axolotl"
                priority
                className="w-[110px] md:w-auto"
              />

              <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
                <div className="flex flex-row md:flex-col-reverse items-end md:items-start md:gap-3 justify-between md:justify-start">
                  <h2 className="text-white text-[32px] md:text-[40px] w-[118px] md:w-[178px] leading-9 pb-2 lg:mr-4">
                    {t("OUR_MISSION_TITLE")}
                  </h2>
                  <Image
                    src={`${process.env.CLOUDFLARE_STORAGE}/images/design/squares-yellow-new.svg`}
                    width={111}
                    height={18}
                    alt="Yellow Squares"
                    className="self-start"
                  />
                </div>
                <p className="text-white xs:max-w-[293px]">
                  {t("OUR_MISSION")}
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
              className="hidden md:flex mt-8 animate-bounce"
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
