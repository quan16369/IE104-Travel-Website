import { Link } from "react-router-dom";
import { adventureData } from "../../../../config/data";
import { tourAdventureBG } from "../../../../images";
import styles from "./TourAdventure.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
const cx = classNames.bind(styles);
function TourAdventure() {
  const [type, setType] = useState("Chèo thuyền");
  function handleSlide(name) {
    setType(name);
  }
  return (
    <div className={cx("tour-adventure")}>
      <img src={tourAdventureBG} alt="" />
      <div className={cx("tour-detail-page")}>
        {adventureData.map((item, index) => (
          <div
            key={index}
            className={cx("tour-detail-page-item")}
            onClick={() => handleSlide(item.name)}
            style={{
              backgroundColor: type === item.name ? "#cf3339" : "#aaa",
            }}
          ></div>
        ))}
      </div>
      <div className={cx("tour-detail")}>
        {adventureData.map((item, index) => {
          if (item.name === type) {
            return (
              <div key={index} className={cx("tour-detail-item")}>
                <h1>{item.name}</h1>
                <p>{item.des}</p>
                <Link to={`/adventure/${item.name}`}>Tìm hiểu chi tiết</Link>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className={cx("tour-adventure-more")}>
        <p>Những cuộc phiêu lưu đặc sắc</p>
        <h2>HẤP DẪN NHẤT</h2>
        <Link to="/tour">XEM TẤT CẢ TOUR</Link>
      </div>
    </div>
  );
}

export default TourAdventure;
