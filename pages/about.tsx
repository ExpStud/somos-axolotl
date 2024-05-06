import { PageLayout, AboutView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout
      footer
      assets={assets}
      headerType={"fixed"}
      headerBackground={"bg-somos-blue"}
    >
      <AboutView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Home;
