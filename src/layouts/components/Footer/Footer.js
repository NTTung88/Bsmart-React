import classNames from 'classnames/bind';
import style from './Footer.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { faEnvelope, faPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);
function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-12 col-md-12')}>
                        <h3 className={cx('title-address')}>TP.Hồ Chí Minh</h3>
                    </div>
                </div>
                <div className={cx('row mb-5')}>
                    <div className={cx('col-lg-4 col-md-6 mb-3')}>
                        <h3 className={cx('quaters')}>Trụ sở 1: 117 Tân Cảng, Bình Thạnh</h3>
                        <p className={cx('hotline')}>Hotline: 096.105.1014</p>
                        <p className={cx('address')}>Address: 117 Tân Cảng, Bình Thạnh, TPHCM</p>
                    </div>
                    <div className={cx('col-lg-4 col-md-6 mb-3')}>
                        <h3 className={cx('quaters')}>Trụ sở 2: 117 Tân Cảng, Bình Thạnh</h3>
                        <p className={cx('hotline')}>Hotline: 096.105.1014</p>
                        <p className={cx('address')}>Address: 117 Tân Cảng, Bình Thạnh, TPHCM</p>
                    </div>
                    <div className={cx('col-lg-4 col-md-6 mb-3')}>
                        <h3 className={cx('quaters')}>Trụ sở 3: 117 Tân Cảng, Bình Thạnh</h3>
                        <p className={cx('hotline')}>Hotline: 096.105.1014</p>
                        <p className={cx('address')}>Address: 117 Tân Cảng, Bình Thạnh, TPHCM</p>
                    </div>
                </div>
                <hr className={cx('text-success mt-5 mb-5')} />
                <div className={cx('row')}>
                    <div className={cx('col-lg-3 col-md-6 mb-3')}>
                        <div className={cx('footer-logo')}>
                            <Link to="#">
                                <span className={cx('site-logo-footer')}>BSMART</span>
                            </Link>
                            <p className={cx('footer-about-description')}>
                                Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ năng lập trình của
                                bạn. Tất cả các giảng viên của chúng tôi đều có nhiều kinh nghiệm trong thực tế và giảng
                                dạy.
                            </p>
                            <h6>Theo dõi chúng tôi tại:</h6>
                            <ul className={cx('footer-social-icons')}>
                                <li>
                                    <Link to="#">
                                        <i className={cx('fa fa-facebook')}></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className={cx('fa fa-twitter')}></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className={cx('fa fa-linkedin')}></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className={cx('fa fa-pinterest')}></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className={cx('fa fa-instagram')}></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-lg-2 col-md-6 mb-3')}>
                        <div className={cx('footer-menu')}>
                            <h4>Menu</h4>
                            <ul>
                                <li>
                                    <Link to="#">Trang chủ</Link>
                                </li>
                                <li>
                                    <Link to="#">Về chúng tôi</Link>
                                </li>
                                <li>
                                    <Link to="#">Nền tảng LMS</Link>
                                </li>
                                <li>
                                    <Link to="#">Khoá học</Link>
                                </li>
                                <li>
                                    <Link to="#">Giảng viên</Link>
                                </li>
                                <li>
                                    <Link to="#">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-lg-4 col-md-6 mb-3')}>
                        <div className={cx('footer-control d-flex align-items-center mt-5')}>
                            <a href="./courses.html" className={cx('btn-primary-custom')}>
                                Đăng ký khoá học
                            </a>
                        </div>
                    </div>
                    <div className={cx('col-lg-3 col-md-6 mb-3')}>
                        <div className={cx('footer-contact')}>
                            <h4>Liên hệ với chúng tôi</h4>
                            <li>
                                <FontAwesomeIcon className={cx('footerIcon')} icon={faMapMarked} />
                                <p className={cx('m-0')}>260/19 Tân Binh, Hồ Chí Minh</p>
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('footerIcon')} icon={faEnvelope} />
                                <p className={cx('m-0')}>bsmart@gmail.com</p>
                            </li>
                            <li>
                                <FontAwesomeIcon className={cx('footerIcon')} icon={faPhone} />
                                <p className={cx('m-0')}>+98 946005077</p>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={cx('text-success mt-5')} />
            <div className={cx('container')}>
                <p className={cx('m-0 text-light text-center')}>
                    © Bản quyền BSmart 2022 - Empowered by <Link to="#">BSmart</Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
