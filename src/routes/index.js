// Layouts
import { OnlyBodyLayout, ProfileLayout } from '~/Layout';

// Pages
import Home from '~/pages/Home';
import Jobs from '~/pages/Jobs';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Signup from '~/pages/Signup';

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
    {
        path: '/signup',
        component: Signup,
        layout: OnlyBodyLayout,
    },
    {
        path: '/login',
        component: Login,
        layout: OnlyBodyLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
