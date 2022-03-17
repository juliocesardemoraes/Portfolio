import THREEDContainer from "../components/container-3d";
import Bio from "../components/pages/bio";
import MotionComponent from "../components/motionComponent";

const Page = () => {
  return (
    <>
      <MotionComponent>
        <THREEDContainer
          model={"./novodev"}
          resizeValue={1}
          thresholdValue={0}
        ></THREEDContainer>
      </MotionComponent>
      <MotionComponent>
        <Bio thresholdValue={0.5}></Bio>
      </MotionComponent>
    </>
  );
};

export default Page;
