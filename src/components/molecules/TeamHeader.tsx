import { FC } from "react";
import Image from "next/image";

const TeamHeader: FC = () => {
  return (
    <div className="relative self-center flex items-center justify-between sm:justify-center px-5 lg:aspect-[3/1] md:aspect-[5.25/1] w-full lg:h-[274px] mt-24 md:mt-20 lg:mt-32 -z-10 sm:gap-32 lg:gap-[400px] xl:gap-[605px]">
      <p className="text-2xl lg:text-[40px] lg:leading-[45px] font-poppins-semibold text-somos-brown-dark">
        The Team <br /> Behind it all.
      </p>

      <Image
        src="/images/logos/text-black.svg"
        width={200}
        height={81.5}
        className="w-[98px] md:w-auto"
        alt="Somos Axolotl"
      />
      <Image
        src="/images/design/red-stroke.png"
        fill
        className="absolute"
        alt="Red Stroke"
      />
    </div>
  );
};

export default TeamHeader;
