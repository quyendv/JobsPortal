import { faKey, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './EditProfile.module.scss';

const cx = classNames.bind(styles);

// TODO: Validate form post & edit sau

function EditProfile() {
    const [avatar, setAvatar] = useState();
    const avatarRef = useRef();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        file.preview = URL.createObjectURL(file);
        setAvatar(file);

        if (avatar) avatarRef.current.src = file.preview;
        e.target.value = null;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('page-title')}>
                <span>Edit Profile</span>
            </div>
            <div className={cx('container')}>
                <div className={cx('left-side')}>
                    <Button className={cx('action-link')} leftIcon={<FontAwesomeIcon icon={faUser} />} to="/me">
                        Profile
                    </Button>
                    <Button
                        className={cx('action-link')}
                        leftIcon={<FontAwesomeIcon icon={faKey} />}
                        to="/change-password"
                    >
                        Change Password
                    </Button>
                    <Button
                        className={cx('action-link')}
                        leftIcon={<FontAwesomeIcon icon={faRightFromBracket} />}
                        to="/logout"
                    >
                        Logout
                    </Button>
                </div>

                <form className={cx('form')} action="">
                    <h3 className="text-xl font-semibold">Edit Personal Information</h3>

                    <div className={cx('avatar-block')}>
                        <input type="file" name="avatar" className={cx('avatar-file')} onChange={handleChangeAvatar} />
                        <Image
                            ref={avatarRef}
                            className={cx('avatar-image')}
                            src="https://media-exp1.licdn.com/dms/image/D4E03AQEn2uh6GOKBZA/profile-displayphoto-shrink_400_400/0/1666546258083?e=1673481600&v=beta&t=JT-zuRGLGRrNhoEcR3S7dC5gLMD6mEo-WQEULnHv8Os"
                            alt="avatar-mage"
                        />
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col l-6', 'form-group')}>
                            <label htmlFor="" className={cx('form-label')}>
                                First Name
                            </label>
                            <input
                                className={cx('form-control', 'first-name')}
                                type="text"
                                placeholder="First Name"
                                required
                            />
                        </div>

                        <div className={cx('col l-6', 'form-group')}>
                            <label htmlFor="" className={cx('form-label')}>
                                Last Name
                            </label>
                            <input
                                className={cx('form-control', 'last-name')}
                                type="text"
                                placeholder="Last Name"
                                required
                            />
                        </div>

                        <div className={cx('col l-6', 'form-group')}>
                            <label htmlFor="" className={cx('form-label')}>
                                User Name
                            </label>
                            <input
                                className={cx('form-control', 'user-name')}
                                type="text"
                                placeholder="User Name"
                                required
                            />
                        </div>

                        <div className={cx('col l-6', 'form-group')}>
                            <label htmlFor="" className={cx('form-label')}>
                                Date of Birth
                            </label>
                            <input className={cx('form-control', 'date-of-birth')} type="date" required />
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
                                Address
                            </label>
                            <input
                                className={cx('form-control', 'address')}
                                type="text"
                                placeholder="Address"
                                required
                            />
                        </div>

                        <div className={cx('col l-6', 'form-group')}>
                            <label htmlFor="" className={cx('form-label')}>
                                Gender
                            </label>
                            <select className={cx('form-control', 'gender')} name="gender" required>
                                <option value="intern" selected>
                                    Male
                                </option>
                                <option value="fresher">Female</option>
                                <option value="fresher">Others</option>
                            </select>
                        </div>
                    </div>

                    <div className={cx('row')}>
                        <div className={cx('col l-6', 'form-group')}>
                            <label htmlFor="" className={cx('form-label')}>
                                Education
                            </label>
                            <textarea
                                className={cx('form-control', 'education')}
                                // cols="30"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className={cx('col l-6', 'form-group')}>
                            <label htmlFor="" className={cx('form-label')}>
                                Current Company
                            </label>
                            <textarea
                                className={cx('form-control', 'current-company')}
                                // cols="30"
                                rows="3"
                            ></textarea>
                        </div>

                        <div className={cx('col l-6', 'form-group')}>
                            <label htmlFor="" className={cx('form-label')}>
                                Skills
                            </label>
                            <textarea
                                className={cx('form-control', 'bio')}
                                // cols="30"
                                rows="5"
                            ></textarea>
                        </div>

                        <div className={cx('col l-6', 'form-group')}>
                            <label htmlFor="" className={cx('form-label')}>
                                Bio
                            </label>
                            <textarea
                                className={cx('form-control', 'bio')}
                                // cols="30"
                                rows="5"
                            ></textarea>
                        </div>
                    </div>

                    <button
                        className="w-full p-2.5 mt-4 rounded-xl font-semibold text-white bg-blue-800 hover:bg-gray-700"
                        type="submit"
                    >
                        Update & Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;
