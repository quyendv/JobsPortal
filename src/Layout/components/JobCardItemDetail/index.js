import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { CheckListIcon, CompanyIcon, JobIcon, LightBulbIcon } from '~/components/Icons';
import styles from './JobCardItem.module.scss';

const cx = classNames.bind(styles);

function JobCardItemDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>Software Developer Intern</h1>

                <div className={cx('company-info')}>
                    <span className={cx('name')}>Kofax</span>
                    <span className={cx('address')}>Hanoi, Hanoi, Vietnam</span>
                    <span className={cx('onsite-remote')}>(Onsite)</span>
                    <span className={cx('date-time')}>3 weeks ago</span>
                    <span className={cx('applications')}>3 applications</span>
                </div>

                <ul className={cx('detail-info')}>
                    <li>
                        <JobIcon />
                        <span>Internship · Internship</span>
                    </li>
                    <li>
                        <CompanyIcon />
                        <span>1,001-5,000 employees · Software Development</span>
                    </li>
                    <li>
                        <LightBulbIcon />
                        <span>See how you compare to 3 applicants.</span>
                    </li>
                    <li>
                        <CheckListIcon />
                        <span>8 of 10 skills match your profile</span>
                    </li>
                </ul>

                <div className={cx('btns')}>
                    <Button primary rounded>
                        Apply
                    </Button>
                    <Button outline rounded>
                        Save
                    </Button>
                </div>
            </div>

            {/* Body */}
            <div className={cx('description')}>
                <span>
                    Management and staff in Kofax's Software Development job family help the company to build and
                    improve new and/or existing software products and their applications that we sell to our customers.
                    The position of Software Development Intern requires that appointees are capable of making
                    independent technical decisions on assigned work.
                    <p>
                        <br />
                    </p>
                    <p>
                        Software Development Interns should be capable of independently performing most, if not all, of
                        the following tasks:
                    </p>
                    <p>
                        <br />
                    </p>
                    <ul>
                        <li>Contributing to product ideas and innovation</li>
                        <li>Conducting research, where appropriate and needed, to solve specific design problems</li>
                        <li>
                            Creating product and/or applications' architecture and design documentation to specify
                            software development requirements
                        </li>
                        <li>
                            Writing/developing code for new, existing or enhanced software products and applications
                        </li>
                        <li>
                            Working with various internal partners (such as Quality Assurance) to test new or enhanced
                            products and their applications
                        </li>
                        <li>
                            Participating in cross-functional build/configuration activities to ensure overall effective
                            and efficient new or enhanced software engineering design
                        </li>
                        <li>
                            Contributing to downstream business activities such as technical publications and other
                            technical communications' tool development to ensure streamlined and effective end-user use
                            of Kofax software products and their applications
                        </li>
                        <li>
                            Ensuring new or updated releases are completed on-time, on-target, on-budget and without
                            compromise to quality
                        </li>
                        <li>Supporting other internal and external partners/stakeholders/customers, as</li> and when
                        appropriate, in responding to technical inquiries
                    </ul>
                    <p>
                        <br />
                    </p>
                    <strong>
                        While the job description describes what is anticipated as the requirements of the position, the
                        job requirements are subject to change based upon any changing needs and requirements of the
                        business.
                    </strong>
                    <p>
                        <br />
                    </p>
                    <strong>Required Skills</strong>
                    <p>
                        <br />
                    </p>
                    <strong>Knowledge, Skills and Qualifications:</strong>
                    <p>
                        <br />
                    </p>
                    <ul>
                        <li>Able to collaborate and work well in a team environment.</li>
                        <li>Strong analytical and debug skills.</li>
                        <li>Good communications skills.</li>
                        <li>Ability to develop high-quality software.</li>
                        <li>Ability to work under pressure and prioritize tasks when required.</li>
                    </ul>
                    <p>
                        <br />
                    </p>
                    <strong>Required Skills</strong>
                    <p>
                        <br />
                    </p>
                    <ul>
                        <li>
                            Knowledge of Object Oriented Design and Development, and modern design patterns and
                            anti-patterns.
                        </li>
                        <li>Experience with C++ 11 programming standards or C# and higher language features.</li>
                        <li>Firm grasp of multi-threaded design and development.</li>
                        <li>
                            Self-motivated with strong ability to work independently and take ownership of development
                            targets.
                        </li>
                    </ul>
                    <p>
                        <br />
                    </p>
                    <strong>Preferred Skills</strong>
                    <p>
                        <br />
                    </p>
                    <ul>
                        <li>Experience with Visual Studio for C++ development.</li>
                        <li>Experience developing using SOLID programming principles.</li>
                        <li>Experience developing network applications, TCP/IP communications, HTTP, REST, SOAP.</li>
                        <li>Knowledge of unit testing frameworks and mocking frameworks considered an asset.</li>
                        <li>Knowledge of CI tools such as Jenkins.</li>
                        <li>Knowledge of scripting languages such as PowerShell, Python, etc.</li>
                    </ul>
                    <p>
                        <br />
                    </p>
                    <strong>Kofax, Inc. is an Equal Opportunity Employer M/F/D/V</strong>
                    <p>
                        <br />
                    </p>
                    <strong>Required Experience</strong>
                    <p>
                        <br />
                    </p>
                    <p>
                        Software Development Interns should have C++, C#, or Java experience and will work on an Agile
                        Scrum team to develop and maintain various desktop and server business applications in the Kofax
                        family of print, capture, and legal products.
                    </p>
                    <p>
                        <br />
                    </p>
                    <strong>Other Responsibilities</strong>
                    <ul>
                        <li>
                            Work as part of an Agile Scrum team to design, develop and maintain existing server-side
                            business applications.
                        </li>
                        <li>
                            Follow best practices for software development to ensure high quality and maintainable code.
                        </li>
                        <li>Enhance automation and unit test suites.</li>
                        <li>Help with efforts on continuous delivery and continuous integration.</li>
                        <li>Assist in code reviews and reduction of technical debt.</li>
                    </ul>
                </span>
            </div>
        </div>
    );
}

export default JobCardItemDetail;
