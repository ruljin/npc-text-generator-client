import styles from './Label.module.css';

export const Label = ({ children }) => (
	<label className={styles.label}>{children}</label>
);
