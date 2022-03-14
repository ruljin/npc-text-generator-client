import PropTypes from 'prop-types';
import { Rumor } from './Rumor';
import styles from './Rumors.module.css';

export const RumorsList = ({ rumors }) => (
	<ul className={styles.rumors}>
		{rumors.map((rumor, index) => (
			<Rumor key={rumor._id} index={index} content={rumor.content} />
		))}
	</ul>
);

RumorsList.propTypes = {
	rumors: PropTypes.arrayOf(PropTypes.object).isRequired,
};
