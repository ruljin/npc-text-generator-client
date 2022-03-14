import { useFormContext } from 'react-hook-form';
import { InputWrapper, Select } from '../../../../../components';
import { PATRONS } from '../../../../../constants/list';

export const PatronsSelect = () => {
	const { register } = useFormContext();

	return (
		<InputWrapper>
			<Select label='Patrons' options={PATRONS} {...register('patrons')} />
		</InputWrapper>
	);
};
