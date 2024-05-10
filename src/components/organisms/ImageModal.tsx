import { FC } from "react";
import { Modal } from "@components";
import Image from "next/image";
import { InfographicsDataType } from "src/types";
import { useWindowSize } from "src/hooks";

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
      <div className="z-10 h-full w-full pt-8 flex flex-col gap-6">
        <Image
          src={data.icon}
          alt="Icon"
          width={106}
          height={106}
          className="px-6"
        />
        <h3 className="text-white text-2xl lg:text-[32px] font-poppins-semibold px-6">
          {data.title}
        </h3>
        <div
          style={{
            columnCount: winWidth < 1024 ? 1 : 2,
            columnGap: "1rem",
            overflowY: "auto",
            // paddingBottom: "10px",
            /* Add these lines to customize the scrollbar */
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "rgba(155, 155, 155, 0.7) transparent", // For Firefox
            /* For Chrome, Safari and Edge */
            /* @ts-ignore */
            "&::-webkit-scrollbar": {
              width: "12px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "896B56",
              borderRadius: "20px",
            },
          }}
          className="px-5 h-full"
        >
          {data.content.map((content, index) => (
            <p
              className="text-white text-sm"
              style={{ breakInside: "avoid", padding: "0.5rem 0" }}
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
