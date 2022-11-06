import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './OnlyBodyLayout.module.scss';

const cx = classNames.bind(styles);

// Authentication Layout
function OnlyBodyLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {/* Logo */}
            <img src={images.logoFull} alt="" />

            {/* Container */}
            <div className={cx('container')}>{children}</div>

            {/* About */}
            <div className={cx('about')}>About</div>
        </div>
    );
}

export default OnlyBodyLayout;
