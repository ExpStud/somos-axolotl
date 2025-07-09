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
    window.open(
      "https://spherepay.co/pay/paymentLink_ea7773f8e9ca45de8aa6072311fe31a6",
      "_blank"
    );
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
        className="flex flex-col-reverse xl:flex-row items-center justify-evenly rounded-[32px] bg-somos-blue p-4 xl:p-0  overflow-hidden   
        max-w-[345px] sm:max-w-[500px] xl:max-w-[1245px] sm:"
      >
        <div className="flex flex-col justify-center gap-4 md:gap-6 p-8 md:p-12 lg:min-w-[395px]">
          <div className="row-centered text-white border-[0.85px] border-white w-[135px] h-[24px] md:h-[32px] text-sm md:rounded-[21px]">
            {t("DONATE_HEADER")}
          </div>
          <h2 className="text-white max-w-[377px]">{t("DONATE_TITLE")}</h2>
          <p className="text-white">{t("DONATE_DESC")}</p>
          <div className="flex flex-col items-start gap-3  max-w-[313px]">
            <button
              className="teal-hover-dark col-centered mt-4 text-sm md:text-base rounded-xl w-full max-w-[313px] h-[40px] md:h-[48px] transition-200  text-white font-poppins-semibold"
              onClick={handleCopy}
              disabled={copied}
              id="donate"
            >
              <motion.div
                className="flex gap-2 items-center"
                {...midExitAnimation}
              >
                💰 {t("DONATE_CTA")}
              </motion.div>
            </button>
            <p className="text-white self-center">{t("DONATE_CTA_2")}</p>
          </div>
        </div>
        <div className="relative w-[307px] sm:w-[460px] xl:min-w-[721px] h-[292px] xl:h-[531px] rounded-2xl lg:rounded-[32px] overflow-hidden">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/landing/boats-1.jpg`}
            alt="Donate"
            // width={winWidth < 640 ? 307 : 721}
            // height={winWidth < 640 ? 292 : 504}
            // className="rounded-2xl lg:rounded-[32px] aspect-[1.05/1] sm:aspect-[2.8/2] object-cover"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Donate;
