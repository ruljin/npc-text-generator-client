import PropTypes from 'prop-types';
import styles from './Input.module.css';

export const Input = ({ label, rest }) => (
	<label className={styles.label}>
		{label}
		<input className={styles.input} {...rest} />
	</label>
);

Input.propTypes = {
	label: PropTypes.string,
	rest: PropTypes.any,
};
