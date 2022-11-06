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
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

const navLogin = [
    {
        title: 'Home',
        to: '/',
        icon: faHouseChimney,
    },
    {
        title: 'My Network',
        to: '/mynetwork',
        icon: faPeopleGroup,
    },
    {
        title: 'Jobs',
        to: '/jobs',
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
        to: '/jobs',
        icon: faBriefcase,
    },
];

function Navigation({isLogin = false }) {
    const navList = isLogin ? navLogin : navGuest;
    const [navActive, setNavActive] = useState(navList === navLogin ? 0 : null);

    return (
        <div className={cx('nav-list')}>
            {navList.map((navItem, index) => (
                <Link
                    key={index}
                    className={cx('nav-item', {
                        'nav-active': navActive === index,
                    })}
                    to={navItem.to}
                    onClick={() => {
                        if (navActive !== null) setNavActive(index);
                    }}
                >
                    <FontAwesomeIcon className={cx('nav-icon')} icon={navItem.icon} />
                    <span>{navItem.title}</span>
                </Link>
            ))}
        </div>
    );
}

export default Navigation;
