import { VStack, Flex, Image, Text } from "@chakra-ui/react";

interface CardInfo{
    name: string;
    position: string;
    date: string;
    img: string;
 }

function Section({name, position, date, img}: CardInfo){
    return(  
        <>
            <Flex direction={{ base: 'column', md: 'row' }} align="center">
                <Image alt="fsu logo" 
                        src={img}
                        boxSize={{ base: '250px', md: '250px' }}
                        objectFit='scale-down'
                        alignContent='left'
                        />
                <VStack wrap='wrap' paddingLeft='10px'>
                    <Text align='center'>{name}</Text>
                    <Text>{position}</Text>
                    <Text>{date}</Text>
                </VStack>
            </Flex>
        </>
    )
}

export default Section;