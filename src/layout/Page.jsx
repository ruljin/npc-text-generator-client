import { Wrapper } from './components/wrapper/Wrapper';
import { Footer } from './components/footer/Footer';
import styles from './page.module.css';

export const Page = ({ children }) => (
	<main className={styles.page}>
		<Wrapper>{children}</Wrapper>
		<Footer />
	</main>
);
