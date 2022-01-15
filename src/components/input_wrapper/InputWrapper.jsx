import styles from './inputWrapper.module.css';

export const InputWrapper = ({ children }) => (
	<div className={styles.wrapper}>{children}</div>
);
