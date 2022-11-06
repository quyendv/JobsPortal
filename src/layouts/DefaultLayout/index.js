import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

/**
 * Layout include: Header, Container, Footer
 * // TODO: Layout for Home(/), Jobs(/jobs), ...
 */
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {/* Container */}
            <>{children}</>
            {/* Footer */}
        </div>
    );
}

export default DefaultLayout;
