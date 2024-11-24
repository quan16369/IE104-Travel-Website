import { useParams } from "react-router-dom";
import { hotels_link } from "../../../../config/api_link";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./HotelDetail.module.scss";
const cx = classNames.bind(styles);

function HotelDetail() {
  const { id } = useParams();
  const api = hotels_link + "/" + id;
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setHotel(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu khách sạn:", error);
      }
    };
    fetchHotelData();
  }, [api]);

  if (!hotel) return <p>Đang tải thông tin khách sạn...</p>;

  return (
    <div className={cx("hotel-detail")}>
      <h1 className={cx("hotel-name")}>{hotel.name}</h1>
      <img className={cx("hotel-image")} src={hotel.img} alt={hotel.name} />
      <p className={cx("hotel-location")}>{hotel.location}</p>
      <div className={cx("hotel-info")}>
        <p>
          <strong>Đánh giá:</strong> {hotel.rating} ⭐ ({hotel.reviews} nhận
          xét)
        </p>
        <p>
          <strong>Giá mỗi đêm:</strong> ${hotel.price_per_night}
        </p>
        <p>
          <strong>Loại:</strong> {hotel.type}
        </p>
        <p>
          <strong>Giờ nhận phòng:</strong> {hotel.check_in_time}
        </p>
        <p>
          <strong>Giờ trả phòng:</strong> {hotel.check_out_time}
        </p>
        <p>
          <strong>Tiện nghi:</strong> {hotel.amenities.join(", ")}
        </p>
        <p className={cx("hotel-description")}>{hotel.description}</p>
      </div>

      <div className={cx("contact-button-container")}>
        <button className={cx("contact-button")}>Liên hệ đặt phòng</button>
      </div>
    </div>
  );
}

export default HotelDetail;
