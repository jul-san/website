import Navbar from '../../components/Navbar';
import BlogCard from './BlogCard';
import { Text, Container} from '@chakra-ui/react'

function BlogPage(){
    return(
        <>
            <Navbar/>

            <Container paddingTop='10px' paddingBottom='10px'>
                <Text fontFamily='Roboto Mono'>
                    I'll occasionally write about events or thoughts that 
                    have been going through my mind recently. Feel free to read! :)
                </Text>

                <Text fontFamily='Roboto Mono' color='gray' paddingTop='20px'>First entry coming soon!</Text>
            </Container>

            {/*<BlogCard title="Julian" body="hello world" img='src/img/westcott.jpeg'/>*/}

        </>
    )
}

export default BlogPage;