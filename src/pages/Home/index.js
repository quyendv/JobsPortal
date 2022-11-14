import { faAngleRight, faCaretDown, faFileLines, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Banner from '~/layouts/components/Banner';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />

            {/* Our Job Section */}
            <section className={cx('section', 'section1', 'w-full')}>
                <h2 className="text-center text-5xl font-medium mb-16">
                    Our Job <span className="text-red-500">Process</span>
                </h2>
                <div className="row">
                    {/* Create */}
                    <div className="col l-4">
                        <div className={cx('our-job', 'group text-center hover:shadow-2xl')}>
                            <i className="inline-block w-14 h-14 text-2xl p-3 rounded-full mb-9 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faUsers} />
                            </i>
                            <h3 className="text-xl font-medium text-red-500 mb-2">Create Account</h3>
                            <p className="text-slate-800 mb-4">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit, sed do eiusmo <br />
                                tempor incididunt
                            </p>
                            <Button
                                className={cx(
                                    'px-4 py-0 rounded-full text-white font-normal bg-red-500',
                                    'opacity-0 group-hover:opacity-100',
                                    'transition-all ease-in duration-300',
                                    'hover:bg-gray-800',
                                )}
                                rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                    {/* Search */}
                    <div className="col l-4">
                        <div className={cx('our-job', 'group text-center hover:shadow-2xl')}>
                            <i className="inline-block w-14 h-14 text-2xl p-3 rounded-full mb-9 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faSearch} />
                            </i>
                            <h3 className="text-xl font-medium text-red-500 mb-2">Search Job</h3>
                            <p className="text-slate-800 mb-4">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit, sed do eiusmo <br />
                                tempor incididunt
                            </p>
                            <Button
                                className={cx(
                                    'px-4 py-0 rounded-full text-white font-normal bg-red-500',
                                    'opacity-0 group-hover:opacity-100',
                                    'transition-all ease-in duration-300',
                                    'hover:bg-gray-800',
                                )}
                                rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                    {/* Upload */}
                    <div className="col l-4">
                        <div className={cx('our-job', 'group text-center hover:shadow-2xl')}>
                            <i className="inline-block w-14 h-14 text-2xl p-3 rounded-full mb-9 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faFileLines} />
                            </i>
                            <h3 className="text-xl font-medium text-red-500 mb-2">Update resume</h3>
                            <p className="text-slate-800 mb-4">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit, sed do eiusmo <br />
                                tempor incididunt
                            </p>
                            <Button
                                className={cx(
                                    'px-4 py-0 rounded-full text-white font-normal bg-red-500',
                                    'opacity-0 group-hover:opacity-100',
                                    'transition-all ease-in duration-300',
                                    'hover:bg-gray-800',
                                )}
                                rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect and Learn Section */}
            <section className={cx('section', 'section2', 'w-full')}>
                <div className={cx('inner')}>
                    <div className="flex flex-col gap-12 w-1/2 p-8 cursor-pointer hover:shadow-2xl">
                        <img src={images.section1} alt="section1" className="w-80 object-cover ml-16" />
                        <div className="my-auto">
                            <h2 className="text-5xl font-extralight text-slate-700 tracking-wide mb-10">
                                Connect with people <br /> who can help
                            </h2>
                            <Button
                                className="px-6 py-3 text-xl font-normal border-slate-700 hover:border-slate-700"
                                rounded
                            >
                                Find people you know
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12 w-1/2 p-8 cursor-pointer hover:shadow-2xl">
                        <img src={images.section2} alt="section1" className="w-80 object-cover ml-16" />
                        <div className="my-auto">
                            <h2 className="text-5xl font-extralight text-slate-700 tracking-wide mb-10">
                                Learn the skills you <br /> need to succeed
                            </h2>
                            <Button
                                className="px-6 py-3 text-xl font-normal border-slate-700 hover:border-slate-700 hover:bg-gray-100"
                                rightIcon={<FontAwesomeIcon icon={faCaretDown} />}
                            >
                                Choose a topic to learn about
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Employers Section */}
            <section className={cx('section', 'section3', 'w-full')}>
                <div className={cx('inner')}>
                    <h2 className="text-5xl text-center font-medium mb-16">
                        Top <span className="text-blue-500">Employers</span>
                    </h2>
                    <div className="!grid grid-cols-8 gap-8">
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo1.jpg"
                                alt="emplogo1"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo2.jpg"
                                alt="emplogo2"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo3.jpg"
                                alt="emplogo3"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo4.jpg"
                                alt="emplogo4"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo5.jpg"
                                alt="emplogo5"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo6.jpg"
                                alt="emplogo6"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo7.jpg"
                                alt="emplogo7"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo8.jpg"
                                alt="emplogo8"
                            />
                        </li>
                        {/* row 2 */}
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo9.jpg"
                                alt="emplogo9"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo10.jpg"
                                alt="emplogo10"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo11.jpg"
                                alt="emplogo11"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo12.jpg"
                                alt="emplogo12"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo13.jpg"
                                alt="emplogo13"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo14.jpg"
                                alt="emplogo14"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo15.jpg"
                                alt="emplogo15"
                            />
                        </li>
                        <li className="inline-block w-28 hover:scale-125 hover:shadow-xl cursor-pointer">
                            <img
                                className="w-full object-cover"
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/employers/emplogo16.jpg"
                                alt="emplogo16"
                            />
                        </li>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section className={cx('section', 'section4', 'w-full')}>
                <div className={cx('inner')}>
                    <div className="row">
                        {/* App image */}
                        <div className="col l-5">
                            <img
                                src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/app-mobile.png"
                                alt="appImage"
                            />
                        </div>
                        {/* App info */}
                        <div className="col l-7 text-white">
                            <p className="text-2xl font-medium">Step Forword Now</p>
                            <h3 className="mt-1.5 mb-2.5 text-5xl font-semibold">THE JOBEE APP</h3>
                            <p className="mb-8 text-3xl font-medium">A world of oppertunity in your hand</p>
                            <p>
                                Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum
                                congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius,
                                pellentesque dui non, semper orci. Curabitur blandit, diam ut ornare ultricies.
                            </p>
                            <div className="flex gap-14 my-8">
                                <img
                                    className="cursor-pointer"
                                    src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/apple-btn.png"
                                    alt="apple"
                                />
                                <img
                                    className="cursor-pointer"
                                    src="https://www.sharjeelanjum.com/html/jobs-portal/demo/images/andriod-btn.png"
                                    alt="android"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
