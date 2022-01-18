import { useForm } from 'react-hook-form';
import { InputWrapper } from '../../../../components/input_wrapper/InputWrapper';
import { Select } from '../../../../components/select/Select';
import { Button } from '../../../../components/button/Button';
import {
	INN_TYPES,
	PATRONS,
	LOCATIONS,
	THREAT_LEVEL,
	RACES,
	GENDER,
	ALIGNMENT,
} from '../../../../mocks/list';
import styles from './form.module.css';

export const Form = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<InputWrapper>
				<Select label='Type' options={INN_TYPES} {...register('type')} />
			</InputWrapper>
			<InputWrapper>
				<Select label='Patrons' options={PATRONS} {...register('patrons')} />
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Location'
					options={LOCATIONS}
					{...register('location')}
				/>
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Threat level'
					options={THREAT_LEVEL}
					{...register('threat')}
				/>
			</InputWrapper>
			<InputWrapper>
				<Select label='Innkeeper race' options={RACES} {...register('race')} />
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Innkeeper gender'
					options={GENDER}
					{...register('gender')}
				/>
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Innkeeper alignment'
					options={ALIGNMENT}
					{...register('alignment')}
				/>
			</InputWrapper>
			<div className={styles.form__actions}>
				<Button>Rumors</Button>
			</div>
		</form>
	);
};
