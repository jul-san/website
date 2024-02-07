import { VStack, Flex, Image, Text, Box} from "@chakra-ui/react";

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
                justifyContent="space-between" // Spread the boxes across the full width of the flex container
                textAlign={{ base: 'center', md: 'left' }}
                gap={{ base: '0px', md: '30px' }} // Add a gap between the boxes
                w="full" // Ensure the flex container takes the full width
            >
                <Box display="flex" alignItems="center" justifyContent="flex-start" boxSize="150px">
                    <Image alt="Company logo" src={img} boxSize="full" objectFit="contain"/>
                </Box>

                <Box display="flex" alignItems="center" boxSize="full" justifyContent={{ base: 'center', md: 'start' }} w="full" px={{ base: '4', md: '0' }}>
                    <VStack align={{ base: 'left', md: 'start' }} spacing={2}>
                        <Text fontSize="xl" fontWeight="bold">{name}</Text>
                        <Text fontSize="md">{position}</Text>
                        <Text fontSize="sm">{date}</Text>
                    </VStack>
                </Box>
      </Flex>
     
        </>
    )
}

export default Section;