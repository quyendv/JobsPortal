import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { UserMenu } from '~/components/Popper';
import Navigation from '~/layouts/components/Navigation';
import Search from '~/layouts/components/Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true; // isLogin, sau sửa thành object lưu thông tin người dùng

    return (
        <div className={cx('wrapper', { guest: currentUser === false })}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img className={cx('logo')} src={currentUser ? images.logo : images.logoFull} alt="Linkedin" />

                {/* Search */}
                {currentUser ? <Search /> : <div className={cx('flex1')}></div>}

                {/* Navigation */}
                <Navigation isLogin={currentUser} />

                {/* Actions */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        /* isLogin: user infor */
                        <UserMenu>
                            <div className={cx('user', 'separate-vertical-both')}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://media-exp1.licdn.com/dms/image/D4E03AQEn2uh6GOKBZA/profile-displayphoto-shrink_100_100/0/1666546258083?e=1672272000&v=beta&t=XUIyb1YN6H1tbfBy_yLMAwZkgMUc2umKn0fbHyTGCoQ"
                                    alt="Fullname..."
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
