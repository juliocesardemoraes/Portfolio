import {
  Box,
  useColorModeValue,
  Heading,
  Image,
  chakra,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ProjectImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "target"].includes(prop),
});
const ProjectHeader = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        <Box
          w={"50px"}
          h={"50px"}
          borderRadius={"1em"}
          bg={useColorModeValue("#EEEEEE", "#36363D")}
          display={"flex"}
        >
          <ProjectImage
            src={`/images/${props?.projectName}Logo.png`}
            alt="logo do site aprendendo codando"
            width="50px"
            height="50px"
          ></ProjectImage>
        </Box>
        <Heading as="h2" size={"md"} ml={"1em"}>
          {t(`projects:${props?.projectName}`)}
        </Heading>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Heading as="h2" fontWeight={"300"} size={"md"} marginRight={"1em"}>
          Júlio César
        </Heading>
        <Box
          w={"50px"}
          h={"50px"}
          borderRadius={"1em"}
          bg={useColorModeValue("#ffffff40", "#2C2C37")}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ProjectImage
            src={`/images/JulioCesar.png`}
            alt="imagem do autor"
            width="50px"
            height="50px"
            borderRadius={"1em"}
          ></ProjectImage>
        </Box>
      </Box>
    </>
  );
};

export default ProjectHeader;
