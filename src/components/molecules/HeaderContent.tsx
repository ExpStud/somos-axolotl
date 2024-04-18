import { FC } from "react";
import { Logo } from "@components";
import Link from "next/link";

const HeaderContent: FC = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 md:px-12 lg:px-24 py-5 md:py-8 z-20 overflow-hidden bg-black  bg-opacity-80">
      <Logo />
      <div className="flex items-end gap-8">
        <Link
          href="#donate"
          className="teal-hover-dark col-centered text-sm md:text-base rounded-xl w-[98px] md:w-[124px] h-[36px] md:h-[40px] transition-200 font-poppins-semibold text-white "
        >
          💰 Donate
        </Link>
      </div>
    </div>
  );
};
export default HeaderContent;
