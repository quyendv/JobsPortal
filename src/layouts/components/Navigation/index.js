import { faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import {
    faBell,
    faBriefcase,
    faChalkboardUser,
    faCommentDots,
    faHouseChimney,
    faPenToSquare,
    faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import routesConfig from '~/config/routes';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

// TODO: Thêm disabled, sửa notification sau
const navLogin = [
    {
        title: 'Home',
        to: routesConfig.home,
        icon: faHouseChimney,
    },
    {
        title: 'My Network',
        to: routesConfig.myNetwork,
        icon: faPeopleGroup,
        disabled: true,
    },
    {
        title: 'Jobs',
        to: routesConfig.jobs,
        icon: faBriefcase,
    },
    {
        title: 'Post Job',
        to: routesConfig.postJob,
        icon: faPenToSquare
    },
    {
        title: 'Messaging',
        to: routesConfig.message,
        icon: faCommentDots,
        disabled: true,
    },
    {
        title: 'Notifications',
        to: routesConfig.notifications,
        icon: faBell,
        disabled: true,
    },
];

const navGuest = [
    {
        title: 'Discover',
        to: routesConfig.discovery,
        icon: faWpexplorer,
        disabled: true,
    },
    {
        title: 'People',
        to: routesConfig.people,
        icon: faPeopleGroup,
        disabled: true,
    },
    {
        title: 'Learning',
        to: routesConfig.learning,
        icon: faChalkboardUser,
        disabled: true,
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
                    className={(nav) => cx('nav-item', { 'nav-active': nav.isActive, disabled: navItem.disabled })}
                    to={navItem.to}
                    end
                >
                    <FontAwesomeIcon className={cx('nav-icon')} icon={navItem.icon} />
                    {/* <HomeIcon className={cx('nav-icon')}/> */}
                    <span>{navItem.title}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default Navigation;
