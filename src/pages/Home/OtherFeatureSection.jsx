import FeatureHighlight from "./FeatureHighlight";

const OtherFeatureSection = () => {
    const features = [
        {
            icon: <span className="text-6xl">🚀</span>,
            title: 'Easy to Use',
            description: 'Intuitive design and user-friendly interface for a seamless experience.',
        },
        {
            icon: <span className="text-6xl">💻</span>,
            title: 'Multi-Platform',
            description: 'Access your financial data from anywhere, be it desktop or mobile devices.',
        },
        {
            icon: <span className="text-6xl">📈</span>,
            title: 'Real-time Analytics',
            description: 'Get up-to-date insights into your financial health with real-time analytics.',
        },
    ];

    return (
        <div className="py-24 text-center">
            <h2 className="text-3xl font-bold mb-12">Other Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <FeatureHighlight key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default OtherFeatureSection;