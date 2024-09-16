import { FC } from "react";
import Image from "next/image";
import { NumberInput } from "@components";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useTranslation } from "next-i18next";

interface DonateFormCryptoProps {
  handleInputChange: (value: number) => void;
  inputValue: number;
}

const DonateFormCrypto: FC<DonateFormCryptoProps> = ({
  handleInputChange,
  inputValue,
}) => {
  const { setVisible } = useWalletModal();
  const { publicKey, connected } = useWallet();
  const { t } = useTranslation();

  const handleClick = () => {
    if (!publicKey) setVisible(true);
    else {
      // TODO: Payment Logic
    }
  };
  const handleQR = () => {
    if (!publicKey) setVisible(true);
    else {
      //TODO: QR Logic
    }
  };
  return (
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
      <div className="flex justify-between gap-2 items-center">
        <p className="text-xs text-gray-500">{t("pay_due")}</p>
        <NumberInput
          supply={1000000}
          handleInput={handleInputChange}
          initialValue={inputValue}
        />
      </div>
      {/* actions */}
      <div className="flex flex-col gap-2 flex-grow ">
        <button
          className="rounded-lg border row-centered gap-1 transition-200 font-poppins-regular h-12 text-white bg-blue-950  transition-200 hover:bg-gray-900"
          onClick={() => handleClick()}
        >
          {publicKey && connected
            ? `${t("pay_pay")} ${inputValue} USDC`
            : t("pay_connect")}
        </button>
        <button
          onClick={() => handleQR()}
          className="rounded-lg border row-centered gap-1 transition-200 font-poppins-regular h-12 text-blue-950 transition-200 hover:border-gray-400"
        >
          {t("pay_qr")}
        </button>
        <div className="my-3 text-gray-500 text-[10px] text-center ">
          By paying for this product you agree to Sphere&apos;s terms and
          conditions and allow them to charge your wallet for this payment and
          for future payments pertaining to any subscriptions purchased.
        </div>
      </div>
    </>
  );
};

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
        <stop offset="0.08" stopColor="#9945FF" />
        <stop offset="0.3" stopColor="#8752F3" />
        <stop offset="0.5" stopColor="#5497D5" />
        <stop offset="0.6" stopColor="#43B4CA" />
        <stop offset="0.72" stopColor="#28E0B9" />
        <stop offset="0.97" stopColor="#19FB9B" />
      </linearGradient>
    </defs>
  </svg>
);

export default DonateFormCrypto;
