import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./BlogItem.module.scss";
import { Link } from "react-router-dom";
import { blogs_link } from "../../config/api_link";

const cx = classNames.bind(styles);

function BlogItem({ start, limit, query, queryContent }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var api = blogs_link + "?";
  useEffect(() => {
    if (limit) api += `_start=${start}&_limit=${limit}`;
    if (query && queryContent) api += `&${query}=${queryContent}`;
    console.log(api);
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) throw new Error("Network response is not ok^^");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [start, limit, query, queryContent]);
  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }
  return (
    <>
      {data.map((item, index) => (
        <Link
          key={index}
          to={`/blog/${item.id}`}
          className={cx("blog-item-container")}
        >
          <div className={cx("blog-img")}>
            <img src={item.img} />
          </div>
          <div className={cx("blog-item")}>
            <div>
              <p className={cx("blog-item-tag")}>{item.type}</p>
              <p className={cx("blog-item-title")}>{item.title}</p>
            </div>
            <div>
              <p className={cx("blog-auth")}>
                Đăng bởi {item.author} lúc {item.date}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default BlogItem;
