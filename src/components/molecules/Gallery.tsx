import React, { useState } from "react";
import Image from "next/image";

type ImageData = {
  src: string;
  caption: string;
};

const images: ImageData[] = [
  { src: "/meta.png", caption: "Caption 1" },
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
    <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] h-[200px] md:h-[300] lg:h-[420px] mb-6 text-white max-w-[1200px] px-6 md:px-20 lg:px-[15vw]">
      {/* <div className="relative w-[688px] h-[396px] pb-4 text-white max-w-[1200px] px-6 md:px-20 lg:px-[15vw]"> */}
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].caption}
        fill
        className="object-cover rounded-[10px]"
        // className="w-[1200px] h-[400px] aspect-[12/3] object-cover rounded-[10px]"
        // width={1200}
        // height={400}
      />
      <div className="absolute -top-7 left-0 font-poppins-semibold text-sm italic">
        {images[currentIndex].caption}
      </div>
      <button onClick={prevImage} className="absolute -top-7 right-12">
        Prev
      </button>
      <button onClick={nextImage} className="absolute -top-7 right-0">
        Next
      </button>
    </div>
  );
};

export default Gallery;
