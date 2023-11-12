import PropTypes from "prop-types";

const Testimonial = ({ avatar, name, quote }) => {
    return (
        <div className="bg-[#0000000c] text-gray-800 p-6 rounded-lg shadow-md mx-4 my-8 md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-4">
                <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <p className="font-semibold text-lg">{name}</p>
                </div>
            </div>
            <p className="">{quote}</p>
        </div>
    );
};

Testimonial.propTypes = {
    avatar: PropTypes.any.isRequired, // Node type represents anything that can be rendered
    name: PropTypes.any.isRequired,
    quote: PropTypes.any.isRequired,
};

export default Testimonial;