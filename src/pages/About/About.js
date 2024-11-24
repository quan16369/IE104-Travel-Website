import classNames from "classnames/bind";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx("about-page")}>
      <div className={cx("about-slide")}>
        <div className={cx("about-slide-img")}>
          <img src="https://media.vneconomy.vn/images/upload/2021/05/11/trang-an1.jpg" />
        </div>
        <div className={cx("about-slide-content")}>
          <h1>Giới Thiệu</h1>
        </div>
      </div>

      <div className={cx("about-jump-container")}>
        <div className={cx("about-jump")}>
          <div className={cx("about-jump-content")}>
            <h2>KHÁM PHÁ MỌI NƠI CHÚNG TÔI ĐẾN</h2>
            <p>
              Chúng tôi là Mark và Paul, hai người du lịch đang tìm kiếm những
              cuộc phiêu lưu.
            </p>
            <p>
              Chúng tôi du hành đến những địa điểm có câu chuyện riêng, tìm kiếm
              những viên ngọc ẩn giấu, đặc sản địa phương, những trải nghiệm ít
              người biết đến và cảnh quan thiên nhiên tuyệt đẹp. Chúng tôi quan
              tâm đến bối cảnh lịch sử và chính trị đã định hình cuộc sống của
              con người và văn hóa chung của họ.
            </p>
            <p>
              Mục tiêu của chúng tôi là xây dựng một cộng đồng những người du
              lịch độc lập, giúp những người tò mò khám phá những nơi ít được
              biết đến trong các điểm đến phổ biến, và những cuộc phiêu lưu bổ
              ích ở những địa điểm xa xôi hơn.
            </p>
            <p>
              Bằng cách đó, chúng tôi hy vọng sẽ làm cho du lịch trở nên bền
              vững, dễ tiếp cận và thú vị hơn nhiều.
            </p>
          </div>
          <div className={cx("about-jump-link")}>
            <p>
              <b>/Chuyển đến</b>
            </p>
            <a href="#about-us">Về chúng tôi</a>
            <a href="#our-stories">Câu chuyện của chúng tôi</a>
            <a href="#why-NPQ">Tại sao chọn NPQ?</a>
            <a href="#adwards">Giải thưởng</a>
            <a href="#work-with-us">Làm việc với chúng tôi</a>
          </div>
        </div>
      </div>

      <div className={cx("about-main")}>
        <div id="about-us" className={cx("about-section")}>
          <h2 className={cx("about-section-title")}>Về chúng tôi</h2>
          <div className={cx("about-section-content")}>
            <p>
              Sau khi đi du lịch ngày càng nhiều để thoát khỏi công việc hàng
              ngày, chúng tôi nhận ra rằng việc khám phá thế giới và trải nghiệm
              văn hóa mới chính là mục đích, chứ không phải là sự thoát khỏi.
              Cuối cùng, chúng tôi đã từ bỏ công việc thường ngày để tập trung
              vào niềm đam mê: khám phá thế giới và giúp người khác dễ dàng thực
              hiện điều đó.
            </p>
            <p>
              Anywhere We Roam được ra đời từ mong muốn chia sẻ trải nghiệm của
              chúng tôi trên toàn cầu. Để làm cho những điểm đến phổ biến trở
              nên hấp dẫn hơn và những nơi ít người biết đến dễ tiếp cận hơn. Để
              mang lại cho mọi người sự tự tin khi du lịch, thông tin để dễ dàng
              thực hiện và cảm hứng để biến điều đó thành hiện thực.
            </p>
            <p>
              Chúng tôi yêu thích kể chuyện, cả bằng văn bản và hình ảnh. Chúng
              tôi không thể nói không với một chuyến đi bộ tốt, một tách cà phê
              ngon, một ly bia thủ công, cảnh quan tuyệt đẹp hoặc một bản đồ đã
              được sử dụng kỹ lưỡng. Chúng tôi yêu thích các thành phố lịch sử,
              một cuộc bơi lội hoang dã, truyền thông tiết kiệm và các nền văn
              hóa khác với văn hóa của chúng tôi.
            </p>
            <div className={cx("about-section-content-img")}>
              <img src="https://res.cloudinary.com/gofjords-com/images/w_2560,h_1707,c_scale/f_auto,q_auto:eco/v1683890721/Experiences/XXLofoten/Kayaking/Evening%20kayaking%202020/Evening-kayaking-Svolvaer-Lofoten-XXlofoten-1/Evening-kayaking-Svolvaer-Lofoten-XXlofoten-1.jpg?_i=AA" />
              <img src="https://static01.nyt.com/images/2016/11/29/business/29ITINERARIES1/29ITINERARIES1-superJumbo.jpg" />
            </div>
          </div>
        </div>

        <div id="our-stories" className={cx("about-section")}>
          <h2 className={cx("about-section-title")}>
            Câu chuyện của chúng tôi
          </h2>
          <div className={cx("about-section-content")}>
            <p>
              Sau chuyến đi đầu tiên tới Grand Canyon, George biết rằng mình
              muốn tự tổ chức các chuyến đi này và dành những mùa hè tiếp theo
              để học hỏi kinh nghiệm.
            </p>
            <p>
              Đến năm 1969, những chuyến đi tư nhân của họ đã chuyển thành các
              chuyến đi chuyên nghiệp, và giấc mơ của George về việc "chính
              thức" đưa khách du ngoạn xuôi dòng sông đã trở thành hiện thực.
            </p>
            <iframe
              width="100%"
              height="460px"
              style={{ marginTop: "32px" }}
              src="https://www.youtube.com/embed/9kq68WcufH0?si=Y_A0VbbjvidORkHi"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div id="why-NPQ" className={cx("about-section")}>
          <h2 className={cx("about-section-title")}>Tại sao chọn NPQ?</h2>
          <div className={cx("about-section-content")}>
            <p>
              NPQ Travel Agency được ra đời từ mong muốn chia sẻ trải nghiệm của
              chúng tôi trên toàn cầu.
            </p>
            <div className={cx("about-section-content-img")}>
              <img
                src="https://www.parks.vic.gov.au/-/media/project/pv/main/parks/images/places-to-see/great-otway-national-park/great-ocean-walk/multi-day-hikes/great-ocean-walk-camping-blanket-bay-1920x1124.png?rev=f478ca1c49364d0e8825d8e6c9264086"
                alt=""
              />
              <img
                src="https://i.shgcdn.com/62897bca-bd89-45d1-9c3f-a4798fe2b6ba/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt=""
              />
            </div>
          </div>
        </div>

        <div id="adwards" className={cx("about-section")}>
          <h2 className={cx("about-section-title")}>Giải thưởng</h2>
          <div className={cx("about-section-content")}>
            <p>
              Chúng tôi rất vui mừng khi được trao danh hiệu Blogger của năm tại
              British Guild of Travel Writers (2022) và các giải thưởng khác.
            </p>
            <div className={cx("about-section-content-img-adward")}>
              <img
                src="https://anywhereweroam.com/wp-content/uploads/2022/08/Blogger-Vlogger.jpg"
                alt=""
              />
              <img
                src="https://anywhereweroam.com/wp-content/uploads/2020/10/VE2020_social_silver-env_tile_small.png"
                alt=""
              />
              <img
                src="https://anywhereweroam.com/wp-content/uploads/2024/03/TravMedia-Awards-2024-Badge-MEDIA-MediaWebsite.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div id="work-with-us" className={cx("about-section")}>
          <h2 className={cx("about-section-title")}>Làm việc với chúng tôi</h2>
          <div className={cx("about-section-content")}>
            <p>
              Chúng tôi thích làm việc với các thương hiệu phù hợp và các công
              ty du lịch chia sẻ cam kết của chúng tôi về du lịch có trách
              nhiệm. Nếu bạn quan tâm đến việc hợp tác với Anywhere We Roam, vui
              lòng liên hệ với chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
