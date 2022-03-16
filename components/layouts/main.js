import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "../navbar";
import VoxelContainer from "../voxel-container";

const checkOtherRoutes = (router) => {
  if (
    router?.state?.pathname !== "/projetos" &&
    router?.state?.pathname !== "/experiencia"
  ) {
    return true;
  }
};

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Júlio César - Pagína principal</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {checkOtherRoutes(router) && (
          <VoxelContainer model={"./novodev"}></VoxelContainer>
        )}
        {children}
        {router?.state?.route === "/projetos" && (
          <VoxelContainer model={"./dev"}></VoxelContainer>
        )}
      </Container>
    </Box>
  );
};

export default Main;
