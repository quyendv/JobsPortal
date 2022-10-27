import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Signup.module.scss';

const cx = classNames.bind(styles);

function Signup() {
    return (
        <div className={cx('wrapper')}>
            <p>Make the most of your professional life</p>
            <form action="">
                <div className={cx('form-input-container')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="email-signup">Email</label>
                        <input type="email" name="" id="email-signup" />
                        <span className={cx('form-message')}></span>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password-signup">Password (6 or more characters)</label>
                        <input type="password" name="" id="password-signup" />
                        <span className={cx('form-message')}></span>
                    </div>
                </div>
                <p className={cx('agreement')}>
                    By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement</span>,{' '}
                    <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
                </p>
                <button type="submit" className={cx('submit-form')}>
                    Agree & Join
                </button>

                <span className={cx('or')}>
                    <span>or</span>
                </span>

                <p className={cx('login-redirect')}>
                    <span>Already have an account?</span>
                    <Link className={cx('login-btn')} to="/login">
                        Sign in
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;
