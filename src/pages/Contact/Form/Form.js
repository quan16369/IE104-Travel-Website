import { useState } from "react";
import styles from "./Form.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Contact_Form() {
  const [checkinput, Setcheckinput] = useState("");

  return (
    <div id="main">
      <div className={cx("contact-page")}>
        <div className={cx("contact-slide")}>
          <div className={cx("contact-slide-img")}>
            <img
              src="https://www.wowweekend.vn/document_root/upload/articles/image/BrowseContent/New%20Lifestyle/Music/202305-12/202305/wwk-MV-den-vau-nau-an-cho-em-nuoi-em-1.jpg"
              alt=""
            />
          </div>
          <div className={cx("contact-slide-overlay")}></div>
          <div className={cx("contact-slide-content")}>
            <h1>Liên Hệ Với Chúng Tôi Hôm Nay</h1>
            <p>Bắc Nam Đông Tây</p>
            <p>Chúng tôi ở đây để đồng hành cùng bạn</p>
          </div>
        </div>
        <div className={cx("contact-form-container")}>
          <div className={cx("contact-info")}>
            <div className={cx("contact-info-parent")}>
              <div className={cx("contact-info-children")}>
                <div className={cx("bold")}>
                  <div className={cx("bold-item")}>
                    <i>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <p>npq@gm.uit.edu.vn</p>
                  </div>
                </div>
              </div>
              <div className={cx("contact-info-children")}>
                <div className={cx("bold-item")}>
                  <i>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  <p>+84 923 123</p>
                </div>
              </div>
            </div>

            <h3>LIÊN HỆ VỚI NPQ</h3>
            <p>
              Nếu bạn có thắc mắc hoặc muốn biết thêm thông tin về bất kỳ chuyến
              du lịch nào của chúng tôi, vui lòng sử dụng biểu mẫu liên hệ bên
              dưới! Chúng tôi sẽ phản hồi bạn trong vòng 24 giờ.
              <br />
              <br />
              Nếu bạn có câu hỏi hoặc ý kiến, vui lòng sử dụng biểu mẫu bên
              phải, hoặc thông tin liên hệ được liệt kê ở trên.
              <br />
              <br />
              Trang web du lịch của chúng tôi là hướng dẫn hoàn hảo cho bất kỳ
              ai đam mê khám phá thế giới. Tại đây, bạn có thể khám phá hàng
              ngàn điểm đến phổ biến, từ các thành phố sôi động đến những bãi
              biển hoang sơ và kỳ quan thiên nhiên. Chúng tôi cung cấp thông tin
              chi tiết về các điểm du lịch khác nhau, gợi ý các hành trình thú
              vị và cung cấp các mẹo để giúp bạn tận hưởng chuyến đi của mình.
              Ngoài ra, trang web của chúng tôi còn cung cấp dịch vụ đặt vé máy
              bay, khách sạn và tour du lịch với giá cả hợp lý. Hãy để chúng tôi
              giúp bạn lên kế hoạch và bắt đầu hành trình của mình ngay hôm nay!
            </p>
          </div>
          <div className={cx("contact-form")}>
            <h1>Biểu Mẫu Liên Hệ</h1>

            <div className={cx("form-group")}>
              <label for="name">Tên</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={cx("form-group")}>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@mail.com"
              />
            </div>
            <div className={cx("form-group")}>
              <label for="phone">Số Điện Thoại</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className={cx("form-group")}>
              <label for="country">Quốc Gia Của Bạn</label>
              <input type="text" id="country" name="country" required />
            </div>
            <div className={cx("form-group")}>
              <label for="city">Bạn Muốn Đi Đâu?</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className={cx("form-group")}>
              <label for="message">Tin Nhắn</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Nhập câu hỏi hoặc tin nhắn của bạn"
              ></textarea>
            </div>
            <div className={cx("button-container")}>
              <button>Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Form;
