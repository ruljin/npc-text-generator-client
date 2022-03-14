import { useState, useEffect } from 'react';
import { useModalContext } from '../../../components/modal/hooks/useModalContext';
import { Section, Typography } from '../../../components';
import { Form, GossipModal } from '../components';

export const Generator = () => {
	const [loading, setLoading] = useState(false);
	const [rumors, setRumors] = useState([]);
	const { open, setOpen } = useModalContext();

	useEffect(() => {
		if (rumors.length) {
			setOpen(true);
		}
	}, [rumors, setOpen]);

	return (
		<Section>
			<Typography variant='h2'>Generator</Typography>
			<Form setRumors={setRumors} loading={loading} setLoading={setLoading} />
			{open && <GossipModal setOpen={setOpen} rumors={rumors} />}
		</Section>
	);
};
