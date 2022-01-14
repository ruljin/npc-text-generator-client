import styles from './section.module.css';

export const Section = ({
	isWelcomeSection = false,
	sectionHeader = '',
	sectionContent = '',
}) => (
	<section className={styles.section}>
		{isWelcomeSection ? <h1>{sectionHeader}</h1> : <h2>{sectionHeader}</h2>}
		<p>{sectionContent}</p>
	</section>
);
