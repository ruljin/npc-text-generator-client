import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const value = { open, setOpen };

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};

ModalProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
