import { FC, ReactNode, HTMLAttributes } from "react";

interface ValidatorCtaButtonProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  children: ReactNode;
  variant?: "brown" | "white";
}

const styles = {
  brown: {
    container: "text-somos-brown-dark border-somos-brown-dark bg-white",
    text: "text-[10px]",
    arrow: "#41240F",
    icon: 14,
  },
  white: {
    container: "text-white border-white min-w-[106px] self-end",
    text: "text-[12px]",
    arrow: "#fff",
    icon: 16,
  },
};

const ValidatorCtaButton: FC<ValidatorCtaButtonProps> = ({
  onClick,
  children,
  variant = "brown",
  className = "",
  ...rest
}) => {
  const style = styles[variant];
  return (
    <div
      className={`flex items-center px-2 py-[3px] gap-[2px] h-[26px] border rounded-[3px] cursor-pointer transition-colors ${style.container} ${className}`}
      onClick={onClick}
      {...rest}
    >
      <p
        className={`font-poppins-semibold pt-[2px] whitespace-nowrap tracking-wide ${style.text}`}
      >
        {children}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={style.icon}
        height={style.icon}
        viewBox="0 0 13 13"
        fill="none"
        className="pt-[1px]"
      >
        <g clipPath="url(#clip0_1441_1541)">
          <path
            d="M5.00195 9.42383L7.96403 6.46175L5.00195 3.49968"
            stroke={style.arrow}
            strokeWidth="0.987358"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1441_1541">
            <rect
              width="11.8483"
              height="11.8483"
              fill="white"
              transform="translate(0.558594 0.538086)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ValidatorCtaButton;
