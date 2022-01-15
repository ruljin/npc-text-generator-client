import styles from './input.module.css';

export const Input = ({ label, rest }) => (
	<label className={styles.label}>
		{label}
		<input className={styles.input} {...rest} />
	</label>
);
