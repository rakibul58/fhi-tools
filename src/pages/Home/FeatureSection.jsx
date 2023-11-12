import Feature from "./Feature";

const FeaturesSection = () => {
    return (
        <div className="py-24 text-center px-10">
            <h2 className="text-4xl font-bold mb-12">Key Features</h2>
            <div className="mx-auto flex flex-col gap-20 md:flex-row md:justify-between">
                <Feature
                    icon={<span className="text-6xl">💸</span>}
                    title="Track Finances"
                    description="Monitor your monthly income, expenses, and track your financial transactions."
                />
                <Feature
                    icon={<span className="text-6xl">📊</span>}
                    title="Financial Analysis"
                    description="Get a detailed analysis of your financial health, including income-to-expense ratio and more."
                />
                <Feature
                    icon={<span className="text-6xl">💡</span>}
                    title="Custom Insights"
                    description="Receive personalized insights and recommendations based on your financial data."
                />
            </div>
        </div>
    );
};

export default FeaturesSection;