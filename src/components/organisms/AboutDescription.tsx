import { FC } from "react";
import { TextDropdown } from "@components";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const AboutDescription: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 items-start lg:items-end mt-12 md:mt-16 xl:mt-[16vh] px-6 md:px-10">
      <div className="flex flex-col gap-6 max-w-[505px]">
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/design/squares-yellow.svg`}
          width={111}
          height={18}
          alt="Yellow Squares"
        />
        <h2 className="text-start !text-5xl !font-poppins-semibold">
          {t("team_title_1")}{" "}
          <span className="text-somos-teal">{t("team_title_2")}</span>
          {/* <span className="text-somos-red">change.</span> */}
        </h2>
      </div>
      <p className="max-w-[300px] lg:max-w-[420px] ">{t("team_vision")}</p>
      {/* <TextDropdown
        className="max-w-[505px]"
        content={`
          <p class="!text-base">The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            </p>
          </br> 
          <p class="!text-base">The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers. 
            The Axolotl is a species scientists are apprehensive about going extinct soon; they estimate that there are only about 50 to 1,000 left in the wild. That number is greatly decreasing and is too fast for humans to be sure that they can help stabilize their numbers.
          </p>`}
      /> */}
    </div>
  );
};

export default AboutDescription;
