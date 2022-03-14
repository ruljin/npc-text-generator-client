import { useFormContext } from 'react-hook-form';
import { InputWrapper, Select } from '../../../../../components';
import { RACES } from '../../../../../constants/list';

export const InkeeperRaceSelect = () => {
	const { register } = useFormContext();

	return (
		<InputWrapper>
			<Select label='Innkeeper race' options={RACES} {...register('race')} />
		</InputWrapper>
	);
};
