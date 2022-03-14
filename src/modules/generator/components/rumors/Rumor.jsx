import PropTypes from 'prop-types';
import styles from './Rumors.module.css';

export const Rumor = ({ index, content }) => (
	<div className={styles.rumor}>
		<div className={styles.number}>{index}.</div>
		<div>{content}</div>
	</div>
);

Rumor.propTypes = {
	index: PropTypes.number,
	content: PropTypes.string,
};
