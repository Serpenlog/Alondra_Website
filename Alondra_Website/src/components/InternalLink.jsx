import PropTypes from 'prop-types';
import { useNavigation } from '../navigationContext.js';

function InternalLink({ to, children, className = '', onClick, ...rest }) {
    const { navigate } = useNavigation();

    const handleClick = (event) => {
        event.preventDefault();
        if (onClick) {
            onClick(event);
        }
        navigate(to);
    };

    return (
        <a href="#" className={className} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
}

InternalLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default InternalLink;
