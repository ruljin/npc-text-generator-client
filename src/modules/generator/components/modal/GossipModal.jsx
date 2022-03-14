import PropTypes from 'prop-types';
import { Modal, Button, Divider } from '../../../../components';
import { RumorsList } from '../rumors/RumorsList';

export const GossipModal = ({ setOpen, rumors }) => {
	return (
		<Modal>
			<Modal.Header>
				<h2>Gossips</h2>
				<Divider />
			</Modal.Header>
			<Modal.Content>
				Listen lad, I heard about ... <RumorsList rumors={rumors} />
			</Modal.Content>
			<Modal.Footer>
				<Divider />
				<Button onClick={() => setOpen(false)}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

GossipModal.propTypes = {
	setOpen: PropTypes.func,
	rumors: PropTypes.arrayOf(PropTypes.object),
};
