import { Dispatch, SetStateAction, FC } from "react";
import { Home } from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Home setAssets={setAssets} />
      <div id="about" className="relative min-h-[100svh] w-screen ">
        <h2 className="">The Axolotl story.</h2>
      </div>
    </div>
  );
};

export default LandingView;
