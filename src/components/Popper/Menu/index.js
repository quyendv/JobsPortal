import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

// User-Menu (User-Popper)
function Menu({ children }) {
    return (
        <HeadlessTippy
            trigger="click"
            offset={[0, 7]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <header className={cx('header')}>
                            <Image
                                className={cx('user-avatar')}
                                src="https://media-exp1.licdn.com/dms/image/D4E03AQEn2uh6GOKBZA/profile-displayphoto-shrink_100_100/0/1666546258083?e=1672272000&v=beta&t=XUIyb1YN6H1tbfBy_yLMAwZkgMUc2umKn0fbHyTGCoQ"
                                alt="Fullname..."
                                fallback="https://lh3.googleusercontent.com/a/ALm5wu0xPapznyPPczdkQOWkw7LE6b2PQKWJnX7soGi52w=s96-c-rg-br100"
                            />
                            <div className={cx('brief-info')}>
                                <div className={cx('user-name')}>Fullname</div>
                                <p className={cx('desc')}>Student at VNU University of Engineering and Technology</p>
                            </div>
                        </header>
                        <Button outline rounded className={cx('view-profile')} to="/me">
                            View Profile
                        </Button>

                        {/* Thêm link sau */}
                        <div className={cx('account', 'info-list')}>
                            <h4>Account</h4>
                            <Link className={cx('info-item')} to="">
                                Setting & Privacy
                            </Link>
                            <Link className={cx('info-item')} to="">
                                Help
                            </Link>
                            <Link className={cx('info-item')} to="">
                                Language
                            </Link>
                        </div>
                        <div className={cx('manage', 'info-list')}>
                            <h4>Manage</h4>
                            <Link className={cx('info-item')} to="">
                                Posts & Activity
                            </Link>
                            <Link className={cx('info-item')} to="">
                                Job Posting Account
                            </Link>
                        </div>
                        <div className={cx('sign-out', 'info-list')}>
                            <Button className={cx('sign-out-btn', 'info-item')}>Sign out</Button>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
