import { Heading, Box, chakra, Img, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import ProjectComponent from "./projectComponent";
const ProjectImage = chakra(Img, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "target"].includes(prop),
});

const ProjectDiv = styled.span`
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: scale(1.25);
  }
`;

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading textAlign={"center"} mb={"1.3em"}>
        {t("navbar:projects")}
      </Heading>
      <ProjectComponent></ProjectComponent>
    </>
  );
};

export default Projects;
