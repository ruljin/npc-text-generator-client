import { Section } from '../../../components/section/Section';
import { Actions } from '../../../components/actions/Actions';
import { Button } from '../../../components/button/Button';

export const Main = () => (
	<Section isWelcomeSection sectionHeader='Hello traveler,'>
		First time with us? Hah! No wonder I don't know your face! What? Would you
		like to know what is going on here in the region? Hah! No problem, I'll be
		happy to tell you, of course ... for the appropriate fee.
		<Actions>
			<Button isLink to='/generator'>
				Gossip
			</Button>
		</Actions>
	</Section>
);
