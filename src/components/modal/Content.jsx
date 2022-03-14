import PropTypes from 'prop-types';

export const Content = ({ children }) => <div>{children}</div>;

Content.propTypes = {
	children: PropTypes.node.isRequired,
};
