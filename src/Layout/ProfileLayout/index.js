import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import People from '~/Layout/components/People';
import Header from '../components/Header';
import RightSide from '../components/RightSide';
import styles from './ProfileLayout.module.scss';

const cx = classNames.bind(styles);

/**
 * Layout for Profile (/me)
 */
function ProfileLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('general-info')}></div>
                    {/* <div className={cx('suggested-for-you')}></div> */}
                    <div className={cx('analytics')}></div>
                    <div className={cx('resources')}></div>
                    <div className={cx('activity')}></div>
                    <div className={cx('education')}></div>
                    <div className={cx('interests')}></div>
                </div>
                <RightSide className={cx('right-side')}>
                    <div className={cx('actions-group')}>
                        <Link to="">
                            <span>Edit public profile & URL</span>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </Link>
                        <div className={cx('separate-horizontal-both')}></div>
                        <Link to="">
                            <span>Add profile in another language</span>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </Link>
                    </div>

                    <div className={cx('spacer-horizontal')}></div>

                    <div className={cx('people-suggest')}>
                        {/* People-Sugesst */}
                        <h4>People you may know</h4>
                        <People />
                        <People />
                        <People />
                        <People />
                    </div>

                    <div className={cx('learning')}>
                        <div className={cx('learning-header')}>
                            <img src={images.logo} alt="" className={cx('logo-right-side')} />
                            <span>Learning </span>
                        </div>
                        <div className={cx('learning-content')}>
                            <p className={cx('title')}>Add new skills with these courses, free for 24 hours</p>

                            {/* learning-recommendation-list */}
                            <Link className={cx('learning-recommendation-item')} to="">
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C560DAQHBAzmD6L3oOw/learning-public-crop_60_100/0/1632332505547?e=1667448000&v=beta&t=vDzjG1zYUHmmShpLqMFVsZgY8PbGb-87BLpz71N6IP4"
                                    alt=""
                                />
                                <p className={cx('desc')}>Ditch Your Git GUI: Customize Terminal</p>
                            </Link>
                            <Link className={cx('learning-recommendation-item', 'separate-horizontal')} to="">
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C4E0DAQGVeN33neTjnA/learning-public-crop_60_100/0/1658255495072?e=1667451600&v=beta&t=lRp3sr2iBK986ZMn5DjTXp_yJvqehI-K6F7amp1v3iY"
                                    alt=""
                                />
                                <p className={cx('desc')}>Learning Jira Software</p>
                            </Link>
                            <Link className={cx('learning-recommendation-item', 'separate-horizontal')} to="">
                                <img
                                    src="https://media-exp1.licdn.com/dms/image/C560DAQFHJampWrPi4Q/learning-public-crop_60_100/0/1651520114118?e=1667451600&v=beta&t=SGUTFQQFU4t_i6tSca_bpB9RP0aXdgtdE3KGM11LU8Y"
                                    alt=""
                                />
                                <p className={cx('desc')}>Rust Tips and Tricks</p>
                            </Link>
                        </div>

                        {/* See more */}
                        <Link className={cx('separate-horizontal', 'see-more')} to="">
                            See my recommendations
                        </Link>
                    </div>
                </RightSide>
            </div>
            {/* Footer */}
        </div>
    );
}

export default ProfileLayout;
