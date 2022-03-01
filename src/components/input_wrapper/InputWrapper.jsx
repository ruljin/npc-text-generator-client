import PropTypes from 'prop-types';
import styles from './inputWrapper.module.css';

export const InputWrapper = ({ children }) => (
	<div className={styles.wrapper}>{children}</div>
);

InputWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};
