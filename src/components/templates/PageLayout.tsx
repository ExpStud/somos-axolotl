import { FC, ReactNode, useRef, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  ImageModal,
  CardPurchaseProtection,
} from "@components";
import { enterAnimation, midExitAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { ViewContext } from "@contexts";
import { InfographicsDataType } from "@types";
import Image from "next/image";

interface Props {
  children: ReactNode;
  footer?: boolean;
  fixed?: boolean; //prevents scroll
  absolute?: boolean; //allows scroll
  headerType?: string;
  assets?: boolean[];
  headerBackground?: string;
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = true,
    fixed = false,
    absolute = false,
    headerType = "absolute",
    children,
    assets = [],
    headerBackground,
  } = props;

  const headerRef = useRef(null);

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<InfographicsDataType | null>(null);
  const value = {
    showView,
    setShowView,
    showModal,
    setShowModal,
  };

  return (
    <ViewContext.Provider value={{ ...value, showModal: null }}>
      <div
        className={`flex flex-col min-h-screen h-full justify-between  ${
          fixed ? "fixed inset-0" : absolute ? "absolute inset-0" : "relative"
        }`}
      >
        <PageHead
          title="Somos Axolotl | Using technology and art to protect the ecosystem of Lake Xochimilco"
          description="Somos Axolotl uses art and technology to help communities move toward sustainable resource and environmental management - first in Mexico, and then beyond."
          url="https://somosaxolotl.com" // no backslash at the end
          twitter="SCUMSOL"
        />
        {/* header */}
        <Header
          type={headerType}
          background={headerBackground}
          headerRef={headerRef}
        />

        {/* body */}
        <motion.main
          className={`relative flex flex-col h-full w-full overflow-x-hidden bg-somos-white`}
          {...enterAnimation}
        >
          {children}
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/design/texture-lg.png`}
            layout="fill"
            alt="texture"
            className="z-0 resize-none object-cover"
          />
        </motion.main>

        {/* footer */}
        {footer && <Footer />}

        {/* load screen TODO: uncomment */}
        {/* {assets && <SplashScreen assets={assets} />} */}

        {/* modals */}
        <AnimatePresence mode="wait">
          {showModal && (
            <ImageModal
              key="image-modal"
              show={showModal !== null}
              data={showModal}
              close={() => setShowModal(null)}
              headerRef={headerRef}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="z-10 fixed inset-0 bg-[#030303] bg-opacity-70 "
              onClick={() => setShowModal(null)}
              {...midExitAnimation}
            />
          )}
        </AnimatePresence>
      </div>
      <CardPurchaseProtection />
    </ViewContext.Provider>
  );
};
export default PageLayout;
