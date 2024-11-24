import React, { useState } from "react";
import styles from "./Blog.module.scss";
import classNames from "classnames/bind";
import BlogItem from "../../components/BlogItem";
const cx = classNames.bind(styles);

function Blog() {
  const [type, setType] = useState("Mẹo");
  const handleType = (type) => {
    setType(type);
  };

  return (
    <div className={cx("blog-page")}>
      <div className={cx("blog-nav-item-container")}>
        <button className={cx("blog-nav-item")}>Bài Viết</button>
        <button
          className={cx("blog-nav-item", type === "Mẹo" ? "active" : "")}
          onClick={() => {
            handleType("Mẹo");
          }}
        >
          Mẹo
        </button>
        <button
          className={cx("blog-nav-item", type === "Phiêu lưu" ? "active" : "")}
          onClick={() => {
            handleType("Phiêu lưu");
          }}
        >
          Phiêu lưu
        </button>
        <button
          className={cx("blog-nav-item", type === "Video" ? "active" : "")}
          onClick={() => {
            handleType("Video");
          }}
        >
          Video
        </button>
      </div>

      <div className={cx("blog-content")}>
        <div className={cx("blog-other-container")}>
          <BlogItem query="type" queryContent={type} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
