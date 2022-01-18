import { forwardRef } from 'react';
import styles from './select.module.css';

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
					<option key={option.id} value={option.id}>
						{option.value}
					</option>
				))}
			</select>
		</label>
	)
);
