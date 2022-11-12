import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import PopperWrapper from '../Wrapper';
import styles from './SearchTypes.module.scss';

const cx = classNames.bind(styles);

// TODO: close btn,, scroll item-list
function SearchTypes({ items = [], title = '', nameItem = '', inputType = 'checkbox', inputSearch = {} }) {
    return (
        <HeadlessTippy
            trigger="click"
            interactive
            render={(attrs) => (
                <div className={cx('search-types-drop-down')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <form action="">
                            <div className={cx('infos', 'pl-4 pr-8')}>
                                {inputSearch.include && (
                                    <input
                                        type="search"
                                        className={cx('search', `${inputSearch.field}`)}
                                        name={`${inputSearch.field}`}
                                        placeholder={`${inputSearch.placeholder}`}
                                    />
                                )}
                                {items.map((item, index) => (
                                    <label key={index} className="flex items-center" htmlFor={`${nameItem}-${index}`}>
                                        {item}
                                        <input type={inputType} name={nameItem} id={`${nameItem}-${index}`} />
                                        <span></span> {/* custom input radio checkbox */}
                                    </label>
                                ))}
                            </div>
                            <div className={cx('actions', 'px-2 mt-3 separate-horizontal flex place-content-center')}>
                                <Button type="reset" className={cx('reset-btn')}>
                                    Cancel
                                </Button>
                                <Button type="submit" className={cx('submit-btn')} primary>
                                    Show result
                                </Button>
                            </div>
                        </form>
                    </PopperWrapper>
                </div>
            )}
        >
            <Button className={cx('btn')} rounded outline rightIcon={<FontAwesomeIcon icon={faCaretDown} />}>
                {title}
            </Button>
        </HeadlessTippy>
    );
}

export default SearchTypes;
