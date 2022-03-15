import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../components/layouts/main'
import { AnimatePresence } from "framer-motion";
import Fonts from '../components/fonts'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts></Fonts>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website