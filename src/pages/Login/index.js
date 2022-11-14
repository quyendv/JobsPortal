import classNames from 'classnames/bind';
import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import { AppleIcon, GoogleIcon } from '~/components/Icons';
import routesConfig from '~/config/routes';
import { AuthenticationContext } from '~/contexts';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

// TODO: remove cache chrome save password admin/employer/candidate@gmail.com
function Login() {
    const emailRef = useRef();
    const [currentUser, setCurrentUser] = useContext(AuthenticationContext);

    const navigate = useNavigate();

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            if (email === 'admin@gmail.com') {
                setCurrentUser({ isLogin: true, type: 'admin' });
            } else if (email === 'candidate@gmail.com') {
                setCurrentUser({ isLogin: true, type: 'candidate' });
            } else if (email === 'employer@gmail.com') {
                setCurrentUser({ isLogin: true, type: 'employer' });
            }
            navigate(routesConfig.home);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <form action="">
                <header>
                    <h1 className="text-3xl font-semibold">Sign in</h1>
                    <p>Stay updated on your professional world</p>
                </header>

                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        ref={emailRef}
                        placeholder=" "
                        type="email"
                        name="email"
                        id="email-login"
                        required
                    />
                    <label className={cx('form-label')} htmlFor="email-login">
                        Email or Phone
                    </label>
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('form-group')}>
                    <input
                        className={cx('form-control')}
                        placeholder=" "
                        type="password"
                        name="password"
                        id="password-login"
                        required
                    />
                    <label className={cx('form-label')} htmlFor="password-login">
                        Password
                    </label>
                    <span className={cx('form-message')}></span>
                </div>

                {/* // TODO: Giao diện đổi pass làm sau */}
                <Button className={cx('forgot-password')} rounded to="" type="button">
                    Forgot password?
                </Button>
                <br />
                <Button className={cx('login-btn')} type="submit" onClick={handleSubmitLogin}>
                    Sign in
                </Button>

                <span className={cx('or')}>
                    <span>or</span>
                </span>

                {/* TODO: Thêm đường dẫn sau */}
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
