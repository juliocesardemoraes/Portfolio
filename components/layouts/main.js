import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "../navbar";
import VoxelContainer from "../voxel-container";
import NoSsr from "../no-ssr";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Júlio César - Pagína principal</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {router?.state?.route !== "/projetos" && (
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
