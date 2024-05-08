import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterAnimation } from "@constants";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <motion.div
      className="my-0 flex items-center gap-2 cursor-pointer"
      {...enterAnimation}
    >
      <Link href="/">
        <Image
          src="/images/logos/sm-yellow.svg"
          height={34.31}
          width={84}
          alt="Somos Axolotl"
          priority
          className="w-[60px] md:w-auto hover-opacity hover:shadow-lg"
        />
      </Link>
    </motion.div>
  );
};
export default Logo;
