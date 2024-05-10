import { FC, HTMLAttributes } from "react";
import { TextDropdown } from "@components";
import Image from "next/image";
import { useWindowSize } from "src/hooks";
import { useTranslation } from "next-i18next";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Description: FC<Props> = (props: Props) => {
  const { className } = props;
  const [winWidth] = useWindowSize();

  const { t } = useTranslation();

  return (
    <div className={`relative w-screen flex justify-center  ${className}`}>
      <div className="max-width flex flex-col lg:flex-row no-wrap  pt-20 3xl:justify-between w-full">
        <div className="z-10 flex flex-col gap-2 max-w-[500px]">
          <Image
            src="/images/design/squares-blue.svg"
            width={111}
            height={18}
            alt="Blue Squares"
          />
          <h2 className="max-w-[184px] md:max-w-[310px]">{t("SOMOS_TITLE")}</h2>
          <TextDropdown
            content={t("SOMOS_DESC")}
            openHeight={
              winWidth < 400 ? "48rem" : winWidth < 768 ? "42rem" : "36rem"
            }
          />
        </div>
        <Image
          src="/images/landing/axolotl-2.png"
          alt="Axolotl"
          width={1797 * 0.5}
          height={1714 * 0.5}
          className="z-0 -rotate-90 xl:rotate-0 scale-[1.350] sm:scale-100 absolute -right-28 -top-48 xs:-right-48 xs:-top-56 sm:-right-72 sm:-top-[500px] lg:-top-[600px]  lg:-right-[320px] xl:-top-[180px]  2xl:right-[4vw] 2xl:-top-[90px] 3xl:right-[15vw] 3xl:scale-150"
        />
      </div>
    </div>
  );
};

export default Description;
