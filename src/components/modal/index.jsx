import PropTypes from 'prop-types';
import { Backdrop } from './Backdrop';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import styles from './Modal.module.css';

export const Modal = ({ children }) => (
	<Backdrop>
		<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
			{children}
		</div>
	</Backdrop>
);

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	openModal: PropTypes.bool.isRequired,
};
