import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Actions.module.css';

export const Actions = ({ children, className }) => {
	const actionsClasses = clsx(styles.actions, className);

	return <div className={actionsClasses}>{children}</div>;
};

Actions.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
