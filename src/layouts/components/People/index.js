import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './People.module.scss';

const cx = classNames.bind(styles);

function People() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('general-info')}>
                <Image
                    className={cx('user-avatar')}
                    // src="https://media-exp1.licdn.com/dms/image/D4E03AQEn2uh6GOKBZA/profile-displayphoto-shrink_100_100/0/1666546258083?e=1672272000&v=beta&t=XUIyb1YN6H1tbfBy_yLMAwZkgMUc2umKn0fbHyTGCoQ"
                    src="https://lh3.googleusercontent.com/a/ALm5wu0xPapznyPPczdkQOWkw7LE6b2PQKWJnX7soGi52w=s96-c-rg-br100"
                    alt="FullName..."
                    // fallback="https://lh3.googleusercontent.com/a/ALm5wu0xPapznyPPczdkQOWkw7LE6b2PQKWJnX7soGi52w=s96-c-rg-br100"
                />
                <div className={cx('brief-info')}>
                    <div className={cx('user-name')}>FullName</div>
                    <p className={cx('desc')}>Student at VNU University of Engineering and Technology</p>
                </div>
            </div>

            <Button outline rounded className={cx('connect')}>Connect</Button>
        </div>
    );
}

export default People;
