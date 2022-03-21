import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const HeroBiography = (props) => {
  const router = useRouter();

  const handleClick = (route) => {
    if (route === "/projetos") router.push(route);
  };

  return (
    <Box>
      <Text textAlign={"left"} fontWeight={300}>
        Ola meu nome é Júlio César, sou um desenvolvedor fullstack e designer
        focado na experiência de usuário.
      </Text>
      <Heading mt={4} fontWeight={500}>
        Eu te ajudarei a criar experiências imersivas.
      </Heading>
      <Box mt={12}>
        <Button
          fontWeight={500}
          onClick={() => {
            handleClick("/projetos");
          }}
        >
          Veja meus projetos
        </Button>

        <Button
          m={2}
          fontWeight={500}
          border={`0.2rem solid ${useColorModeValue("#F6AD55", "#9F78FB")}`}
          background={"none"}
          opacity={0.85}
          _hover={{ opacity: "1" }}
          onClick={() => {
            handleClick();
          }}
        >
          Contato
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBiography;
