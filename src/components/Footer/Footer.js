import { Link } from "react-router-dom";
import { logoWhite } from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { menuMediaData } from "../../config/data";
import MenuMedia from "../Header/MenuMedia/MenuMedia";

import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer-container")}>
      <div className={cx("footer-media", "footer-item")}>
        <img src={logoWhite} alt="logo" />
        <div className={cx("footer-media-item")}>
          {menuMediaData.map((item, index) => {
            if (item.name !== "User" && item.name !== "Search")
              return <MenuMedia key={index} item={item} />;
          })}
        </div>
        <Link to="/contact" className={cx("contact-link")}>
          LIÊN HỆ
        </Link>
      </div>
      <div className={cx("footer-link", "footer-item")}>
        <h3>CÁC ĐƯỜNG DẪN</h3>
        <Link to="/adventure">Hoạt động </Link>
        <Link to="/hotel">Khách sạn</Link>
        <Link to="/destination">Điểm đến</Link>
        <Link to="/about">Giới thiệu</Link>
        <Link to="/blog">Bài viết</Link>
        <Link to="/destination/Vietnam">Tour trong nước</Link>
      </div>
      <div className={cx("footer-address", "footer-item")}>
        <h3>ĐỊA CHỈ LIÊN HỆ</h3>
        <p>
          <FontAwesomeIcon
            className={cx("footer-address-icon")}
            icon={faPhone}
          />
          +84 923 123
        </p>
        <p>
          <FontAwesomeIcon
            className={cx("footer-address-icon")}
            icon={faEnvelope}
          />
          npq@gm.uit.edu.vn
        </p>
        <p>
          <FontAwesomeIcon
            className={cx("footer-address-icon")}
            icon={faHome}
          />
          12/0 Đườngg Số 1, Gò Vấp
        </p>
        <img
          src="https://remarkable-jelly-df2aaa.netlify.app/assest/img/da-thong-bao-bo-cong-thuong.png"
          alt="da thong bao bo cong thuong"
        />
      </div>
      <div className={cx("footer-email", "footer-item")}>
        <h3>NHẬN THÔNG BÁO QUA MAIL</h3>
        <p>
          Đăng ký ngay hôm nay để nhận quà tặng hàng tháng, những câu chuyện và
          video hấp dẫn, các ưu đãi đặc biệt và nhiều hơn nữa!
        </p>
        <input type="email" placeholder="email@examples.com" />
        <button>NHẬN BẢN TIN</button>
      </div>
    </div>
  );
}

export default Footer;
