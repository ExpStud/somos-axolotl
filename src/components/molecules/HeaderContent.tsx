import { FC } from "react";
import { Logo } from "@components";

const HeaderContent: FC = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 md:px-12 lg:px-24 py-5 md:py-8 z-20 overflow-hidden bg-black   bg-opacity-80">
      <Logo />
      <div className="flex items-end gap-8">
        <button className="text-sm md:text-base rounded-xl w-[98px] md:w-[124px] h-[36px] md:h-[40px] transition-200 bg-somos-teal hover:bg-somos-teal-600 active:bg-somos-teal-800 text-white ">
          💰 Donate
        </button>
      </div>
    </div>
  );
};
export default HeaderContent;
