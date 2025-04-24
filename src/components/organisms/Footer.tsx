import { FC } from "react";
import Image from "next/image";
import { IconBar } from "@components";
import { useWindowSize } from "src/hooks";
import { useTranslation } from "next-i18next";

const Footer: FC = () => {
  const [winWidth, winHeight] = useWindowSize();
  const { t } = useTranslation();
  return (
    <footer
      className="bg-somos-orange overflow-hidden flex flex-col md:flex-row justify-evenly md:justify-between md:items-center px-8 pb-2 md:px-10 md:pt-10  md:pb-7 h-[400px] md:h-[220px] lg:h-[200px]"
      key="footer"
    >
      <div className="flex md:flex-col w-full md:w-auto h-min md:h-full justify-between md:justify items-center md:items-start">
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/logos/lg-brown.svg`}
          alt="Somos"
          width={winWidth < 768 ? 93 : 65}
          height={winWidth < 768 ? 131 : 92}
        />
        <div className="text-xs hidden md:flex flex-col gap- -mb-4">
          <p>
            © {new Date().getFullYear()} — {t("FOOTER_COPYRIGHT")}
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://sandboxstud.io/"
            className="text-sm"
          >
            ℗ {t("FOOTER_POWERED")}
          </a>
        </div>

        <IconBar className="md:hidden h-min" />
      </div>
      <div className="flex justify-between md:justify-end md:items-center gap-8 md:gap-10 md:pb-2">
        <div className="flex flex-col max-w-[177px]">
          <h3 className="text-somos-brown-dark tex-sm md:text-base font-poppins-regular pb-3">
            {t("FOOTER_CONTACT")}
          </h3>
          <p className="text-xs">{t("FOOTER_EMAIL")}</p>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:info@somosaxolotl.com"
            className="text-xs"
          >
            info@somosaxolotl.com
          </a>
        </div>
        <div className="flex flex-col max-w-[177px]">
          <h3 className="text-somos-brown-dark text-sm md:text-base font-poppins-regular pb-3">
            {t("FOOTER_LOCATION")}
          </h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.google.com/maps/search/?api=1&query=Antiguo+Canal+Cuemanco+105+Pista+Olímpica+Virgilio+Uribe+Xochimilco+16036+Ciudad+de+México+CDMX+Mexico"
            className="line-clamp-2 text-xs"
          >
            Antiguo Canal Cuemanco 105, Pista Olímpica Virgilio Uribe,
            Xochimilco, 16036 Ciudad de México, CDMX, Mexico
          </a>
        </div>
        <IconBar className="hidden md:grid w-[100px]" />
      </div>

      <div className="md:hidden whitespace-nowrap self-center -mb-10 text-xs flex flex-col items-center gap-2">
        <p>
          © {new Date().getFullYear()} — {t("FOOTER_COPYRIGHT")}
        </p>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://expstud.io/"
          className="text-sm"
        >
          ℗ {t("FOOTER_POWERED")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
