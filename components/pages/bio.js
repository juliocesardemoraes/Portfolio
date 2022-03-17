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
import THREEDContainer from "../container-3d";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Bio = () => {
  return (
    <Box
      bg={useColorModeValue("#ffffff40", "#22222A")}
      borderTopLeftRadius={"50%"}
      borderBottomRightRadius={"50%"}
      padding={"4em"}
    >
      <SimpleGrid columns={2} spacing={10} marginTop={"4em"}>
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
            <Text>Desenvolvedor/ UX Designer</Text>
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
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Heading
            as="h3"
            variant="page-title"
            fontSize={"24px !important"}
            fontWeight={500}
          >
            Olá, meu nome é Júlio.
          </Heading>
          <Text as="h3" variant="page-title" fontWeight={300}>
            E eu estou na eterna busca por um design criativo.
          </Text>
        </Box>
      </SimpleGrid>
      <Container>
        <Box>
          <Text variant="page-title" textAlign={"justify"} padding={"2em"}>
            Meu nome é Júlio César de Moraes Carvalho Filho. Tenho 25 anos, e
            sou formado em sistemas de informação pela faculdade UEMG PASSOS.
          </Text>
        </Box>
        <Box>
          <Heading fontSize={"16px !important"}>
            <Heading color={"#84CA7E"} fontSize={"16px !important"} as="span">
              Tecnologias
            </Heading>{" "}
            Mais Utilizadas no desenvolvimento de softwares.
          </Heading>
          <SimpleGrid columns={4} spacing={5}>
            <THREEDContainer
              model={"./nodejs"}
              resizeValue={4}
            ></THREEDContainer>
            <THREEDContainer
              model={"./js"}
              resizeValue={4}
              accent={["0xffff80", "0x00ff00"]}
            ></THREEDContainer>
            <THREEDContainer
              model={"./mongodb"}
              resizeValue={4}
            ></THREEDContainer>
            <THREEDContainer
              model={"./react"}
              resizeValue={4}
            ></THREEDContainer>
          </SimpleGrid>
        </Box>
      </Container>
      <Container>{/*Adicionar página para contato*/}</Container>
    </Box>
  );
};

export default Bio;
