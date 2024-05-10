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
      {/* <a href={"/"} rel="noreferrer" target="_blank" className="">
        <Image src="/images/icons/wk.svg" width={size} height={size} alt="Wk" />
      </a>
      <a href={"/"} rel="noreferrer" target="_blank" className="">
        <Image
          src="/images/icons/facebook.svg"
          width={size}
          height={size}
          alt="Facebook"
        />
      </a>
      <a href={"/"} rel="noreferrer" target="_blank" className="">
        <Image
          src="/images/icons/telegram.svg"
          width={size}
          height={size}
          alt="Telegram"
        />
      </a> */}
      <a href={"/"} rel="noreferrer" target="_blank" className="">
        <Image
          src="/images/icons/instagram.svg"
          width={size}
          height={size}
          alt="Instagram"
        />
      </a>
    </div>
  );
};

export default IconBar;
