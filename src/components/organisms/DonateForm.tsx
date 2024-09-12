import { FC, HTMLAttributes, useState } from "react";
import { useTranslation } from "next-i18next";
import ConnectWallet from "../molecules/ConnectWallet";
import { fastExitAnimation } from "src/constants";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const DonateForm: FC<Props> = (props: Props) => {
  const [paymentType, setPaymentType] = useState<"crypto" | "cc">("crypto");
  const [paymentStep, setPaymentStep] = useState<"info" | "confirmation">(
    "info"
  );

  const { t } = useTranslation();

  const { setVisible, visible } = useWalletModal();
  const { publicKey, connecting, disconnect } = useWallet();

  const handleClick = () => {
    if (!publicKey) setVisible(true);
    else disconnect();
  };
  const handleQR = () => {
    if (!publicKey) setVisible(true);
    else {
      //TODO: QR Logic
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-3xl p-3 flex-grow sm:w-[519px] lg:w-[420px] h-[553px]">
      <div className="min-h-[42px] self-end">
        {paymentType === "crypto" && <ConnectWallet />}
      </div>
      <p className="text-black text-lg font-poppins-semibold">
        {t("pay_info")}
      </p>
      <div className="flex gap-2 text-sm  mb-3 mt-1">
        <p className={`text-xs text-black transition-200`}>{t("pay_info")}</p>
        <p
          className={`text-xs ${
            paymentStep === "confirmation" ? "text-black " : "text-gray-500"
          }`}
        >
          {" "}
          {"> " + t("pay_confirmation")}{" "}
        </p>
      </div>
      {/* select payment type */}
      <div className="flex gap-2 mb-4">
        <button
          className={`rounded-lg border row-centered gap-1 transition-200 w-1/2 font-poppins-regular h-10 ${
            paymentType === "crypto"
              ? "border-blue-700 text-blue-700 cursor-default"
              : "text-gray-500 hover:border-gray-400 hover:text-gray-600"
          }`}
          onClick={() => setPaymentType("crypto")}
        >
          <CryptoSVG /> {t("pay_crypto")}
        </button>
        <button
          className={`rounded-lg border row-centered gap-1 transition-200 w-1/2 font-poppins-regular h-10 ${
            paymentType === "cc"
              ? "border-blue-700 text-blue-700 cursor-default"
              : "text-gray-500 hover:border-gray-400 hover:text-gray-600"
          }`}
          onClick={() => setPaymentType("cc")}
        >
          <CreditCardSVG /> {t("pay_credit")}
        </button>
      </div>
      {/* display payment type */}
      <div
        {...fastExitAnimation}
        className="flex flex-col gap-5 justify-between h-full"
      >
        {paymentType === "crypto" ? (
          <>
            {/* network + token */}
            <div className="flex gap-2 mt-5 lg:mt-10">
              <div className="flex flex-col gap-1  w-1/2">
                <div className="text-black text-sm font-poppins-semibold">
                  {t("pay_network")}
                </div>
                <div className="rounded-lg border flex gap-2  items-center px-2 h-[35px] text-black font-poppins-regular">
                  <SolanaSVG />
                  {t("pay_solana")}
                </div>
              </div>
              <div className="flex flex-col gap-1  w-1/2">
                <div className="text-black text-sm font-poppins-semibold">
                  {t("pay_token")}
                </div>

                <div className="rounded-lg border flex gap-1.5 items-center px-2 h-[35px] text-black font-poppins-regular">
                  <Image
                    src={`${process.env.CLOUDFLARE_STORAGE}/images/donate/usdc.png`}
                    width={24}
                    height={24}
                    alt="USDC"
                  />
                  USDC
                </div>
              </div>
            </div>
            {/* due */}
            <div className="flex justify-between gap-2">
              <p className="text-xs text-gray-500">{t("pay_due")}</p>
              <div>TODO: add input field</div>
            </div>
            {/* actions */}
            <div className="flex flex-col gap-2 flex-grow ">
              <button
                className="rounded-lg border row-centered gap-1 transition-200 font-poppins-regular h-12 text-white bg-blue-950  transition-200 hover:bg-gray-900"
                onClick={() => handleClick()}
              >
                {t("pay_connect")}
              </button>
              <button
                onClick={() => handleQR()}
                className="rounded-lg border row-centered gap-1 transition-200 font-poppins-regular h-12 text-blue-950 transition-200 hover:border-gray-400"
              >
                {t("pay_qr")}
              </button>
              <div className="my-3 text-gray-500 text-[10px] text-center ">
                By paying for this product you agree to Sphere&apos;s terms and
                conditions and allow them to charge your wallet for this payment
                and for future payments pertaining to any subscriptions
                purchased.
              </div>
            </div>
          </>
        ) : (
          <>CC</>
        )}
      </div>
    </div>
  );
};

const CryptoSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15.746 16.39A8.55 8.55 0 0110.75 18a8.55 8.55 0 01-4.996-1.61M14.476 2a8.467 8.467 0 013.779 3.618 8.363 8.363 0 01.912 5.128m-16.834 0a8.363 8.363 0 01.912-5.128A8.467 8.467 0 017.024 2m8.401 7.574c0 2.56-2.093 4.634-4.675 4.634s-4.675-2.075-4.675-4.634c0-2.56 2.093-4.635 4.675-4.635s4.675 2.075 4.675 4.635z"
    ></path>
  </svg>
);
const CreditCardSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="stroke-current stroke-1 fill-none w-6 h-6"
  >
    <path
      d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
const SolanaSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20.0001" height="20.0001" rx="4.00002" fill="#1D1D3D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8039 7.00831C13.7462 7.03384 13.6839 7.04706 13.6209 7.04712H4.23064C4.18586 7.0471 4.14205 7.03384 4.10458 7.00897C4.06712 6.9841 4.03763 6.9487 4.01971 6.90711C4.0018 6.86551 3.99624 6.81953 4.00373 6.77479C4.01121 6.73005 4.0314 6.68847 4.06184 6.65518L6.04051 4.50293C6.08336 4.45618 6.13524 4.41888 6.19294 4.39335C6.25064 4.36782 6.31292 4.35461 6.37587 4.35454H15.7662C15.8113 4.3536 15.8558 4.36622 15.8939 4.39082C15.932 4.41542 15.9622 4.4509 15.9805 4.4928C15.9988 4.53469 16.0044 4.58113 15.9967 4.62627C15.9889 4.67141 15.9683 4.71323 15.9372 4.74648L13.9563 6.89873C13.9134 6.94547 13.8616 6.98279 13.8039 7.00831ZM13.9563 8.59312C13.9133 8.54659 13.8614 8.50943 13.8037 8.48391C13.746 8.4584 13.6838 8.44507 13.6209 8.44474H4.23064C4.18586 8.44477 4.14205 8.45802 4.10458 8.48289C4.06712 8.50776 4.03763 8.54316 4.01971 8.58475C4.0018 8.62635 3.99624 8.67233 4.00373 8.71707C4.01121 8.76182 4.0314 8.80339 4.06184 8.83668L6.04051 10.9901C6.08351 11.0366 6.13544 11.0738 6.1931 11.0993C6.25076 11.1248 6.31296 11.1381 6.37588 11.1384H15.7662C15.8109 11.1382 15.8545 11.1248 15.8918 11.0998C15.9291 11.0749 15.9584 11.0395 15.9762 10.9979C15.994 10.9564 15.9995 10.9105 15.9919 10.8658C15.9844 10.8212 15.9642 10.7797 15.9338 10.7465L13.9563 8.59312ZM15.9372 12.9287L13.9563 15.081C13.9134 15.1277 13.8616 15.1651 13.8039 15.1906C13.7462 15.2161 13.6839 15.2293 13.6209 15.2294H4.23064C4.18586 15.2294 4.14205 15.2161 4.10458 15.1912C4.06712 15.1664 4.03763 15.131 4.01971 15.0894C4.0018 15.0478 3.99624 15.0018 4.00373 14.9571C4.01121 14.9123 4.0314 14.8707 4.06184 14.8374L6.04051 12.6852C6.08336 12.6384 6.13524 12.6011 6.19294 12.5756C6.25064 12.5501 6.31292 12.5369 6.37587 12.5368H15.7662C15.8113 12.5359 15.8558 12.5485 15.8939 12.5731C15.932 12.5977 15.9622 12.6332 15.9805 12.6751C15.9988 12.717 16.0044 12.7634 15.9967 12.8085C15.9889 12.8537 15.9683 12.8955 15.9372 12.9287Z"
      fill="url(#paint0_linear_97_6648)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_97_6648"
        x1="11.2192"
        y1="19.9506"
        x2="19.9058"
        y2="7.8681"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.08" stop-color="#9945FF" />
        <stop offset="0.3" stop-color="#8752F3" />
        <stop offset="0.5" stop-color="#5497D5" />
        <stop offset="0.6" stop-color="#43B4CA" />
        <stop offset="0.72" stop-color="#28E0B9" />
        <stop offset="0.97" stop-color="#19FB9B" />
      </linearGradient>
    </defs>
  </svg>
);

export default DonateForm;
