import Image from "next/image";
import { FC } from "react";
import { useTranslation } from "next-i18next";

const Topography: FC = () => {
  const { t } = useTranslation();
  // {t("")}
  return (
    <div className=" bg-[#F9F5E9] w-full py-20 lg:py-40 flex justify-center">
      <div className="relative flex flex-col items-center justify-center text-center gap-2 px-6 md:px-10 w-[90vw] md:w-[70vw] lg:w-[697px] aspect-[1.2/1]">
        <h2 className="max-w-[305px] z-[1]">{t("team_disc")}</h2>
        <p className="max-w-[427px] z-[1]">{t("team_desc")}</p><p className="max-w-[427px] z-[1]">{t("team_desc_2")}</p>
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/about/topo.svg`}
          fill
          alt="Topography"
        />
      </div>
    </div>
  );
};

export default Topography;
