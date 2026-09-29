import { useState } from "react";
import { useT } from "./i18n.jsx";
import { Form, Logo } from "./components.jsx";
import { V } from "./data.js";

const users = () => JSON.parse(localStorage.getItem("mp_users") || "[]");

const REG = [
  { k: "name", label: "Full name", validate: V.name },
  {
    k: "mobile",
    label: "Mobile number",
    type: "num",
    max: 10,
    validate: V.mobile,
  },
  { k: "email", label: "Email", validate: V.email },
  {
    k: "pan",
    label: "PAN number",
    upper: true,
    max: 10,
    ph: "ABCDE1234F",
    validate: V.pan,
  },
  { k: "password", label: "Password", password: true, validate: V.password },
  {
    k: "mpin",
    label: "Set 4-digit MPIN",
    password: true,
    type: "num",
    max: 4,
    validate: (v) => (/^\d{4}$/.test(v) ? "" : "MPIN must be 4 digits"),
  },
  {
    k: "confirm",
    label: "Confirm password",
    password: true,
    validate: (v, all) =>
      v && v === all.password ? "" : "Passwords do not match",
  },
];
const LOGIN = [
  {
    k: "mobile",
    label: "Mobile number",
    type: "num",
    max: 10,
    validate: V.mobile,
  },
  {
    k: "password",
    label: "Password",
    password: true,
    validate: V.required("Password"),
  },
];

export default function Auth({ start, onClose, onDone }) {
  const { t } = useT();
  const [mode, setMode] = useState(start);
  const [agree, setAgree] = useState(false);
  const [agreeErr, setAgreeErr] = useState("");

  const register = async (v) => {
    if (!agree) {
      setAgreeErr("Accept the terms to continue");
      return {};
    }
    if (users().some((u) => u.mobile === v.mobile))
      return { mobile: "This mobile number is already registered" };
    const u = {
      name: v.name.trim(),
      mobile: v.mobile,
      email: v.email,
      pan: v.pan.toUpperCase(),
      password: v.password,
      mpin: v.mpin,
      wallet: 500,
      txns: [],
    };
    localStorage.setItem("mp_users", JSON.stringify([...users(), u]));
    onDone(u);
  };
  const login = async (v) => {
    const u = users().find((x) => x.mobile === v.mobile);
    if (!u) return { mobile: "No account found. Please sign up first" };
    if (u.password !== v.password) return { password: "Incorrect password" };
    onDone(u);
  };

  return (
    <div
      className="modal"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="box" role="dialog" aria-modal="true">
        <button className="x" onClick={onClose} aria-label="Close">
          ×
        </button>
        <Logo h={38} />
        <div className="seg">
          {["login", "signup"].map((m) => (
            <button
              key={m}
              className={mode === m ? "on" : ""}
              onClick={() => setMode(m)}
            >
              {t(m === "login" ? "Log in" : "Sign up")}
            </button>
          ))}
        </div>
        {mode === "login" ? (
          <Form key="l" fields={LOGIN} submitLabel="Log in" onSubmit={login} />
        ) : (
          <Form
            key="s"
            fields={REG}
            submitLabel="Create account"
            onSubmit={register}
            extra={
              <div className="terms">
                <label>
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => {
                      setAgree(e.target.checked);
                      setAgreeErr("");
                    }}
                  />{" "}
                  {t("I agree to the Terms and Privacy Policy")}
                </label>
                <div className="msg">{agreeErr && t(agreeErr)}</div>
              </div>
            }
          />
        )}
        <p className="hint">
          {t(
            "Demo: accounts are saved in your browser only. New accounts get ₹500 wallet balance.",
          )}
        </p>
      </div>
    </div>
  );
}
