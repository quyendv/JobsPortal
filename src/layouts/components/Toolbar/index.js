import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { SearchTypes } from '~/components/Popper';
import styles from './Toolbar.module.scss';

const cx = classNames.bind(styles);

const rightIcon = <FontAwesomeIcon icon={faCaretDown} />;

const datePosted = ['Any Time', 'Past Week', 'Past 24 hours', 'Past Month'];
const location = ['Ha Noi', 'Ho Chi Minh City', 'Da Nang', 'Hai Phong', 'Can Tho'];
const expLevel = ['Intern', 'Fresher', 'Junior', 'Senior'];
const company = ['Viettel Digital', 'Samsung Mobile', 'OMINEX', 'Agoda', 'Turing.com', 'TikTok', 'Techcombank (TCB)'];
const workplaceType = ['Onsite', 'Remote', 'Hybrid'];
const employmentType = ['Full-time', 'Part-time']; // Job Type

// TODO: JobTitle?, Location, WorkPlace-Type (onsite/remote), employment-type(job-type: full/part), ... requirements, benefits, desc...

function Toolbar() {
    return (
        <div className={cx('wrapper', 'separate-horizontal')}>
            <div className={cx('inner')}>
                {/* Jobs */}
                <HeadlessTippy>
                    <Button className={cx('btn', 'active')} rounded outline rightIcon={rightIcon}>
                        Jobs
                    </Button>
                </HeadlessTippy>

                {/* Filter search-types */}
                <div className={cx('search-types-block', 'separate-vertical-both')}>
                    {/* Date Posted */}
                    <SearchTypes items={datePosted} title="Date Posted" nameItem="date-posted" inputType="radio" />

                    {/* Experience Level */}
                    <SearchTypes items={expLevel} title="Experience Level" nameItem="exp-lv" inputType="checkbox" />

                    {/* Location */}
                    <SearchTypes
                        items={location}
                        title="Location"
                        nameItem="location"
                        inputType="checkbox"
                        inputSearch={{ include: true, field: 'location-search', placeholder: 'Add a location' }}
                    />

                    {/* WorkPlace Type */}
                    <SearchTypes
                        items={workplaceType}
                        title="Onsite/Remote"
                        nameItem="workplace-type"
                        inputType="checkbox"
                    />

                    {/* Company */}
                    <SearchTypes
                        items={company}
                        title="Company"
                        nameItem="company"
                        inputType="checkbox"
                        inputSearch={{ include: true, field: 'company-search', placeholder: 'Add a company' }}
                    />

                    {/* Employment-Type */}
                    <SearchTypes
                        items={employmentType}
                        title="Job Type"
                        nameItem="employment-type"
                        inputType="checkbox"
                    />
                </div>

                {/* Filter -> can remove */}
                <Button className={cx('btn')} rounded outline>
                    All Filters
                </Button>
            </div>
        </div>
    );
}

export default Toolbar;
