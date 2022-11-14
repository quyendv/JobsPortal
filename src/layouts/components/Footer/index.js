import {
    faFacebookSquare,
    faGooglePlusSquare,
    faInstagramSquare,
    faLinkedin,
    faTwitterSquare,
    faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faCaretRight, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wave')}></div>
            <div className={cx('content', 'grid text-slate-100')}>
                <div className="row">
                    {/* About */}
                    <div className="col l-3">
                        <div className="pr-8">
                            <img src={images.logoJobsPortal} alt="" />
                            <p className="text-justify tracking-wide text-sm mt-6">
                                Object Oriented Analysis and Design Project (2223I_INT3110E_40) by students of Faculty
                                of Information Technology, University of Engineering and Technology, Vietnam National
                                University. This software makes it easy to find jobs with top employers, learn more
                                skills with quality courses, connect with friends and more.
                            </p>
                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="col l-3">
                        <div className="px-4 ml-6">
                            <h3 className={cx('footer__heading')}>Team Members</h3>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Dao Van Quyen</span>
                            </div>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Le Anh Tuan</span>
                            </div>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Tran Van Duy</span>
                            </div>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Nguyen Vinh Dung</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col l-3">
                        <div>
                            <h3 className={cx('footer__heading')}>Quick Links</h3>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Post a Job</span>
                            </div>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Company Listening</span>
                            </div>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Career Resources</span>
                            </div>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">CV Writing</span>
                            </div>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Create Account</span>
                            </div>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Services</span>
                            </div>
                            <div className={cx('footer__link')}>
                                <FontAwesomeIcon icon={faCaretRight} /> <span className="ml-2">Our features</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col l-3">
                        <div>
                            <h3 className={cx('footer__heading')}>Contact Us</h3>
                            <div className={cx('footer__link')}>
                                <span className="inline-block w-4">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <span className="ml-2">
                                    <span className="inline-block w-16">Email</span>: AdminExample@gmail.com
                                </span>
                            </div>
                            <div className={cx('footer__link')}>
                                <span className="inline-block w-4">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <span className="ml-2">
                                    <span className="inline-block w-16">Address</span>: Example, Hanoi, Vietnam
                                </span>
                            </div>
                            <div className={cx('footer__link')}>
                                <span className="inline-block w-4">
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <span className="ml-2">
                                    <span className="inline-block w-16">Phone</span>: +84-xxx.xxx.xxx
                                </span>
                            </div>
                            <div className="flex gap-3 mt-8">
                                <i className='inline-block p-1 text-2xl cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-300 ease-in-out'>
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </i>
                                <i className='inline-block p-1 text-2xl cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-300 ease-in-out'>
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </i>
                                <i className='inline-block p-1 text-2xl cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-300 ease-in-out'>
                                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                                </i>
                                <i className='inline-block p-1 text-2xl cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-300 ease-in-out'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </i>
                                <i className='inline-block p-1 text-2xl cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-300 ease-in-out'>
                                    <FontAwesomeIcon icon={faYoutubeSquare} />
                                </i>
                                <i className='inline-block p-1 text-2xl cursor-pointer hover:scale-125 hover:text-red-500 transition-all duration-300 ease-in-out'>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
