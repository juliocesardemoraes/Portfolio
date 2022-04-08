import { Box, useColorModeValue, Heading, Image } from "@chakra-ui/react";
import { FaHubspot, FaWrench, FaCode, FaFirefoxBrowser } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const linkObject = {
  AprendendoCodando: {
    site: "https://aprendendo-codando.vercel.app/",
    code: "https://github.com/juliocesardemoraes/AprendendoCodando",
  },
};

const ProjectNav = (props) => {
  const { t } = useTranslation();

  return (
    <Box
      position={"absolute"}
      right={"-150px"}
      top={"170px"}
      display={{ base: "none", sm: "none", md: "block", lg: "block" }}
    >
      <Box
        w={"100px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        opacity={"85%"}
        _hover={{
          opacity: "100%",
          cursor: "pointer",
        }}
      >
        <a
          href={`#${props?.projectName}Structure`}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            w={"50px"}
            h={"50px"}
            bg={useColorModeValue("#EEEEEE", "#36363D")}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
          >
            <Image width={25} height={25} alt="estrutura" as={FaHubspot} />
          </Box>
          <Heading
            fontSize={"18px"}
            textAlign={"center"}
            fontWeight={"500"}
            maxWidth={"100px"}
          >
            {t("projects:website_structure")}
          </Heading>
        </a>
      </Box>
      <Box
        w={"100px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        opacity={"85%"}
        mt={"2em"}
        _hover={{
          opacity: "100%",
          cursor: "pointer",
        }}
      >
        <a
          href={`#${props?.projectName}Tech`}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            w={"50px"}
            h={"50px"}
            bg={useColorModeValue("#EEEEEE", "#36363D")}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
          >
            <Image width={25} height={25} alt="estrutura" as={FaWrench} />
          </Box>
          <Heading
            fontSize={"18px"}
            textAlign={"center"}
            fontWeight={"500"}
            maxWidth={"100px"}
          >
            {t("index:bio_tech")}
          </Heading>
        </a>
      </Box>
      <Box
        w={"100px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        opacity={"85%"}
        mt={"2em"}
        _hover={{
          opacity: "100%",
          cursor: "pointer",
        }}
      >
        <a
          href={linkObject[props?.projectName].site}
          rel="noopener noreferrer"
          target="_blank"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            w={"50px"}
            h={"50px"}
            bg={useColorModeValue("#EEEEEE", "#36363D")}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
          >
            <Image
              width={25}
              height={25}
              alt="estrutura"
              as={FaFirefoxBrowser}
            />
          </Box>
          <Heading
            fontSize={"18px"}
            textAlign={"center"}
            fontWeight={"500"}
            maxWidth={"100px"}
          >
            Website
          </Heading>
        </a>
      </Box>
      <Box
        w={"100px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        opacity={"85%"}
        mt={"2em"}
        _hover={{
          opacity: "100%",
          cursor: "pointer",
        }}
      >
        <a
          href={linkObject[props?.projectName].code}
          rel="noopener noreferrer"
          target="_blank"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            w={"50px"}
            h={"50px"}
            bg={useColorModeValue("#EEEEEE", "#36363D")}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
          >
            <Image width={25} height={25} alt="estrutura" as={FaCode} />
          </Box>
          <Heading
            fontSize={"18px"}
            textAlign={"center"}
            fontWeight={"500"}
            maxWidth={"100px"}
          >
            {t("projects:code")}
          </Heading>
        </a>
      </Box>
    </Box>
  );
};

export default ProjectNav;
