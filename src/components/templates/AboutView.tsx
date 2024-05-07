import { Dispatch, SetStateAction, FC } from "react";
import {
  AboutDescription,
  PatternSVG,
  TeamCard,
  TeamHeader,
  TextDropdown,
  Topography,
} from "@components";
import Image from "next/image";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="z-[1] w-full h-full flex flex-col items-center justify-center mt-[80px]">
      <AboutDescription />
      <TeamHeader />

      {/* Team Cards */}
      <div className="flex flex-col items-center gap-4 my-10">
        <TeamCard id="scum" />
        <TeamCard id="gio" />
        <TeamCard id="cass" />
      </div>
      <PatternSVG className="my-20 lg:my-32 px-6" />
      <Topography />
    </div>
  );
};

export default AboutView;
