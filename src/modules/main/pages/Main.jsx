import { Section, Typography, Actions, Button } from '../../../components';

export const Main = () => (
	<Section>
		<Typography variant='h1'>Hello traveler,</Typography>
		<Typography>
			First time with us? Hah! No wonder I don't know your face! What? Would you
			like to know what is going on here in the region? Hah! No problem, I'll be
			happy to tell you, of course ... for the appropriate fee.
		</Typography>
		<Actions>
			<Button isLink to='/generator'>
				Gossip
			</Button>
		</Actions>
	</Section>
);
