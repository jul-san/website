import { Heading, HStack, Text, Box, Image, Container } from '@chakra-ui/react'

function Head(){
    return(
        <>
        <Container p='50px'>
            <HStack flexDirection={['column-reverse', 'row']} alignItems={['center', 'flex-start']}>
            <Box>
                <Text transitionDelay='10s'> Hey 👋, I'm</Text>
                <Heading
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize={['3xl', '4xl']}
                    fontWeight='extrabold'
                >
                    Julian Sanchez
                </Heading>  
                <Text>
                    Second-year CS student at
                    <Text as='span' fontWeight='extrabold'>
                        {' '}
                        Florida State University.
                    </Text>
                </Text>
                
            </Box>
            <Box ml={{ base: 0, md: '2rem' }} flexShrink={0}>
                <Image
                    borderRadius='full'
                    boxSize={['120px', '150px']}
                    src='src/img/shot.jpeg'
                    alt='Julian Sanchez'
                />
            </Box>
            </HStack>
        </Container>


        </>
    );
}

export default Head;