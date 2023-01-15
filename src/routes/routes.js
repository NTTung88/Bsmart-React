import config from '~/config';
//Layout
import Home from '~/pages/Home';
import AboutUs from '~/pages/AboutUs';
import Course from '~/pages/Courses';
import Mentor from '~/pages/Mentor';

import Blog from '~/pages/Blog';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.aboutus, component: AboutUs },
    { path: config.routes.course, component: Course },
    { path: config.routes.mentor, component: Mentor },
    { path: config.routes.blog, component: Blog },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
