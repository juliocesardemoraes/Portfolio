import { Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const MotionComponent = ({ children }) => {
  const animationControl = useAnimation();
  const { inView, entry, ref } = useInView({
    threshold: children?.props?.thresholdValue || 0,
  });
  if (inView) {
    animationControl.start({
      x: 0,
      opacity: 1,
      transition: {
        delay: children?.props?.delay || 1,
      },
    });
  }

  return (
    <Box ref={ref}>
      <motion.div
        initial={{
          x: children?.props?.xValue || "100vw",
          opacity: "0%",
        }}
        animate={animationControl}
        className="box"
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default MotionComponent;
