import { FC, useEffect } from "react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { truncatePubKey } from "@utils";
import { useWallet } from "@solana/wallet-adapter-react";
import { useTranslation } from "next-i18next";

const ConnectWallet: FC = () => {
  const { setVisible, visible } = useWalletModal();
  const { publicKey, connecting, disconnect } = useWallet();
  const { t } = useTranslation();

  const handleClick = () => {
    if (!publicKey) setVisible(true);
    else disconnect();
  };

  useEffect(() => {
    if (visible) {
      // Get the scrollbar width
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Hide the scrollbar and compensate for the scrollbar width
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      // Show the scrollbar and remove the padding
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [visible]);

  return (
    <button
      onClick={() => handleClick()}
      className="rounded-xl border text-black font-poppins-semibold text-xs w-[120px] h-[40px] transition-200  hover:border-gray-400"
    >
      {publicKey
        ? truncatePubKey(publicKey)
        : visible || connecting
        ? t("pay_wallet_connecting")
        : t("pay_wallet_select")}
    </button>
  );
};
export default ConnectWallet;
