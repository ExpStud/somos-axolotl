import { FC, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { fastExitAnimation, midExitAnimation } from "src/constants";
import { useTranslation } from "next-i18next";

interface Props extends React.HTMLProps<HTMLDivElement> {
  content: string;
  openHeight?: string;
  closedHeight?: string;
}

const TextDropdown: FC<Props> = (props: Props) => {
  const {
    content,
    className,
    openHeight = "30em",
    closedHeight = "12em",
  } = props;

  const [show, setShow] = useState<boolean>(false);
  const { t } = useTranslation();

  const textVariants: Variants = {
    open: {
      height: openHeight,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
    closed: {
      height: closedHeight,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    }, // Adjust this value to match the height of 9 lines
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="relative">
        <motion.div
          className="text-base overflow-hidden z-0"
          layout
          variants={textVariants}
          initial="closed"
          animate={show ? "open" : "closed"}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div
          className={`opaque-gradient w-full h-[110px] z-[1] absolute bottom-0 transition-opacity duration-700  ${
            show ? "opacity-0 " : "opacity-100"
          }`}
        />
      </div>
      <div
        className="transition-200 hover:text-somos-brown hover:border-somos-brown active:opacity-80 flex w-full sm:w-[150px] h-[40px] row-centered gap-2 border border-somos-brown-dark text-somos-brown-dark rounded-[34px] cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <AnimatePresence mode="wait">
          {show ? (
            <motion.p key="less" {...midExitAnimation} className="!text-lg">
              {t("READ_LESS")}
            </motion.p>
          ) : (
            <motion.p key="more" {...midExitAnimation} className="!text-lg">
              {t("READ_MORE")}
            </motion.p>
          )}
        </AnimatePresence>

        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-700  ${
            show ? "transform -rotate-180" : "transform -rotate-360"
          }`}
        >
          <path
            d="M3.81637 13.8536C4.01163 14.0488 4.32821 14.0488 4.52348 13.8536L7.70546 10.6716C7.90072 10.4763 7.90072 10.1597 7.70546 9.96446C7.51019 9.7692 7.19361 9.7692 6.99835 9.96447L4.16992 12.7929L1.3415 9.96447C1.14623 9.7692 0.829651 9.7692 0.634388 9.96447C0.439126 10.1597 0.439126 10.4763 0.634388 10.6716L3.81637 13.8536ZM3.66992 0.5L3.66992 13.5L4.66992 13.5L4.66992 0.5L3.66992 0.5Z"
            fill="#41240F"
          />
        </svg>
      </div>
    </div>
  );
};

export default TextDropdown;
