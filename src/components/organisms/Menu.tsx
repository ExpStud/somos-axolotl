import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconBar, NavItem } from "@components";
import Link from "next/link";
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
          animate={{ width: isTablet ? winWidth - 15 : 669, opacity: 1 }}
          exit={{
            width: 0,
            transition: { duration: 0.5 },
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
          className=" bg-[#1A0E06] fixed top-0 right-0 z-50 "
          onClick={() => toggleMenu(false)}
          ref={ref}
        >
          <motion.div
            className={`px-4 sm:px-6 lg:px-10 py-6 h-screen relative`}
            variants={fadeVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="absolute left-1/2 top-[45%] transform -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-start text-4xl sm:text-6xl gap-2">
              <NavItem href="/">Mission</NavItem>
              <NavItem href="/">Team</NavItem>
              <NavItem href="/">Donate</NavItem>
            </div>
            <IconBar className="max-w-[90px]" />
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Menu;
