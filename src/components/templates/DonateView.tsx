import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const { t } = useTranslation();

  return (
    <div className="z-[1] w-full h-full flex flex-grow flex-col items-center justify-center my-[80px] pt-20 md:pt-[120px] ">
      <div className="flex flex-col max-w-[1000px] w-full h-full gap-12 md:gap-16">
        {/* top container */}
        <div className="flex flex-col md:flex-row md:item-end gap-12 pl-6">
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
            className="max-w-[400px] text-sm h-min md:self-end"
          />
        </div>
        {/* bottom container */}
        <div className="self-center flex gap-6 p-3 w-[90vw] lg:w-full bg-somos-blue rounded-[31px] min-h-[580px]">
          <div className="flex flex-col bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
