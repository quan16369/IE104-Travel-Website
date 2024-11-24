import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SelectItem.module.scss";

const cx = classNames.bind(styles);

function SelectItem({ data, title, type = "destination" }) {
  return (
    <div className={cx("select")}>
      <h1 className={cx("title")}>KHÁM PHÁ NHIỀU {title} HẤP DẪN</h1>
      <div className={cx("cards")}>
        {data.map((item, index) => (
          <div key={index} className={cx("card")}>
            <img
              src={item.image}
              alt={item.location}
              className={cx("card__image")}
            />
            <div className={cx("card__content")}>
              <h2 className={cx("card__title")}>
                {type === "destination" ? item.location : item.city}
              </h2>
              {type === "scenery" && (
                <p className={cx("card__description")}>{item.location}</p>
              )}
              <Link
                to={`/${type}/${
                  type === "destination" ? item.location : item.city
                }`}
                className={cx("card__link")}
              >
                KHÁM PHÁ NGAY
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectItem;
