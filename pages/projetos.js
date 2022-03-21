import { chakra, Img } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import THREEDContainer from "../components/container-3d";
import Projects from "../components/pages/projects/projects";
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
        resizeValue={4}
        valueToResizeCanvas={2}
        model={"./dev"}
        thresholdValue={0}
        delay={1.5}
      ></THREEDContainer>
    </MotionComponent>
  </Layout>
);

export default Projetos;
