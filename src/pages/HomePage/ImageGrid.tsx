import { Divider, Grid, GridItem, Image, Container } from '@chakra-ui/react'

function ImageGrid(){
    return(<>
    <Container>
    <Divider orientation='horizontal' paddingTop='20px'/>
        <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={4}
            paddingTop='20px'
            paddingBottom='20px'
            >

            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='hmart' 
                        src='src/img/fair.png' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='hmart' 
                        src='src/img/elevator.png' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='hmart' 
                        src='src/img/circus.png' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            
            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='hmart' 
                        src='src/img/holi.png' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='hmart' 
                        src='src/img/soccer.png' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            
            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='hmart' 
                        src='src/img/nature.png' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='hmart' 
                        src='src/img/group.png' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='hmart' 
                        src='src/img/hmart2.png' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>

        </Grid>
        <Divider orientation='horizontal' />
    </Container>

    </>);
}

export default ImageGrid;