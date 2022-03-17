import THREEDContainer from "../components/container-3d";
import Bio from "../components/pages/bio";
import MotionComponent from "../components/motionComponent";
import Layout from "../components/layouts/article";

const Page = () => {
  return (
    <Layout title="Página Principal">
      <MotionComponent>
        <THREEDContainer
          model={"./novodev"}
          resizeValue={1}
          thresholdValue={0}
          xValue={"-100vw"}
        ></THREEDContainer>
      </MotionComponent>
      <MotionComponent>
        <Bio thresholdValue={0.5}></Bio>
      </MotionComponent>
    </Layout>
  );
};

export default Page;
