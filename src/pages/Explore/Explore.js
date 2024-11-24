import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Explore.module.scss";

const cx = classNames.bind(styles);

const destinations = [
  {
    path: "/hotel",
    title: "Khách sạn",
    description: "Nhiều lựa chọn loại khách sạn",
    image:
      "https://vanangroup.com.vn/wp-content/uploads/2024/10/29df21cd740c64fda44d8e567685970b-e1729733600172.jpg",
  },
  {
    path: "/adventure",
    title: "Phiêu lưu",
    description: "Nhiều loại hình phiêu lưu hấp dẫn",
    image:
      "https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/Content-Travel_Types/Adventure_Travel/Features/ATTA%20Trends_HERO/The-Latest-Trends-in-Adventure-Travel.jpg?tr=w-1008%2Ch-567%2Cfo-auto",
  },
  {
    path: "/scenery",
    title: "Phong cảnh",
    description: "Khám phá nhiều khung cảnh đẹp",
    image:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2023/12/25/tour-da-lat-nha-trang-4-ngay-3-dem-1-2135.jpg",
  },
  {
    path: "/tour",
    title: "Tours",
    description: "Tìm kiếm tour phù hợp với bạn",
    image:
      "https://dulichtuoitreviet.vn/image/cache/catalog/tai-moi/2112/581-202312041038191-0x0.jpg",
  },
];

function Explore() {
  return (
    <div className={cx("explore")}>
      <h1 className={cx("title")}>KHÁM PHÁ NHIỀU ĐIỀU HẤP DẪN</h1>
      <div className={cx("cards")}>
        {destinations.map((item, index) => (
          <div key={index} className={cx("card")}>
            <img
              src={item.image}
              alt={item.title}
              className={cx("card__image")}
            />
            <div className={cx("card__content")}>
              <h2 className={cx("card__title")}>{item.title}</h2>
              <p className={cx("card__description")}>{item.description}</p>
              <Link to={item.path} className={cx("card__link")}>
                TÌM HIỂU THÊM
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
