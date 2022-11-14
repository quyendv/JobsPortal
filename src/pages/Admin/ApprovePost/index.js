import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import styles from './Approve.module.scss';

const cx = classNames.bind(styles);

function ApprovePost() {
    return (
        <div className={cx('wrapper')}>
            <h1 className='text-3xl text-center py-6 text-red-500'>Recruitment Post</h1>
            <table class={cx('content')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company</th>
                        <th>Post Details</th>
                        <th>Address</th>
                        <th>Job Type</th>
                        <th>Remote/Onsite</th>
                        <th>Date Posted</th>
                        <th>Approve/Abort</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="group">
                        <td>1</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                    <tr className="group">
                        <td>2</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                    <tr className="group">
                        <td>3</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                    <tr className="group">
                        <td>4</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                    <tr className="group">
                        <td>5</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                    <tr className="group">
                        <td>6</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                    <tr className="group">
                        <td>7</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                    <tr className="group">
                        <td>8</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                    <tr className="group">
                        <td>9</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                    <tr className="group">
                        <td>10</td>
                        <td>Kofax</td>
                        <td>
                            <Link
                                to={routes.adminApprovePostDetails}
                                className="group-hover:underline group-hover:text-blue-600"
                            >
                                Content here
                            </Link>
                        </td>
                        <td>Hanoi, Vietnam</td>
                        <td>Part-time</td>
                        <td>Onsite</td>
                        <td> 7:00 1/Nov/22 - 3 weeks ago</td>
                        <td>
                            <div className='flex justify-evenly cursor-pointer'>
                                <i className="text-xl text-green-500">
                                    <FontAwesomeIcon icon={faCheck} />
                                </i>
                                <i className='text-xl text-red-500'>
                                    <FontAwesomeIcon icon={faTimes} />
                                </i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className='text-center text-lg underline px-4 rounded bg-gray-300 my-4'>Show more</span>
        </div>
    );
}

export default ApprovePost;
