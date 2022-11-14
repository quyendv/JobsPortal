import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Footer from '../components/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

/**
 * Layout include: Header, Container, Footer
 */
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />

            {/* Container */}
            <>{children}</>

            <Footer />
            {/* TODO: add Copyright */}
        </div>
    );
}

export default DefaultLayout;
