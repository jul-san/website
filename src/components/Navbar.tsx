import { chakra, HStack, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const HoverLink = chakra(Link, {
    baseStyle: {color: 'black',
      _hover: {
        textDecoration: 'underline'
      },
    },
  });

function Navbar(){
    return(
        <>
        <Container paddingTop='20px'>
                <nav>
                    <HStack justifyContent='space-between' fontSize='20px' fontWeight='bold'>
                        <text>[<HoverLink to='/' color='#7852ee'>home</HoverLink>]</text>
                        <HStack spacing='5'>
                            <text>[<HoverLink to='/resume' color='#7852ee'>resume</HoverLink>]</text>
                            <text>[<HoverLink to='/blog' color='#7852ee'>writing</HoverLink>]</text>
                        </HStack>
                    </HStack>
                </nav>
            </Container>
        
        </>
    );
}

export default Navbar;