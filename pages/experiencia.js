import { Heading, Button, Box, chakra, Img } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import styled from "@emotion/styled";

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

const Projetos = () => (
  <Layout title="Projetos">
    <Box textAlign={"center"}>
      <Heading as="h2" variant="page-title">
        Experiência
      </Heading>
      <Heading as="h2" variant="page-title" pt={"4em"}>
        WORKING ON IT
      </Heading>
    </Box>
  </Layout>
);

export default Projetos;
