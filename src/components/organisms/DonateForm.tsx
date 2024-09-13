import { FC, HTMLAttributes, useState } from "react";
import { useTranslation } from "next-i18next";
import ConnectWallet from "../molecules/ConnectWallet";
import { fastExitAnimation } from "src/constants";
import { DonateFormCredit, DonateFormCrypto } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const DonateForm: FC<Props> = (props: Props) => {
  const [paymentType, setPaymentType] = useState<"crypto" | "cc">("crypto");
  const [paymentStep, setPaymentStep] = useState<"info" | "confirmation">(
    "info"
  );
  const [inputValue, setInputValue] = useState<number>(1);

  const { t } = useTranslation();

  const handleInputChange = (value: number) => {
    setInputValue(value);
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
          <DonateFormCrypto
            handleInputChange={handleInputChange}
            inputValue={inputValue}
          />
        ) : (
          <DonateFormCredit
            handleInputChange={handleInputChange}
            inputValue={inputValue}
          />
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

export default DonateForm;
