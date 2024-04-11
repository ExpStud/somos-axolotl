import { FC, useState } from "react";
import { CloseIcon, Logo, Menu, MenuIcon } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import { fastExitAnimation } from "src/constants";
import Link from "next/link";

const HeaderContent: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="w-full flex items-center justify-between px-6 md:px-12 lg:px-24 py-5 md:py-8 z-20 overflow-hidden bg-black lg:bg-transparent bg-opacity-80">
      <Logo />
      {/* desktop */}
      <div className="flex items-end gap-8">
        <Link
          href="#about"
          className="hidden md:block text-white transition-200  hover:text-opacity-80"
        >
          About
        </Link>
        <button className="text-sm md:text-base rounded-xl w-[98px] md:w-[124px] h-[36px] md:h-[40px] transition-200 bg-somos-teal hover:bg-somos-teal-600 active:bg-somos-teal-800 text-white ">
          💰 Donate
        </button>
      </div>
      {/* mobile */}
      {/* <div className="md:hidden z-[100]">
        <AnimatePresence mode="wait">
          {!openMenu ? (
            <motion.div
              key="menu-icon"
              onClick={() => setOpenMenu(true)}
              className="cursor-pointer"
              {...fastExitAnimation}
            >
              <MenuIcon />
            </motion.div>
          ) : (
            <motion.div
              key="close-icon"
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer z-[100]"
              {...fastExitAnimation}
            >
              <CloseIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Menu toggleMenu={setOpenMenu} open={openMenu} /> */}
    </div>
  );
};
export default HeaderContent;
