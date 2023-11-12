import PropTypes from "prop-types";

const FeatureHighlight = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col-reverse gap-5 items-center mb-8">
            <div>
                {icon}
            </div>
            <div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};


FeatureHighlight.propTypes = {
    icon: PropTypes.any.isRequired, 
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
};


export default FeatureHighlight;