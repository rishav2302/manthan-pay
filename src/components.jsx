import { useState } from "react";
import { useT } from "./i18n.jsx";

export function Field({ f, value, error, onChange, onBlur }) {
  const { t } = useT();
  const [show, setShow] = useState(false);
  const sc =
    f.k === "password"
      ? (value.length >= 8) +
        (/[A-Z]/.test(value) && /\d/.test(value)) +
        /[^A-Za-z0-9]/.test(value)
      : 0;
  const id = "f-" + f.k;
  const props = {
    id,
    value,
    onBlur,
    "aria-invalid": !!error,
    "aria-describedby": id + "-e",
  };
  const change = (e) => {
    let v = e.target.value;
    if (f.type === "num") v = v.replace(/\D/g, "");
    if (f.upper) v = v.toUpperCase().replace(/\s/g, "");
    if (f.max) v = v.slice(0, f.max);
    onChange(v);
  };
  return (
    <div className={"field" + (error ? " bad" : "")}>
      <label htmlFor={id}>{t(f.label)}</label>
      {f.options ? (
        <select {...props} onChange={change}>
          <option value="">{t("Select")}</option>
          {f.options.map((o) => (
            <option key={o} value={o}>
              {t(o)}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...props}
          onChange={change}
          type={f.password && !show ? "password" : "text"}
          inputMode={f.type === "num" ? "numeric" : undefined}
          autoComplete="off"
          placeholder={f.ph}
        />
      )}
      {f.password && (
        <button type="button" className="eye" onClick={() => setShow(!show)}>
          {t(show ? "Hide" : "Show")}
        </button>
      )}
      {f.k === "password" && value && (
        <div className={"meter s" + sc}>
          <i />
          <i />
          <i />
          <small>{t(["Weak", "Weak", "Good", "Strong"][sc])}</small>
        </div>
      )}
      <div className="msg" id={id + "-e"} role="alert">
        {error && t(error)}
      </div>
    </div>
  );
}

// Generic validated form driven by a field config.
export function Form({ fields, submitLabel, onSubmit, extra }) {
  const { t } = useT();
  const [vals, setVals] = useState({});
  const [errs, setErrs] = useState({});
  const [busy, setBusy] = useState(false);
  const check = (f, v = vals[f.k] ?? "") => f.validate(v, vals);
  const set = (f, v) => {
    setVals((s) => ({ ...s, [f.k]: v }));
    if (errs[f.k]) setErrs((s) => ({ ...s, [f.k]: "" }));
  };
  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    fields.forEach((f) => {
      const m = check(f);
      if (m) next[f.k] = m;
    });
    setErrs(next);
    if (Object.keys(next).length) {
      document.getElementById("f-" + fields.find((f) => next[f.k]).k)?.focus();
      return;
    }
    setBusy(true);
    const err = await onSubmit(vals);
    setBusy(false);
    if (err) setErrs(err);
    else {
      setVals({});
      setErrs({});
    }
  };
  return (
    <form onSubmit={submit} noValidate>
      {fields.map((f) => (
        <Field
          key={f.k}
          f={f}
          value={vals[f.k] ?? ""}
          error={errs[f.k]}
          onChange={(v) => set(f, v)}
          onBlur={() => setErrs((s) => ({ ...s, [f.k]: check(f) }))}
        />
      ))}
      {extra}
      <button className="btn primary block" disabled={busy}>
        {busy ? t("Processing…") : submitLabel}
      </button>
    </form>
  );
}

export const Logo = ({ h = 46 }) => (
  <img
    src={new URL("./assets/logo.png", import.meta.url).href}
    alt="Manthan Pay – मंथन पे"
    style={{ height: h }}
  />
);

import { useEffect, useRef } from "react";
const FEED = [
  ["📱", "Recharge successful", "Jio · ₹299"],
  ["💸", "Money sent", "To HDFC · ₹5,000"],
  ["🚗", "FASTag topped up", "DL01AB1234 · ₹500"],
  ["📡", "DTH recharged", "Tata Play · ₹600"],
];
export function LiveTxn() {
  const { t } = useT();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % FEED.length), 2600);
    return () => clearInterval(id);
  }, []);
  const [ic, tt, d] = FEED[i];
  return (
    <div className="feed" key={i}>
      <span>{ic}</span>
      <div>
        <b>{t(tt)}</b>
        <small>{d}</small>
      </div>
    </div>
  );
}
export function CountUp({ to, dec = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min((t - t0) / 1400, 1);
        setV(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {dec ? v.toFixed(dec) : Math.round(v).toLocaleString("en-IN")}
    </span>
  );
}
export function useReveal(dep) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) =>
            e.isIntersecting &&
            (e.target.classList.add("in"), io.unobserve(e.target)),
        ),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}
