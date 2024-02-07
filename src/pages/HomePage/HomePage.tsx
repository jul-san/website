import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from './Head';
import ImageGrid from './ImageGrid';
import TextBody from './TextBody';

function HomePage(){
    return(
        <>
            
            <Navbar/>
            <Head/>
            <TextBody/>
            <ImageGrid/>

            <Footer/>
        </>
    )
}

export default HomePage;