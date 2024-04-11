import { PageLayout, LandingView } from "@components";
import { NextPage } from "next";
import { useState } from "react";
import { useWindowSize } from "src/hooks";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);
  const [winWidth, winHeight] = useWindowSize();
  return (
    <PageLayout
      footer={false}
      assets={assets}
      headerType={winWidth < 1024 ? "fixed" : "absolute"}
    >
      <LandingView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Home;
