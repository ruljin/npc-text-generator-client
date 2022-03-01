import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

export const Select = forwardRef(
	({ label, onChange, onBlur, name, options }, ref) => (
		<label className={styles.label}>
			{label}
			<select
				className={styles.select}
				ref={ref}
				name={name}
				onChange={onChange}
				onBlur={onBlur}>
				{options.map((option) => (
					<option key={option.id} value={option.value}>
						{option.value}
					</option>
				))}
			</select>
		</label>
	)
);

Select.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	name: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
