import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Image from '~/components/Image';
import { UserMenu } from '~/components/Popper';
import Navigation from '~/Layout/components/Navigation';
import Search from '~/Layout/components/Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    // const currentUser = true; // isLogin

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img className={cx('logo')} src={images.logo} alt="Linkedin" />

                {/* Search */}
                <Search />

                {/* Navigation */}
                <Navigation />

                {/* Actions */}
                <div className={cx('actions')}>
                    {/* isGuest */}

                    {/* isLogin */}
                    <UserMenu>
                        <div className={cx('user', 'separate')}>
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
                </div>
            </div>
        </div>
    );
}

export default Header;
