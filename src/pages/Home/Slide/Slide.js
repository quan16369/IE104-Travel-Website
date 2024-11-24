import classNames from "classnames/bind";
import styles from "./Slide.module.scss";
import SlideItem from "./SlideItem";
import { slideData } from "../../../config/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Slide() {
  const handleNextSlide = () => {
    const slidesContainer = document.getElementById("slide");
    const slides = slidesContainer.children;
    slidesContainer.appendChild(slides[0]);
  };
  const handlePrevSlide = () => {
    const slidesContainer = document.getElementById("slide");
    const slides = slidesContainer.children;
    slidesContainer.prepend(slides[slides.length - 1]);
  };

  return (
    <div className={cx("slide-container")}>
      <div id="slide" className={cx("slide")}>
        {slideData.map((item, index) => (
          <SlideItem key={index} item={item} />
        ))}
      </div>
      <div className={cx("slide-button")}>
        <button className={cx("prev")} onClick={handlePrevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={cx("next")} onClick={handleNextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Slide;
