import classNames from "classnames/bind";
import styles from "./TourItinerary.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);

function TourItinerary({ day }) {
  const [details, setDetails] = useState(false);
  const handleDetails = () => {
    setDetails(!details);
  };
  return (
    <div className={cx("details-itinerary-day")}>
      <button onClick={handleDetails}>
        Ngày {day}{" "}
        <FontAwesomeIcon
          className={cx("details-itinerary-day-icon")}
          icon={details ? faChevronUp : faChevronDown}
        />
      </button>
      {details && (
        <div className={cx("details-itinerary-day-details")}>
          <p>
            Vào buổi sáng của chuyến đi, bạn sẽ gặp trưởng đoàn và những người
            bạn đồng hành của mình. du khách trước chuyến đi bộ 3 dặm tới sông
            Sau buổi giới thiệu về an toàn. và lắp thiết bị, bạn sẽ chạm mặt
            nước, vượt qua những thác ghềnh thú vị như Rock Garden, Nemesis,
            Sunderlands Chute và Ram's Head. giữa trưa, tận hưởng chuyến dã
            ngoại trên bãi biển đầy cát. Cảm giác hồi hộp của Thác Clavey, Thác
            cấp IV+ nhanh chóng với những bậc thang rơi xuống. trải dài êm dịu
            hơn, hãy bơi lội sảng khoái. Đến buổi chiều, bạn sẽ cảm thấy thoải
            mái. đến trại, nghỉ ngơi, thưởng thức bữa tối và trò chuyện bên cạnh
            đốt lửa trại hoặc ngắm sao dưới bầu trời rộng mở.
          </p>
        </div>
      )}
    </div>
  );
}

export default TourItinerary;
