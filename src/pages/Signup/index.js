import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './Signup.module.scss';

const cx = classNames.bind(styles);


function Signup() {
    const [formType, setFormType] = useState('candidate');
    const activeBtnRef = useRef();
    const formBoxRef = useRef();

    useEffect(() => {
        if (activeBtnRef) {
            if (formType === 'candidate') {
                activeBtnRef.current.style.left = '12px';
                formBoxRef.current.style.marginLeft = `0`;
            } else if (formType === 'employer') {
                activeBtnRef.current.style.left = '258px';
                formBoxRef.current.style.marginLeft = `-${491 + 62}px`;
            }
        }
    }, [formType]);

    const handleChangeEmployerForm = () => {
        if (formType === 'candidate') {
            setFormType('employer');
        }
    };

    const handleChangeCandidateForm = () => {
        if (formType === 'employer') {
            setFormType('candidate');
        }
    };

    return (
        <div className={cx('wrapper', 'text-slate-700')}>
            <p className="text-4xl font-medium">Make the most of your professional life</p>
            <div className={cx('container', 'mx-auto px-8 py-6 mt-6 bg-white')}>
                <h1 className="text-3xl font-semibold py-5 px-4">Sign Up</h1>
                <div className={cx('btn-group')}>
                    <button className={cx('btn', 'btn-active')} ref={activeBtnRef}>
                        {formType}
                    </button>
                    <button className={cx('btn', 'btn-candidate')} onClick={handleChangeCandidateForm}>
                        Candidate
                    </button>
                    <button className={cx('btn', 'btn-employer')} onClick={handleChangeEmployerForm}>
                        Employer
                    </button>
                </div>

                <div className={cx('form-box')} ref={formBoxRef}>
                    <form className={cx('form', 'candidate-form')} action="">
                        <div className={cx('form-group')}>
                            <input type="text" className={cx('form-control')} placeholder="&nbsp;" name="full-name" />
                            <label className={cx('form-label')}>Full Name</label>
                        </div>
                        <div className={cx('form-group')}>
                            <input type="text" className={cx('form-control')} placeholder="&nbsp;" name="user-name" />
                            <label className={cx('form-label')}>Username</label>
                        </div>
                        <div className={cx('form-group')}>
                            <input type="email" className={cx('form-control')} placeholder="&nbsp;" name="email" />
                            <label className={cx('form-label')}>Email</label>
                        </div>
                        <div className={cx('form-group')}>
                            <input
                                type="password"
                                className={cx('form-control')}
                                placeholder="&nbsp;"
                                name="password"
                            />
                            <label className={cx('form-label')}>Password</label>
                        </div>
                        <div className={cx('form-group')}>
                            <input
                                type="password"
                                className={cx('form-control')}
                                placeholder="&nbsp;"
                                name="confirm-password"
                            />
                            <label className={cx('form-label')}>Confirm Password</label>
                        </div>
                        <p className={cx('agreement')}>
                            By clicking Agree & Join, you agree to the JobsPortal <span>User Agreement</span>,{' '}
                            <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
                        </p>
                        <Button type="submit" className={cx('submit-form')}>
                            Agree & Join
                        </Button>
                    </form>

                    <form className={cx('form', 'employer-form')} action="">
                        <div className={cx('form-group')}>
                            <input
                                type="text"
                                className={cx('form-control')}
                                placeholder="&nbsp;"
                                name="company-name"
                            />
                            <label className={cx('form-label')}>Company Name</label>
                        </div>
                        <div className={cx('form-group')}>
                            <input type="text" className={cx('form-control')} placeholder="&nbsp;" name="user-name" />
                            <label className={cx('form-label')}>Username</label>
                        </div>
                        <div className={cx('form-group')}>
                            <input type="email" className={cx('form-control')} placeholder="&nbsp;" name="email" />
                            <label className={cx('form-label')}>Email</label>
                        </div>
                        <div className={cx('form-group')}>
                            <input
                                type="password"
                                className={cx('form-control')}
                                placeholder="&nbsp;"
                                name="password"
                            />
                            <label className={cx('form-label')}>Password</label>
                        </div>
                        <div className={cx('form-group')}>
                            <input
                                type="password"
                                className={cx('form-control')}
                                placeholder="&nbsp;"
                                name="confirm-password"
                            />
                            <label className={cx('form-label')}>Confirm Password</label>
                        </div>
                        <p className={cx('agreement')}>
                            By clicking Agree & Join, you agree to the JobsPortal <span>User Agreement</span>,{' '}
                            <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
                        </p>
                        <Button type="submit" className={cx('submit-form')}>
                            Agree & Join
                        </Button>
                    </form>
                </div>

                <span className={cx('or')}>
                    <span>or</span>
                </span>

                <p className={cx('login-redirect')}>
                    <span>Already have an account?</span>
                    <Link className={cx('login-btn')} to="/login">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
