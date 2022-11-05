import classNames from 'classnames/bind';
import Header from '../components/Header';
import styles from './JobsLayout.module.scss';

const cx = classNames.bind(styles);

function JobsLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {/* Custom header sau */}
            <Header />
            <>{children}</>
        </div>
    );
}

export default JobsLayout;
