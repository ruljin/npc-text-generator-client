import PropTypes from 'prop-types';
import styles from './Typography.module.css';

const returnVariantElement = (variant, children) => {
	if (variant === 'h1') {
		return <h1>{children}</h1>;
	}

	if (variant === 'h2') {
		return <h2>{children}</h2>;
	}

	return <p className={styles.paragraph}>{children}</p>;
};

export const Typography = ({ variant = 'p', children }) =>
	returnVariantElement(variant, children);

Typography.propTypes = {
	variant: PropTypes.string,
	children: PropTypes.node.isRequired,
};
