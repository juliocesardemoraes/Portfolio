import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const MotionBox = motion(Image);

// Custom framer motion component that supports image
const MotionBoxChildren = (props) => {
  return (
    <MotionBox
      src={`/images/${props?.imageName}.svg`}
      position={"absolute"}
      w={props?.imageWidth || "12px"}
      h={props?.imageHeight || "12px"}
      left={props?.left || "4.4em"}
      top={props?.top || "4.2em"}
      animate={props?.animate || { y: ["0%", "25%", "0%"], opacity: 1 }}
      transition={props?.transition || { repeat: Infinity, duration: 2 }}
      zIndex={props?.zIndex}
    />
  );
};

const WhatIDo = () => {
  const { t } = useTranslation();

  return (
    <Box
      bg={useColorModeValue("#ffffff40", "#22222A")}
      borderTopRightRadius={"50%"}
      borderBottomLeftRadius={"50%"}
      mt={"15vh"}
      padding={"4em"}
      minH={"620px"}
      paddingBottom={"16em"}
      display={"flex"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Heading textAlign={"left"}>Skills</Heading>
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
                alt={"Programming icon rounded"}
                src={"/images/ProgrammingRounded.svg"}
                w={"50%"}
                h={"50%"}
              ></Image>
            </Box>
          </motion.div>
          <Box>
            <Heading fontSize={"20px"}>{t("index:bio_development")}</Heading>
            <Text fontWeight={"300"}>{t("index:bio_development_content")}</Text>
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
              <Image src={"/images/PlayHolder.svg"} w={"50%"} h={"50%"} alt={"Hovering play button"}></Image>
              <Box zIndex={3}>
                <MotionBoxChildren imageName={"PlayButton"}></MotionBoxChildren>
              </Box>
            </Box>
          </motion.div>
          <Box>
            <Heading fontSize={"20px"}>{t("index:bio_animation")}</Heading>
            <Text fontWeight={"300"}>{t("index:bio_animation_content")}</Text>
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
              <Image src={"/images/UXUI.svg"} w={"50%"} h={"50%"} alt={"UX/UI Icon"}></Image>
              <Box zIndex={3}>
                <MotionBoxChildren
                  imageName={"FloatingCellPhone"}
                  imageHeight={"26px"}
                  imageWidth={"26px"}
                  left={"3.0em"}
                  top={"3.2em"}
                  animate={{
                    y: ["0%", "75%", "0%"],
                    opacity: 1,
                  }}
                ></MotionBoxChildren>
              </Box>
              <Box zIndex={3}>
                <MotionBoxChildren
                  imageName={"Dots"}
                  top={"2.83em"}
                  left={"5.341em"}
                  imageHeight={"7.7px"}
                  imageWidth={"7.5px"}
                  animate={{
                    y: ["0%", "160%", "0%"],
                    opacity: 1,
                  }}
                ></MotionBoxChildren>
              </Box>
            </Box>
          </motion.div>
          <Box>
            <Heading fontSize={"20px"}>{t("index:bio_userexperience")}</Heading>
            <Text fontWeight={"300"}>
              {t("index:bio_userexperience_content")}
            </Text>
          </Box>
        </Box>
        <Box>
          <motion.div
            animate={{ y: "0%", opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Box
              w={"150px"}
              h={"150px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box>
                <MotionBoxChildren
                  imageName={"UniverseHolderB"}
                  imageHeight={"50%"}
                  imageWidth={"50%"}
                  left={"0.5em"}
                  top={"2em"}
                  animate={{
                    y: ["0%", "-5%", "0%"],
                    opacity: 1,
                  }}
                  zIndex={"1"}
                ></MotionBoxChildren>
                <MotionBoxChildren
                  imageName={"PlanetMain"}
                  imageHeight={"27%"}
                  imageWidth={"27%"}
                  left={"2.45em"}
                  top={"2.5em"}
                  zIndex={"2"}
                ></MotionBoxChildren>
                <MotionBoxChildren
                  imageName={"PlanetBigger"}
                  imageHeight={"5%"}
                  imageWidth={"5%"}
                  opacity={"70%"}
                  left={"3em"}
                  top={"3em"}
                  animate={{
                    x: ["0%", "100%", "0%"],
                    y: ["0%", "175%", "0%"],
                    zIndex: ["2", "2", "2"],
                    opacity: 1,
                  }}
                ></MotionBoxChildren>
                <MotionBoxChildren
                  imageName={"PlanetOrange"}
                  imageHeight={"5%"}
                  imageWidth={"5%"}
                  opacity={"70%"}
                  left={"6em"}
                  top={"4.5em"}
                  animate={{
                    x: ["0%", "-50%", "0%"],
                    y: ["0%", "150%", "0%"],
                    zIndex: ["2", "1", "1"],
                    opacity: 1,
                  }}
                ></MotionBoxChildren>
                <MotionBoxChildren
                  imageName={"PlanetPurple"}
                  imageHeight={"5%"}
                  imageWidth={"5%"}
                  opacity={"70%"}
                  left={"6em"}
                  top={"3em"}
                  animate={{
                    x: ["0%", "-50%", "0%"],
                    y: ["0%", "-150%", "0%"],
                    zIndex: ["2", "1", "1"],
                    opacity: 1,
                  }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                ></MotionBoxChildren>
              </Box>
            </Box>
          </motion.div>
          <Box>
            <Heading fontSize={"20px"}>{t("index:bio_illustration")}</Heading>
            <Text fontWeight={"300"}>
              {t("index:bio_illustration_content")}
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default WhatIDo;
