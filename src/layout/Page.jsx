import { Wrapper } from './components/Wrapper';
import styles from './page.module.css';

export const Page = ({ children }) => (
	<main className={styles.page}>
		<Wrapper>{children}</Wrapper>
	</main>
);
