import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { useWindowSize } from "@hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Goals: FC<Props> = (props: Props) => {
  const { className } = props;
  const [winWidth, winHeight] = useWindowSize();

  return (
    <div className={`col-centered relative w-screen  ${className}`}>
      <div
        className="flex flex-col lg:flex-row items-center justify-evenly     
        max-w-[400px] sm:max-w-[500px] lg:max-w-[1245px]"
      >
        <Image
          src="/images/temp.png"
          alt="Donate"
          width={winWidth < 640 ? 344 : 562}
          height={winWidth < 640 ? 391 : 391}
          className="aspect-[1.75/2] sm:aspect-[3.1/2] object-cover rounded-bl-[40px] rounded-tr-[40px]"
        />
        <div className="flex flex-col justify-center  gap-6 py-8 md:p-12 lg:min-w-[395px]">
          <Image
            src="/images/design/squares-pink.svg"
            width={111}
            height={18}
            alt="Brown Squares"
          />
          <h2 className="">
            The <br className="lg:hidden" />
            Regeneration Goals
          </h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col gap-2 max-w-[520px]">
              <p className="text-somos-brown-dark font-poppins-semibold text-base">
                Our Approach
              </p>
              <p className="">
                Somos Axolotl is using the power of art and technology to create
                new pathways toward sustainability for the Xochimilco community.
                Our Axolotl sculptures, designed and painted by a host of
                incredibly talented artists from across Mexico and beyond, will
                be placed throughout Xochimilco and along major tourism routes.
                The sculptures are designed to drive awareness and funding
                streams to the community members and organizations working to
                sustain and rebuild this unique and highly endangered ecosystem.
              </p>
            </div>
          </div>
          <div className="row-centered hover-brown gap-3 mt-4 text-sm  rounded-[34px] w-full sm:max-w-[268px] h-[40px] cursor-pointer text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.62651C11.3855 1.62651 11.7108 1.62651 12.6867 1.62651C13.5542 1.62651 13.988 1.84337 14.3133 1.95181C14.747 2.16868 15.0723 2.27711 15.3976 2.60241C15.7229 2.92771 15.9398 3.25301 16.0482 3.68675C16.1566 4.01205 16.2651 4.44578 16.3735 5.31325C16.3735 6.28916 16.3735 6.50602 16.3735 9C16.3735 11.494 16.3735 11.7108 16.3735 12.6867C16.3735 13.5542 16.1566 13.988 16.0482 14.3133C15.8313 14.747 15.7229 15.0723 15.3976 15.3976C15.0723 15.7229 14.747 15.9398 14.3133 16.0482C13.988 16.1566 13.5542 16.2651 12.6867 16.3735C11.7108 16.3735 11.494 16.3735 9 16.3735C6.50602 16.3735 6.28916 16.3735 5.31325 16.3735C4.44578 16.3735 4.01205 16.1566 3.68675 16.0482C3.25301 15.8313 2.92771 15.7229 2.60241 15.3976C2.27711 15.0723 2.06024 14.747 1.95181 14.3133C1.84337 13.988 1.73494 13.5542 1.62651 12.6867C1.62651 11.7108 1.62651 11.494 1.62651 9C1.62651 6.50602 1.62651 6.28916 1.62651 5.31325C1.62651 4.44578 1.84337 4.01205 1.95181 3.68675C2.16868 3.25301 2.27711 2.92771 2.60241 2.60241C2.92771 2.27711 3.25301 2.06024 3.68675 1.95181C4.01205 1.84337 4.44578 1.73494 5.31325 1.62651C6.28916 1.62651 6.61446 1.62651 9 1.62651ZM9 0C6.50602 0 6.28916 0 5.31325 0C4.33735 0 3.68675 0.216868 3.14458 0.433736C2.60241 0.650603 2.06024 0.975904 1.51807 1.51807C0.975904 2.06024 0.759037 2.49398 0.433736 3.14458C0.216868 3.68675 0.108434 4.33735 0 5.31325C0 6.28916 0 6.61446 0 9C0 11.494 0 11.7108 0 12.6867C0 13.6627 0.216868 14.3133 0.433736 14.8554C0.650603 15.3976 0.975904 15.9398 1.51807 16.4819C2.06024 17.0241 2.49398 17.241 3.14458 17.5663C3.68675 17.7831 4.33735 17.8916 5.31325 18C6.28916 18 6.61446 18 9 18C11.3855 18 11.7108 18 12.6867 18C13.6627 18 14.3133 17.7831 14.8554 17.5663C15.3976 17.3494 15.9398 17.0241 16.4819 16.4819C17.0241 15.9398 17.241 15.506 17.5663 14.8554C17.7831 14.3133 17.8916 13.6627 18 12.6867C18 11.7108 18 11.3855 18 9C18 6.61446 18 6.28916 18 5.31325C18 4.33735 17.7831 3.68675 17.5663 3.14458C17.3494 2.60241 17.0241 2.06024 16.4819 1.51807C15.9398 0.975904 15.506 0.759037 14.8554 0.433736C14.3133 0.216868 13.6627 0.108434 12.6867 0C11.7108 0 11.494 0 9 0Z"
                fill="white"
              />
              <path
                d="M9 4.33735C6.39759 4.33735 4.33735 6.39759 4.33735 9C4.33735 11.6024 6.39759 13.6627 9 13.6627C11.6024 13.6627 13.6627 11.6024 13.6627 9C13.6627 6.39759 11.6024 4.33735 9 4.33735ZM9 12.0361C7.3735 12.0361 5.96386 10.7349 5.96386 9C5.96386 7.3735 7.26506 5.96386 9 5.96386C10.6265 5.96386 12.0361 7.26506 12.0361 9C12.0361 10.6265 10.6265 12.0361 9 12.0361Z"
                fill="white"
              />
              <path
                d="M13.7711 5.31325C14.3699 5.31325 14.8554 4.82778 14.8554 4.22892C14.8554 3.63005 14.3699 3.14458 13.7711 3.14458C13.1722 3.14458 12.6867 3.63005 12.6867 4.22892C12.6867 4.82778 13.1722 5.31325 13.7711 5.31325Z"
                fill="white"
              />
            </svg>
            <p>Follow our latest updates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
