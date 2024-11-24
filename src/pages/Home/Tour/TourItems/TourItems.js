import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import TourItem from "../../../../components/TourItem";
import styles from "./TourItems.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
const cx = classNames.bind(styles);

function TourItems() {
  const totalItems = 10;
  var [currentIndex, setCurrentIndex] = useState(0);
  function handleNext() {
    const itemsContainer = document.getElementById("tour-item");
    const items = itemsContainer.children;
    itemsContainer.appendChild(items[0]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }
  function handlePrev() {
    const itemsContainer = document.getElementById("tour-item");
    const items = itemsContainer.children;
    itemsContainer.prepend(items[items.length - 1]);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  }

  return (
    <>
      <div id="tour-item" className={cx("tour-item")}>
        <TourItem start={0} limit={totalItems} />
      </div>
      <div className={cx("tour-item-button")}>
        <button onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            className={cx("tour-item-page")}
            style={{
              backgroundColor: currentIndex === index ? "#fff" : "#505050",
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default TourItems;
