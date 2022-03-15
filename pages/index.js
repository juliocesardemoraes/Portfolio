import { Container, Box, Heading} from '@chakra-ui/react'

const Page = () =>{ 
    return (
        <Container>
            <Box>
                I'm a full stack developer
            </Box>
            <Box display={{md: 'flex'}}></Box>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Júlio César
                    </Heading>
                    <p>Frontend Developer/ Backend Engineer</p>
                </Box>
        </Container>
    )
}

export default Page; 