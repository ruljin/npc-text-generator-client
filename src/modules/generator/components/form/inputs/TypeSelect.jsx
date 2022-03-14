import { useFormContext } from 'react-hook-form';
import { InputWrapper, Select } from '../../../../../components';
import { INN_TYPES } from '../../../../../constants/list';

export const TypeSelect = () => {
	const { register } = useFormContext();

	return (
		<InputWrapper>
			<Select label='Type' options={INN_TYPES} {...register('type')} />
		</InputWrapper>
	);
};
