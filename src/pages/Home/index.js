import classNames from 'classnames/bind';
import Banner from '~/layouts/components/Banner';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
        </div>
    );
}

export default Home;
