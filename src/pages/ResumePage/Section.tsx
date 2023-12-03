import { HStack, VStack, Flex, Image, Text, Box} from "@chakra-ui/react";

interface CardInfo{
    name: string;
    position: string;
    date: string;
    img: string;
 }

function Section({name, position, date, img}: CardInfo){
    return(  
        <>
            <Flex 
                direction={{ base: 'column', md: 'row' }} 
                align="center" 
                justifyContent="center"
                gap={{ base: '0px', md: '20px' }} // Add a gap between the boxes
                >
                    <Box
                        display="flex"
                        alignItems="center" 
                        justifyContent="center"
                        boxSize="250px"
                    >
                        <Image 
                        alt="fsu logo"
                        src={img}
                        boxSize="full" // Use 'full' to make the image take the full size of the box
                        objectFit="scale-down"
                        />
                    </Box>

                    <Box 
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxSize="270px" // Set equal size for both boxes
                        fontSize="18px"
                    >
                        <VStack wrap="wrap" paddingLeft="10px" textAlign="center">
                            <Text>{name}</Text>
                            <Text>{position}</Text>
                            <Text>{date}</Text>
                        </VStack>
                    </Box>
            </Flex>
     
        </>
    )
}

export default Section;