import { Text, Container, Link} from '@chakra-ui/react'

function TextBody(){
    return(
        <>
        <Container paddingTop='10px'>
            <Text fontWeight='350' fontSize='16px'>                
                Hi, I'm Julian, a sophomore at Florida State University who loves to learn about
                anything and everything.<br/><br/>

                <b>Previously:</b> Experienced what working in defense is like.<br/>
                <b>Currently:</b> Building with AI to see how it can make my life easier.<br/>
                <b>Future:</b> Explore the intersection between software and systems engineering.<br/><br/>


                Filipino American, second-year student, South Floridian. <br/><br/>
            </Text>


            <Text>
                <Link href='https://www.linkedin.com/in/julianwsanchez/' textDecoration='underline'>LinkedIn</Link>
                •
                <Link href='https://github.com/jul-san' textDecoration='underline'>GitHub</Link> 
                •
                <Link href='https://www.instagram.com/julianwsanchez/' textDecoration='underline'>Instagram</Link> 
            </Text>
        </Container>
        </>
    )
}

export default TextBody;