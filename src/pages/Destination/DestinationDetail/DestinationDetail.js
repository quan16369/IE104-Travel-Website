import { useParams } from "react-router-dom";
import { useRef } from "react";
import styles from "../DestinationDetail/DestinationDetail.module.scss";
import classNames from "classnames/bind";
import { countryData } from "../../../config/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TourItem from "../../../components/TourItem";
import DestinationItem from "../DestinationItem";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function DestinationDetail() {
  const { country } = useParams();
  const selectedCountry = countryData.find((item) => item.location === country);

  const overviewRef = useRef(null);
  const adventuresRef = useRef(null);
  const toursRef = useRef(null);
  const postsRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="main">
      <div className={cx("Detailpage")}>
        <div className={cx("header-view")}>
          <img src={selectedCountry.image} alt={selectedCountry.name} />
          <h2>{selectedCountry.location}</h2>
        </div>
        <div className={cx("header-controller")}>
          <div className={cx("header-content")}>
            <a
              href="#"
              className={cx("prev")}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(overviewRef);
              }}
            >
              TỔNG QUAN
            </a>
            <a
              href="#"
              className={cx("prev")}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(adventuresRef);
              }}
            >
              PHIÊU LƯU
            </a>
            <a
              href="#"
              className={cx("prev")}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(toursRef);
              }}
            >
              CHUYẾN ĐI
            </a>
            <a
              href="#"
              className={cx("prev")}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(postsRef);
              }}
            >
              BÀI ĐĂNG
            </a>
          </div>
          <button className={cx("btn-register")}>
            ĐĂNG KÝ
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div ref={overviewRef} className={cx("overview")} id="overview">
          <DestinationItem
            query="country"
            queryContent={country}
            imageBonus={selectedCountry.imageBonus}
          />
        </div>

        <div ref={adventuresRef} className={cx("adventures")}>
          <p>HÃY TÌM CÁC CHUYẾN ĐI DÀNH CHO BẠN</p>
          <h3>Các chuyến đi ở Việt Nam</h3>
          <div className={cx("adventures-list")}>
            <TourItem query="location" queryContent={country} />
          </div>
        </div>

        <div className={cx("map")}>{/* Nội dung chuyến đi */}</div>

        <div className={cx("features")}>{/* Nội dung bài đăng */}</div>
      </div>
    </div>
  );
}

export default DestinationDetail;
