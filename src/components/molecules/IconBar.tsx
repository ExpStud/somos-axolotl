import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { useWindowSize } from "src/hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {}
const IconBar: FC<Props> = (props: Props) => {
  const { className } = props;

  const [winWidth, winHeight] = useWindowSize();
  const size = winWidth < 1024 ? 47 : 40;
  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      <a
        href={"https://www.instagram.com/somos_axolotl"}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/icons/instagram.svg`}
          width={size}
          height={size}
          alt="Instagram"
        />
      </a>
    </div>
  );
};

export default IconBar;
