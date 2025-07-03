import { FC, HTMLAttributes, useContext } from "react";
import Image from "next/image";
import { useWindowSize } from "@hooks";
import { useTranslation } from "next-i18next";
import { ValidatorCtaButton } from "@components";
import { ViewContext } from "@contexts";
import { InfographicsDataType } from "@types";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Validator: FC<Props> = (props: Props) => {
  const { className } = props;
  const [winWidth] = useWindowSize();

  const { t } = useTranslation();
  const { setShowModal } = useContext(ViewContext);

  const data: InfographicsDataType = {
    title: t("vdtr_title"),
    short: t("INFO_SMALL_DESC_1"),
    content: [
      t("vdtr_desc_1"),
      t("vdtr_desc_2"),
      t("vdtr_desc_3"),
      t("vdtr_desc_4"),
      t("vdtr_desc_5"),
      t("vdtr_desc_6"),
      t("vdtr_desc_7"),
    ],
    displayImage: `${process.env.CLOUDFLARE_STORAGE}/images/landing/vdtr-modal-bg.jpg`,
    expandedImage: `${process.env.CLOUDFLARE_STORAGE}/images/landing/vdtr-modal-bglg.jpg`,
    icon: `${process.env.CLOUDFLARE_STORAGE}/images/design/info-1-new.svg`,
  };

  if (winWidth > 1024) {
    return (
      <div
        id="validator"
        className={`col-centered gap-8 relative w-screen ${className}`}
      >
        <div className="flex flex-col gap-6 w-full max-w-[1193px] mx-[125px]">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/design/squares-pink.svg`}
            width={111}
            height={18}
            alt="Pink Squares"
          />
          <div className="flex justify-between w-full">
            <h2 className="leading-none"> {t("vdtr_header")}</h2>{" "}
            <a
              href="https://spherepay.co/pay/paymentLink_ea7773f8e9ca45de8aa6072311fe31a6"
              rel="noreferrer"
              target="_blank"
              className="row-centered hover-brown gap-3 text-sm rounded-[34px] w-full sm:max-w-[268px] h-[40px] cursor-pointer text-white justify-self-start"
            >
              <p>{t("vdt_cta")}</p>
            </a>
          </div>
        </div>
        {/* Responsive background image container, only visible on lg+ screens */}
        <div
          className="flex flex-col justify-end gap-4 w-full max-w-[1193px] aspect-[1193/529] bg-cover bg-center rounded-bl-[40px] rounded-tr-[40px] mx-auto px-10 pb-10"
          style={{
            backgroundImage: `url(${process.env.CLOUDFLARE_STORAGE}/images/landing/validator-lg.png)`,
          }}
        >
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/design/info-1-new.svg`}
            alt="Icon"
            width={92}
            height={92}
          />
          <h3 className="text-white text-xs lg:text-xl font-poppins-semibold">
            {t("vdtr_title")}
          </h3>

          <div className="flex flex-col gap-0 max-w-[600px] xl:max-w-[750px]">
            <p className="text-white text-xs lg:text-base">
              {t("vdtr_desc_1")}
            </p>

            <ValidatorCtaButton
              variant="white"
              onClick={() => setShowModal(data)}
              className="mr-6"
            >
              {t("vdt_modal_cta_")}
            </ValidatorCtaButton>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      id="validator"
      className={`col-centered relative w-screen  ${className}`}
    >
      <div
        className="flex flex-col lg:flex-row items-center justify-evenly     
        max-w-[400px] sm:max-w-[500px] lg:max-w-[1245px]"
      >
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/landing/validator-sm.png`}
          alt="Donate"
          width={winWidth < 640 ? 344 : 562}
          height={winWidth < 640 ? 391 : 391}
          className="aspect-[1.75/2] sm:aspect-[3.1/2] object-cover rounded-[32px]"
        />
        <div className="flex flex-col justify-center  gap-6 py-8 md:p-12 lg:min-w-[395px]">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/design/squares-pink.svg`}
            width={111}
            height={18}
            alt="Pink Squares"
          />
          <div className="flex justify-between w-full">
            <h2>{t("vdtr_title")}</h2>
            <ValidatorCtaButton
              variant="brown"
              onClick={() => setShowModal(data)}
            >
              {t("vdt_modal_cta_")}
            </ValidatorCtaButton>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col gap-2 max-w-[520px]">
              <p>{t("vdtr_desc_1")}</p>
            </div>
          </div>
          <a
            href="https://spherepay.co/pay/paymentLink_ea7773f8e9ca45de8aa6072311fe31a6"
            rel="noreferrer"
            target="_blank"
            className="row-centered hover-brown gap-3 mt-4 text-sm  rounded-[34px] w-full sm:max-w-[268px] h-[40px] cursor-pointer text-white"
          >
            <p>{t("vdt_cta")}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Validator;
