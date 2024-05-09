import { Dispatch, SetStateAction, FC } from "react";
import {
  AboutDescription,
  PatternSVG,
  TeamCard,
  TeamHeader,
  TextDropdown,
} from "@components";
import Image from "next/image";

const Topography: FC = () => {
  return (
    <div className=" bg-[#F9F5E9] w-full py-20 lg:py-40 flex justify-center">
      <div className="relative flex flex-col items-center justify-center text-center gap-2 px-6 md:px-10 w-[90vw] md:w-[70vw] lg:w-[697px] aspect-[1.2/1]">
        <h2 className="max-w-[305px] z-[1]">Disclaimer</h2>
        <p className="max-w-[427px] z-[1]">
          Somos Axolotl is a fiscally sponsored project of Leap Lab, a State of
          California 501-(c)3 not-for-profit organization. Leap Lab is dedicated
          to the advancement of science and education in under-resourced
          communities across North America.
        </p>
        <Image src="/images/about/topo.svg" fill alt="Topography" />
      </div>
    </div>
  );
};

export default Topography;
