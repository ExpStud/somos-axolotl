import { FC, useState } from "react";
import { CloseIcon, Logo, Menu, MenuIcon } from "@components";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { midExitAnimation } from "src/constants";

interface Props {
  background?: string;
  headerRef: React.RefObject<HTMLDivElement>;
}

const HeaderContent: FC<Props> = (props: Props) => {
  const { background, headerRef } = props;
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div
      className={`w-full flex items-center justify-between px-6 md:px-12 lg:px-24 py-5 h-[65px] lg:h-[80px] z-50 overflow-hidden transition-300 bg-[#1A0E06] ${background}`}
      ref={headerRef}
    >
      <Logo />
      <div className="flex items-end gap-8">
        <AnimatePresence mode="wait">
          {!openMenu ? (
            <motion.div
              key="menu-icon"
              onClick={() => setOpenMenu(true)}
              className="cursor-pointer "
              // {...midExitAnimation}
            >
              <Image
                src="/images/icons/menu.svg"
                width={40}
                height={40}
                alt="menu"
              />
            </motion.div>
          ) : (
            <motion.div
              key="close-icon"
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer z-[100] w-[72px] h-[24p] text-sm col-centered border border-somos-brown rounded"
              // {...midExitAnimation}
            >
              Close X
            </motion.div>
          )}
        </AnimatePresence>
        <Menu toggleMenu={setOpenMenu} open={openMenu} headerRef={headerRef} />
        {/* background shadow */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              className="-z-10 fixed inset-0 bg-[#030303] bg-opacity-70 "
              onClick={() => setOpenMenu(false)}
              {...midExitAnimation}
            />
          )}
        </AnimatePresence>
        {/* <Link
          href="#donate"
          className="teal-hover-dark col-centered text-sm md:text-base rounded-xl w-[98px] md:w-[124px] h-[36px] md:h-[40px] transition-200 font-poppins-semibold text-white "
        >
          💰 Donate
        </Link> */}
      </div>
    </div>
  );
};
export default HeaderContent;
