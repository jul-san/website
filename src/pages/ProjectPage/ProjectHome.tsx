import Navbar from '../../components/Navbar';
import ProjectLink from './ProjectLink';
import {Container} from '@chakra-ui/react'

function ProjectPage(){
    return(
        <>
            <Navbar/>
            <Container paddingTop='10px' paddingBottom='20px'>

                <ProjectLink title="Will You Be My Valentine?" link="/projects/will-you-be-my-valentine" github="no"></ProjectLink>

            </Container>

        </>
    )
}

export default ProjectPage;