import classNames from 'classnames/bind';

import style from './Header.module.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Box, Popover, Popper, Typography } from '@mui/material';
import HeaderMobile from './HeaderMobile';
import { useState } from 'react';
const cx = classNames.bind(style);
function Header() {
    // Sử lý sự kiện click vào menu Item để mở menu (Mobile)*
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    // Sử lý sự kiện hover chuột vào Course hiển thị các khóa học
    const [anchorElC, setAnchorElC] = useState(null);

    const handlePopoverOpenCourse = (event) => {
        setAnchorElC(event.currentTarget);
    };
    const handlePopoverCloseCourse = () => {
        setAnchorElC(null);
    };
    const openCourse = Boolean(anchorElC);

    // Sử lý sự kiện hover chuột vào Mentor hiển thị mentor
    const [anchorElM, setAnchorElM] = useState(null);

    const handlePopoverOpenMentor = (event) => {
        setAnchorElM(event.currentTarget);
    };
    const handlePopoverCloseMentor = () => {
        setAnchorElM(null);
    };
    const openMentor = Boolean(anchorElM);
    // Sử lý sự kiện hover chuột vào Mentor hiển thị Blog
    const [anchorElB, setAnchorElB] = useState(null);

    const handlePopoverOpenBlog = (event) => {
        setAnchorElB(event.currentTarget);
    };
    const handlePopoverCloseBlog = () => {
        setAnchorElB(null);
    };
    const openBlog = Boolean(anchorElB);
    return (
        <div>
            <div className={cx('wrapper')}>
                <header className={cx('header-main')}>
                    <div className={cx('header-top')}>
                        <div className={cx('container')}>
                            <div className={cx('header-top-wrapper')}>
                                <div className={cx('header-top-social')}>
                                    <ul>
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
                                </div>

                                <div className={cx('header-contact-info')}>
                                    <ul>
                                        <li className={cx('mb-3')}>
                                            <FontAwesomeIcon icon={faEnvelope} /> bsmart@gmail.com
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faPhone} /> +98 946005077
                                        </li>
                                    </ul>
                                </div>

                                <div className={cx('header-course-search')}>
                                    <form action="#" method="post">
                                        <input
                                            type="text"
                                            placeholder="Tìm kiếm khoá học"
                                            className={cx('form-control')}
                                        />
                                    </form>
                                    <span>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </div>

                                <div className={cx('header-log-reg')}>
                                    <ul>
                                        <li>
                                            <Link to="#" id="loginFormOpen">
                                                Login
                                            </Link>
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
                    <div className={cx('header-bottom')}>
                        <div className={cx('container')}>
                            <div className={cx('header-bottom-wrapper')}>
                                <Link to={config.routes.home} className={cx('site-logo')}>
                                    BSMART
                                </Link>
                                <nav className={cx('navbar navbar-expand-lg')}>
                                    <div className={cx('container-fluid')}>
                                        <div className={cx('collapse navbar-collapse')}>
                                            <ul className={cx('navbar-nav')}>
                                                <li>
                                                    <Typography>
                                                        <Link to={config.routes.home} className={cx('nav-link-custom')}>
                                                            Trang Chủ
                                                        </Link>
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography>
                                                        <Link
                                                            to={config.routes.aboutus}
                                                            className={cx('nav-link-custom')}
                                                        >
                                                            Về Chúng Tôi
                                                        </Link>
                                                    </Typography>
                                                </li>

                                                <li>
                                                    <Typography
                                                        aria-owns={openCourse ? 'mouse-over-popover' : undefined}
                                                        aria-haspopup="true"
                                                        onMouseEnter={handlePopoverOpenCourse}
                                                        onMouseLeave={handlePopoverCloseCourse}
                                                        fontFamily="Times New Roman"
                                                    >
                                                        <Link
                                                            to={config.routes.course}
                                                            className={cx('nav-link-custom')}
                                                        >
                                                            Khoá Học
                                                        </Link>
                                                    </Typography>
                                                    <Popover
                                                        id="mouse-over-popover"
                                                        sx={{
                                                            pointerEvents: 'none',
                                                        }}
                                                        open={openCourse}
                                                        anchorEl={anchorElC}
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',
                                                        }}
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'left',
                                                        }}
                                                        onClose={handlePopoverCloseCourse}
                                                        disableRestoreFocus
                                                    >
                                                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                                            <div
                                                                className={cx(
                                                                    'd-flex align-items-center justify-content-end',
                                                                )}
                                                            >
                                                                <ul className={cx('sub-menu')}>
                                                                    <li>
                                                                        <Link to="#">Front End</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">Back End</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">Devops</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Box>
                                                    </Popover>
                                                </li>
                                                <li>
                                                    <Typography
                                                        aria-owns={openMentor ? 'mouse-over-popover' : undefined}
                                                        aria-haspopup="true"
                                                        onMouseEnter={handlePopoverOpenMentor}
                                                        onMouseLeave={handlePopoverCloseMentor}
                                                        fontFamily="Times New Roman"
                                                    >
                                                        <Link
                                                            to={config.routes.course}
                                                            className={cx('nav-link-custom')}
                                                        >
                                                            Giảng viên
                                                        </Link>
                                                    </Typography>
                                                    <Popover
                                                        id="mouse-over-popover"
                                                        sx={{
                                                            pointerEvents: 'none',
                                                        }}
                                                        open={openMentor}
                                                        anchorEl={anchorElM}
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',
                                                        }}
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'left',
                                                        }}
                                                        onClose={handlePopoverCloseMentor}
                                                        disableRestoreFocus
                                                    >
                                                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                                            <div
                                                                className={cx(
                                                                    'd-flex align-items-center justify-content-end',
                                                                )}
                                                            >
                                                                <ul className={cx('sub-menu')}>
                                                                    <li>
                                                                        <Link to="#">Mr.Long</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">Mr.Cường</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Box>
                                                    </Popover>
                                                </li>

                                                <li>
                                                    <Typography
                                                        aria-owns={openBlog ? 'mouse-over-popover' : undefined}
                                                        aria-haspopup="true"
                                                        onMouseEnter={handlePopoverOpenBlog}
                                                        onMouseLeave={handlePopoverCloseBlog}
                                                        fontFamily="Times New Roman"
                                                    >
                                                        <Link
                                                            to={config.routes.course}
                                                            className={cx('nav-link-custom')}
                                                        >
                                                            Blog
                                                        </Link>
                                                    </Typography>
                                                    <Popover
                                                        id="mouse-over-popover"
                                                        sx={{
                                                            pointerEvents: 'none',
                                                        }}
                                                        open={openBlog}
                                                        anchorEl={anchorElB}
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',
                                                        }}
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'left',
                                                        }}
                                                        onClose={handlePopoverCloseBlog}
                                                        disableRestoreFocus
                                                    >
                                                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                                            <div
                                                                className={cx(
                                                                    'd-flex align-items-center justify-content-end',
                                                                )}
                                                            >
                                                                <ul className={cx('sub-menu')}>
                                                                    <li>
                                                                        <Link to="./FrontEnd">Sự kiện</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="./FrontEnd">Khuyến mãi</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="./FrontEnd">Tuyển dụng</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="./FrontEnd">Hoạt động</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Box>
                                                    </Popover>
                                                </li>
                                                <li>
                                                    <Typography>
                                                        <Link to={config.routes.home} className={cx('nav-link-custom')}>
                                                            Tuyển dụng
                                                        </Link>
                                                    </Typography>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                <div className={cx('header-cart')}>
                                    <Link to="#">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                        <span className={cx('cart-total-number')}>0</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('header-mobile')}>
                        <div className={cx('container')}>
                            <div className={cx('header-mobile-content')}>
                                <div className={cx('header-mobile-logo')}>
                                    <span>BSMART</span>
                                </div>
                                <div
                                    className={cx('header-mobile-menu-hambuger')}
                                    onClick={handleClick}
                                    id="activeMenu"
                                >
                                    <FontAwesomeIcon icon={faBars} />
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
                                        <HeaderMobile />
                                    </Box>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;
