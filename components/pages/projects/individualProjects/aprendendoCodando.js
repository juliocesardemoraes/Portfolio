import {
  Box,
  useColorModeValue,
  Heading,
  Image,
  chakra,
  Text,
  Divider,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaWrench, FaCodepen, FaTasks } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ProjectNav from "../common/projectNav";

const AprendendoCodando = (props) => {
  const { t } = useTranslation();
  const renderProcessBoxes = (value) => {
    return (
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100px"}
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
            as={
              value == "research"
                ? FaWrench
                : value === "prototype"
                ? FaCodepen
                : FaTasks
            }
          />
        </Box>
        <Text>{t(`projects:${value}`)}</Text>
      </Box>
    );
  };

  return (
    <>
      <ProjectNav
        projectName={props?.projectName}
        display={"none"}
      ></ProjectNav>
      <Box
        bg={useColorModeValue("#ffffff40", "#2F2F3E")}
        height={"600px"}
        overflowY={"auto"}
        padding={"1em 0 1em 0"}
      >
        <Box id={`${props?.projectName}Structure`}>
          <Box ml={"1em"}>
            <Heading
              as={"h3"}
              fontWeight={"500"}
              fontSize={"22px"}
              mt={"2em"}
              fontStyle={"italic"}
            >
              {t("projects:website_motto")}
            </Heading>

            <Heading mt={"1.5em"} textAlign={"center"}>
              {t("projects:challenge")}
            </Heading>
            <Text mt={"1em"}>{t("projects:challenge_context")}</Text>

            <Heading mt={"1em"} textAlign={"center"}>
              {t("projects:process")}
            </Heading>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              m={"2em 1em 1em 1em"}
            >
              {renderProcessBoxes("research")}
              {renderProcessBoxes("prototype")}
              {renderProcessBoxes("validation")}
            </Box>
            <Box mt={"2em"}>
              <Heading
                as={"h2"}
                fontWeight={"500"}
                fontSize={"32px"}
                textAlign={"center"}
              >
                {t("projects:research")}
              </Heading>
              <Text mt={"1em"}>{t("projects:research_context")}</Text>
              <OrderedList mt={"2em"}>
                <ListItem>{t("projects:deprecated_content")}</ListItem>
                <ListItem>{t("projects:non_intuitive_knowledge")}</ListItem>
                <ListItem>{t("projects:bad_design")}</ListItem>
                <ListItem>{t("projects:bad_usability")}</ListItem>
              </OrderedList>
            </Box>
            <Divider m={"1em 0 1em 0"}></Divider>
            <Box>
              <Heading
                as={"h2"}
                fontWeight={"500"}
                fontSize={"32px"}
                textAlign={"center"}
              >
                {t("projects:prototype")}
              </Heading>
              <Text mt={"1em"}>{t("projects:prototype_context")}</Text>
              <Text m={"3em"} textAlign={"center"} fontWeight={"700"}>
                {t("projects:wireframing_types")}
              </Text>

              <Heading
                as={"h2"}
                fontWeight={"400"}
                fontSize={"24px"}
                textAlign={"center"}
                mt={"1em"}
              >
                {t("projects:lofi_wireframe")}
              </Heading>
              <Text mt={"1em"}>{t("projects:lofi_wireframe_context")}</Text>

              <Heading
                as={"h2"}
                fontWeight={"400"}
                fontSize={"24px"}
                textAlign={"center"}
                mt={"1em"}
              >
                {t("projects:hifi_wireframe")}
              </Heading>
              <Text mt={"1em"}>
                {t("projects:hifi_wireframe_context")}

                <a
                  href="https://www.figma.com/file/3zCel9M9rh9OpO2S62YJiC/Aprendendo-a-codar?node-id=0%3A1"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  Aprendendo Codando
                </a>
              </Text>

              <Heading
                as={"h2"}
                fontWeight={"500"}
                fontSize={"32px"}
                textAlign={"center"}
                mt={"1em"}
              >
                {t("projects:validate_result")}
              </Heading>
              <Text mt={"1em"}>
                {t("projects:result_context")}
                <a
                  href="https://aprendendo-codando.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  Aprendendo Codando
                </a>
              </Text>
            </Box>
          </Box>

          <Image
            src={`/images/${props?.projectName}Structure.png`}
            alt="Estrutura do website"
            width={"100%"}
            padding={"1em"}
            borderRadius="2em"
          ></Image>
        </Box>
        <Box id={`${props?.projectName}Tech`} ml={"1em"}>
          <Heading textAlign={"center"}>{t("index:bio_tech")}</Heading>
          <Text mt={"1em"}>{t("projects:used_tech")}</Text>
          <OrderedList mt={"2em"}>
            <ListItem>Next.js</ListItem>
            <ListItem>Vercel</ListItem>
            <ListItem>Mongo.js</ListItem>
          </OrderedList>
        </Box>
      </Box>
    </>
  );
};

export default AprendendoCodando;
