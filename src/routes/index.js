// Layouts
import routesConfig from '~/config/routes';
import { OnlyBodyLayout, ProfileLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Jobs from '~/pages/Jobs';
import Login from '~/pages/Login';
import PostJob from '~/pages/PostJob';
import Profile from '~/pages/Profile';
import Signup from '~/pages/Signup';

const publicRoutes = [
    // Layout: DefaultLayout if undefined / route.layout if layout=truthy / Fragment if null (not Layout)
    // TODO: cập nhật layout
    {
        path: routesConfig.home, // /feed
        component: Home,
    },
    {
        path: routesConfig.jobs,
        component: Jobs,
    },

    {
        path: routesConfig.profile,
        component: Profile,
        layout: ProfileLayout,
    },
    {
        path: routesConfig.signup,
        component: Signup,
        layout: OnlyBodyLayout,
    },
    {
        path: routesConfig.login,
        component: Login,
        layout: OnlyBodyLayout,
    },
    {
        path: routesConfig.postJob,
        component: PostJob,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
