import PropTypes from 'prop-types';

const Feature = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col gap-5 items-center mb-8">
            <div className="">
                {/* You can use an icon library or an actual SVG icon here */}
                {icon}
            </div>
            <div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};


Feature.propTypes = {
    icon: PropTypes.any.isRequired, // Node type represents anything that can be rendered
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
};


export default Feature;