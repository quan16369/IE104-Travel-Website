import TourAdventure from "./TourAdventure";
import styles from "./Tour.module.scss";
import classNames from "classnames/bind";
import TourItems from "./TourItems/TourItems";
import TourStory from "./TourStory";
const cx = classNames.bind(styles);
function Tour() {
  return (
    <div className={cx("tour-container")}>
      <TourAdventure />
      <TourItems />
      <TourStory />
    </div>
  );
}

export default Tour;
