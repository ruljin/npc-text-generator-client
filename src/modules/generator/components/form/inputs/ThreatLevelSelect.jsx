import { useFormContext } from 'react-hook-form';
import { InputWrapper, Select } from '../../../../../components';
import { THREAT_LEVEL } from '../../../../../constants/list';

export const ThreatLevelSelect = () => {
	const { register } = useFormContext();

	return (
		<InputWrapper>
			<Select
				label='Threat level'
				options={THREAT_LEVEL}
				{...register('threat')}
			/>
		</InputWrapper>
	);
};
