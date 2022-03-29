import { Heading, Box } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const Experiencia = () => {
  const { t } = useTranslation();
  return (
    <Layout title="Experiencia">
      <Box textAlign={"center"}>
        <Heading as="h2" variant="page-title">
          {t("navbar:experience")}
        </Heading>
        <Heading as="h2" variant="page-title" pt={"4em"}>
          {t("experiences:working_on")}
        </Heading>
      </Box>
    </Layout>
  );
};
// export default function Home...
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["experiences", "navbar"])),
      // Will be passed to the page component as props
    },
  };
}

export default Experiencia;
