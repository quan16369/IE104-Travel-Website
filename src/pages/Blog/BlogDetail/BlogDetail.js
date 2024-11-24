import React from "react";
import classNames from "classnames/bind";
import styles from "./BlogDetail.module.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogs_link } from "../../../config/api_link";
import BlogItem from "../../../components/BlogItem";

const cx = classNames.bind(styles);

function BlogDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var api = blogs_link + "/" + id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) throw new Error("Network response is not ok^^");
        const result = await response.json();
        console.log(result);
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [api]);
  if (loading) {
    return <div>Đang tải...</div>;
  }
  if (error) {
    return <div>Lỗi: {error}</div>;
  }
  return (
    <>
      <div className={cx("return-all-blogs")}>
        <Link to="/blog"> {"<"} Trở về Blog</Link>
      </div>
      <div className={cx("post-page")}>
        <div className={cx("post-news")}>
          <h1>{data.title}</h1>
          <p className={cx("post-news-auth")}>
            Đăng bởi {data.author} lúc {data.date}
          </p>
          <p className={cx("post-news-content")}>{data.content}</p>
          {data.video && (
            <iframe
              width="100%"
              height="480px"
              src={`https://www.youtube.com/embed/${data.video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
          <p>#{data.type}</p>
        </div>
        <div className={cx("post-news-rcm")}>
          <h2>Các bài viết liên quan</h2>
          <div className={cx("post-news-rcm-item")}>
            <BlogItem
              start={0}
              limit={3}
              query="type"
              queryContent={data.type}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
