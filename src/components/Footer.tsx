import { Text, Container } from '@chakra-ui/react'

function Footer(){
    return(
        <>
        <Container paddingTop='30px' paddingBottom='30px' fontSize='15px' fontFamily='Roboto Mono' color='gray'>
            <Text align='center'>Site last updated 08/29/2023</Text>
        </Container>
        </>
    );
}

export default Footer;