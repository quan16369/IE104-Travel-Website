import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Search({ onShow, isShow }) {
  function stopPropagation(event) {
    event.stopPropagation();
  }
  return (
    <div
      className={cx("search-container")}
      style={{ display: isShow ? "flex" : "none" }}
      onClick={onShow}
    >
      <div className={cx("search-area")} onClick={stopPropagation}>
        <input
          className={cx("search-input")}
          type="text"
          placeholder="Tìm kiếm điểm đến...."
        />
        <button type="button" className={cx("search-button")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default Search;
