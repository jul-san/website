import { Text, Container, Stack, Card, CardBody, Image, Heading,  CardFooter, Link} from '@chakra-ui/react'

interface CardInfo{
    title: string;
    body: string;
    img: string;
 }

function BlogCard({title, body, img}: CardInfo){
    return(
        <>
        <Container>
        <Link href='/resume'>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >
            <Image
                objectFit='cover'
                maxW={{ base: '50%', sm: '150px' }}
                src={img}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>{title}</Heading>

                <Text py='2'>
                    {body}
                </Text>
                </CardBody>

                <CardFooter>
                </CardFooter>
            </Stack>
            </Card>
        </Link>
        </Container>

        </>
    )
}

export default BlogCard;