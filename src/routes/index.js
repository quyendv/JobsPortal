// Layouts
import routesConfig from '~/config/routes';
import { OnlyBodyLayout, PostJobLayout, ProfileLayout } from '~/Layout';
import JobsLayout from '~/Layout/JobsLayout';

// Pages
import Home from '~/pages/Home';
import Jobs from '~/pages/Jobs';
import Login from '~/pages/Login';
import PostJob from '~/pages/PostJob';
import Profile from '~/pages/Profile';
import Signup from '~/pages/Signup';

const publicRoutes = [
    // Layout: DefaultLayout if undefined / route.layout if layout=truthy / Fragment if null (not Layout)
    {
        path: routesConfig.home, // /feed
        component: Home,
    },
    {
        path: routesConfig.jobs,
        component: Jobs,
        layout: JobsLayout,
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
        layout: PostJobLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
