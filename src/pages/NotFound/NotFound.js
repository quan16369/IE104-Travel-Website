import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./NotFound.module.scss";
const cx = classNames.bind(styles);
function NotFound() {
  return (
    <div className={cx("not-found")}>
      <h1 className={cx("not-found__title")}>404</h1>
      <p className={cx("not-found__message")}>Trang không được tìm thấy</p>
      <Link to="/" className={cx("not-found__link")}>
        Quay về trang chủ
      </Link>
    </div>
  );
}

export default NotFound;
