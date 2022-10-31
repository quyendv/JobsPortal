import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { InsightIcon } from '~/components/Icons';
import Image from '~/components/Image';
import JobCardItem from '~/components/JobCardItem';
import styles from './JobsList.module.scss';

const cx = classNames.bind(styles);

function JobsList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('jobs-list')}>
                {/* set alert -> sau */}
                {/* List */}
                <JobCardItem active/>
                <JobCardItem/>
                <JobCardItem/>
                <JobCardItem/>
                <JobCardItem/>
                <JobCardItem/>
                <JobCardItem/>
                <JobCardItem/>
                <JobCardItem/>
                <JobCardItem/>
            </div>
            <div className={cx('job-item-info-detail')}></div>
        </div>
    );
}

export default JobsList;
