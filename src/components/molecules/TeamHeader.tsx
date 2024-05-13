import { FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const TeamHeader: FC = () => {
  const { t } = useTranslation();
  //{t("")}
  return (
    <div className="relative self-center px-12 aspect-[3/1] md:aspect-[5.25/1] w-full lg:h-[274px] mt-24 md:mt-20 lg:mt-32 -z-10 ">
      <div className="h-full w-full flex items-center justify-between sm:justify-center sm:gap-32 lg:gap-[250px] xl:gap-[420px]  ">
        <p className="text-2xl lg:text-[40px] lg:leading-[45px] font-poppins-semibold text-somos-brown-dark max-w-[200px] lg:max-w-[320px]">
          {t("team_caption")}
        </p>

        <Image
          src="/images/logos/text-black.svg"
          width={200}
          height={81.5}
          className="w-[98px] md:w-auto"
          alt="Somos Axolotl"
        />
        <Image
          src="/images/design/red-stroke.png"
          fill
          className="absolute"
          alt="Red Stroke"
        />
      </div>
    </div>
  );
};

export default TeamHeader;
