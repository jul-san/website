import { Text, Container, Link, Heading} from '@chakra-ui/react'

function TextBody(){
    return(
        <>
        <Container paddingTop='10px'>
            <Text fontWeight='350' fontSize='16px'>                
                I'm a second-year undergraduate at <b>[<Link href='https://www.fsu.edu' color='#7852ee'>Florida State University</Link>]</b> majoring in computer science and minoring in 
                mathematics.<br/><br/>

                My future aspiration is to break into the tech industry. However, I'm still determining the specific niche I'd like to go into.<br/><br/>

                Some potential fields that I'm exploring right now are software engineering, data science, UI/UX, research, and AI/ML.<br/><br/>
                
                <Heading 
                        fontSize={['22px', '25px']}
                        fontWeight='extrabold'
                        paddingBottom='10px'
                        >I Like to <Text as="span" color='#7852ee'>Build</Text></Heading>
                I previously interned at <b>[<Link href='https://www.northropgrumman.com/' color='#7852ee'>Northrop Grumman</Link>]</b>, where
                I developed software for the <b>[<Link href='https://www.northropgrumman.com/what-we-do/air/b-21-raider' color='#7852ee'>B-21 Raider</Link>]</b>,
                the next generation of stealth bomber aviation for the U.S. Air Force.<br/><br/>

                Currently, I'm an intern at the <b>[<Link href='https://coss.fsu.edu/dmc/' color='#7852ee'>DeVoe L. Moore Center</Link>]</b>, where I'm modeling relationships
                in the education industry and modernizing the <b>[<Link href='https://www.floridaopengov.org/' color='#7852ee'>Florida Open Gov</Link>]</b> website.<br/><br/>

                <Heading 
                        fontSize={['22px', '25px']}
                        fontWeight='extrabold'
                        paddingBottom='10px'
                        >I Like to <Text as="span" color='#7852ee'>Cherish</Text></Heading>

                In my free time, I enjoy playing video games, cooking (and eating), playing chess, 
                building Legos, <b>[<Link href='https://open.spotify.com/user/31nvmp25h2eqhcih2re43lwcsjee' color='#7852ee'>listening to indie pop and R&B</Link>]</b>, 
                binge-watching animes, and collecting Gudetamas.  <br/><br/>

                I also love spending time with people and making memories! Here's some of them:


            </Text>

        </Container>
        </>
    )
}

export default TextBody;