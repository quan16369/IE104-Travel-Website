import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleLeft,
  faAngleRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./TourDetail.module.scss";
import { Link, useParams } from "react-router-dom";
import { tours_link } from "../../../../config/api_link";
import TourItinerary from "./TourItinerary/TourItinerary";
import { reviewData } from "../../../../config/data";

const cx = classNames.bind(styles);

function TourDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  var day = parseInt(data.day);
  var api = tours_link + "/" + id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [data]);

  const handleNextImg = () => {
    const imgsContainer = document.getElementById("details-img-container");
    const imgs = imgsContainer.children;
    imgsContainer.appendChild(imgs[0]);
  };
  const handlePrevImg = () => {
    const imgsContainer = document.getElementById("details-img-container");
    const imgs = imgsContainer.children;
    imgsContainer.prepend(imgs[imgs.length - 1]);
  };

  if (error) {
    return <div>Loi: {error}</div>;
  }
  return (
    <div className={cx("details-page")}>
      <div className={cx("details-info")}>
        <Link to={`/adventure/${data.type}`}>{data.type}</Link>
        <h1>{data.name}</h1>
        <div className={cx("details-info-details")}>
          <p>{data.day}</p>
          <div className={cx("details-info-star")}>
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
          </div>
          <p>
            {data.rate} ({data.reviews} bài đánh giá)
          </p>
        </div>
        <div className={cx("details-info-desc")}>
          <div className={cx("details-info-desc-item")}>
            <h3>ĐỊA ĐIỂM</h3>
            <p>{data.location}</p>
          </div>
          <div className={cx("details-info-desc-item")}>
            <h3>MỨC ĐỘ</h3>
            <p>{data.level}</p>
          </div>
          <div className={cx("details-info-desc-item")}>
            <h3>ĐỘ TUỔI TỐI THIỂU</h3>
            <p>{data.age}</p>
          </div>
          <div className={cx("details-info-desc-item")}>
            <h3>THÀNH PHỐ</h3>
            <p>{data.city}</p>
          </div>
          <div className={cx("details-info-desc-item")}>
            <h3>GIÁ TỪ</h3>
            <p>${data.price}</p>
          </div>
        </div>
      </div>
      <div className={cx("details-img")}>
        <div id="details-img-container" className={cx("details-img-container")}>
          <img
            className={cx("details-img-item")}
            src="https://zrafting.com/wp-content/uploads/2022/03/MG_5127.jpg"
          />
          <img
            className={cx("details-img-item")}
            src="https://zrafting.com/wp-content/uploads/2022/03/MG_79683.jpg"
          />
          <img
            className={cx("details-img-item")}
            src="https://www.extranomical.com/wp-content/uploads/2023/03/Valley-View-Overlook.jpg"
          />
          <img
            className={cx("details-img-item")}
            src="https://i.ytimg.com/vi/mOxtzEF3k3M/maxresdefault.jpg"
          />
          <img
            className={cx("details-img-item")}
            src="https://www.yosemite.com/wp-content/uploads/2021/04/MER041222-6-scaled.jpg"
          />
        </div>
        <button
          id="details-img-left-btn"
          className={cx("details-img-btn", "details-img-left-btn")}
          onClick={handlePrevImg}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          id="details-img-right-btn"
          className={cx("details-img-btn", "details-img-right-btn")}
          onClick={handleNextImg}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div className={cx("details-overview")}>
        <div className={cx("details-overview-desc")}>
          <h2>
            Chèo thuyền vượt thác Tuolumne, có sẵn ngay bên ngoài Công viên quốc
            gia Yosemite, là một tiêu chuẩn trong số tất cả các trải nghiệm vượt
            thác của California mà NPQ cung cấp.
          </h2>
          <p>
            Được phát âm là “too-all-uh-me,” và được gọi trìu mến là “the T,”
            đây là một trong “Bảy kỳ quan nước trắng” của thế giới. Nhưng không
            chỉ có 18 dặm nước trắng Cấp IV gần như liên tục thu hút những người
            chèo thuyền từ khắp nơi trên thế giới đến với Con sông Hoang dã &
            Phong cảnh này. Chuyến đi bè trên Sông Tuolumne là một cuộc phiêu
            lưu thực sự giữa thiên nhiên hoang dã ở vùng Yosemite với vẻ đẹp
            tuyệt vời, những đêm đầy sao rực rỡ và những cảm giác mạnh. Và bạn
            có nhiều lựa chọn. Lựa chọn giữa chuyến đi nghỉ dưỡng mạo hiểm kéo
            dài 48 giờ với những chuyến đi bộ đường dài thú vị lên các hẻm núi
            bên cạnh được tạo thành bởi những thác nước đổ xuống, hoặc kỳ nghỉ
            chèo bè Tuolumne ba ngày vô tư, với nhiều thời gian để khám phá và
            thư giãn trong khi kết nối lại với thiên nhiên trong một hẻm núi
            sông biệt lập.{" "}
          </p>
        </div>
        <div className={cx("details-overview-highlight")}>
          <h2>Điểm nổi bật của chuyến đi</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              18 dặm đi bè vượt thác liên tục trên sông Tuolumne hạng IV
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Raft 15 ghềnh thác khó quên như Ram’s Head, Clavey Falls, Gray’s
              Grindstone & nhiều hơn nữa
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Trại gần Yosemite trong hẻm núi sông hoang dã và đẹp như tranh vẽ
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Đi bộ đường dài, chơi bóng bocce hoặc ném móng ngựa, bơi lội, khám
              phá các con suối và thác nước
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Có sẵn các chuyến đi nếm thử rượu vang trên sông và bia thủ công
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Lái xe dễ dàng từ San Francisco, Sacramento và Hồ Tahoe
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("details-itinerary")}>
        <h1>LỊCH TRÌNH VÀ BẢN ĐỒ</h1>
        <div className={cx("details-itinerary-day")}>
          <div
            className={cx(
              "details-itinerary-day-item",
              "details-itinerary-day-bg"
            )}
            onclick="twodays(this)"
          >
            {data.day}
          </div>
        </div>
        <div className={cx("details-itinerary-info")}>
          <div className={cx("details-itinerary-info-desc")}>
            <h2>Sơ lược về hành trình</h2>
            <p>
              Chúng tôi tự hào khi có lịch trình thoải mái và linh hoạt. Mỗi
              chuyến đi bè trên sông Tuolumne đều khác nhau tùy thuộc vào nhóm,
              các chuyến đi khác trên mặt nước, địa điểm cắm trại và đôi khi là
              thời tiết. Sau đây là một số ví dụ về chuyến đi của bạn có thể như
              thế nào:
            </p>

            {Array.from({ length: day }, (_, i) => (
              <TourItinerary key={i} day={i + 1} />
            ))}
          </div>
          <div className={cx("details-itinerary-info-map")}>
            <h2>Thời gian và địa điểm họp</h2>
            <div className={cx("details-itinerary-info-map-item")}>
              <h3>Địa điểm</h3>
              <h5>Starbucks</h5>
              <p>3711 E Shaw Ave, Clovis, CA 93619, US</p>
            </div>
            <div className={cx("details-itinerary-info-map-item")}>
              <h3>Thời gian</h3>
              <p>8:30 AM</p>
            </div>
            <div className={cx("details-itinerary-info-map-item")}>
              <h3>Quay lại</h3>
              <p>Khoảng 6:30 PM, tùy thuộc vào mực nước</p>
            </div>
            <div className={cx("details-itinerary-info-map-item")}>
              <h3>Bản đồ</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4974.620366509581!2d-119.64188239823264!3d36.80881264252745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945b6798778b57%3A0xe04dbb89bd457e0f!2sStarbucks!5e1!3m2!1svi!2s!4v1719900148105!5m2!1svi!2s"
                allowfullscreen=""
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={cx("details-itinerary-info-map-item")}>
              <Link to="/contact" className={cx("book-btn")}>
                ĐẶT TOUR NGAY
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("details-review")}>
        <div className={cx("details-review-title")}>
          <h1>ĐÁNH GIÁ TOUR</h1>
          <span className={cx("details-review-title-rcm")}>
            <h1>100%</h1>
            <p>người trả lời sẽ RECOMMEND điều này cho bạn bè</p>
          </span>
        </div>
        <div className={cx("details-review-star")}>
          <div className={cx("details-review-star-destri")}>
            <h3>TỶ LỆ ĐÁNH GIÁ</h3>
            <button title="Show only 5 stars reviews">
              <p>5 Sao</p>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <span className={cx("star-bar", "five-stars")}></span>
              <p>{data.reviews - 8}</p>
            </button>
            <button title="Show only 4 stars reviews">
              <p>4 Sao</p>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <span className={cx("star-bar", "four-stars")}></span>
              <p>6</p>
            </button>
            <button title="Show only 3 stars reviews">
              <p>3 Sao</p>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <span className={cx("star-bar", "three-stars")}></span>
              <p>2</p>
            </button>
            <button title="Show only 2 stars reviews">
              <p>2 Sao</p>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <span className={cx("star-bar", "two-stars")}></span>
              <p>0</p>
            </button>
            <button title="Show only 1 star reviews">
              <p>1 Sao</p>
              <FontAwesomeIcon
                icon={faStar}
                className={cx("star-yellow", "star-1")}
              />
              <span className={cx("star-bar", "one-star")}></span>
              <p>0</p>
            </button>
          </div>
          <div className={cx("details-review-star-amount")}>
            <div className={cx("details-info-star", "mt-0")}>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            </div>
            <p>
              <b>{data.rate}</b> ({data.reviews} bài đánh giá)
            </p>
            <a href="#">Viết bài đánh giá</a>
          </div>
        </div>
        <div className={cx("details-review-sort")}>
          <select>
            <option value="">Chọn</option>
            <option value="">Gần đây nhất</option>
            <option value="">Đánh giá thấp nhất</option>
            <option value="">Đánh giá cao nhất</option>
            <option value="">Cũ nhất</option>
            <option value="">Có hình ảnh</option>
          </select>
        </div>
        <div className={cx("details-review-area-container")}>
          {reviewData.map((item, index) => (
            <div key={index} className={cx("details-review-area")}>
              <h1>{item.title}</h1>
              <div className={cx("details-info-star", "mt-0")}>
                <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
                <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
                <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
                <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
                <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
                <i>{item.rate}</i>
              </div>
              <p>{item.content}</p>
              <div className={cx("details-review-area-auth")}>
                <p>
                  Đăng bởi <b>{item.auth}</b>
                </p>
                <p>
                  Thời gian <b>{item.date}</b>
                </p>
                <p>
                  Địa chỉ <b>{item.address}</b>
                </p>
              </div>
              {item.tags.map((tag, index) => (
                <span key={index} className={cx("review-tag")}>
                  {tag}
                </span>
              ))}
            </div>
          ))}

          <button className={cx("loadmore-btn")}>XEM THÊM</button>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
