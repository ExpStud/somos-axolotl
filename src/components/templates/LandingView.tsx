import { Dispatch, SetStateAction, FC } from "react";
import {
  Description,
  Home,
  Infographics,
  Partners,
  Donate,
  Goals,
} from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Home setAssets={setAssets} />
      <Description />
      <Infographics />
      <Goals />
      <Partners />
      <Donate />
    </div>
  );
};

export default LandingView;
