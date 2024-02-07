import { Heading, Text, Box, Container } from '@chakra-ui/react'

function Head(){
    return(
        <>
        <Container paddingTop='10px' textAlign={['center', 'left']} minWidth={['auto', '300px']} >
                <Box textAlign={['center', 'left']}>
                    <Heading 
                        fontSize={['32px', '35px']}
                        fontWeight='extrabold'
                        paddingTop='10px'
                        >Hi, I'm <Text as="span" color='#7852ee'>Julian</Text>! - :)</Heading>
                </Box>
        </Container>
        </>
    );
}

export default Head;