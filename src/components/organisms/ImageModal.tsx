import { FC } from "react";
import { Modal } from "@components";
import Image from "next/image";
import { InfographicsDataType } from "src/types";

interface Props {
  show: boolean;
  data: InfographicsDataType;
  close: () => void;
  headerRef: React.RefObject<HTMLDivElement>;
}

const ImageModal: FC<Props> = (props: Props) => {
  const { show, data, close, headerRef } = props;

  return (
    <Modal show={show} onClick={() => close()} headerRef={headerRef}>
      <div className="z-10 h-full w-full pt-24 flex flex-col gap-10 pb-6">
        <Image src={data.icon} alt="Icon" width={106} height={106} />
        <h3 className="text-white text-2xl lg:text-[32px] font-poppins-semibold">
          {data.title}
        </h3>
        <div className="grid lg:grid-cols-2 gap-[6svh] lg:gap-14">
          {data.content.map((content, index) => (
            <p className="text-white text-sm lg:text-base" key={index}>
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
