import { Heading, Box, SimpleGrid, Text } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import THREEDContainer from "../components/container-3d";
import Contact from "../components/pages/index/contact";
const Experiencia = () => {
  const { t } = useTranslation();
  return (
    <Layout title="Experiencia">
      <Box textAlign={"center"}>
        <Heading as="h2" variant="page-title">
          {t("navbar:experience")}
        </Heading>
        <SimpleGrid
          columns={[1, 1, 2]}
          spacing={5}
          marginTop={"1em"}
          padding={"2em"}
        >
          <THREEDContainer
            model={"./techNew"}
            resizeValue={1}
            thresholdValue={0}
            xValue={"-100vw"}
            delay={0.25}
          ></THREEDContainer>
          <Box
            height={"450px"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            flexDir={"column"}
          >
            <Heading fontSize={"48px"} fontWeight={"900"}>
              Tech4humans
            </Heading>
            <Text fontWeight={300}>Fullstack junior developer</Text>
            <Text fontWeight={300}>{t("experiences:experience_time")}</Text>
            <Text mt={"2em"}>{t("experiences:experience_tech")}</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Contact></Contact>
    </Layout>
  );
};
// export default function Home...
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "experiences",
        "navbar",
        "index",
        "projects",
      ])),
      // Will be passed to the page component as props
    },
  };
}

export default Experiencia;
