import Navbar from '../../components/Navbar';
import Section from '../ResumePage/Section';
import PDF from "/resume.pdf"
import { Heading, Container, Link, Text} from "@chakra-ui/react";

function ResumePage(){
    return(
        <>
            <Navbar/>

            <Container>


                <Link href={PDF} style={{ cursor: 'pointer' }} fontWeight="bold" >
                {'['}
                    <Text as="span" color="purple.500" display="inline">
                        PDF Version
                    </Text>
                {']'}
                </Link>

                <Heading paddingTop='10px' paddingBottom='10px'>Education</Heading>
                <Section name="Florida State University" position='Bachelor of Science in Computer Science' date='Expected Graduation May 2026' img='/img/fsu-logo.png'/>
                
                <Heading paddingTop='30px' paddingBottom='10px'>Experience</Heading>
                <Section name="Massachusetts Institute of Technology" position="Summer Research Intern" date='May 2024 - August 2024' img='/img/mit.png'></Section>
                <Section name="DeVoe L. Moore Center" position="Data Analytics Intern" date='January 2024 - may 2024' img='/img/devoe.png'></Section>
                <Section name="Northrop Grumman" position='Software Engineer Intern' date='May 2023 - July 2023' img='/img/ng-logo.png'/>
                <Section name="Code Ninjas" position='Code Sensei' date='May 2022 - August 2022' img='/img/code-ninjas.png'/>

                <Heading paddingTop='30px' paddingBottom='10px'>Involvement</Heading>
                <Section name="The Torch Society" position='Spark' date='January 2024 - Present' img='/img/torch.png'/>
                <Section name="Society of Asian Scientists and Engineers" position='Vice President-Internal' date='May 2023 - Present' img='/img/sasefull.png'/>
                <Section name="eSports at FSU" position='Gold Team - Overwatch 2' date='September 2023 - November 2023' img='/img/esports2.png'/>
                <Section name="Chess Club" position='Member' date='November 2022 - Present' img='/img/chesswt.png'/>

            </Container>

        </>
    )
}

export default ResumePage;
