import Navbar from '../../components/Navbar';
import Section from '../ResumePage/Section';
import PDF from "/resume.pdf"
import { Heading, Container} from "@chakra-ui/react";

function ResumePage(){
    return(
        <>
            <Navbar/>

            <Container>

            <a  href={PDF}
                style={{ 
                    cursor: 'pointer', 
                    textDecoration: 'underline'
                    }}>View Full PDF Here</a>

                <Heading paddingTop='10px'>Education</Heading>
                <Section name="Florida State University" position='B.S. in Computer Science' date='Expected Grad. May 2026' img='src/img/fsu.png'/>
                
                <Heading paddingTop='30px'>Experience</Heading>
                <Section name="Massachusetts Institute of Technology" position="Summer Research Intern" date='May 2024 - August 2024' img='src/img/mit.png'></Section>
                <Section name="Northrop Grumman" position='Software Engineer Intern' date='May 2023 - July 2023' img='src/img/northrop.png'/>
                <Section name="Code Ninjas" position='Code Sensei' date='May 2022 - August 2022' img='src/img/cnt.png'/>
                <Section name="FIRST Robotics" position='Programmer' date='August 2018 - May 2022' img='src/img/frc.png'/>

                <Heading paddingTop='30px'>Involvement</Heading>
                <Section name="Society of Asian Scientists and Engineers" position='Vice President-Internal' date='May 2023 - Present' img='src/img/sasefull.png'/>
                <Section name="Chess Club" position='Member' date='November 2022 - Present' img='src/img/chesswt.png'/>
                <Section name="eSports at FSU" position='Gold Team - Overwatch 2' date='September 2023 - November 2023' img='src/img/esports2.png'/>

            </Container>

        </>
    )
}

export default ResumePage;
