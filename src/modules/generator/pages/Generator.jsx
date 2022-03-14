import { useModalContext } from '../../../components/modal/hooks/useModalContext';
import { Section, Typography } from '../../../components';
import { Form, GossipModal } from '../components';

export const Generator = () => {
	const { open, setOpen } = useModalContext();

	return (
		<Section>
			<Typography variant='h2'>Generator</Typography>
			<Form />
			{open && <GossipModal />}
			<button
				onClick={() => {
					setOpen(!open);
				}}>
				Open modal
			</button>
		</Section>
	);
};
