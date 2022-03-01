import { useForm } from 'react-hook-form';
import { InputWrapper, Select, Actions, Button } from '../../../../components';
import {
	INN_TYPES,
	PATRONS,
	LOCATIONS,
	THREAT_LEVEL,
	RACES,
} from '../../../../constants/list';
import { getRumors } from '../../../../resources/generator';
import styles from './Form.module.css';

export const Form = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		getRumors(data)
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
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
			<Actions className={styles.form__actions}>
				<Button>Rumors</Button>
			</Actions>
		</form>
	);
};
