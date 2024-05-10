import { FC } from "react";
import Image from "next/image";
import { IconBar } from "@components";
import { useWindowSize } from "src/hooks";

const Footer: FC = () => {
  const [winWidth, winHeight] = useWindowSize();

  return (
    <footer
      className="bg-somos-orange overflow-hidden flex flex-col md:flex-row justify-evenly md:justify-between md:items-center px-8 pb-2 md:px-10 md:pt-10  md:pb-7 h-[400px] md:h-[220px] lg:h-[200px]"
      key="footer"
    >
      <div className="flex md:flex-col w-full md:w-auto h-min md:h-full justify-between md:justify items-center md:items-start  ">
        <Image
          src="/images/logos/lg-brown.svg"
          alt="Somos"
          width={winWidth < 768 ? 93 : 65}
          height={winWidth < 768 ? 131 : 92}
        />
        <div className="text-xs hidden md:flex flex-col gap- -mb-4">
          <p>
            © {new Date().getFullYear()} — Copyright{" "}
            <br className="hidden md:block lg:hidden" /> All Rights reserved
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/exp_studio_"
            className="text-sm"
          >
            ℗ Powered by EXP
          </a>
        </div>

        <IconBar className="md:hidden h-min" />
      </div>
      <div className="flex justify-between md:justify-end md:items-end gap-8 md:gap-10 md:pb-2">
        <div className="flex flex-col max-w-[177px]">
          <h3 className="text-somos-brown-dark tex-sm md:text-base font-poppins-regular pb-3">
            Contact Us
          </h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="tel:+19998887766"
            className="text-xs"
          >
            +1 (999) 888-77-66
          </a>
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
            Location
          </h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.google.com/maps/search/?api=1&query=483920,Mexico+Myasnitskaya+22/2/5,Office+4"
            className="line-clamp-2 text-xs"
          >
            483920, Mexico <br />
            Myasnitskaya 22/2/5, Office 4
          </a>
        </div>
        <IconBar className="hidden md:grid w-[100px]" />
      </div>

      <div className="md:hidden whitespace-nowrap self-center -mb-10 text-xs flex flex-col items-center gap-2">
        <p>
          © {new Date().getFullYear()} — Copyright{" "}
          <br className="hidden md:block lg:hidden" /> All Rights reserved
        </p>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/exp_studio_"
          className="text-sm"
        >
          ℗ Powered by EXP
        </a>
      </div>
    </footer>
  );
};

export default Footer;
