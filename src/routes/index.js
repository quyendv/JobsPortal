// Layouts
import { ProfileLayout } from '~/Layout';

// Pages
import Home from '~/pages/Home';
import Jobs from '~/pages/Jobs';
import Profile from '~/pages/Profile';

const publicRoutes = [
    // Layout: DefaultLayout if undefined / route.layout if layout=truthy / Fragment if null (not Layout)
    {
        path: '/', // /feed
        component: Home,
    },
    {
        path: '/jobs',
        component: Jobs,
    },

    {
        path: '/me',
        component: Profile,
        layout: ProfileLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
