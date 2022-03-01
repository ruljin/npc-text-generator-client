import PropTypes from 'prop-types';
import styles from './Section.module.css';

export const Section = ({ children }) => (
	<section className={styles.section}>{children}</section>
);

Section.propTypes = {
	children: PropTypes.node.isRequired,
};
