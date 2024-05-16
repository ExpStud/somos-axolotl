import { FC, HTMLAttributes, useEffect, useState } from "react";
import Image from "next/image";
import { useWindowSize } from "src/hooks";
import { useTranslation } from "next-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { midExitAnimation } from "src/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Donate: FC<Props> = (props: Props) => {
  const { className } = props;

  const { t } = useTranslation();

  const [copied, setCopied] = useState<boolean>(false);
  const [winWidth] = useWindowSize();
  const address = "dZABythjt2x9myxjXeNFBWjoX59vzeZ34pYBBqFrPCe";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch (err) {
      alert("Failed to copy text");
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (copied) {
      timeoutId = setTimeout(() => setCopied(false), 5000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [copied]);

  return (
    <div className={`col-centered relative w-screen ${className}`}>
      <div
        className="flex flex-col-reverse xl:flex-row items-center justify-evenly rounded-[32px] bg-somos-blue p-4 md:p-0  
        max-w-[345px] sm:max-w-[500px] xl:max-w-[1245px]"
      >
        <div className="flex flex-col justify-center gap-4 md:gap-6 p-8 md:p-12 lg:min-w-[395px]">
          <div className="row-centered text-white border-[0.85px] border-white w-[135px] h-[24px] md:h-[32px] text-sm md:rounded-[21px]">
            {t("DONATE_HEADER")}
          </div>
          <h2 className="text-white max-w-[377px]">{t("DONATE_TITLE")}</h2>
          <p className="text-white">{t("DONATE_DESC")}</p>
          <button
            className="teal-hover-dark col-centered mt-4 text-sm md:text-base rounded-xl w-full max-w-[313px] h-[40px] md:h-[48px] transition-200  text-white font-poppins-semibold"
            onClick={handleCopy}
            disabled={copied}
            id="donate"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  className="flex gap-2 items-center whitespace-nowrap"
                  {...midExitAnimation}
                >
                  ✅ {t("DONATE_COPIED")}
                </motion.div>
              ) : (
                <motion.div
                  className="flex gap-2 items-center"
                  {...midExitAnimation}
                >
                  💰 {t("DONATE_CTA")}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/landing/boats-1.jpg`}
          alt="Donate"
          width={winWidth < 640 ? 307 : 721}
          height={winWidth < 640 ? 292 : 504}
          className="rounded-2xl lg:rounded-[32px] aspect-[1.05/1] sm:aspect-[2.8/2] object-cover"
        />
      </div>
    </div>
  );
};

export default Donate;
