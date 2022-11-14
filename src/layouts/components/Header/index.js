import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { UserMenu } from '~/components/Popper';
import routesConfig from '~/config/routes';
import { AuthenticationContext } from '~/contexts';
import Navigation from '~/layouts/components/Navigation';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

// TODO: global state for user{type: 'candidate'/'employer'/'admin'}
function Header() {
    // const currentUser = false; // isLogin // TODO: user
    const [currentUser, setCurrentUser] = useContext(AuthenticationContext);
    console.log(currentUser);
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper', { guest: !currentUser.isLogin })}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* <img className={cx('logo')} src={currentUser.isLogin ? images.logo : images.logoFull} alt="Linkedin" /> */}
                <Link to="/">
                    <img className={cx('logo')} src={images.logoJobsPortal} alt="JobsPortal" />
                </Link>

                {/* Search */}
                {currentUser.isLogin && currentUser.type !== 'admin' ? <Search /> : <div className={cx('flex1')}></div>}

                {/* Navigation */}
                <Navigation currentUser={currentUser} />

                {/* Actions */}
                <div className={cx('actions')}>
                    {currentUser.isLogin ? (
                        /* isLogin: user infor */
                        <UserMenu
                            setLogout={() => {
                                setCurrentUser({ isLogin: false, type: undefined });
                                navigate(routesConfig.home);
                            }}
                        >
                            <div className={cx('user', 'separate-vertical-left')}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://media-exp1.licdn.com/dms/image/D4E03AQEn2uh6GOKBZA/profile-displayphoto-shrink_100_100/0/1666546258083?e=1672272000&v=beta&t=XUIyb1YN6H1tbfBy_yLMAwZkgMUc2umKn0fbHyTGCoQ"
                                    alt="FullName..."
                                    fallback="https://lh3.googleusercontent.com/a/ALm5wu0xPapznyPPczdkQOWkw7LE6b2PQKWJnX7soGi52w=s96-c-rg-br100"
                                />
                                <div>
                                    <span>Me</span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </div>
                            </div>
                        </UserMenu>
                    ) : (
                        /* isGuest: login/register */
                        <div className={cx('authenticate', 'separate-vertical-left')}>
                            <Button className={cx('btn', 'signup-btn')} to="/signup" rounded>
                                Join now
                            </Button>
                            <Button className={cx('btn', 'login-btn')} to="/login" rounded outline>
                                Sign in
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
