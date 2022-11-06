import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Toolbar.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

const rightIcon = <FontAwesomeIcon icon={faCaretDown} />;

function Toolbar() {
    return (
        <div className={cx('wrapper', 'separate-horizontal')}>
            <div className={cx('inner')}>
                <HeadlessTippy>
                    <Button className={cx('btn', 'active')} rounded outline rightIcon={rightIcon}>
                        Jobs
                    </Button>
                </HeadlessTippy>
                <div className={cx('search-types', 'separate-vertical-both')}>
                    <Button className={cx('btn')} rounded outline rightIcon={rightIcon}>
                        Date Posted
                    </Button>
                    <Button className={cx('btn')} rounded outline rightIcon={rightIcon}>
                        Experience Level
                    </Button>
                    <Button className={cx('btn')} rounded outline rightIcon={rightIcon}>
                        Company
                    </Button>
                    <Button className={cx('btn')} rounded outline rightIcon={rightIcon}>
                        Job Type
                    </Button>
                    <Button className={cx('btn')} rounded outline rightIcon={rightIcon}>
                        On-site/Remote
                    </Button>
                    <Button className={cx('btn')} rounded outline>
                        Easy Apply
                    </Button>
                </div>
                <Button className={cx('btn')} rounded outline>
                    All Filters
                </Button>
            </div>
        </div>
    );
}

export default Toolbar;
