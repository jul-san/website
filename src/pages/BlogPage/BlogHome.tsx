import Navbar from '../../components/Navbar';
import { Text, Container} from '@chakra-ui/react'
import BlogCard from './BlogCard';

function BlogPage(){
    return(
        <>
            <Navbar/>

            <Container paddingTop='10px' paddingBottom='20px'>
                <Text>
                    I'll mainly post about events or recent thoughts and feelings that I've had. Enjoy! :)
                </Text>

                <BlogCard title="I Think My Biggest Fear Is True" 
                        body="February 2, 2024" 
                        link="/blog/fear" 
                        img="/img/stick.jpg"></BlogCard>

                <BlogCard title="SERC Shenanigans" 
                        body="January 18, 2023" 
                        link="/blog/serc-shenanigans" 
                        img="/img/kyle-nina-i-serc.jpg"></BlogCard>

                <BlogCard title="My Top 5 Video Game List" 
                        body="December 20, 2023" 
                        link="/blog/top-five-videogames" 
                        img="/img/adventure-time.png"></BlogCard>
                
                <BlogCard title="A Weekend In Atlanta" 
                        body="October 25, 2023" 
                        link="/blog/atlanta" 
                        img="/img/group-photobooth.jpg"></BlogCard>
                
                <BlogCard title="The Importance of Having a Big" 
                        body="October 4, 2023" 
                        link="/blog/having-a-big" 
                        img="/img/rachel-big.jpg"></BlogCard>

                <BlogCard title="Evolution of My Music Taste"
                        body="July 23, 2023" 
                        link="/blog/music" 
                        img="/img/spotify.jpeg"></BlogCard>




            </Container>


        </>
    )
}

export default BlogPage;