import { Section, Typography, Actions, Button } from '../components';

export const NotFound = () => (
	<Section>
		<Typography variant='h2'>Not found,</Typography>
		<Typography>
			Oops! Sorry. This page does not exist. Click below to go back to the main
			screen.
		</Typography>
		<Actions>
			<Button isLink to='/'>
				Go back
			</Button>
		</Actions>
	</Section>
);
