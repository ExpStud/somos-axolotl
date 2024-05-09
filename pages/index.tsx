import { PageLayout, LandingView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  const [isHomeInView, setIsHomeInView] = useState(true);

  const handleViewChange = (value: boolean) => {
    setIsHomeInView(value);
  };

  return (
    <PageLayout
      footer
      assets={assets}
      headerType={"fixed"}
      headerBackground={isHomeInView ? "bg-opacity-80" : "bg-opacity-100"}
    >
      <LandingView setAssets={setAssets} handleViewChange={handleViewChange} />
    </PageLayout>
  );
};
export default Home;
