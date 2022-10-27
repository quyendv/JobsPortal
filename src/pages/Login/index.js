import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { AppleIcon, GoogleIcon } from '~/components/Icons';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <form action="">
                <header>
                    <h1>Sign in</h1>
                    <p>Stay updated on your professional world</p>
                </header>

                <div className={cx('form-group')}>
                    <label htmlFor="email-login">Email or Phone</label>
                    <input type="email" name="" id="email-login" />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="password-login">Password</label>
                    <input type="password" name="" id="password-login" />
                    <span className={cx('form-message')}></span>
                </div>

                {/* Giao diện đổi pass làm sau */}
                <Button className={cx('forgot-password')} rounded to="">
                    Forgot password?
                </Button>
                <button className={cx('login-btn')} type="submit">
                    Sign in
                </button>

                <span className={cx('or')}>
                    <span>or</span>
                </span>

                {/* Thêm đường dẫn sau */}
                <Button className={cx('signin-google')} rounded outline leftIcon={<GoogleIcon />}>
                    Sign in with Google
                </Button>
                <Button className={cx('signin-apple')} rounded outline leftIcon={<AppleIcon />}>
                    Sign in with Apple
                </Button>

                <p className={cx('signup-redirect')}>
                    Don't have an account? <Link to="/signup">Join now</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
