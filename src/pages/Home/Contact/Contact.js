import { Link } from "react-router-dom";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("contact-container")}>
      <div className={cx("contact-item-container")}>
        <div className={cx("contact-item")}>
          <div className={cx("contact-img-container")}>
            <img
              src="https://breezeconnect.com.au/wp-content/uploads/2019/10/contact-us-customer-support-hotline-people-connect-call-customer-support_36325-1640.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={cx("contact-item")}>
          <h2>
            NẾU BẠN MUỐN BIẾT THÊM CHI TIẾT?
            <br />
            ĐỪNG NGỪNG NGẠI LIÊN HỆ VỚI CHÚNG TÔI
          </h2>
          <Link to="/contact" className={cx("contact-link")}>
            LIÊN HỆ TẠI ĐÂY
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
