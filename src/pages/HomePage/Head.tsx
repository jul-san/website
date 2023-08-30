import { Heading, HStack, Text, Box, Image, Container } from '@chakra-ui/react'

function Head(){
    return(
        <>
        <Container paddingTop='20px' textAlign={['center', 'left']} minWidth={['auto', '300px']} >
            <HStack flexDirection={['column', 'row']} alignItems={['center', 'flex-start']}>
                <Image alt="Headshot" 
                        src='src/img/shot.jpeg'
                        borderRadius='full'
                        boxSize='100px'/>

                <Box textAlign={['center', 'left']}>
                    <Heading fontFamily='Roboto Mono'
                        bgGradient='linear(to-l, #51c26f, #f2e901)'
                        bgClip='text'
                        fontSize={['32px', '35px']}
                        fontWeight='extrabold'
                        paddingTop='10px'
                        >Julian Sanchez</Heading>

                    <Text fontFamily='Roboto Mono' 
                            fontSize={['16px', '20px']} 
                            overflow="hidden">Undergraduate | Software Engineer</Text>
                </Box>
            </HStack>
        </Container>
        </>
    );
}

export default Head;