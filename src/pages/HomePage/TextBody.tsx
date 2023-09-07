import { Text, Container, Link} from '@chakra-ui/react'

function TextBody(){
    return(
        <>
        <Container paddingTop='10px'>
            <Text fontFamily='Roboto Mono' fontSize='14px'>                
                I'm currently studying CS at Florida State University, where most of my days 
                are spent learning about various programming concepts through personal projects 
                or prepping for interviews.<br/><br/>

                In my spare time, I enjoy playing rapid chess where I am a member of FSU's
                chess club, and also regularly play online. I also enjoy playing 
                video games such as Overwatch, Fallout, and Stardew Valley. <br/><br/>

                Filipino American, second-year student, South Floridian. <br/><br/>
            </Text>


            <Text fontFamily='Roboto Mono'>
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