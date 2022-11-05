import classNames from 'classnames/bind';
import JobCardItem from '~/Layout/components/JobCardItem';
import JobCardItemDetail from '~/Layout/components/JobCardItemDetail';
import Toolbar from '~/Layout/JobsLayout/Toolbar';
import styles from './Jobs.module.scss';

const cx = classNames.bind(styles);

function Jobs() {
    return (
        <>
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
        </>
    );
}

export default Jobs;
