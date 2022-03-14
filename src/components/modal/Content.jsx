import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export const Content = ({ children }) => (
	<div className={styles.content}>{children}</div>
);

Content.propTypes = {
	children: PropTypes.node.isRequired,
};
