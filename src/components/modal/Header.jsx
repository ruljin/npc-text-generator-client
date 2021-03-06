import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export const Header = ({ children }) => (
	<div className={styles.header}>{children}</div>
);

Header.propTypes = {
	children: PropTypes.node.isRequired,
};
