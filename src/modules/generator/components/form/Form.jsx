import { useRef } from 'react';
import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import { Actions, Button, Error } from '../../../../components';
import { TypeSelect } from './inputs/TypeSelect';
import { InnSelect } from './inputs/InnSelect';
import { PatronsSelect } from './inputs/PatronsSelect';
import { LocationSelect } from './inputs/LocationSelect';
import { ThreatLevelSelect } from './inputs/ThreatLevelSelect';
import { InkeeperRaceSelect } from './inputs/InkeeperRaceSelect';
import { getRumors } from '../../../../resources/generator';
import styles from './Form.module.css';

export const Form = ({ setRumors, loading, setLoading }) => {
	const error = useRef();
	const formData = useForm();
	const handleSubmit = formData.handleSubmit;

	const onSubmit = (data) => {
		error.current = false;
		setLoading(true);
		getRumors(data)
			.then((res) => {
				console.log('RES', res);
				const results = res;
				setRumors(results);
				setLoading(false);
			})
			.catch((e) => {
				error.current = true;
				setLoading(false);
			});
	};

	return (
		<FormProvider {...formData}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<TypeSelect />
				<InnSelect />
				<PatronsSelect />
				<LocationSelect />
				<ThreatLevelSelect />
				<InkeeperRaceSelect />
				<Actions className={styles.form__actions}>
					<Button disabled={loading}>Rumors</Button>
					{error.current && (
						<Error>Ups! An error has occurred, try again now or later.</Error>
					)}
				</Actions>
			</form>
		</FormProvider>
	);
};

Form.propTypes = {
	setRumors: PropTypes.func,
	loading: PropTypes.bool.isRequired,
	setLoading: PropTypes.func,
};
