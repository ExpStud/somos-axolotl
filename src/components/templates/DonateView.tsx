import { Dispatch, SetStateAction, FC } from "react";
import {} from "@components";
import Image from "next/image";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="z-[1] w-full h-full flex flex-grow flex-col items-center justify-center mt-[80px]">
      hello there
    </div>
  );
};

export default AboutView;
