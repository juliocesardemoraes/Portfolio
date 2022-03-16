import { Heading, Image, Button, Box, chakra } from "@chakra-ui/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layouts/article";
import styled from "@emotion/styled";

const ProjectImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
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
        Projetos
      </Heading>
    </Box>
    <Box background={"#fff"} borderRadius={"1em"} mt={"1em"}>
      <Box display={"flex"} flexDirection={"row"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={4}
          justifyContent={"space-around"}
        >
          <Box>
            <Heading as="h1" color={"#2A2A2C"}>
              Aprendendo Codando
            </Heading>
            <Heading as="h5" fontSize="12px" fontWeight={300} color={"#2A2A2C"}>
              Website e-learning
            </Heading>
          </Box>
          {/* <ProjectImage
            src="/images/isometricModel.png"
            alt="logo do e-learning"
            borderRadius="1em"
            width="100px"
            height="100px"
          ></ProjectImage>*/}
          <a
            href="https://aprendendo-codando.vercel.app/"
            scroll={false}
            target="_blank"
          >
            <Button
              mt={12}
              colorScheme="blue"
              href="https://aprendendo-codando.vercel.app/"
            >
              Me mostre mais
            </Button>
          </a>
        </Box>
        <ProjectDiv ml={4}>
          <a
            href="https://aprendendo-codando.vercel.app/"
            scroll={false}
            target="_blank"
          >
            <ProjectImage
              src="/images/aprendendoCodando.png"
              alt="imagem do website"
              width="100%"
              height="100%"
              target="_blank"
            ></ProjectImage>
          </a>
        </ProjectDiv>
      </Box>
    </Box>
  </Layout>
);

export default Projetos;