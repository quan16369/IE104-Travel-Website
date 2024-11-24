import classNames from "classnames/bind";
import styles from "./Adventure.module.scss";
import { adventureData } from "../../../config/data/tourData";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Adventure() {
  return (
    <div className={cx("adventure-page")}>
      <div className={cx("adventure-slide")}>
        <img
          src="https://vietnam.travel/sites/default/files/styles/top_banner/public/2021-12/782A2680_resize_1.jpg?itok=M2AC24lc"
          alt=""
        />
        <p>Cuộc phiêu lưu</p>
      </div>
      <div className={cx("adventure-blog")}>
        <h2>Tại sao cần phiêu lưu?</h2>
        <p>
          Phiêu lưu luôn hấp dẫn tinh thần con người, thúc đẩy mỗi cá nhân khám
          phá những điều chưa biết, vượt qua mọi ranh giới và khám phá những
          chân trời mới. Mong muốn bẩm sinh này là tìm kiếm những trải nghiệm
          mới và thử thách bản thân không chỉ là một hoạt động thú vị; mà còn là
          một khía cạnh cơ bản của bản chất con người. Sự hấp dẫn của phiêu lưu
          nằm ở lời hứa về sự khám phá, sự phát triển cá nhân và cảm giác hoàn
          thành sâu sắc đến từ việc vượt qua những trở ngại.
          <br />
          <br />
          Điều chưa biết có sức hấp dẫn độc đáo vì nó đại diện cho tiềm năng và
          khả năng. Nó thách thức sự hiểu biết của chúng ta về thế giới và thúc
          đẩy chúng ta đặt câu hỏi về những gì nằm ngoài những trải nghiệm hiện
          tại của mình. Cảm giác hồi hộp khi bước vào điều chưa biết là động lực
          mạnh mẽ, thúc đẩy mỗi cá nhân bắt đầu những hành trình có thể đòi hỏi
          cả về thể chất và tinh thần.
          <br />
          <br />
          Phiêu lưu là một khía cạnh vượt thời gian và thiết yếu của trải nghiệm
          con người. Nó thúc đẩy chúng ta khám phá những điều chưa biết, thử
          thách bản thân và phát triển cả về mặt cá nhân và tập thể. Cho dù
          thông qua những cuộc khám phá vĩ đại hay những cuộc phiêu lưu hàng
          ngày, việc theo đuổi những trải nghiệm mới làm phong phú thêm cuộc
          sống của chúng ta và kết nối chúng ta với một câu chuyện lớn hơn về
          khám phá và thành tựu. Khi đón nhận cuộc phiêu lưu, chúng ta tôn vinh
          tinh thần khám phá định nghĩa chúng ta là con người và tiếp tục mở
          rộng ranh giới của những điều có thể.
          <br />
          <br />
        </p>
      </div>
      <div className={cx("adventure-title")}>
        <div className={cx("line")}></div>
        <h1>Các hoạt động</h1>
        <div className={cx("line")}></div>
      </div>
      <div className={cx("adventure-all")}>
        {adventureData.map((item, index) => (
          <Link
            key={index}
            to={`/adventure/${item.name}`}
            className={cx("adventure-all-container")}
          >
            <img src={item.image} alt={item.name} />
            <div className={cx("adventure-all-title")}>
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={cx("adventure-page-footer")}>
        <img
          src="https://media.cntraveler.com/photos/64879b50add73e0d14b17f9e/16:9/w_2580,c_limit/Most-Adventurous-things-to-do-in-your-lifetime-(update)_timur-garifov-sisZWCDkmwA-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Adventure;
