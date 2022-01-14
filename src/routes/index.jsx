import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import { Main } from '../modules/main';
import { Generator } from '../modules/generator';

export const Routes = () => (
	<Router>
		<Switch>
			<Route path='/' element={<Main />} />
			<Route path='/generator' element={<Generator />} />
		</Switch>
	</Router>
);
