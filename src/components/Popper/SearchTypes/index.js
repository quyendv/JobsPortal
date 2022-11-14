import { faCaretDown, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import PopperWrapper from '../Wrapper';
import styles from './SearchTypes.module.scss';

const cx = classNames.bind(styles);

// TODO: scroll item-list
function SearchTypes({ items = [], title = '', nameItem = '', inputType = 'checkbox', inputSearch = {} }) {
    const [showTippy, setShowTippy] = useState(false);

    const handleShowTippy = () => {
        setShowTippy(true);
    };

    const handleHideTippy = () => {
        setShowTippy(false);
    };

    const handleToggleTippy = () => {
        setShowTippy(!showTippy);
    };

    return (
        <HeadlessTippy
            visible={showTippy}
            // trigger="click"
            placement="bottom-start"
            interactive
            onClickOutside={handleHideTippy}
            render={(attrs) => (
                <div className={cx('search-types-drop-down')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className="px-2 py-px absolute top-1 right-1 cursor-pointer" onClick={handleHideTippy}>
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                        <form action="" className="pt-4">
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
                                <Button type="reset" className={cx('reset-btn')} onClick={handleHideTippy}>
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
            <Button
                className={cx('btn')}
                rounded
                outline
                rightIcon={<FontAwesomeIcon icon={faCaretDown} />}
                onClick={handleToggleTippy}
            >
                {title}
            </Button>
        </HeadlessTippy>
    );
}

export default SearchTypes;
