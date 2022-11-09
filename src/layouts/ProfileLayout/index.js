import classNames from 'classnames/bind';
import Header from '../components/Header';
import styles from './ProfileLayout.module.scss';

const cx = classNames.bind(styles);

/**
 * Layout for Profile (/me)
 * include RightSide
 */
function ProfileLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {/* Container */}
            <>{children}</>
            {/* Footer */}
        </div>
    );
}

export default ProfileLayout;
