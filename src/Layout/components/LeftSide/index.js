import classNames from "classnames/bind";
import styles from './LeftSide.module.scss'

const cx = classNames.bind(styles)

function LeftSide() {
    return (
        <div className={cx('wrapper')}>
            <h1>LeftSide</h1>
        </div>
    );
}

export default LeftSide;
