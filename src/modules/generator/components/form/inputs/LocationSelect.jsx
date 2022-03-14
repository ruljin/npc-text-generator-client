import { useFormContext } from 'react-hook-form';
import { InputWrapper, Select } from '../../../../../components';
import { LOCATIONS } from '../../../../../constants/list';

export const LocationSelect = () => {
	const { register } = useFormContext();

	return (
		<InputWrapper>
			<Select label='Location' options={LOCATIONS} {...register('location')} />
		</InputWrapper>
	);
};
