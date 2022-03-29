import THREEDContainer from "../components/container-3d";
import BioInformation from "../components/pages/index/bioInformation";
import MotionComponent from "../components/motionComponent";
import Layout from "../components/layouts/article";
import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HeroBiography from "../components/pages/index/heroBio";
import WhatIDo from "../components/pages/index/whatIDo";
import ProgressCircle from "../components/progressCircle";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page = () => {
  return (
    <Layout title="Página Principal">
      <ProgressCircle></ProgressCircle>
      <Box>
        <MotionComponent>
          <SimpleGrid
            columns={[1, 2, 2]}
            spacing={5}
            marginTop={"4em"}
            padding={"2em"}
          >
            <HeroBiography></HeroBiography>
            <THREEDContainer
              model={"./novodev"}
              resizeValue={1}
              thresholdValue={0}
              xValue={"-100vw"}
              delay={0.25}
            ></THREEDContainer>
          </SimpleGrid>
        </MotionComponent>
        <MotionComponent>
          <BioInformation thresholdValue={0.5} delay={0}></BioInformation>
        </MotionComponent>
        <MotionComponent>
          <WhatIDo></WhatIDo>
        </MotionComponent>
      </Box>
    </Layout>
  );
};
// export default function Home...
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index", "navbar"])),
      // Will be passed to the page component as props
    },
  };
}

export default Page;
