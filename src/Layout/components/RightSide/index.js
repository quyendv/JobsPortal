import classNames from 'classnames/bind';
import styles from './RightSide.module.scss';

const cx = classNames.bind(styles);

function RightSide() {
    return (
        <div className={cx('wrapper')}>
            <h1>RightSide</h1>
        </div>
    );
}

export default RightSide;
