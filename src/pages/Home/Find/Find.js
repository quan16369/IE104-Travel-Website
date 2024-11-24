import React from "react";
import classNames from "classnames/bind";
import styles from "./Find.module.scss";
import { destinationData, adventureData } from "../../../config/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Find() {
  return (
    <div className={cx("find-container")}>
      <div className={cx("find-content")}>
        <label htmlFor="find-destination" className={cx("find-title")}>
          Điểm đến
        </label>
        <select id="find-destination" className={cx("find-dropdown")}>
          {destinationData.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className={cx("find-content")}>
        <label htmlFor="find-activity" className={cx("find-title")}>
          Hoạt động
        </label>
        <select id="find-activity" className={cx("find-dropdown")}>
          {adventureData.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className={cx("find-content")}>
        <label htmlFor="find-range" className={cx("find-title")}>
          Thời gian
        </label>
        <select id="find-range" className={cx("find-dropdown")}>
          <option value="1day">1 Ngày</option>
          <option value="23days">2-3 Ngày</option>
          <option value="47days">4-7 Ngày</option>
          <option value="8days">8+ Ngày</option>
        </select>
      </div>

      <div className={cx("find-content")}>
        <label htmlFor="find-level" className={cx("find-title")}>
          Mức độ
        </label>
        <select id="find-level" className={cx("find-dropdown")}>
          <option value="Easy">Dễ</option>
          <option value="Moderate">Vừa phải</option>
          <option value="Challenging">Khó</option>
        </select>
      </div>

      <div className={cx("find-content")}>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default Find;
