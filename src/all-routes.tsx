import Home from './routes/Home';
import Setting from './routes/Setting';

export interface Route {
    pathname: string;
    module: any;
}

const routes: Array<Route> = [
    {
        pathname: '/',
        module: Home,
    },
    {
        pathname: '/setting',
        module: Setting,
    },
];

export default routes;
