import PropTypes from 'prop-types';
import { Label } from '../label/Label';
import styles from './Input.module.css';

export const Input = ({ label, rest }) => (
	<Label>
		{label}
		<input className={styles.input} {...rest} />
	</Label>
);

Input.propTypes = {
	label: PropTypes.string,
	rest: PropTypes.any,
};
