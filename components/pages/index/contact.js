import { Box, Heading, useColorModeValue, IconButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box
      bg={useColorModeValue("#ffffff40", "#22222A")}
      mt={"15vh"}
      padding={"4em"}
      minH={"250px"}
      display={"flex"}
      justifyContent={"center"}
      flexDir={"column"}
      id={"contact"}
      borderRadius={"1em 1em 0 0"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Heading textAlign={"center"}>{t("index:bio_contact")}</Heading>
        <Box
          display={"flex"}
          flexDir={"row"}
          alignContent={"center"}
          justifyContent={"center"}
          mt={"4em"}
        >
          <a
            href="https://github.com/juliocesardemoraes"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton mr={"1em"} as={FaGithub} padding={"0.4em"}></IconButton>
          </a>
          <a
            href="mailto:jcmcf2012@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton
              mr={"1em"}
              aria-label="Toggle theme"
              padding={"0.4em"}
              as={FaGoogle}
            ></IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/julio-cesar-de-moraes/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton
              mr={"1em"}
              aria-label="Toggle theme"
              padding={"0.4em"}
              as={FaLinkedin}
            ></IconButton>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
