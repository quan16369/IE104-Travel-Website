import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AdventureDetail.module.scss";
import TourItem from "../../../../components/TourItem/TourItem";
import { adventureData } from "../../../../config/data/tourData";

const cx = classNames.bind(styles);

function AdventureDetail() {
  const { type } = useParams();
  const adventure = adventureData.find((item) => item.name === type);

  return (
    <div className={cx("activities-page")}>
      <div className={cx("activities-slide")}>
        <img src={adventure.slide} />
        <div className={cx("activities-overlay")}></div>
        <h1>{type}</h1>
      </div>
      <div className={cx("activities-blog")}>
        <div className={cx("activities-blog-content")}>
          <h1>
            {type}
            <br />
            Cùng với NPQ Travel Agency
          </h1>
          <p>
            NPQ đã giúp tiên phong cho hoạt động {type} ở Việt Nam và toàn thế
            giới. Và kể từ khi chúng tôi bắt đầu vào năm 1969, chúng tôi đã
            hướng dẫn <b>hơn 500.000 du khách</b> trên các con sông, bãi biển,
            rừng núi trên khắp thế giới. Hiện nay, với hơn{" "}
            <b>75 hành trình độc đáo</b>, chúng tôi cung cấp cho du khách nhiều
            chuyến đi {type} hơn bất kỳ đơn vị tổ chức nào khác trên hành tinh.
            Nhưng không chỉ là thời gian chúng tôi kinh doanh hay số lượng
            chuyến đi mà chúng tôi cung cấp. Mà thực sự là về trải nghiệm của
            NPQ.
            <br />
            <br />
            Cho dù đó là chuyến đi {type} nhanh trong một ngày, chuyến đi trên
            sông kéo dài một tuần hay chuyến thám hiểm chèo thuyền kéo dài 18
            ngày, chúng tôi có thể đảm bảo rằng chuyến đi với NPQ sẽ trở thành
            một trong những kỳ nghỉ đáng nhớ nhất của bạn. Bởi vì, thành thật mà
            nói, chúng tôi không nói về chuyến đi đến Disneyland ở đây. Chuyến
            đi trên sông là cách tuyệt vời nhất để thoát khỏi sự mệt mỏi, ngắt
            kết nối và dành thời gian chất lượng với bạn bè hoặc người thân hoặc
            thậm chí kết bạn mới suốt đời. Không chỉ vậy, không có cách nào tốt
            hơn để trải nghiệm một số vùng hoang dã đẹp nhất và xa xôi nhất trên
            thế giới hơn là từ bè, thuyền dory, thuyền kayak bơm hơi hoặc ván
            chèo đứng.
          </p>
        </div>
        <div className={cx("activities-blog-img")}>
          <img src={adventure.image} />
        </div>
      </div>
      <div className={cx("activities-all")}>
        <div className={cx("activities-all-title")}>
          <p>TÌM KIẾM MỘT CHUYẾN ĐI HOÀN HẢO</p>
          <h1>{type}</h1>
        </div>
        <div className={cx("activities-all-area")}>
          <div className={cx("activities-all-content")}>
            <TourItem query="type" queryContent={type} />
          </div>
        </div>
      </div>
      <div className={cx("activities-page-footer")}>
        <img
          src="https://s2odesign.com/wp-content/uploads/2019/11/whitewater-explained.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default AdventureDetail;
