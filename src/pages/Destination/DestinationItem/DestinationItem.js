import React, { useState, useEffect } from "react";
import { destinations_link } from "../../../config/api_link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./DestinationItem.module.scss";
import classNames from "classnames/bind";
import Divider from "../../../components/Divider";
import DestinationList from "../DestinationList/DestinationList";

const cx = classNames.bind(styles);

function DestinationItem({ start, limit, query, queryContent, imageBonus }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({}); // Chứa trạng thái của từng tiêu đề

  const handleDetails = (index) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [index]: !prevDetails[index], // Toggle trạng thái của từng tiêu đề
    }));
  };

  let api = destinations_link;
  useEffect(() => {
    if (limit) api += `?_start=${start}&_limit=${limit}`;
    if (query && queryContent) api += `?${query}=${queryContent}`;

    console.log(api);
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
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
        <div key={index} className={cx("des-item-container")}>
          <h2>{item.country}'s Overview</h2>
          <div className={cx("des-item-overview")}>
            <div>
              <p>{item.overview}</p>
            </div>
            <div>
              <img src={item.img} alt={item.country} />
            </div>
          </div>
          <div className={cx("des-content")}>
            <div className={cx("des-content-list")}>
              <div className={cx("des-content-list-img")}>
                <img src={imageBonus} />
              </div>
              <div className={cx("des-content-list-content")}>
                <h3>Những điều nên làm ở {item.country}</h3>

                <div key={index} className={cx("des-content-item")}>
                  {item.topthingtodo.map((todo, todoIndex) => (
                    <div key={todoIndex}>
                      <button
                        onClick={() => handleDetails(todoIndex)} // Truyền index của tiêu đề
                      >
                        <h3>{todo.title}</h3>
                        <FontAwesomeIcon
                          icon={details[todoIndex] ? faAngleUp : faAngleDown}
                        />
                      </button>
                      {details[todoIndex] && (
                        <DestinationList content={todo.content} flag={true} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Divider />
            <div className={cx("des-content-climate")}>
              <h3>Thời Tiết</h3>
              <p>{item.weather}</p>
            </div>
            <div className={cx("des-content-climate")}>
              <h3>Giao Thông</h3>
              <p>{item.transport}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default DestinationItem;
