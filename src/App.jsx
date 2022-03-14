import { ModalProvider } from './components/modal/context/ModalContext';
import { Routes } from './routes';

export const App = () => (
	<ModalProvider>
		<Routes />
	</ModalProvider>
);
