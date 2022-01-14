import { Section } from '../../../components/section/Section';

export const Main = () => (
	<>
		<Section
			isWelcomeSection
			actionsVisible
			buttonIsLink
			sectionHeader='Hello traveler!'
			sectionContent='Lorem ipsum dolor sit amet'
			buttonText='Generate text'
		/>
	</>
);
