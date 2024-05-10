import { motion } from "framer-motion";
import { FC, ReactNode, useEffect, HTMLAttributes } from "react";
import { scaleExitAnimation } from "@constants";
interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
  headerRef: React.RefObject<HTMLDivElement>;
}
const Modal: FC<Props> = (props: Props) => {
  const { show, children, headerRef, className, ...componentProps } = props;

  useEffect(() => {
    if (show) {
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
  }, [show]);

  // //stop page scroll (when modal or menu open)
  // useEffect(() => {
  //   // Get the scrollbar width
  //   const scrollbarWidth =
  //     window.innerWidth - document.documentElement.clientWidth;
  //   if (show) {
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
  // }, [show]);

  // useEffect(() => {
  //   if (show) document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [show]);

  return (
    <motion.div
      key="image-modal"
      className="fixed inset-0 backdrop-blur z-50 w-screen h-[100svh] cursor-pointer"
      onClick={componentProps.onClick}
      {...scaleExitAnimation}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute cursor-default inset-0 lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:aspect-[2/1] w-screen lg:w-[95vw] xl:w-[80vw] max-w-[1241px] lg:h-auto 
        lg:rounded-[32px] py-6 md:px-10 ${className}`}
      >
        <div
          className="hover-opacity row-centered text-white border-[0.85px] border-white w-[79px] h-[24px] text-xs fixed top-6 md:top-5 right-6 md:right-6 cursor-pointer z-10"
          onClick={componentProps.onClick}
        >
          Close &nbsp; X
        </div>
        {children}
        <div className="modal-gradient absolute inset-0 -z-[1] lg:rounded-[32px]" />
      </div>
    </motion.div>
  );
};

export default Modal;
