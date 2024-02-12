import { Link } from 'react-router-dom';
import { chakra, Text, Container, VStack, HStack} from '@chakra-ui/react'

interface CardInfo{
    title: string;
    link: string;
    github: string;
 }

 const HoverLink = chakra(Link, {
    baseStyle: {color: 'black',
      _hover: {
        textDecoration: 'underline'
      },
    },
  });

function ProjectLink({title, link, github}: CardInfo){
    return(
        <>
            <Container paddingTop="5px" paddingBottom="5px">
                <HStack justifyContent="space-between" 
                        fontSize={{ base: '16px', md: '20px', lg: '20px' }} // Adjust font sizes for different breakpoints
                        fontWeight="bold" 
                        whiteSpace={{ base: 'normal', md: 'nowrap', lg: 'nowrap' }} // Allow text to wrap on smaller screens
                        >
                    <Text fontSize={{ base: '16px', md: '20px', lg: '20px' }} // Responsive font size
                        whiteSpace="nowrap" // Prevent text wrapping on larger screens
                        overflow="hidden" // Hide overflowed text
                        textOverflow="ellipsis" // Show ellipsis for overflowed content
                        >
                    [<HoverLink to={link} color="#7852ee" >
                        {title}
                    </HoverLink>]
                    </Text>
                    <HStack spacing="5">
                    <Text fontSize={{ base: '16px', md: '20px', lg: '20px' }} // Responsive font size
                            whiteSpace="nowrap" // Prevent text wrapping on larger screens
                            overflow="hidden" // Hide overflowed text
                            textOverflow="ellipsis" // Show ellipsis for overflowed content
                            >
                        [<HoverLink to={github} color="#7852ee">
                        Source Code
                        </HoverLink>]
                    </Text>
                    </HStack>
                </HStack>
            </Container>

        </>
    )
}

export default ProjectLink;