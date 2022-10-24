import classNames from 'classnames/bind';
import Header from '../components/Header';
import RightSide from '../components/RightSide';
import styles from './ProfileLayout.module.scss';

const cx = classNames.bind(styles);

/**
 * Layout for Profile (/me)
 */
function ProfileLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h1>Profile Page</h1>
                </div>
                <RightSide />
            </div>
        </div>
    );
}

export default ProfileLayout;
