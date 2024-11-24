import classNames from "classnames/bind";
import styles from "../Form.module.scss";

const cx = classNames.bind(styles);

function Policy() {
  return (
    <>
      <div className={cx("login-tele")}>
        <p>Bằng cách nhấp vào tiếp tục, bạn đồng ý với</p>
        <a href="#">Điều khoản dịch vụ</a>
        <p>và</p>
        <a href="#">Chính sách bảo mật</a>
      </div>
    </>
  );
}

export default Policy;
