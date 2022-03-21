import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  chakra,
  Image,
} from "@chakra-ui/react";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

import { motion } from "framer-motion";

const MotionBox = motion(Image);

const MotionBoxExample = () => {
  return (
    <MotionBox
      src="/images/PlayButton.svg"
      position={"absolute"}
      w={"12px"}
      h={"12px"}
      left={"4.4em"}
      top={"4.2em"}
    />
  );
};

const WhatIDo = () => {
  const roundedProgrammingBackground = `/images/ProgrammingRounded${useColorModeValue(
    "",
    ""
  )}.svg`;
  const roundedPlayBackground = `/images/PlayHolder${useColorModeValue(
    "",
    ""
  )}.svg`;

  return (
    <Box
      bg={useColorModeValue("#ffffff40", "#22222A")}
      borderTopRightRadius={"50%"}
      borderBottomLeftRadius={"50%"}
      mt={"15vh"}
      padding={"4em"}
      minH={"620px"}
      display={"flex"}
      justifyContent={"center"}
    >
      <SimpleGrid columns={[1, 2, 2]} gap={"4em"}>
        <Box>
          <motion.div
            animate={{ y: ["0%", "-5%", "0%"], opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Box
              w={"150px"}
              h={"150px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={roundedProgrammingBackground}
                w={"50%"}
                h={"50%"}
              ></Image>
            </Box>
          </motion.div>
          <Box>
            <Heading fontSize={"20px"}>Desenvolvimento</Heading>
            <Text fontWeight={"300"}>
              Javascript HTML/CSS, React.js, Next.js, Node.js, Vue.js,
              Desenvolvimento de sites responsivos, Websocket, Python, C++.
            </Text>
          </Box>
        </Box>
        <Box>
          <motion.div
            animate={{ y: ["0%", "-5%", "0%"], opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Box
              w={"150px"}
              h={"150px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={roundedPlayBackground} w={"50%"} h={"50%"}></Image>
              <Box zIndex={3}>
                <MotionBoxExample></MotionBoxExample>
              </Box>
            </Box>
          </motion.div>
          <Box>
            <Heading fontSize={"20px"}>Animações</Heading>
            <Text fontWeight={"300"}>
              Animações em 2D e 3D. Utilizando Three.js, Framer e CSS.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default WhatIDo;
