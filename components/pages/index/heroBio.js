import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const HeroBiography = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleClick = (route) => {
    if (route === "/projetos") router.push(route);
  };

  return (
    <Box>
      <Text textAlign={"left"} fontWeight={300}>
        {t("index:bio_introducing")}
      </Text>
      <Heading mt={4} fontWeight={500}>
        {t("index:i_will_help_you")}
      </Heading>
      <Box mt={12}>
        <Button
          fontWeight={500}
          onClick={() => {
            handleClick("/projetos");
          }}
        >
          {t("index:see_projects")}
        </Button>
        <a href="#contact">
          <Button
            m={2}
            fontWeight={500}
            border={`0.2rem solid ${useColorModeValue("#F6AD55", "#9F78FB")}`}
            background={"none"}
            opacity={0.85}
            _hover={{ opacity: "1" }}
          >
            {t("common:contact")}
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default HeroBiography;
