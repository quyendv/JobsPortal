import classNames from 'classnames/bind';
import JobCardItem from '~/layouts/components/JobCardItem';
import JobCardItemDetail from '~/layouts/components/JobCardItemDetail';
import Toolbar from '~/layouts/components/Toolbar';
import styles from './Jobs.module.scss';

const cx = classNames.bind(styles);

function Jobs() {
    return (
        <div className={cx('wrapper')}>
            <Toolbar />
            <div className={cx('container')}>
                <div className={cx('jobs-list')}>
                    {/* set alert -> sau */}
                    {/* List */}
                    <JobCardItem active />
                    <JobCardItem />
                    <JobCardItem />
                    <JobCardItem />
                    <JobCardItem />
                    <JobCardItem />
                    <JobCardItem />
                    <JobCardItem />
                    <JobCardItem />
                    <JobCardItem />
                </div>
                <div className={cx('job-card-item-detail')}>
                    <JobCardItemDetail />
                </div>
            </div>
        </div>
    );
}

export default Jobs;
