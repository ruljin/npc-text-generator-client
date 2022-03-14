import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ onClick, disabled, isLink = false, to, children }) => {
	return (
		<>
			{isLink ? (
				<NavLink className={styles.button} to={to}>
					{children}
				</NavLink>
			) : (
				<button className={styles.button} onClick={onClick} disabled={disabled}>
					{children}
				</button>
			)}
		</>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	isLink: PropTypes.bool,
	to: PropTypes.string,
	children: PropTypes.node.isRequired,
};
