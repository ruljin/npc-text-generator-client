import {
	HashRouter as Router,
	// BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import { Page } from '../layout/Page';
import { Main } from '../modules/main';
import { Generator } from '../modules/generator';
import { NotFound } from '../pages';

export const Routes = () => (
	<Router>
		<Page>
			<Switch>
				<Route path='/' element={<Main />} />
				<Route path='/generator' element={<Generator />} />
				<Route path='*' element={<NotFound />} />
			</Switch>
		</Page>
	</Router>
);
