import PropTypes from 'prop-types';
import styles from './section.module.css';

export const Section = ({ children }) => (
	<section className={styles.section}>{children}</section>
);

Section.propTypes = {
	children: PropTypes.node.isRequired,
};
