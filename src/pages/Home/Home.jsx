import Title from "../../components/Title";
import CTASection from "./CTASection";
import ContactUsSection from "./ContactUsSection ";
import FeaturesSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import OtherFeatureSection from "./OtherFeatureSection";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
    return (
        <>
            <Title>Home</Title>
            <HeroSection/>
            <FeaturesSection/>
            <CTASection/>
            <OtherFeatureSection/>
            <ContactUsSection/>
            <TestimonialsSection/>
        </>
    );
};

export default Home;