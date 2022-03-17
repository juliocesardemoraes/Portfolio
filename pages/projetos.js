import { Heading, Button, Box, chakra, Img } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import styled from "@emotion/styled";
import THREEDContainer from "../components/container-3d";
import Projects from "../components/pages/projects";
import MotionComponent from "../components/motionComponent";

const ProjectImage = chakra(Img, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "target"].includes(prop),
});

const Projetos = () => (
  <Layout title="Projetos">
    <MotionComponent>
      <Projects></Projects>
    </MotionComponent>
    <MotionComponent>
      <THREEDContainer
        resizeValue={1}
        model={"./dev"}
        thresholdValue={0.5}
      ></THREEDContainer>
    </MotionComponent>
  </Layout>
);

export default Projetos;
