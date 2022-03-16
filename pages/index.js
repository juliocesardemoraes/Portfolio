import { Container, Box, Heading, Image, chakra } from "@chakra-ui/react";
import { VoxelContainer } from "../components/voxel-container";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Page = () => {
  return (
    <Container>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
        display={{ md: "flex" }}
      >
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Júlio César
          </Heading>
          <p>Desenvolvedor/ UX Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
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
    </Container>
  );
};

export default Page;
