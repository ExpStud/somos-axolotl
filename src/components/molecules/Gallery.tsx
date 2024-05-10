import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { exitAnimation, midExitAnimation } from "src/constants";
import { useTranslation } from "next-i18next";

type ImageData = {
  src: string;
  caption: string;
};

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { t } = useTranslation();

  const images: ImageData[] = [
    { src: "/images/landing/axolotls.jpg", caption: t("GALLERY_3") },
    { src: "/images/landing/trees.jpg", caption: t("GALLERY_2") },
    {
      src: "/images/landing/Axolotl Abystoma Mex vertical.jpg",
      caption: t("GALLERY_1"),
    },
    { src: "/images/landing/boats.jpg", caption: t("GALLERY_4") },
  ];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="max-width relative w-[90vw] md:w-[80vw] lg:w-[70vw]  aspect-[3/2] md:aspect-[2/1] lg:aspect-[16/5.5] 2xl:aspect-[16/5] mb-6 text-white px-6 md:px-20 lg:px-[15vw]">
      <AnimatePresence>
        {currentIndex % 2 === 0 && (
          <GalleryItem index={currentIndex} images={images} key="zero" />
        )}
        {currentIndex % 2 === 1 && (
          <GalleryItem index={currentIndex} images={images} key="one" />
        )}
      </AnimatePresence>

      {/* buttons */}
      <div
        onClick={prevImage}
        className="hover-opacity absolute -top-7 right-20 md:right-28 cursor-pointer py-2"
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
        className="hover-opacity absolute -top-7 right-1 cursor-pointer py-2"
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
