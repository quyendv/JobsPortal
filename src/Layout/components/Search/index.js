import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <HeadlessTippy
            // visible
            trigger="click" /* sửa sau */
            interactive
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('search-title')}>Try searching for</div>
                        <div className={cx('search-suggestion')}>
                            <SearchIcon />
                            <h4>#hiring</h4>
                        </div>
                        <div className={cx('search-suggestion')}>
                            <SearchIcon />
                            <h4>#jobadvice</h4>
                        </div>
                        <div className={cx('search-suggestion')}>
                            <SearchIcon />
                            <h4>covid-19</h4>
                        </div>
                        <div className={cx('search-suggestion')}>
                            <SearchIcon />
                            <h4>great resignation</h4>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <SearchIcon className={cx('search-icon')} />
                <input type="text" placeholder="Search" />
            </div>
        </HeadlessTippy>
    );
}

export default Search;
