import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ isLink = false, to, children }) => {
	return (
		<>
			{isLink ? (
				<NavLink className={styles.button} to={to}>
					{children}
				</NavLink>
			) : (
				<button className={styles.button}>{children}</button>
			)}
		</>
	);
};

Button.propTypes = {
	isLink: PropTypes.bool,
	to: PropTypes.string,
	children: PropTypes.node.isRequired,
};
