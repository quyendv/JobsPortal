import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Banner.module.scss';
import './CustomSwiper.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner')}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={1000}
                loop
            >
                <SwiperSlide>
                    <div className={cx('banner-item', 'banner-1')}>
                        <div className={cx('content')}>
                            <h1 className={cx('heading')}>Welcome to your professional community</h1>
                            <ul className={cx('list-actions', 'w-full')}>
                                <Button className={cx('action')} rightIcon={<FontAwesomeIcon icon={faAngleRight} />}>
                                    Search for a job
                                </Button>
                                <Button className={cx('action')} rightIcon={<FontAwesomeIcon icon={faAngleRight} />}>
                                    Find a person you know
                                </Button>
                                <Button className={cx('action')} rightIcon={<FontAwesomeIcon icon={faAngleRight} />}>
                                    Learn a new skill
                                </Button>
                            </ul>
                        </div>
                        <img className={cx('image')} src={images.banner1} alt="banner1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={cx('banner-item', 'banner-2')}
                        style={{ background: `url(${images.banner2}) no-repeat center / cover` }}
                    >
                        <div className={cx('content')}>
                            <h1 className={cx('heading')}>Search your job in your area</h1>
                            <p className={cx('desc')}>
                                Each month, more than 3 million job seekers turn to website in their search for work,
                                making over 140,000 applications every single day
                            </p>
                            <Button className="bg-blue-600 text-2xl">Contact Us</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className={cx('banner-item', 'banner-3')}
                        style={{ background: `url(${images.banner3}) no-repeat center 10% / cover` }}
                    >
                        <div className={cx('content')}>
                            <h1 className={cx('heading')}>
                                Find Your Favourite <br />
                                <span className="text-red-500">Job Immediete</span>
                            </h1>
                            <p className={cx('desc')}>
                                The <span className="text-blue-400">Easiest Way</span> to Get Your New Job
                                <br />
                                The <span className="text-green-500">#1 Job Board</span> for Hiring or Find Your Next
                                Job
                            </p>
                            <div className={cx('search-area', 'flex items-center')}>
                                <FontAwesomeIcon icon={faSearch} />
                                <input
                                    type="search"
                                    className="bg-transparent px-4 flex-1"
                                    placeholder="Search by Skill, Job and Company"
                                />
                                <Button className="text-white bg-gray-700 rounded-full px-8 hover:bg-red-500 transition-all duration-300">
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cx('banner-item', 'banner-4')}>
                        <div className={cx('content')}>
                            <h1 className={cx('heading')}>
                                Get The <span className="text-blue-600">Right Job</span> <br />
                                You Deserve
                            </h1>
                            <p className={cx('desc')}>
                                Find Jobs, Hire Creatives
                                <br />
                                There Are <span className="text-green-400">102,256</span> Postings Here For you!
                            </p>
                        </div>
                        <img className={cx('banner4-img')} src={images.banner4} alt="banner4-img" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
