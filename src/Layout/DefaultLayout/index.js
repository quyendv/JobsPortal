import classNames from 'classnames/bind';
import Header from '~/Layout/components/Header';
import LeftSide from '~/Layout/components/LeftSide';
import RightSide from '~/Layout/components/RightSide';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

/**
 * Layout for Home(/), Jobs(/jobs)
 */
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <LeftSide />
                <div className={cx('content')}>{children}</div>
                <RightSide />
            </div>
        </div>
    );
}

export default DefaultLayout;
