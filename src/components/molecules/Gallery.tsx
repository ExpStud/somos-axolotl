import React, { useState } from "react";
import Image from "next/image";

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
      {/* <div className="relative w-[688px] h-[396px] pb-4 text-white max-w-[1200px] px-6 md:px-20 lg:px-[15vw]"> */}
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].caption}
        fill
        className="object-cover rounded-[10px] aspect-[16/9] "
        // className="w-[1200px] h-[400px] aspect-[12/3] object-cover rounded-[10px]"
        // width={1200}
        // height={400}
      />
      <div className="absolute -top-7 left-1 font-poppins-semibold text-sm italic">
        {images[currentIndex].caption}
      </div>
      <button onClick={prevImage} className="absolute -top-7 right-14">
        Prev
      </button>
      <button onClick={nextImage} className="absolute -top-7 right-1">
        Next
      </button>
    </div>
  );
};

export default Gallery;
