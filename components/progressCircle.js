import { motion } from "framer-motion";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ProgressCircle = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(winScroll);
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box>
      <motion.div
        style={{
          width: "3rem",
          height: "3rem",
          border: `${0.2 + scrollProgress / 250}rem solid ${useColorModeValue(
            "#F6AD55",
            "#6B46C1"
          )}`,
          borderRadius: "50%",
          position: "absolute",
          right: 0,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        animate={{
          top: `${scrollTop}px`,
        }}
      >
        <Heading fontSize={12}>{Math.round(scrollProgress) + "%"}</Heading>
      </motion.div>
    </Box>
  );
};

export default ProgressCircle;
