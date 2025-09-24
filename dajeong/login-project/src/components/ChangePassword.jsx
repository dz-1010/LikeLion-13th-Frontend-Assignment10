import { useState } from "react";
import "./ChangePassword.css";

export default function ChangePassword() {
  const [nowPassword, setNowPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }
    if (!/\d/.test(newPassword)) {
      setError("비밀번호에는 최소 한 개의 숫자가 포함되어야 합니다.");
      return;
    }
    if (newPassword !== pwdConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (newPassword === nowPassword) {
      setError("현재 비밀번호와 다른 비밀번호를 사용해야 합니다.");
      return;
    }

    setSuccess("비밀번호가 변경되었습니다.");
    setNowPassword("");
    setNewPassword("");
    setPwdConfirm("");
  };
  return (
    <div className="change-wrap">
      <h1 className="change-title">비밀번호 변경</h1>
      <form onSubmit={onSubmit} className="change-form">
        <h2 className="change-subtitle">비밀번호 변경</h2>
        <input
          placeholder="현재 비밀번호"
          type="password"
          value={nowPassword}
          onChange={(e) => setNowPassword(e.target.value)}
          className="password-input"
        />
        <input
          placeholder="새 비밀번호 (6자 이상, 숫자 포함)"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="password-input"
        />
        <input
          placeholder="새 비밀번호 확인"
          type="password"
          value={pwdConfirm}
          onChange={(e) => setPwdConfirm(e.target.value)}
          className="password-input"
        />

        {error && <p className="login-error">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit" className="change-button">
          변경하기
        </button>
      </form>
    </div>
  );
}
