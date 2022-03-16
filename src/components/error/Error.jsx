import PropTypes from 'prop-types';
import { Typography } from '../';
import styles from './Error.module.css';

export const Error = ({ children }) => (
	<div className={styles.error}>
		<Typography className={styles.message}>{children}</Typography>
	</div>
);

Error.propTypes = {
	children: PropTypes.node.isRequired,
};
