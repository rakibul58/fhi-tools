import Testimonial from "./Testimonial";

const TestimonialsSection = () => {
    const testimonials = [
        {
            avatar: 'https://i.pravatar.cc/150?img=60',
            name: 'John Doe',
            role: 'CEO, Company A',
            quote: 'Using the Financial Health Indicator made managing my finances a breeze! The insights provided were incredibly helpful.',
        },
        {
            avatar: 'https://i.pravatar.cc/150?img=35',
            name: 'Jane Smith',
            role: 'Marketing Manager, Company B',
            quote: 'I love how easy it is to track my expenses and get personalized insights. The tool has been a game-changer for our team.',
        },
        {
            avatar: 'https://i.pravatar.cc/150?img=31',
            name: 'Alice Johnson',
            role: 'Freelancer',
            quote: 'As a freelancer, staying on top of my finances is crucial. This tool has simplified the process for me and saved me a lot of time.',
        },
        {
            avatar: 'https://i.pravatar.cc/150?img=18',
            name: 'Bob Williams',
            role: 'Small Business Owner',
            quote: 'Managing finances for my small business was overwhelming. This tool provided clarity and helped me make informed decisions.',
        }
    ];

    return (
        <div className="py-24">
            <h2 className="text-6xl font-bold text-center mb-8">What Our Users Say</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;