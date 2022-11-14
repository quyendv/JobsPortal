import {
    faSquareFacebook,
    faSquareGithub,
    faSquareGooglePlus,
    faSquarePinterest,
    faSquareTwitter,
    faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
    faBuilding,
    faCircleQuestion,
    faClockRotateLeft,
    faCutlery,
    faEarthAmerica,
    faEnvelope,
    faGraduationCap,
    faLocationDot,
    faPencil,
    faPhone,
    faTableList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import People from '~/layouts/components/People';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* Edit Btn */}
                <Button
                    className={cx('edit-profile', 'hover:underline')}
                    to="/edit"
                    leftIcon={<FontAwesomeIcon icon={faPencil} />}
                >
                    Edit Profile
                </Button>

                {/* General Info */}
                <div className={cx('info', 'general-info')}>
                    <div className={cx('background')}></div>
                    <Image
                        className={cx('avatar')}
                        src="https://media-exp1.licdn.com/dms/image/D4E03AQEn2uh6GOKBZA/profile-displayphoto-shrink_400_400/0/1666546258083?e=1673481600&v=beta&t=JT-zuRGLGRrNhoEcR3S7dC5gLMD6mEo-WQEULnHv8Os"
                        alt="avatar"
                    />
                    <div className={cx('content')}>
                        <div className="row">
                            <div className="col l-6">
                                <div className={cx('name')}>
                                    <span className={cx('first-name')}>FirstName</span>
                                    <span className={cx('last-name')}>LastName</span>
                                </div>
                                <div className={cx('member-date')}>
                                    <FontAwesomeIcon icon={faClockRotateLeft} className={cx('icon')} />
                                    <span>Member Since, Aug 14, 2016</span>
                                </div>
                                <div className={cx('address')}>
                                    <FontAwesomeIcon icon={faLocationDot} className={cx('icon')} />
                                    <span>Hanoi Capital Region</span>
                                </div>
                                <div className={cx('social')}>
                                    <FontAwesomeIcon icon={faSquareTwitter} />
                                    <FontAwesomeIcon icon={faSquareFacebook} />
                                    <FontAwesomeIcon icon={faSquareGooglePlus} />
                                    <FontAwesomeIcon icon={faSquarePinterest} />
                                    <FontAwesomeIcon icon={faSquareYoutube} />
                                    <FontAwesomeIcon icon={faSquareGithub} />
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="col l-6">
                                <h3 className="mb-4 text-2xl font-semibold  align-middle">Contact</h3>
                                <div className={cx('phone')}>
                                    <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                                    <span>(+84) 0xxx xxx xxx</span>
                                </div>
                                <div className={cx('email')}>
                                    <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                                    <span> info@gmail.com</span>
                                </div>
                                <div className={cx('website')}>
                                    <FontAwesomeIcon icon={faEarthAmerica} className={cx('icon')} />
                                    <span>www.mywebsite.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className={cx('info', 'education')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon icon={faGraduationCap} className={cx('icon')} />
                        <span className={cx('text')}>Education</span>
                    </h3>
                    <div className={cx('info-item')}>
                        <img src={images.education} alt="university" className="w-12 object-cover mr-4" />
                        <div className="text-base font-semibold">
                            VNU University of Engineering and Technology
                            <br />
                            <span className="text-sm font-normal">
                                Bachelor's degree, Computer Science
                                <br />
                                2020 - 2024
                            </span>
                        </div>
                    </div>
                </div>

                {/* Company */}
                <div className={cx('info', 'current-company')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon icon={faBuilding} className={cx('icon')} />
                        <span className={cx('text')}>Company</span>
                    </h3>
                    <p className={cx('info-item')}>
                        <img src={images.company} alt="university" className="w-12 object-cover mr-4" />
                        <div className="text-base font-semibold">
                            VNPT IT
                            <br />
                            <span className="text-sm font-normal">
                                IT Services and IT Consulting
                                <br />
                                Ha Noi
                            </span>
                        </div>
                    </p>
                </div>

                {/* Skills */}
                <div className={cx('info', 'skills')}>
                    <h3 className={cx('title', 'mb-6')}>
                        <FontAwesomeIcon icon={faCutlery} className={cx('icon')} />
                        <span className={cx('text')}>Skills</span>
                    </h3>
                    <li className='pl-3 font-medium text-lg'>OOP</li>
                    <li className='pl-3 font-medium text-lg'>DSA</li>
                    <li className='pl-3 font-medium text-lg'>Core Java</li>
                    <li className='pl-3 font-medium text-lg'>MySQL, MongoDB</li>
                    <li className='pl-3 font-medium text-lg'>ReactJS, NodeJS</li>
                    <li className='pl-3 font-medium text-lg'>Bootstrap, TailwindCSS</li>
                </div>

                {/* Description */}
                <div className={cx('info', 'description')}>
                    <h3 className={cx('title')}>
                        <FontAwesomeIcon icon={faTableList} className={cx('icon')} />
                        <span className={cx('text')}>Description</span>
                    </h3>
                    <p className={cx('info-item', 'indent-8 text-justify text-base text-gray-600')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque massa vel lorem
                        fermentum fringilla. Pellentesque id est et neque blandit ornare malesuada a mauris. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Sed sagittis, quam a fringilla congue, turpis
                        turpis molestie ligula, ut laoreet elit arcu sed nulla. Sed at quam commodo, egestas turpis
                        eget, fringilla dui. Etiam sit amet nulla metus. Etiam iaculis lobortis ultricies. Maecenas
                        maximus magna a metus consectetur, vel fermentum nisl ultrices. Quisque eget ante id dui posuere
                        ullamcorper ut molestie eros. Aliquam ultrices lacinia risus, at lacinia ante vehicula id. Nulla
                        in lectus dignissim, egestas purus sit amet, mattis libero. Maecenas ullamcorper rutrum porta.
                    </p>
                </div>
            </div>

            {/* RightSide */}
            <div className={cx('right-side')}>
                {/* Actions */}
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

                {/* Separate */}
                <div className={cx('spacer-horizontal')}></div>

                {/* Suggestion */}
                <div className={cx('people-suggest')}>
                    <h4>People you may know</h4>
                    <People />
                    <People />
                    <Link className={cx('separate-horizontal', 'see-more-connections')} to="">
                        See more connections
                    </Link>
                </div>

                {/* Learning */}
                <div className={cx('learning')}>
                    <div className={cx('learning-header')}>
                        <img src={images.favicon} alt="" className={cx('logo-right-side')} />
                        <span>Learning </span>
                    </div>
                    <div className={cx('learning-content')}>
                        <p className={cx('title')}>Add new skills with these courses, free for 24 hours</p>

                        {/* learning-recommendation-list */}
                        <Link className={cx('learning-recommendation-item')} to="">
                            <img src={images.learningRecommend1} alt="" />
                            <p className={cx('desc')}>Practical Engineering</p>
                        </Link>
                        <Link className={cx('learning-recommendation-item', 'separate-horizontal')} to="">
                            <img src={images.learningRecommend2} alt="" />
                            <p className={cx('desc')}>Migrating beyond Java 8</p>
                        </Link>
                        <Link className={cx('learning-recommendation-item', 'separate-horizontal')} to="">
                            <img src={images.learningRecommend3} alt="" />
                            <p className={cx('desc')}>8 Things You Must Know in Python</p>
                        </Link>
                    </div>

                    {/* See more */}
                    <Link className={cx('separate-horizontal', 'see-more-recommendations')} to="">
                        See my recommendations
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;
