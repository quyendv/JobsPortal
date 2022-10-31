import classNames from 'classnames/bind';
import styles from './LeftSide.module.scss';

const cx = classNames.bind(styles);

function LeftSide({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default LeftSide;
