import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode, useEffect, HTMLAttributes } from "react";
import {
  modalFadeAnimation,
  midClickAnimation,
  scaleExitAnimation,
} from "@constants";
import Image from "next/image";
interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
}
const Modal: FC<Props> = (props: Props) => {
  const { show, children, className, ...componentProps } = props;

  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <motion.div
      key="image-modal"
      className="fixed inset-0 backdrop-blur z-50 w-screen h-[110vh] cursor-pointer"
      onClick={componentProps.onClick}
      {...scaleExitAnimation}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute cursor-default inset-0 lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:aspect-[2/1] w-screen lg:w-[80vw] max-w-[1241px] lg:h-auto 
        lg:rounded-[32px] p-6 md:p-10 ${className}`}
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
