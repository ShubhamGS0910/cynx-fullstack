import App from "../../App";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../home/HeroSection";


export default function SoftwareDev (){
    return (
        <App>
            <Navbar />
                <HeroSection />

            <Footer />
        </App>
    );
}