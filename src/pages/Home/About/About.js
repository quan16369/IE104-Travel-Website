import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./About.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx("about-container")}>
      <div className={cx("about-img")}>
        <img
          src="https://yt3.googleusercontent.com/Wiae-RUD__56zcehfaIEPvO-hecPFk-DJ_3LjTMMrSvkJv5xSLo94qbxNNVPRi4IZ_yjBr4ELg=s900-c-k-c0x00ffffff-no-rj"
          alt="about"
        />
      </div>
      <div className={cx("about-des")}>
        <h2>
          Chào mừng bạn đến với <br /> NPQ TRAVEL
        </h2>
        <p>
          Từ những chuyến đi đường ngắm cảnh quanh co qua những cảnh quan ngoạn
          mục đến những viên ngọc đi bộ đường dài ẩn giấu ngoài con đường mòn,
          chúng tôi đã cung cấp cho bạn vô số điểm đến thú vị để khám phá. Sứ
          mệnh của chúng tôi là trao cho bạn kiến ​​thức và nguồn lực để du lịch
          một cách tự tin và dễ dàng. Tại NPQ TRAVEL, chúng tôi tin rằng bản
          thân hành trình cũng quan trọng như điểm đến. Hãy để chúng tôi trở
          thành người bạn đồng hành đáng tin cậy của bạn khi bạn khám phá thế
          giới, khám phá những viên ngọc ẩn giấu và tạo ra những kỷ niệm khó
          quên. Vì vậy, hãy chuẩn bị hành lý, cầm máy ảnh và tham gia cùng chúng
          tôi trong hành trình khám phá và tìm hiểu.
        </p>
        <Link to="/about" className={cx("about-btn")}>
          VỀ CHÚNG TÔI
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  );
}

export default About;
