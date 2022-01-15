import styles from './wrapper.module.css';

export const Wrapper = ({ children }) => (
	<div className={styles.wrapper}>{children}</div>
);
