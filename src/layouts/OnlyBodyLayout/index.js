import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import routesConfig from '~/config/routes';
import styles from './OnlyBodyLayout.module.scss';

const cx = classNames.bind(styles);

// Authentication Layout
function OnlyBodyLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {/* Logo */}
            <Link to={routesConfig.home}>
                <img src={images.logoJobsPortal} alt="" />
            </Link>

            {/* Container */}
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default OnlyBodyLayout;
