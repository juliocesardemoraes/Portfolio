import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    opacity: 70%;
    transition: 200ms ease;
  }
  &:hover img {
    transform: translateY(-5px) scale(0.65);
    opacity: 100% !important;
  }
`;

const Logo = () => {
  const footPrintImg = `/images/isometricModel${useColorModeValue(
    "",
    "-dark"
  )}.png`;

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} mr={4} width={30} height={30} alt="logo" />
          <Text
            mt={2.5}
            ml={2}
            textAlign="center !important"
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontWeight="bold"
          >
            Júlio César
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
