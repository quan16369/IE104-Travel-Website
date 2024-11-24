import { useParams } from "react-router-dom";
import { sceneries_link } from "../../../../config/api_link";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SceneryDetail.module.scss";

const cx = classNames.bind(styles);

function SceneryDetail() {
  const { scenery } = useParams();
  const api = `${sceneries_link}?city=${scenery}`;
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [api, scenery]);

  if (loading) {
    return <h1>Đang tải...</h1>;
  }

  if (error) {
    return <h1>Lỗi: {error}</h1>;
  }

  return (
    <div className={cx("scenery-detail")}>
      <div
        className={cx("slide")}
        style={{
          backgroundImage: `url(${data.slide_img || data.img[0]})`,
        }}
      >
        <h1 className={cx("city-name")}>{data.city}</h1>
      </div>

      <div className={cx("content")}>
        <p className={cx("description")}>"{data.description}"</p>
        <div className={cx("section")}>
          <h2>Thông tin chi tiết:</h2>
          <ul>
            <li>
              <strong>Quốc gia:</strong> {data.country}
            </li>
            <li>
              <strong>Thời gian lý tưởng để thăm:</strong>{" "}
              {data.best_time_to_visit}
            </li>
            <li>
              <strong>Điểm tham quan nổi bật:</strong>{" "}
              {data.attractions.map(
                (item, index) =>
                  item + (index === data.attractions.length - 1 ? "" : ", ")
              )}
            </li>
          </ul>
        </div>
        <div className={cx("section")}>
          <h2>Giới thiệu:</h2>
          <p className={cx("introduce")}>{data.essay}</p>
        </div>
        <div className={cx("section")}>
          <h2>Thư viện ảnh:</h2>
          <div className={cx("gallery")}>
            {data.img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Scenery ${index}`}
                className={cx("gallery-image")}
              />
            ))}
          </div>
          <p className={cx("gallery-title")}>Một số hình ảnh của {data.city}</p>
        </div>
      </div>
    </div>
  );
}

export default SceneryDetail;
