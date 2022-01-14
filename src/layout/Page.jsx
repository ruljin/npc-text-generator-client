import styles from './page.module.css';

export const Page = ({ children }) => (
	<main className={styles.page}>{children}</main>
);
