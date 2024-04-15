import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { exitAnimation, midExitAnimation } from "src/constants";

type ImageData = {
  src: string;
  caption: string;
};

const images: ImageData[] = [
  { src: "/meta.png", caption: "Rare Axolotl swimming" },
  { src: "/images/temp.png", caption: "Caption 2" },
  { src: "/meta.png", caption: "Caption 3" },
  { src: "/images/temp.png", caption: "Caption 4" },
  { src: "/meta.png", caption: "Caption 5" },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] h-[200px] md:h-[320px] lg:h-[420px] aspect-[16/9] mb-6 text-white max-w-[1200px] 3xl:max-w-[1600px] px-6 md:px-20 lg:px-[15vw]">
      <AnimatePresence>
        {currentIndex % 2 === 0 && (
          <GalleryItem index={currentIndex} images={images} key="zero" />
        )}
        {currentIndex % 2 === 1 && (
          <GalleryItem index={currentIndex} images={images} key="one" />
        )}
      </AnimatePresence>
      {/* caption */}

      {/* buttons */}
      <div
        onClick={prevImage}
        className="absolute -top-7 right-28 cursor-pointer py-2"
      >
        <Image
          src="/images/icons/arrow-left.svg"
          height={2}
          width={40}
          alt="Back"
          priority
        />
      </div>
      <div
        onClick={nextImage}
        className="absolute -top-7 right-1 cursor-pointer py-2"
      >
        <Image
          src="/images/icons/arrow-right.svg"
          height={2}
          width={40}
          alt="Next"
          priority
        />
      </div>
    </div>
  );
};

interface GalleryItemProps {
  index: number;
  images: ImageData[];
}
const GalleryItem: React.FC<GalleryItemProps> = (props: GalleryItemProps) => {
  const { index, images } = props;
  return (
    <motion.div {...midExitAnimation}>
      <Image
        src={images[index].src}
        alt={images[index].caption}
        fill
        className="object-cover rounded-[32px] aspect-[16/9]"
      />
      <div className="absolute -top-7 left-1 font-poppins-semibold text-sm italic">
        {images[index].caption}
      </div>
    </motion.div>
  );
};

export default Gallery;
