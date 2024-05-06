import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  ImageModal,
} from "@components";
import { enterAnimation } from "@constants";
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
        className={`flex flex-col min-h-screen h-full justify-between overflow-none ${
          fixed ? "fixed inset-0" : absolute ? "absolute inset-0" : "relative"
        }`}
      >
        <PageHead
          title="Name"
          description="Description"
          url="https://addurl.xyz" // no backslash at the end
          twitter="twitterhandle"
        />
        {/* header */}
        <Header type={headerType} background={headerBackground} />

        {/* body */}
        <motion.main
          className={`relative flex flex-col h-full w-full overflow-x-clip bg-somos-white`}
          {...enterAnimation}
        >
          {children}
          <Image
            src="/images/design/texture-lg.png"
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
            />
          )}
        </AnimatePresence>
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;
