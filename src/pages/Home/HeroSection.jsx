import { Link } from 'react-router-dom';
import bgImg from '../../assets/Hero-Image-for-Financial-Health-Indicator-Website.png'

const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Financial Health Indicator</h1>
                    <p className="mb-5 text-lg">Assess your financial health with our easy-to-use tool. Enter your financial data to get started.</p>
                    <Link to={'/login'} className="btn bg-[#1DCD64] hover:bg-[#1dcd63b0] text-white rounded-full">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;