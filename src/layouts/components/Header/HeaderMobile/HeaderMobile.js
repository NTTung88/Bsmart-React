import classNames from 'classnames/bind';

import style from './HeaderMobile.module.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Box, Popover, Popper } from '@mui/material';
import ExpandIcon from '@mui/icons-material/Expand';
import { useState } from 'react';

const cx = classNames.bind(style);
function HeaderMobile() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const [anchorElC, setAnchorElC] = useState(null);

    const handleClickMentor = (event) => {
        setAnchorElC(event.currentTarget);
    };
    const handleCloseMentor = () => {
        setAnchorElC(null);
    };

    const openC = Boolean(anchorElC);
    const idC = open ? 'simple-popper' : undefined;

    return (
        <div className={cx('sidebar-wrap')} id="sidebar-mobile">
            <div className={cx('container-fluid')}>
                <div className={cx('sidebar-content')}>
                    <div className={cx('sidebar-top')}>
                        <a href="./index.html" className={cx('sidebar-logo')}>
                            BSMART
                        </a>
                        <i className={cx('sidebar-close')} id="closeSidebar"></i>
                    </div>
                    <div className={cx('sidebar-center')}>
                        <ul className={cx('sidebar-mean-nav')}>
                            <li>
                                <Link to={config.routes.home}>Trang chủ</Link>
                            </li>
                            <li>
                                <Link to={config.routes.aboutus}>Về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to={config.routes.course}>Khoá học</Link>

                                <div>
                                    <div className={cx('mean-expand')} onClick={handleClick}>
                                        <ExpandIcon />
                                    </div>
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                            <div className={cx('d-flex align-items-center justify-content-end')}>
                                                <ul className={cx('sub-menu')}>
                                                    <li>
                                                        <Link to="./FrontEnd">Front End</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="./FrontEnd">Back End</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="./FrontEnd">Devops</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Box>
                                    </Popover>
                                </div>
                            </li>
                            <li>
                                <Link to={config.routes.mentor}>Giảng viên</Link>
                                <div>
                                    <div className={cx('mean-expand')} onClick={handleClickMentor}>
                                        <ExpandIcon />
                                    </div>
                                    <Popover
                                        id={idC}
                                        open={openC}
                                        anchorEl={anchorElC}
                                        onClose={handleCloseMentor}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                            <div className={cx('d-flex align-items-center justify-content-end')}>
                                                <ul className={cx('sub-menu')}>
                                                    <li>
                                                        <Link href="#">Mentor Long</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Mentor Cuong</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Box>
                                    </Popover>
                                </div>
                            </li>
                            <li>
                                <Link to={config.routes.blog}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('sidebar-bottom')}>
                        <div className={cx('search-course')}>
                            <form action="#" method="post">
                                <input type="text" placeholder="Tìm kiếm khoá học" className={cx('form-control')} />
                            </form>

                            <span>
                                <i className={cx('fa fa-search')}></i>
                            </span>
                        </div>
                        <ul className={cx('contact-info')}>
                            <li className={cx('mb-3')}>
                                <FontAwesomeIcon icon={faDribbble} />
                                bsmart@gmail.com
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} /> +98 946005077
                            </li>
                        </ul>
                        <ul className={cx('social-list')}>
                            <li>
                                <Link to="#">
                                    <FontAwesomeIcon className={cx('headerIcon')} icon={faTwitter} />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <FontAwesomeIcon className={cx('headerIcon')} icon={faLinkedin} />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <FontAwesomeIcon className={cx('headerIcon')} icon={faDribbble} />
                                </Link>
                            </li>
                        </ul>
                        <ul className={cx('sidebar-controls')}>
                            <li>
                                <a href="./login-mobile.html">Login</a>
                            </li>
                            <li>
                                <small>|</small>
                            </li>
                            <li>
                                <Link href="./register.html">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMobile;
