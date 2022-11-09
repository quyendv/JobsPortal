import classNames from 'classnames/bind';
import styles from './PostJob.module.scss';

const cx = classNames.bind(styles);

function PostJob() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('page-title')}>
                <span>Post Job</span>
            </div>
            <form className={cx('form')} action="">
                <h3 className="text-xl font-semibold">Job Information</h3>

                <div className={cx('row')}>
                    <div className={cx('col l-12', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Job Title
                        </label>
                        <input
                            className={cx('form-control', 'job-title')}
                            type="text"
                            placeholder="Jobs Title"
                            required
                        />
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Company
                        </label>
                        <input className={cx('form-control', 'company')} type="text" placeholder="Company" required />
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Location
                        </label>
                        <input className={cx('form-control', 'location')} type="text" placeholder="Location" required />
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Email
                        </label>
                        <input className={cx('form-control', 'email')} type="text" placeholder="Email" required />
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Phone
                        </label>
                        <input
                            className={cx('form-control', 'phone')}
                            type="text"
                            placeholder="Phone Number"
                            required
                        />
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Workplace Type
                        </label>
                        <select className={cx('form-control', 'workplace-type')} name="workplace-type" required>
                            <option value="onsite" selected>
                                Onsite
                            </option>
                            <option value="hybrid">Hybrid</option>
                            <option value="remote">Remote</option>
                        </select>
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Employment Type
                        </label>
                        <select className={cx('form-control', 'employment-type')} name="employment-type">
                            <option value="full-time" selected>
                                Full-time
                            </option>
                            <option value="part-time">Part-time</option>
                        </select>
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Experience Level
                        </label>
                        <select className={cx('form-control', 'employment-type')} name="employment-type">
                            <option value="intern" selected>
                                Intern
                            </option>
                            <option value="fresher">Fresher</option>
                            <option value="junior">Junior</option>
                            <option value="senior">Senior</option>
                        </select>
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Number Positions
                        </label>
                        <input
                            className={cx('form-control', 'number-positions')}
                            type="text"
                            placeholder="Number Positions"
                            required
                        />
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Requirements
                        </label>
                        <textarea
                            className={cx('form-control', 'requirements')}
                            // cols="30"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <div className={cx('col l-6', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Benefits
                        </label>
                        <textarea
                            className={cx('form-control', 'benefits')}
                            // cols="30"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <div className={cx('col l-12', 'form-group')}>
                        <label htmlFor="" className={cx('form-label')}>
                            Job Descriptions
                        </label>
                        <textarea
                            className={cx('form-control', 'job-descriptions')}
                            // cols="30"
                            rows="8"
                            required
                        ></textarea>
                    </div>
                </div>

                <button
                    className="w-full p-2.5 mt-4 rounded-xl font-semibold text-white bg-blue-800 hover:bg-gray-700"
                    type="submit"
                >
                    Post Job
                </button>
            </form>
        </div>
    );
}

export default PostJob;
