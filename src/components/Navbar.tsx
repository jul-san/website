import { chakra, HStack, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const HoverLink = chakra(Link, {
    baseStyle: {color: 'gray',
      _hover: {
        color: 'white',
      },
    },
  });

function Navbar(){
    return(
        <>
        <Container paddingTop='20px'>
            <nav>
                <HStack fontFamily='Roboto Mono' fontSize='20px' fontStyle='gray' spacing='5'>
                    <HoverLink to='/'>home</HoverLink>
                    <HoverLink to='/resume'>resume</HoverLink>
                    <HoverLink to='/blog' >writing</HoverLink>
                </HStack>
            </nav>
        </Container>
        
        </>
    );
}

export default Navbar;