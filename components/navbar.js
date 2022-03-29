import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Img,
  chakra,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { IoBarChartSharp, IoCodeSlash } from "react-icons/io5";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        display={"flex"}
        flexDir={"row"}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const ProjectImage = chakra(Img, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "target"].includes(prop),
});

const renderFlag = (language) => {
  const Flag = (flagName) => {
    return (
      <ProjectImage
        src={`/images/${flagName.flagName}.png`}
        alt="imagem de uma bandeira"
        width="32px"
        height="32px"
      ></ProjectImage>
    );
  };
  if (language === "en") {
    return <Flag flagName={"brasilFlag"}></Flag>;
  } else {
    return <Flag flagName={"unitedStatesFlag"}></Flag>;
  }
};

const Navbar = (props) => {
  const { path } = props;
  const router = useRouter();
  const { t } = useTranslation();

  const SelectLanguage = () => {
    const language = router.locale;
    return (
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          style={{ display: "inline-block" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            language = language === "pt-BR" ? "en" : "pt-BR";

            router.push(router.route, router.asPath, {
              locale: language === "pt-BR" ? "pt-BR" : "en",
            });
          }}
        >
          <IconButton
            mr={"1em"}
            aria-label="Toggle theme"
            colorScheme={language === "pt-BR" ? "blue" : "green"}
            icon={renderFlag(language)}
          ></IconButton>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <motion.div
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
          w={["95vw", "100%", "100%"]}
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              <Logo />
            </Heading>
          </Flex>

          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem
              href="/projetos"
              path={path}
              display="flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <IoCodeSlash />
              {t("navbar:projects")}
            </LinkItem>

            <LinkItem
              href="/experiencia"
              path={path}
              display="flex"
              alignItems="center"
              flexDirection="row"
              pl={2}
            >
              <IoBarChartSharp />
              {t("navbar:experience")}
            </LinkItem>
          </Stack>

          <Box flex={1} display={"flex"} justifyContent={"flex-end"}>
            <SelectLanguage />
            <ThemeToggleButton />

            <Box display={{ base: "inline-block", md: "none" }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem
                    as={Link}
                    href="https://github.com/juliocesardemoraes/Portfolio"
                  >
                    {t("navbar:source_code")}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
