import { Modal, Button } from '../../../../components';

export const GossipModal = () => {
	return (
		<Modal>
			<Modal.Header>
				<h2>Gossips</h2>
			</Modal.Header>
			<Modal.Content>Lorem ipsum dolor sit amet</Modal.Content>
			<Modal.Footer>
				<Button>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};
