import { PageLayout, AboutView } from "@components";
import { NextPage } from "next";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Team: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([]);

  return (
    <PageLayout
      footer
      assets={assets}
      headerType={"fixed"}
      // headerBackground={"bg-somos-blue"}
    >
      <AboutView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Team;

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
