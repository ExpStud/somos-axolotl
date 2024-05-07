import { FC, HTMLAttributes } from "react";
import { TextDropdown } from "@components";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Description: FC<Props> = (props: Props) => {
  const { className } = props;
  return (
    <div className={`relative w-screen flex justify-center  ${className}`}>
      <div className="max-width flex flex-col lg:flex-row no-wrap pt-20 3xl:justify-between w-full">
        <div className="z-10 flex flex-col gap-2 max-w-[500px]">
          <div className="row-centered text-somos-red border-[0.85px] border-somos-red w-[96px] h-[24px] text-xs ">
            The story
          </div>
          <h2 className="max-w-[184px] md:max-w-[270px]">
            The Somos Axolotl story.
          </h2>
          <TextDropdown
            content={`
              <p class="!text-base">
                Somos Axolotl is an art- and tech-based initiative created by a digital artist, a muralist, and an environmental activist -- three individuals united in their desire to push back against the potential extinction of one of the world's most compelling animals, the axolotl salamander.
              </p>
              </br> 
              <p class="!text-base">
                Spearheaded by Matt “Scum” Martinez,  Somos Axolotl works in and with the vibrant Xochimilco community in Mexico City to protect and restore axolotl populations though the development of sustainable economic systems for local farmers, businesses, and tourism operators. 
              </p>
              </br> 
              <p class="!text-base">
                There can be no path toward healthy and balanced relationships with our natural environment without sustainable relationships between people, places, and our planet's other denizens. Somos Axolotl uses technology and art to inspire action, create solutions, and build partnerships supporting symbiosis between Xochimilco's human and axolotl populations. 
              </p>
              </br> 
              <p class="!text-base">
                As this project matures, the tools built and lessons learned in Xochimilco will become available to communities around the world. 
              </p>
            `}
            openHeight="36rem"
          />
        </div>
        <Image
          src="/images/axolotl.png"
          alt="Axolotl"
          width={587}
          height={640}
          className="z-0 rotate-36 absolute -right-40 -top-28  xs:-right-48 xs:-top-36 lg:-right-16 lg:-top-16 xl:top-[100px] xl:right-[10vw] 3xl:top-[5vw] 3xl:right-[20vw] 3xl:scale-150"
        />
      </div>
    </div>
  );
};

export default Description;
