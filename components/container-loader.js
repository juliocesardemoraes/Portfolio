import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const CodeSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

const getCanvasSize = (props) => {
  if (props?.valueToResizeCanvas) {
    return 2;
  } else {
    return 1;
  }
};

export const CodeContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="3d-container"
    m="auto"
    mt={["30px", "30px", "30px"]}
    mb={["-40px", "-140px", "-200px"]}
    w={[
      280 * getCanvasSize(children?.props),
      300 * getCanvasSize(children?.props),
      320 * getCanvasSize(children?.props),
    ]}
    h={[
      280 * getCanvasSize(children?.props),
      300 * getCanvasSize(children?.props),
      320 * getCanvasSize(children?.props),
    ]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <CodeContainer>
      <CodeSpinner />
    </CodeContainer>
  );
};

export default Loader;
