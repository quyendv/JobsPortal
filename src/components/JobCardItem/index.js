import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { InsightIcon } from '../Icons';
import Image from '../Image';
import styles from './JobCardItem.module.scss';

const cx = classNames.bind(styles);

function JobCardItem({ active = false }) {
    return (
        <div className={cx('job-card-item', { active: active })}>
            <div className={cx('job-card-item-header')}>
                <Image
                    className={cx('logo-company')}
                    src="https://media-exp1.licdn.com/dms/image/C560BAQF1CUo41v_BtA/company-logo_100_100/0/1561397785364?e=1675296000&v=beta&t=B5jDEW6CsNnw5boLEXW5pswvyvufygA87MvRhxHmj5Y"
                    alt="logo-company"
                />
                <div className={cx('job-card-item-info')}>
                    <Link className={cx('job-card-item-title')}>Software Developer Intern</Link>
                    <Link className={cx('job-card-item-company')}>Kofax</Link>
                    <p className={cx('job-card-item-address')}>Hanoi, Hanoi, Vietnam (On-site)</p>
                </div>
            </div>
            <div className={cx('job-card-item-insight')}>
                <InsightIcon className={cx('insight-icon')} />
                <span>Actively recruiting</span>
            </div>
            <div className={cx('job-card-item-footer')}>
                <span className={cx('date-time')}>3 weeks ago</span>
                <span className={cx('applications')}>3 applications</span>
            </div>
        </div>
    );
}

export default JobCardItem;
