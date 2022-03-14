import PropTypes from 'prop-types';
import { Modal, Button, Divider } from '../../../../components';

export const GossipModal = ({ setOpen }) => {
	return (
		<Modal>
			<Modal.Header>
				<h2>Gossips</h2>
				<Divider />
			</Modal.Header>
			<Modal.Content>Lorem ipsum dolor sit amet</Modal.Content>
			<Modal.Footer>
				<Divider />
				<Button onClick={() => setOpen(false)}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

GossipModal.propTypes = {
	setOpen: PropTypes.func,
};
