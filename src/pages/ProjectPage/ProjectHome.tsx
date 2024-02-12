import Navbar from '../../components/Navbar';
import ProjectLink from './ProjectLink';
import {Container} from '@chakra-ui/react'

function ProjectPage(){
    return(
        <>
            <Navbar/>
            <Container paddingTop='10px' paddingBottom='20px'>
                <ProjectLink title="Will You Be My Valentine?" link="/projects/will-you-be-my-valentine" github="https://github.com/jul-san/website/blob/main/src/pages/ProjectPage/Projects/Valentine.tsx"></ProjectLink>

            </Container>

        </>
    )
}

export default ProjectPage;