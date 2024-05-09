import { FC, HTMLAttributes, useEffect, useState } from "react";
import Image from "next/image";
import { useWindowSize } from "src/hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Donate: FC<Props> = (props: Props) => {
  const { className } = props;

  const [copied, setCopied] = useState<boolean>(false);
  const [winWidth] = useWindowSize();
  const address = "G4Qu1wAd6pmCVYc1WckS8dxffv9ooaAfW49Z8U8ZnmqC";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (copied) {
      timeoutId = setTimeout(() => setCopied(false), 5000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [copied]);

  return (
    <div className={`col-centered relative w-screen ${className}`}>
      <div
        className="flex flex-col-reverse xl:flex-row items-center justify-evenly rounded-[32px] bg-somos-blue p-4 md:p-0  
        max-w-[345px] sm:max-w-[500px] xl:max-w-[1245px]"
      >
        <div className="flex flex-col justify-center gap-4 md:gap-6 p-8 md:p-12 lg:min-w-[395px]">
          <div className="row-centered text-white border-[0.85px] border-white w-[135px] h-[24px] md:h-[32px] text-sm md:rounded-[21px]">
            Donate & Save
          </div>
          <h2 className="text-white max-w-[305px]">
            Be part of <br />
            the Solution
          </h2>
          <p className="text-white">We need your help to achieve our mission</p>
          <button
            className="teal-hover-dark col-centered mt-4 text-sm md:text-base rounded-xl w-full max-w-[313px] h-[40px] md:h-[48px] transition-200  text-white font-poppins-semibold"
            onClick={handleCopy}
            disabled={copied}
            id="donate"
          >
            {copied ? (
              <div className="flex gap-2 items-center">
                <Image
                  src="/images/icons/copy.png"
                  width={26}
                  height={26}
                  alt="Copy"
                />
                <p>G4Qu1wAd6pm......9Z8U8ZnmqC</p>
              </div>
            ) : (
              <> 💰 Donate</>
            )}
          </button>
        </div>
        <Image
          src="/images/landing/boats-1.jpg"
          alt="Donate"
          width={winWidth < 640 ? 307 : 721}
          height={winWidth < 640 ? 292 : 504}
          className="rounded-[32px] aspect-[1.05/1] sm:aspect-[2.8/2] object-cover"
        />
      </div>
    </div>
  );
};

export default Donate;
