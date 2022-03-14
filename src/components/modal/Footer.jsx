import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export const Footer = ({ children }) => (
	<div className={styles.footer}>{children}</div>
);

Footer.propTypes = {
	children: PropTypes.node.isRequired,
};
