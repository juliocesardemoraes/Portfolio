import NextLink from "next/link";
import { Box, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { IoBarChartSharp, IoCodeSlash } from "react-icons/io5";

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
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Footer = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      left={0}
      bottom={0}
      bg={useColorModeValue("#ffffff40", "#7841b980")}
      width="100vw"
      zIndex={10}
      {...props}
    >
      <Stack
        direction={{ base: "row", md: "row" }}
        display={{ base: "flex", md: "none" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        justifyContent={"space-around"}
        flexGrow={1}
      >
        <LinkItem
          href="/projetos"
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
        >
          <IoCodeSlash />
          Projetos
        </LinkItem>
        <LinkItem
          href="/experiencia"
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
        >
          <IoBarChartSharp />
          Experiência
        </LinkItem>
      </Stack>
    </Box>
  );
};
export default Footer;
