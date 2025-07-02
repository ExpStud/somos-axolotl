import { FC } from "react";
import { Modal } from "@components";
import Image from "next/image";
import { InfographicsDataType } from "src/types";
import { useWindowSize } from "src/hooks";
import { midEnterAnimation } from "@constants";
import { motion } from "framer-motion";

interface Props {
  show: boolean;
  data: InfographicsDataType;
  close: () => void;
  headerRef: React.RefObject<HTMLDivElement>;
}

const ImageModal: FC<Props> = (props: Props) => {
  const { show, data, close, headerRef } = props;

  const [winWidth] = useWindowSize();
  return (
    <Modal show={show} onClick={() => close()} headerRef={headerRef}>
      <div className="z-10 h-full w-full pt-8 flex flex-col gap-6  pb-16">
        <Image
          src={data.icon}
          alt="Icon"
          width={106}
          height={106}
          className="px-6"
        />
        <h3 className="text-white text-2xl lg:text-[32px] font-poppins-semibold px-6 ">
          {data.title}
        </h3>
        <div
          className={`px-5 h-full custom-scrollbar overflow-y-auto pb-10 ${
            winWidth < 1024 ? "flex flex-col " : "columns-2"
          }`}
          style={{
            columnGap: "1rem",
          }}
        >
          {data.content.map((content, index) => (
            <p
              className="text-white text-sm py-3 leading-relaxed font-poppins-regular tracking-wide"
              // style={{ padding: "0.5rem 0" }}
              key={index}
            >
              {content}
            </p>
          ))}
        </div>
      </div>
      <Image
        src={data.expandedImage}
        alt="Axolotl"
        fill
        className="object-cover -z-[2] lg:rounded-[32px]"
      />
    </Modal>
  );
};

export default ImageModal;
