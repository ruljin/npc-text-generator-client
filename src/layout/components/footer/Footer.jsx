import styles from './footer.module.css';

export const Footer = () => (
	<footer className={styles.footer}>
		Created by{' '}
		<a
			className={styles.link}
			href='https://github.com/ruljin'
			rel='noreferrer'
			target='_blank'>
			Ruljin
		</a>{' '}
		&amp;{' '}
		<a
			className={styles.link}
			href='https://github.com/Ulwothar'
			rel='noreferrer'
			target='_blank'>
			Ulwothar
		</a>
	</footer>
);
