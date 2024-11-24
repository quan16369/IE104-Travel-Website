import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import styles from "./Divider.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Divider() {
  return (
    <div className={cx("divider-container")}>
      <div className={cx("divider-line")}></div>
      <div className={cx("divider-icon")}>
        <FontAwesomeIcon icon={faLocationArrow} />
      </div>
      <div className={cx("divider-line")}></div>
    </div>
  );
}

export default Divider;
