import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { ArrowIcon } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";
interface Props {
  className?: string;
}

const LanguageSwitcher: FC<Props> = ({ className }) => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const isEnglish = selectedLanguage === "en" || selectedLanguage === "en-US";

  const handleLanguageChange = (newLanguage: string) => {
    const _isEnglish = newLanguage === "en" || newLanguage === "en-US";

    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);

    router.push(router.pathname, router.asPath, {
      locale: _isEnglish ? "" : newLanguage,
    });

    setOpenMenu(false);
  };

  return (
    <div
      className={`relative flex justify-between items-center bg-[#323232] rounded-lg w-[93px] h-[30px] text-white text-xs px-1.5 overflow-visible cursor-pointer ${
        className ?? ""
      }`}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <div className="flex gap-1 items-center h-full">
        {isEnglish ? (
          <>
            <Image
              src="/images/icons/english.svg"
              alt="English"
              width={16}
              height={11}
            />
            English
          </>
        ) : (
          <>
            <Image
              src="/images/icons/english.svg"
              alt="English"
              width={16}
              height={11}
            />
            Español
          </>
        )}
      </div>
      <ArrowIcon animate={openMenu} />
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="fixed top-14 lg:w-[87px] rounded-r-lg rounded-bl-lg  bg-[#323232] mt-0 z-50 flex flex-col py-1.5 gap-0"
            {...fastExitAnimation}
          >
            <div
              className="flex gap-1 items-center py-3 lg:py-1 px-6 lg:px-2 cursor-pointer transition-200 hover:bg-[#4A4A4A]"
              onClick={() => handleLanguageChange("en")}
            >
              <Image
                src="/images/icons/english.svg"
                alt="English"
                width={16}
                height={11}
              />
              English
            </div>
            <div
              className="flex gap-1 items-center py-3 lg:py-1 px-6 lg:px-2 cursor-pointer transition-200 hover:bg-[#4A4A4A]"
              onClick={() => handleLanguageChange("es")}
            >
              <Image
                src="/images/icons/english.svg"
                alt="English"
                width={16}
                height={11}
              />
              Español
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
