import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconBar, NavItem } from "@components";
import Image from "next/image";
import { useWindowSize } from "@hooks";
import { fadeVariants } from "@constants";
import { useOutsideAlerter } from "@hooks";

interface Props {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  headerRef: React.RefObject<HTMLDivElement>;
}

const Menu: FC<Props> = (props: Props) => {
  const { toggleMenu, open, headerRef } = props;
  const [winWidth, winHeight] = useWindowSize();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const ref = useRef(null);

  useOutsideAlerter(ref, () => toggleMenu(false));

  const isTablet: boolean = winWidth < 900;

  //stop page scroll (when modal or menu open)
  // useEffect(() => {
  //   // Get the scrollbar width
  //   const scrollbarWidth =
  //     window.innerWidth - document.documentElement.clientWidth;
  //   if (open) {
  //     // Hide the scrollbar and compensate for the scrollbar width
  //     document.body.style.overflow = "hidden";
  //     document.body.style.paddingRight = `${scrollbarWidth}px`;
  //     // Add padding to the header
  //     if (headerRef.current) {
  //       const preexistingPadding = parseInt(
  //         window.getComputedStyle(headerRef.current).paddingRight,
  //         10
  //       );
  //       headerRef.current.style.paddingRight = `${
  //         preexistingPadding + scrollbarWidth
  //       }px`;
  //     }
  //   }

  //   return () => {
  //     // Show the scrollbar and remove the padding
  //     document.body.style.overflow = "";
  //     document.body.style.paddingRight = "";

  //     // Reset padding of the header
  //     if (headerRef.current) {
  //       const preexistingPadding = parseInt(
  //         window.getComputedStyle(headerRef.current).paddingRight,
  //         10
  //       );
  //       headerRef.current.style.paddingRight = `${
  //         preexistingPadding - scrollbarWidth
  //       }px`;
  //     }
  //   };
  // }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.aside
          key="main-menu"
          // onMouseLeave={() => toggleMenu(false)}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isTablet ? winWidth : 610, opacity: 1 }}
          exit={{
            width: 0,
            transition: { duration: 0.3 },
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          className=" bg-[#1A0E06] fixed top-0 right-0 z-50 "
          // onClick={() => toggleMenu(false)}
          ref={ref}
        >
          <motion.div
            className={`px-4 sm:px-6 lg:px-10 py-6 h-screen relative flex flex-col justify-between pl-10 pt-32 `}
            variants={fadeVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div
              className="flex flex-col items-start justify-start text-4xl sm:text-6xl gap-10 font-poppins-regular"
              onClick={() => toggleMenu(false)}
            >
              <NavItem href="/">Mission</NavItem>
              <NavItem href="/team">Team</NavItem>
              <NavItem href="/#donate">Donate</NavItem>
            </div>
            <div className="flex flex-col gap-6">
              <Image
                src="/images/logos/lg-white.svg"
                width={122}
                height={174}
                alt="Somos"
                className="hidden lg:block opacity-10 "
              />
              <div className="flex justify-between w-full">
                <div className="flex flex-col md:flex-row justify-between md:justify-start md:items-start gap-8 md:gap-10 md:pb-2">
                  <div className="flex flex-col max-w-[177px]">
                    <h3 className="text-white tex-sm md:text-base font-poppins-regular pb-3">
                      Contact Us
                    </h3>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="tel:+19998887766"
                      className="text-xs"
                    >
                      +1 (999) 888-77-66
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="mailto:info@somosaxolotl.com"
                      className="text-xs"
                    >
                      info@somosaxolotl.com
                    </a>
                  </div>
                  <div className="flex flex-col max-w-[177px]">
                    <h3 className="text-white text-sm md:text-base font-poppins-regular pb-3">
                      Location
                    </h3>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.google.com/maps/search/?api=1&query=483920,Mexico+Myasnitskaya+22/2/5,Office+4"
                      className="line-clamp-2 text-xs"
                    >
                      483920, Mexico <br />
                      Myasnitskaya 22/2/5, Office 4
                    </a>
                  </div>
                </div>

                <IconBar className="max-w-[90px] self-end" />
              </div>
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Menu;
