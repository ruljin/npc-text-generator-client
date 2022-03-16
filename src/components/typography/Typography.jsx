import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Typography.module.css';

const returnVariantElement = (variant, children, className) => {
	const classes = clsx({ [styles.paragraph]: variant === 'p' }, className);

	if (variant === 'h1') {
		return <h1 className={classes}>{children}</h1>;
	}

	if (variant === 'h2') {
		return <h2 className={classes}>{children}</h2>;
	}

	return <p className={classes}>{children}</p>;
};

export const Typography = ({ variant = 'p', children, className }) =>
	returnVariantElement(variant, children, className);

Typography.propTypes = {
	variant: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
