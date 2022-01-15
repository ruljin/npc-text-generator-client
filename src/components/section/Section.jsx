import styles from './section.module.css';

export const Section = ({
	isWelcomeSection = false,
	sectionHeader = '',
	children,
}) => (
	<section className={styles.section}>
		{isWelcomeSection ? <h1>{sectionHeader}</h1> : <h2>{sectionHeader}</h2>}
		<p className={styles.section__content}>{children}</p>
	</section>
);
