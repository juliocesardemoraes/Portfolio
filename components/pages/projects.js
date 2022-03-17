import { Heading, Button, Box, chakra, Img } from "@chakra-ui/react";
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

const Projects = () => {
  return (
    <>
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
              <Heading as="h1" color={"#7456F0"}>
                Aprendendo Codando
              </Heading>
              <Heading
                as="h3"
                fontSize="18px"
                fontWeight={300}
                color={"#4E32BF"}
              >
                Website de aprendizado
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
              rel="noreferrer"
            >
              <Button
                mt={12}
                colorScheme={"facebook"}
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
              rel="noreferrer"
            >
              <ProjectImage
                src="/images/AprendendoCodando.png"
                alt="imagem do website do portfolio"
                width="100%"
                height="100%"
              ></ProjectImage>
            </a>
          </ProjectDiv>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
