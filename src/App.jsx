import { useState, useEffect } from "react";
import { useT } from "./i18n.jsx";
import { Logo, LiveTxn, CountUp, useReveal } from "./components.jsx";
import Auth from "./Auth.jsx";
import { Why, Ecosystem, States, Voices, Partner, Trust } from "./Sections.jsx";
import { ServiceTutorials, TUTORIALS } from "./Tutorials.jsx";
import Dashboard from "./Dashboard.jsx";
import { SERVICES, INFO } from "./data.js";

const LANGUAGES = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
];

const HERO_IMAGES = [
  {
    image:
      "https://images.pexels.com/photos/36818382/pexels-photo-36818382.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Indian village shop and local commerce",
    label: "Local commerce",
    text: "Digital services, right where everyday customers shop.",
  },
  {
    image:
      "https://images.pexels.com/photos/32913713/pexels-photo-32913713.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Indian shopkeeper in a traditional market",
    label: "Retail partners",
    text: "Help your neighbourhood with trusted digital services.",
  },
  {
    image:
      "https://images.pexels.com/photos/35700912/pexels-photo-35700912.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Smiling Indian woman in a local market",
    label: "Customers first",
    text: "A simpler way to access useful services every day.",
  },
  {
    image:
      "https://images.pexels.com/photos/11091171/pexels-photo-11091171.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Customers shopping at an Indian local store",
    label: "Everyday India",
    text: "Bringing payments and services closer to communities.",
  },
];

function HeroVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-visual" aria-label="Manthan Pay India stories">
      <div className="hero-photo-stack">
        {HERO_IMAGES.map((slide, i) => (
          <article
            className={`hero-photo ${i === index ? "active" : ""}`}
            key={slide.image}
            aria-hidden={i !== index}
          >
            <img src={slide.image} alt={slide.alt} />
            <div className="hero-photo-shade" />
            <div className="hero-photo-caption">
              <span>{slide.label}</span>
              <strong>{slide.text}</strong>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const { t, lang, setLang } = useT();
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("mp_session") || "null"),
  );
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState("");
  const [menu, setMenu] = useState(false);
  useReveal(user);

  const save = (u) => {
    setUser(u);
    const all = JSON.parse(localStorage.getItem("mp_users") || "[]").map((x) =>
      x.mobile === u.mobile ? u : x,
    );
    localStorage.setItem("mp_users", JSON.stringify(all));
    localStorage.setItem("mp_session", JSON.stringify(u));
  };
  const logout = () => {
    localStorage.removeItem("mp_session");
    setUser(null);
  };
  const note = (m) => setToast(m);
  useEffect(() => {
    if (!user) return;
    let id;
    const reset = () => {
      clearTimeout(id);
      id = setTimeout(() => {
        logout();
        note("Logged out after 5 minutes of inactivity");
      }, 300000);
    };
    const ev = ["click", "keydown", "mousemove", "touchstart"];
    ev.forEach((e) => addEventListener(e, reset));
    reset();
    return () => {
      clearTimeout(id);
      ev.forEach((e) => removeEventListener(e, reset));
    };
  }, [user]);
  useEffect(() => {
    if (toast) {
      const id = setTimeout(() => setToast(""), 2600);
      return () => clearTimeout(id);
    }
  }, [toast]);
  useEffect(() => {
    const k = (e) => e.key === "Escape" && setModal(null);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);

  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="#top" onClick={() => setMenu(false)}>
            <Logo />
          </a>
          {!user && (
            <nav className={"links" + (menu ? " open" : "")}>
              {[
                ["services", "Services"],
                ["tutorials", "Tutorials"],
                ["ecosystem", "Ecosystem"],
                ["states", "States"],
                ["partner", "Partner with us"],
              ].map(([id, l]) => (
                <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
                  {t(l)}
                </a>
              ))}
            </nav>
          )}
          <div className="nav-cta">
            <select
              className="language-select"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label="Select language"
            >
              {LANGUAGES.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.native}
                </option>
              ))}
            </select>
            {user ? (
              <button className="btn ghost" onClick={logout}>
                {t("Log out")}
              </button>
            ) : (
              <>
                <button
                  className="btn ghost hide-sm"
                  onClick={() => setModal("login")}
                >
                  {t("Log in")}
                </button>
                <button
                  className="btn primary"
                  onClick={() => setModal("signup")}
                >
                  {t("Open free account")}
                </button>
                <button
                  className="burger"
                  onClick={() => setMenu(!menu)}
                  aria-label="Menu"
                >
                  ☰
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {user ? (
        <Dashboard user={user} update={save} toast={note} />
      ) : (
        <main id="top">
          <section className="hero hero-split">
            <div className="hero-split-wrap">
              <HeroVisual />

              <div className="hero-copy">
                <span className="hero-eyebrow">
                  MANTHAN PAY • DIGITAL INDIA
                </span>
                <h1>
                  {t("हर Payment,")} <span className="or">{t("भरोसे")}</span>{" "}
                  {t("के साथ")}
                </h1>
                <p className="lead">
                  {t(
                    "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.",
                  )}
                </p>
                <div className="cta-row">
                  <button
                    className="btn primary"
                    onClick={() => setModal("signup")}
                  >
                    {t("Open free account")}
                  </button>
                  <a className="btn ghost" href="#services">
                    {t("Explore services")}
                  </a>
                </div>
                <div className="trust">
                  <span>{t("Secure transactions")}</span>
                  <span>{t("Fast service")}</span>
                  <span>{t("24×7 support")}</span>
                </div>
              </div>
            </div>
          </section>
          <section className="statsec">
            <div className="wrap stats rv">
              {[
                [99.2, "%", "success rate", 1],
                [5, " sec", "average recharge time", 0],
                [20000, "+", "billers on BBPS", 0],
                [24, "×7", "transactions & support", 0],
              ].map(([n, u, l, d]) => (
                <div key={l}>
                  <b>
                    <CountUp to={n} dec={d} />
                    {u}
                  </b>
                  <span>{t(l)}</span>
                </div>
              ))}
            </div>
          </section>

          <Why />

          <section id="services">
            <div className="wrap">
              <div className="head rv">
                <h2>{t("Everything your customers ask for")}</h2>
                <p>
                  {t(
                    "Turn on the services you need and start taking transactions today.",
                  )}
                </p>
              </div>
              <div className="grid">
                {[
                  ...Object.entries(SERVICES).map(([k, s]) => [
                    s.icon,
                    k,
                    "Available now. Validated inputs, instant confirmation and automatic refund on failure.",
                  ]),
                  ...INFO,
                ].map(([i, tt, d]) => (
                  <article className="card service-card rv" key={tt}>
                    <div className="ic">{i}</div>
                    <h3>{t(tt)}</h3>
                    <p>{t(d)}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <ServiceTutorials />

          <section id="why" className="alt">
            <div className="wrap">
              <div className="head rv">
                <h2>{t("Payments should just work")}</h2>
                <p>{t("The problems retailers face most, solved.")}</p>
              </div>
              {[
                [
                  "Failed transactions stay stuck for days",
                  "Failures are refunded to your wallet automatically",
                ],
                [
                  "Hidden charges and unclear commissions",
                  "Every amount is shown before you confirm",
                ],
                [
                  "Slow, cluttered dashboards",
                  "Clean, fast, and works on your phone",
                ],
                [
                  "Wallet top-ups take hours",
                  "Wallet balance updates the moment you add money",
                ],
              ].map(([a, b]) => (
                <div className="row rv" key={a}>
                  <div className="old">{t(a)}</div>
                  <div className="new">✓ {t(b)}</div>
                </div>
              ))}
            </div>
          </section>

          <Ecosystem />
          <States />

          <section id="how" className="alt">
            <div className="wrap">
              <div className="head rv">
                <h2>{t("Start in four steps")}</h2>
              </div>
              <div className="steps">
                {[
                  ["Sign up", "Create your account with mobile and PAN."],
                  ["Add money", "Load your wallet."],
                  ["Pick a service", "Recharge, bills, transfer and more."],
                  ["Confirm", "Get an instant receipt."],
                ].map(([x, d], i) => (
                  <div className="step rv" key={x}>
                    <small>
                      {t("Step")} {i + 1}
                    </small>
                    <h3>{t(x)}</h3>
                    <p>{t(d)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Trust />
          <Voices />
          <Partner toast={note} />
        </main>
      )}

      <footer>
        <div className="wrap foot">
          <Logo h={40} />
          <div>
            <p>© 2026 मंथन पे · Manthan Pay. हर Payment, भरोसे के साथ.</p>
            <p className="legal">
              {[
                "Privacy Policy",
                "Terms of Use",
                "Refund Policy",
                "Grievance Officer",
              ].map((x) => (
                <a key={x} href="#top">
                  {t(x)}
                </a>
              ))}
            </p>
          </div>
        </div>
      </footer>
      {modal && (
        <Auth
          start={modal}
          onClose={() => setModal(null)}
          onDone={(u) => {
            save(u);
            setModal(null);
            note("Welcome to Manthan Pay");
          }}
        />
      )}
      <div id="toast" className={toast ? "show" : ""} role="status">
        {toast}
      </div>
    </>
  );
}
