import PropTypes from 'prop-types';
import { useModalContext } from './hooks/useModalContext';
import styles from './Modal.module.css';

export const Backdrop = ({ children }) => {
	const { setOpen } = useModalContext();

	return (
		<div className={styles.backdrop} onClick={() => setOpen(false)}>
			{children}
		</div>
	);
};

Backdrop.propTypes = {
	children: PropTypes.node.isRequired,
};
