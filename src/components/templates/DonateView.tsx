import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { DonateForm } from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const DonateView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const { t } = useTranslation();

  return (
    <div className="z-[1] w-full h-full flex flex-grow flex-col items-center justify-center my-[80px] pt-20 md:pt-[120px] ">
      <div className="flex flex-col max-w-[1000px] w-full h-full gap-12 md:gap-16">
        {/* top container */}
        <div className="flex flex-col md:flex-row item-end gap-12 pl-6">
          <div className="flex flex-col">
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/design/squares-yellow.svg`}
              width={111}
              height={18}
              alt="Yellow Squares"
              className="self-start"
            />
            <h2 className="max-w-[222px] leading-none">{t("donate_title")}</h2>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: t("donate_desc") }}
            className="max-w-[400px] text-sm h-min self-end"
          />
        </div>
        {/* bottom container */}
        <div className="self-center flex flex-col lg:flex-row justify-between items-center gap-5 p-2 md:p-3 mx-2 lg:w-full bg-somos-blue rounded-[31px] min-h-[580px]">
          <DonateForm />
          <div className="relative">
            <p className="max-w-[350px] text-somos-white text-4xl lg:text-6xl absolute z-10 font-poppins-bold left-4 top-4">
              {t("donate_ad")}
            </p>
            <Image
              src={`${process.env.CLOUDFLARE_STORAGE}/images/donate/axie.png`}
              width={519}
              height={553}
              alt="Axolotl"
              className="mix-blend-luminosity rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateView;
