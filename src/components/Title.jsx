import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Title = ({ children }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FHI Tool | {children}</title>
            </Helmet>
        </div>
    );
};

Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Title;