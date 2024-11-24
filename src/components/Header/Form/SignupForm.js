import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./Form.module.scss";
import classNames from "classnames/bind";
import Policy from "./Policy";
const cx = classNames.bind(styles);

function SignupForm({ stopPropagation, onChangeForm, onShow }) {
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  function handleShowPassword() {
    setIsPasswordShowed(!isPasswordShowed);
  }
  const [isCfPasswordShowed, setIsCfPasswordShowed] = useState(false);
  function handleShowCfPassword() {
    setIsCfPasswordShowed(!isCfPasswordShowed);
  }
  return (
    <form className={cx("login-area")} onClick={stopPropagation}>
      <div className={cx("login-close")} onClick={onShow}>
        <FontAwesomeIcon icon={faXmark} className={cx("login-close-icon")} />
      </div>
      <h1>Tạo tài khoản</h1>
      <p>Tạo tài khoản bằng e-mail</p>
      <div className={cx("login-form")}>
        <div className={cx("login-input")}>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            name="email"
            autoComplete="username"
            placeholder="Email"
          />
        </div>
        <div className={cx("login-input")}>
          <FontAwesomeIcon icon={faLock} />
          <input
            style={{ width: "80%" }}
            type={isPasswordShowed ? "text" : "password"}
            name="password"
            placeholder="Nhập mật khẩu"
          />
          <FontAwesomeIcon
            icon={isPasswordShowed ? faEye : faEyeSlash}
            onClick={handleShowPassword}
            className={cx("eye-icon")}
          />
        </div>
        <div className={cx("login-input")}>
          <FontAwesomeIcon icon={faLock} />
          <input
            style={{ width: "80%" }}
            type={isCfPasswordShowed ? "text" : "password"}
            name="cfpassword"
            placeholder="Nhập lại mật khẩu"
          />
          <FontAwesomeIcon
            icon={isCfPasswordShowed ? faEye : faEyeSlash}
            onClick={handleShowCfPassword}
            className={cx("eye-icon")}
          />
        </div>
        <button>Đăng ký</button>
      </div>
      <div className={cx("login-google")}>
        <div className={cx("login-line-divide")}>
          <span>hoặc đăng nhập bằng:</span>
        </div>
        <button className={cx("login-google-button")}>
          <img
            src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"
            alt="Google"
          />
          Google
        </button>
      </div>
      <div className={cx("login-tele")}>
        <p>Bạn đã có tài khoản?</p>
        <button onClick={onChangeForm}>Đăng nhập</button>
      </div>
      <Policy />
    </form>
  );
}

export default SignupForm;
