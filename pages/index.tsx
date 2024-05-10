import { PageLayout, LandingView } from "@components";
import { NextPage } from "next";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export async function getStaticProps(context: { locale: any }) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
