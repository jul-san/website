import { Text, Container, Card, Link, Image, Box, Flex, Spacer} from '@chakra-ui/react'

interface CardInfo{
    title: string;
    body: string;
    link: string;
    img: string;
 }

function BlogCard({title, body, link, img}: CardInfo){
    return(
        <>
        <Container>
        <Link href={link}>
            <Card
                borderWidth="1px"
                border='none'
                borderRadius="lg"
                overflow="hidden"
                w="100%"
                boxShadow="none"
                paddingBlock='5px'
            >
                <Flex align="left">
                    <Box p={2}>
                        <Image
                            borderRadius="15px"
                            boxSize="50px"
                            src={img}
                            alt='thumbnail'
                            objectFit="cover"
                        />
                    </Box>
                    <Box pl={2}>
                        <Text fontWeight="bold" fontSize="15px">{title}</Text>
                        <Text fontSize="sm" color="gray.500">{body}</Text>
                    </Box>
                    <Spacer />
                </Flex>
            </Card>
        </Link>
        </Container>

        </>
    )
}

export default BlogCard;