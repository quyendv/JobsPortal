import { faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import {
    faBell,
    faBriefcase,
    faChalkboardUser,
    faCommentDots,
    faHouseChimney,
    faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import routesConfig from '~/config/routes';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

// TODO: Sửa nốt
const navLogin = [
    {
        title: 'Home',
        to: routesConfig.home,
        icon: faHouseChimney,
    },
    {
        title: 'My Network',
        to: '/mynetwork',
        icon: faPeopleGroup,
    },
    {
        title: 'Jobs',
        to: routesConfig.jobs,
        icon: faBriefcase,
    },
    {
        title: 'Messaging',
        to: '/messaging',
        icon: faCommentDots,
    },
    {
        title: 'Notifications',
        to: '/notifications',
        icon: faBell,
    },
];

const navGuest = [
    {
        title: 'Discover',
        to: '/discover',
        icon: faWpexplorer,
    },
    {
        title: 'People',
        to: '/people',
        icon: faPeopleGroup,
    },
    {
        title: 'Learning',
        to: '/learning',
        icon: faChalkboardUser,
    },
    {
        title: 'Jobs',
        to: routesConfig.jobs,
        icon: faBriefcase,
    },
];

function Navigation({ isLogin = false }) {
    const navList = isLogin ? navLogin : navGuest;

    return (
        <div className={cx('nav-list')}>
            {navList.map((navItem, index) => (
                <NavLink
                    key={index}
                    className={(nav) => cx('nav-item', { 'nav-active': nav.isActive })}
                    to={navItem.to}
                    end
                >
                    <FontAwesomeIcon className={cx('nav-icon')} icon={navItem.icon} />
                    <span>{navItem.title}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default Navigation;
