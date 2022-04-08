import { Box, useColorModeValue, Image, Text } from "@chakra-ui/react";
import { FaWrench, FaCodepen, FaTasks } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ProjectProcessBoxes = (props) => {
  const { t } = useTranslation();

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100px"}
    >
      <Box
        w={"50px"}
        h={"50px"}
        bg={useColorModeValue("#EEEEEE", "#36363D")}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"50%"}
      >
        <Image
          width={25}
          height={25}
          alt="estrutura"
          as={
            props?.value == "research"
              ? FaWrench
              : props?.value === "prototype"
              ? FaCodepen
              : FaTasks
          }
        />
      </Box>
      <Text>{t(`projects:${props?.value}`)}</Text>
    </Box>
  );
};

export default ProjectProcessBoxes;
