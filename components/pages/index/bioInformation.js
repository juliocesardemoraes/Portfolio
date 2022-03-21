import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  Container,
  chakra,
  Image,
} from "@chakra-ui/react";
import THREEDContainer from "../../container-3d";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const BioInformation = () => {
  return (
    <Box
      bg={useColorModeValue("#ffffff40", "#22222A")}
      borderTopLeftRadius={"50%"}
      borderBottomRightRadius={"50%"}
      mt={"15vh"}
      padding={"4em"}
      minH={"620px"}
    >
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" fontWeight={700}>
            Júlio César
          </Heading>
          <Text color={useColorModeValue("rgb(80, 31, 187)", "#9F78FB")}>
            Desenvolvedor/ UX Designer
          </Text>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 4 }} textAlign="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/juliocesar.png"
              alt="imagem de perfil"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Container>
        <Box>
          <Text variant="page-title" textAlign={"justify"} padding={"2em"}>
            Tenho 25 anos, e sou formado em sistemas de informação pela
            faculdade UEMG PASSOS. Abaixo estão as tecnologias que eu utilizo
            para desenvolver aplicações.
          </Text>
        </Box>
        <Box>
          <Heading fontSize={"16px !important"}>
            <Heading color={"#84CA7E"} fontSize={"16px !important"} as="span">
              Tecnologias
            </Heading>{" "}
            que mais utilizo.
          </Heading>
          <SimpleGrid columns={[2, 2, 4]} spacing={5}>
            <THREEDContainer
              model={"./nodejs"}
              resizeValue={4}
              valueToResizeCanvas={2}
            ></THREEDContainer>
            <THREEDContainer
              model={"./js"}
              resizeValue={4}
              valueToResizeCanvas={2}
              accent={["0xffff80", "0x00ff00"]}
            ></THREEDContainer>
            <THREEDContainer
              model={"./mongodb"}
              resizeValue={4}
              valueToResizeCanvas={2}
            ></THREEDContainer>
            <THREEDContainer
              model={"./react"}
              resizeValue={4}
              valueToResizeCanvas={2}
            ></THREEDContainer>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default BioInformation;
