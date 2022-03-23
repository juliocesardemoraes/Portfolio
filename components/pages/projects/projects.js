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
      <Box textAlign={"center"} marginTop={"2em"}>
        <Heading as="h2" variant="page-title">
          Projetos
        </Heading>
      </Box>
      <Box background={"#fff"} borderRadius={"1em"} mt={"1em"} padding={"4em"}>
        <Box display={"flex"} flexDirection={"row"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            p={2}
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
                marginBottom={"2em"}
              >
                Website de aprendizado
              </Heading>
            </Box>
            <a
              href="https://aprendendo-codando.vercel.app/"
              scroll={"false"}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                colorScheme={"facebook"}
                href="https://aprendendo-codando.vercel.app/"
                width={"100%"}
                height={"2.5rem"}
              >
                Me mostre mais
              </Button>
            </a>
          </Box>
          <ProjectDiv ml={4}>
            <a
              href="https://aprendendo-codando.vercel.app/"
              scroll={"false"}
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
