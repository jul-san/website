import { Grid, GridItem, Image, Container } from '@chakra-ui/react'

function ImageGrid(){
    return(<>
    <Container>
        <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={4}
            paddingTop='20px'
            paddingBottom='20px'
            >

            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='Fair w Eva and Lana' 
                        src='src/img/grid/fair-eva-lana-i.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='Riceball selfie w Nina' 
                        src='src/img/grid/riceball-nina-selfie.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            
            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='Group picture at Tally party' 
                        src='src/img/grid/tallyween-cam-carissa-sami.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            
            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='Mia selfie' 
                        src='src/img/grid/point-five-mia.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='Getting pied in the face' 
                        src='src/img/grid/pie-carissa-dean.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            
            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='Pho dinner' 
                        src='src/img/grid/pho-kyle-nina.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='Winning NMoY w Tai' 
                        src='src/img/grid/aasu-award-tai.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='Selfie at Hmart' 
                        src='src/img/grid/hmart-eva-selfie.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='Group picture on Kens bday' 
                        src='src/img/grid/riceball-cat-lana-eva.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='Holi' 
                        src='src/img/grid/holi-mia-daniela.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <Image alt='Kbbq in Gville' 
                        src='src/img/grid/kbbq-gainesville.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>
            
            <GridItem rowSpan={1} colSpan={1}>
                <Image alt='Dinner selfie' 
                        src='src/img/grid/dinner-eva.jpg' 
                        borderRadius='10px'
                        h='100%'
                        w='100%'
                        />
            </GridItem>

        </Grid>
    </Container>

    </>);
}

export default ImageGrid;