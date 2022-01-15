import { NavLink } from 'react-router-dom';
import styles from './button.module.css';

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
