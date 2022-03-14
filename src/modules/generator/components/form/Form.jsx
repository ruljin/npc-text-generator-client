import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import { Actions, Button } from '../../../../components';
import { TypeSelect } from './inputs/TypeSelect';
import { InnSelect } from './inputs/InnSelect';
import { PatronsSelect } from './inputs/PatronsSelect';
import { LocationSelect } from './inputs/LocationSelect';
import { ThreatLevelSelect } from './inputs/ThreatLevelSelect';
import { InkeeperRaceSelect } from './inputs/InkeeperRaceSelect';
import { getRumors } from '../../../../resources/generator';
import styles from './Form.module.css';

export const Form = ({ setRumors, loading, setLoading }) => {
	const formData = useForm();
	const handleSubmit = formData.handleSubmit;

	const onSubmit = (data) => {
		console.log(data);
		setLoading(true);
		getRumors(data)
			.then((res) => {
				const results = res.results.slice(0, 10).map((result) => {
					return { _id: result.episode_id, content: result.opening_crawl };
				});
				setRumors(results);
				setLoading(false);
			})
			.catch((e) => {
				console.error(e);
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
