import TourItem from "../../../components/TourItem";
import classNames from "classnames/bind";
import styles from "./Tour.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { tours_link } from "../../../config/api_link";

const cx = classNames.bind(styles);

function Tour() {
  const [limit, setLimit] = useState(10);
  const [totalTour, setTotalTour] = useState(0);

  useEffect(() => {
    const fetchTotalTours = async () => {
      try {
        const response = await fetch(tours_link);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setTotalTour(result.length);
      } catch (error) {
        console.error("Error fetching total tours:", error);
      }
    };

    fetchTotalTours();
  }, []);
  console.log(totalTour);
  const clearAll = () => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const toggleDropdown = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display =
        element.style.display === "block" ? "none" : "block";
    }
  };

  const toggleAllCheckbox = (checkboxId, groupId) => {
    const groupElement = document.getElementById(groupId);
    const checkboxes = groupElement.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = document.getElementById(checkboxId).checked;
    });
  };

  return (
    <div className={cx("tours-container")}>
      <div className={cx("tours-page")}>
        <div className={cx("tours-filter-container")}>
          <button className={cx("tours-filter-clearall")} onClick={clearAll}>
            Xóa tất cả
          </button>

          <button
            className={cx("tours-filter-header")}
            onClick={() => toggleDropdown("trip-length")}
          >
            SỐ NGÀY <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div id="trip-length" className={cx("tours-filter-content")}>
            <input
              type="checkbox"
              id="all-length"
              onClick={() => toggleAllCheckbox("all-length", "trip-length")}
            />
            <label htmlFor="all-length">Tất cả</label>
            <br />
            <input type="checkbox" id="half-day" />
            <label htmlFor="half-day">1/2 Ngày hoặc 1 Ngày</label>
            <br />
            <input type="checkbox" id="2-3-days" />
            <label htmlFor="2-3-days">2-3 Ngày</label>
            <br />
            <input type="checkbox" id="4-7-days" />
            <label htmlFor="4-7-days">4-7 Ngày</label>
            <br />
            <input type="checkbox" id="8-days" />
            <label htmlFor="8-days">8+ Ngày</label>
          </div>

          <button
            className={cx("tours-filter-header")}
            onClick={() => toggleDropdown("destinations")}
          >
            ĐIỂM ĐẾN <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div id="destinations" className={cx("tours-filter-content")}>
            <input
              type="checkbox"
              id="all-destinations"
              onClick={() =>
                toggleAllCheckbox("all-destinations", "destinations")
              }
            />
            <label htmlFor="all-destinations">Tất cả</label>
            <br />
            <input type="checkbox" id="china" />
            <label htmlFor="china">Trung Quốc</label>
            <br />
            <input type="checkbox" id="korea" />
            <label htmlFor="korea">Hàn Quốc</label>
            <br />
            <input type="checkbox" id="japan" />
            <label htmlFor="japan">Nhật Bản</label>
            <br />
            <input type="checkbox" id="france" />
            <label htmlFor="france">Pháp</label>
            <br />
            <input type="checkbox" id="usa" />
            <label htmlFor="usa">Hoa Kỳ</label>
            <br />
            <input type="checkbox" id="vietnam" />
            <label htmlFor="vietnam">Việt Nam</label>
            <br />
          </div>

          <button
            className={cx("tours-filter-header")}
            onClick={() => toggleDropdown("activities")}
          >
            HOẠT ĐỘNG <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div id="activities" className={cx("tours-filter-content")}>
            <input
              type="checkbox"
              id="all-activities"
              onClick={() => toggleAllCheckbox("all-activities", "activities")}
            />
            <label htmlFor="all-activities">Tất cả</label>
            <br />
            <input type="checkbox" id="camping" />
            <label htmlFor="camping">Cắm trại</label>
            <br />
            <input type="checkbox" id="hiking" />
            <label htmlFor="hiking">Đi bộ đường dài</label>
            <br />
            <input type="checkbox" id="rowing" />
            <label htmlFor="rowing">Chèo thuyền</label>
            <br />
            <input type="checkbox" id="kayaking" />
            <label htmlFor="kayaking">Chèo thuyền kayak</label>
            <br />
            <input type="checkbox" id="whitewater-rafting" />
            <label htmlFor="whitewater-rafting">Chèo thuyền vượt thác</label>
            <br />
            <input type="checkbox" id="multi-sport" />
            <label htmlFor="multi-sport">Đa môn thể thao</label>
            <br />
          </div>

          <button
            className={cx("tours-filter-header")}
            onClick={() => toggleDropdown("adventure-level")}
          >
            ADVENTURE LEVEL <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div id="adventure-level" className={cx("tours-filter-content")}>
            <input
              type="checkbox"
              id="all-levels"
              onClick={() => toggleAllCheckbox("all-levels", "adventure-level")}
            />
            <label htmlFor="all-levels">Tất cả</label>
            <br />
            <input type="checkbox" id="easy" />
            <label htmlFor="easy">Dễ</label>
            <br />
            <input type="checkbox" id="moderate" />
            <label htmlFor="moderate">Vừa phải</label>
            <br />
            <input type="checkbox" id="challenging" />
            <label htmlFor="challenging">Khó</label>
            <br />
          </div>

          <button
            className={cx("tours-filter-header")}
            onClick={() => toggleDropdown("minimum-age")}
          >
            ĐỘ TUỔI <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div id="minimum-age" className={cx("tours-filter-content")}>
            <input
              type="checkbox"
              id="all-ages"
              onClick={() => toggleAllCheckbox("all-ages", "minimum-age")}
            />
            <label htmlFor="all-ages">Tất cả</label>
            <br />
            <input type="checkbox" id="8" />
            <label htmlFor="8">8</label>
            <br />
            <input type="checkbox" id="12" />
            <label htmlFor="12">12</label>
            <br />
            <input type="checkbox" id="16" />
            <label htmlFor="16">16</label>
            <br />
            <input type="checkbox" id="18" />
            <label htmlFor="18">18</label>
            <br />
          </div>

          <button
            className={cx("tours-filter-header")}
            onClick={() => toggleDropdown("price-range")}
          >
            GIÁ CẢ <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div id="price-range" className={cx("tours-filter-content")}>
            <input
              type="checkbox"
              id="all-prices"
              onClick={() => toggleAllCheckbox("all-prices", "price-range")}
            />
            <label htmlFor="all-prices">Tất cả</label>
            <br />
            <input type="checkbox" id="under-500" />
            <label htmlFor="under-500">{"< $500"}</label>
            <br />
            <input type="checkbox" id="500-1000" />
            <label htmlFor="500-1000">{"$500 - $1000"}</label>
            <br />
            <input type="checkbox" id="above-1000" />
            <label htmlFor="above-1000">{"> $1000"}</label>
            <br />
          </div>
        </div>
        <div className={cx("tours-all")}>
          <div className={cx("tours-all-area")}>
            <TourItem start={0} limit={limit} />
          </div>
          <div className={cx("tours-all-load-more")}>
            {totalTour > limit && (
              <button onClick={() => setLimit(limit + 10)}>Xem thêm</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;
