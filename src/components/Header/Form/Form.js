import { useState } from "react";

import styles from "./Form.module.scss";
import classNames from "classnames/bind";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
const cx = classNames.bind(styles);

function Form({ onShow, isShow }) {
  const [isLoginShowed, setLoginShowed] = useState(true);

  const handleChangeForm = () => {
    setLoginShowed(!isLoginShowed);
  };

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return (
    <div
      className={cx("login-container")}
      style={{ display: isShow ? "flex" : "none" }}
      onClick={onShow}
    >
      {isLoginShowed ? (
        <LoginForm
          stopPropagation={stopPropagation}
          onChangeForm={handleChangeForm}
          onShow={onShow}
        />
      ) : (
        <SignupForm
          stopPropagation={stopPropagation}
          onChangeForm={handleChangeForm}
          onShow={onShow}
        />
      )}
    </div>
  );
}

export default Form;
