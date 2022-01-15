import { useForm } from 'react-hook-form';
import { InputWrapper } from '../../../../components/input_wrapper/InputWrapper';
import { Select } from '../../../../components/select/Select';
import { Button } from '../../../../components/button/Button';
import styles from './form.module.css';

const TEST_OPTIONS = [{ id: 1, value: 'test' }];

export const Form = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<InputWrapper>
				<Select label='Type' options={TEST_OPTIONS} {...register('type')} />
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Patrons'
					options={TEST_OPTIONS}
					{...register('patrons')}
				/>
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Location'
					options={TEST_OPTIONS}
					{...register('location')}
				/>
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Threat level'
					options={TEST_OPTIONS}
					{...register('threat')}
				/>
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Innkeeper race'
					options={TEST_OPTIONS}
					{...register('race')}
				/>
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Innkeeper gender'
					options={TEST_OPTIONS}
					{...register('gender')}
				/>
			</InputWrapper>
			<InputWrapper>
				<Select
					label='Innkeeper alignment'
					options={TEST_OPTIONS}
					{...register('alignment')}
				/>
			</InputWrapper>
			<div className={styles.form__actions}>
				<Button>Rumors</Button>
			</div>
		</form>
	);
};
