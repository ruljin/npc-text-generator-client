import PropTypes from 'prop-types';
import styles from './actions.module.css';

export const Actions = ({ children }) => (
	<div className={styles.actions}>{children}</div>
);

Actions.propTypes = {
	children: PropTypes.node.isRequired,
};
