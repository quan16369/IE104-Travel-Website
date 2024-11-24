import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./TourStory.module.scss";
import { cityData } from "../../../../config/data";
import { Link } from "react-router-dom";
import { rock } from "../../../../images";
import { tourStories } from "../../../../config/data/tourData";
const cx = classNames.bind(styles);

function TourStory() {
  const totalCities = 6;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    const CitiesContainer = document.getElementById("citiesContainer");
    const Cities = CitiesContainer.children;
    CitiesContainer.appendChild(Cities[0]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCities);
  };
  const handlePrev = () => {
    const CitiesContainer = document.getElementById("citiesContainer");
    const Cities = CitiesContainer.children;
    CitiesContainer.prepend(Cities[Cities.length - 1]);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCities) % totalCities);
  };
  return (
    <div className={cx("tour-story")}>
      <img
        src="https://www.oars.com/wp-content/uploads/2022/11/topo-river-dark.svg"
        alt=""
      />
      <img src={rock} alt="" />
      <div className={cx("tour-story-container")}>
        <div className={cx("tour-story-1")}>
          <div className={cx("tour-story-1-title")}>
            <h2>Câu chuyện NPQ</h2>
            <h2>KHÁM PHÁ LÀ GỐC RỄ</h2>
            <Link to="/about">Tại sao chọn NPQ?</Link>
          </div>
          <div className={cx("tour-story-1-content")}>
            <p>
              Có lý do khiến hơn 80% du khách của NPQ mỗi năm là khách quen hoặc
              được du khách cũ của NPQ giới thiệu.
            </p>
          </div>
        </div>
        <div className={cx("tour-story-2")}>
          {tourStories.map((story, index) => (
            <div key={index} className={cx("tour-story-2-content")}>
              <h1>{story.title}</h1>
              <p>{story.description}</p>
            </div>
          ))}
        </div>

        <div className={cx("tour-story-3")}>
          <div className={cx("tour-story-3-title")}>
            <h2>Nơi để khám phá</h2>
            <h2>PHONG CẢNH ĐẶC SẮC</h2>
            <p>
              NPQ TRAVEL cung cấp hơn 75 hành trình nghỉ dưỡng độc đáo trên khắp
              Việt Nam và thế giới.
            </p>
            <Link to="/scenery">XEM TẤT CẢ PHONG CẢNH</Link>
          </div>
          <div className={cx("tour-story-3-content")}>
            <div
              id="citiesContainer"
              className={cx("tour-story-3-content-item-container")}
            >
              {cityData.slice(0, 6).map((item, index) => (
                <div key={index} className={cx("tour-story-3-content-item")}>
                  <div className={cx("tour-story-3-content-item-img")}>
                    <img src={item.image} alt={item.city} />
                    <div className={cx("tour-story-3-content-link")}>
                      <Link to={`/scenery/${item.city}`}>
                        {item.city + ", " + item.location}
                        <FontAwesomeIcon icon={faCaretRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={cx("tour-story-3-content-item-button")}>
              <button className={cx("tour-story-btn")} onClick={handlePrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className={cx("tour-story-btn")} onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              {Array.from({ length: totalCities }).map((_, index) => (
                <div
                  key={index}
                  className={cx("tour-story-page")}
                  style={{
                    width: `calc(80%/${totalCities})`,
                    backgroundColor:
                      currentIndex === index ? "white" : "#a0a0a0",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourStory;
