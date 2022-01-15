import { Section } from '../components/section/Section';
import { Actions } from '../components/actions/Actions';
import { Button } from '../components/button/Button';

export const NotFound = () => (
	<Section sectionHeader='Not found'>
		Oops! Sorry. This page does not exist. Click below to go back to the main
		screen.
		<Actions>
			<Button isLink to='/'>
				Go back
			</Button>
		</Actions>
	</Section>
);
