import { Text, Container, Link } from '@chakra-ui/react'

function Footer(){
    return(
        <>
        <Container paddingTop='10px'>
        <Text fontWeight='350' fontSize='16px'>
        Filipino American, Software Engineer, South Floridian.<br/><br/>
        </Text>
        <Text>
            <b>[<Link href='https://www.linkedin.com/in/julianwsanchez/' color='#7852ee'>LinkedIn</Link>]</b>
                •
                <b>[<Link href='https://github.com/jul-san' color='#7852ee'>GitHub</Link>]</b>
                •
                <b>[<Link href='https://www.instagram.com/julianwsanchez/' color='#7852ee'>Instagram</Link>]</b>
            </Text>

        </Container>

        <Container paddingTop='30px' paddingBottom='30px' fontSize='15px' color='gray'>
            <Text align='center'>Site last updated 02/06/2024</Text>
        </Container>
        </>
    );
}

export default Footer;