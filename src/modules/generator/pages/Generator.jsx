import { useModalContext } from '../../../components/modal/hooks/useModalContext';
import { GossipModal } from '../modals/GossipModal';

export const Generator = () => {
	const { open, setOpen } = useModalContext();
	console.log({ open, setOpen });

	return (
		<div>
			Generator
			{open && <GossipModal />}
			<button
				onClick={() => {
					setOpen(!open);
				}}>
				Open modal
			</button>
		</div>
	);
};
