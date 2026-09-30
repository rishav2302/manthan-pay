import { useState, useEffect } from "react";
import { useT } from "./i18n.jsx";
import { Form } from "./components.jsx";
import { V } from "./data.js";

export const STATES = [
  "Karnataka",
  "Haryana",
  "Maharashtra",
  "Andhra Pradesh",
  "Delhi",
  "Telangana",
  "Punjab",
  "Tamil Nadu",
  "Goa",
  "Uttar Pradesh",
  "Himachal Pradesh",
  "Uttarakhand",
  "Gujarat",
  "Rajasthan",
  "Kerala",
  "Madhya Pradesh",
];

/* Rural scene illustration: v = 0 farmer, 1 village shop, 2 women's group */
export function Scene({ v = 0 }) {
  return (
    <svg
      viewBox="0 0 640 380"
      className="scene"
      role="img"
      aria-label="Village illustration"
    >
      <circle className="sun" cx="500" cy="90" r="46" fill="#ffb347" />
      <g fill="#fff" opacity=".9" className="clouds">
        <ellipse cx="120" cy="80" rx="46" ry="16" />
        <ellipse cx="150" cy="70" rx="30" ry="14" />
        <ellipse cx="330" cy="50" rx="40" ry="13" />
      </g>
      <path
        d="M0 250 Q120 170 240 235 T480 220 T640 240 V380 H0Z"
        fill="#b9e3b0"
      />
      <path d="M0 290 Q160 240 320 285 T640 275 V380 H0Z" fill="#7ac97a" />
      <path d="M0 335 Q200 300 400 330 T640 320 V380 H0Z" fill="#3fa552" />
      <g stroke="#2f8a43" strokeWidth="3" opacity=".5">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path key={i} d={`M${20 + i * 95} 372 L${70 + i * 95} 335`} />
        ))}
      </g>
      <g className="sway">
        <rect x="70" y="200" width="9" height="70" fill="#8a5a2b" />
        <circle cx="74" cy="190" r="34" fill="#2f8a43" />
        <circle cx="52" cy="210" r="22" fill="#3fa552" />
      </g>
      {v === 0 && (
        <g>
          <rect x="440" y="220" width="90" height="60" fill="#f4d6a0" />
          <path d="M430 222 L485 172 L540 222Z" fill="#d9531e" />
          <rect x="474" y="245" width="24" height="35" fill="#8a5a2b" />
          <circle cx="300" cy="250" r="16" fill="#8a5a2b" />
          <path d="M280 262 h40 v56 h-40Z" fill="#0b3a78" />
          <path d="M270 240 h60 l-8 -10 h-44Z" fill="#f2b64b" />
          <rect
            x="322"
            y="276"
            width="14"
            height="24"
            rx="3"
            fill="#f26a1b"
            className="phone"
          />
        </g>
      )}
      {v === 1 && (
        <g>
          <rect
            x="360"
            y="215"
            width="200"
            height="90"
            fill="#fff"
            stroke="#0b3a78"
            strokeWidth="3"
          />
          <path d="M350 215 h220 l-14 -36 h-192Z" fill="#f26a1b" />
          <path
            d="M370 179 h30 v36 h-30Z M430 179 h30 v36 h-30Z M490 179 h30 v36 h-30Z"
            fill="#fff"
            opacity=".7"
          />
          <rect x="380" y="240" width="60" height="40" fill="#e8f0ff" />
          <rect x="470" y="240" width="60" height="65" fill="#0b3a78" />
          <rect x="482" y="252" width="36" height="36" fill="#fff" />
          <path
            d="M488 258h10v10h-10zM504 258h8v8h-8zM488 274h8v8h-8zM500 272h12v10h-12z"
            fill="#0b3a78"
          />
          <circle cx="290" cy="255" r="16" fill="#8a5a2b" />
          <path d="M270 268 h40 v52 h-40Z" fill="#138808" />
        </g>
      )}
      {v === 2 && (
        <g>
          {[
            [240, "#d9531e"],
            [320, "#138808"],
            [400, "#0b3a78"],
          ].map(([x, c], i) => (
            <g key={i}>
              <circle cx={x} cy="252" r="15" fill="#8a5a2b" />
              <path d={`M${x - 20} 266 h40 v54 h-40Z`} fill={c} />
              <path d={`M${x - 15} 240 q15 -20 30 0`} fill="#2b1b10" />
            </g>
          ))}
          <rect
            x="350"
            y="270"
            width="20"
            height="34"
            rx="4"
            fill="#fff"
            stroke="#0b3a78"
            strokeWidth="3"
            className="phone"
          />
        </g>
      )}
    </svg>
  );
}

const SLIDES = [
  {
    // title: "Every village deserves a bank at its doorstep",
    // text: "Recharge, cash withdrawal and bill payment, right from your local shop.",
    image: "/banners/aeps-banking.png",
  },
  {
    // title: "One platform for everyday payments",
    // text: "Recharge, BBPS, FASTag, money transfer and digital services from one trusted platform.",
    image: "/banners/digital-payments.png",
  },
  {
    // title: "Grow your business with every transaction",
    // text: "Build your digital shop with reliable services, transparent commissions and simple tools.",
    image: "/banners/business-growth.png",
  },
];
export function Banners({ onJoin }) {
  const { t } = useT();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((x) => (x + 1) % SLIDES.length);
    }, 7000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="bn-sec">
      <div className="wrap">
        <div className="banner">
          {SLIDES.map((slide, n) => (
            <article
              key={slide.title}
              className={`banner-slide ${n === i ? "on" : ""}`}
              aria-hidden={n !== i}
            >
              <img src={slide.image} alt="" className="banner-image" />

              <div className="banner-overlay" />

              {/* <div className="banner-content">
                <span className="banner-label">MANTHAN PAY</span>

                <h2>{t(slide.title)}</h2>

                <p>{t(slide.text)}</p>

                <button className="btn primary" onClick={onJoin}>
                  {t("Become a partner")}
                </button>
              </div> */}
            </article>
          ))}

          <div className="banner-controls">
            <button
              onClick={() => setI((i + SLIDES.length - 1) % SLIDES.length)}
              aria-label="Previous banner"
            >
              ‹
            </button>

            <div className="banner-dots">
              {SLIDES.map((_, n) => (
                <button
                  key={n}
                  className={n === i ? "on" : ""}
                  onClick={() => setI(n)}
                  aria-label={`Banner ${n + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setI((i + 1) % SLIDES.length)}
              aria-label="Next banner"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATS = [
  ["🔒", "Secure transactions"],
  ["🎧", "Customer support"],
  ["📊", "Accurate analytics"],
  ["📈", "Better returns"],
  ["🤝", "Account assistance"],
  ["🧰", "Versatile solutions"],
  ["⚡", "Quick set-up"],
];
export function Why() {
  const { t } = useT();

  return (
    <section className="why-section" id="why">
      <div className="wrap">
        <div className="why-layout">
          {/* LEFT - CONTENT */}
          <div className="why-content rv">
            <span className="why-kicker">MANTHAN PAY</span>

            <h2>{t("Why Manthan Pay?")}</h2>

            <p className="why-intro">
              {t(
                "Because a payment is not just a number. It is a family's fee, a farmer's bill, a shopkeeper's trust. We build technology that respects that.",
              )}
            </p>

            <div className="why-features">
              {FEATS.map(([icon, text], n) => (
                <div className="why-feature" key={text} style={{ "--i": n }}>
                  <span className="why-feature-icon">{icon}</span>

                  <div>
                    <b>{t(text)}</b>
                  </div>
                </div>
              ))}
            </div>

            <p className="why-bottom">
              {t(
                "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.",
              )}
            </p>
          </div>

          {/* RIGHT - REAL PHOTOGRAPH */}
          <div className="why-image-wrap rv">
            <div className="why-image-card">
              <img
                src="https://images.pexels.com/photos/26861411/pexels-photo-26861411.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Indian shopkeeper working in a local store"
                className="why-image"
              />

              <div className="why-image-overlay">
                <span>MANthan PAY</span>
                <strong>Digital services, closer to every business.</strong>
              </div>
            </div>

            {/* <div className="why-image-badge">
              <span>✓</span>
              <div>
                <b>One platform</b>
                <small>Multiple digital services</small>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

const ECO = [
  [
    "🤲",
    "Sahayak",
    "Assist",
    "Grow your daily income with recharges, bill payments, money transfer and travel bookings.",
    ["Recharge and DTH", "BBPS bills", "Money transfer"],
  ],
  [
    "🛡️",
    "Suraksha",
    "Health",
    "Bring health and general insurance to families who never had it before.",
    ["Health cover", "Motor and life", "Renewals"],
  ],
  [
    "🌱",
    "Vikas",
    "Edge",
    "Get loan assistance to stock more, expand your shop and serve more customers.",
    ["Business loans", "Quick eligibility", "Guided paperwork"],
  ],
  [
    "🛒",
    "Bazaar",
    "Joy",
    "Buy inventory straight from manufacturers, with no middlemen taking a cut.",
    ["Direct sourcing", "Better margins", "Doorstep delivery"],
  ],
  [
    "🏧",
    "Dukaan",
    "Aspire",
    "Draw more footfall with Micro ATM and AEPS services at your counter.",
    ["Micro ATM", "AEPS cash-out", "Higher footfall"],
  ],
  [
    "📲",
    "Sangrah",
    "Collect",
    "Collect from customers with one UPI QR and see it in your ledger instantly.",
    ["UPI QR", "Instant ledger", "Daily settlement"],
  ],
];
export function Ecosystem() {
  const { t } = useT();
  const [k, setK] = useState(0);
  const [ic, hi, en, d, pts] = ECO[k];
  return (
    <section className="alt" id="ecosystem">
      <div className="wrap">
        <div className="head rv">
          <h2>{t("The Manthan ecosystem")}</h2>
          <p>
            {t(
              "Six ways we help you earn, protect and grow, in cities and villages alike.",
            )}
          </p>
        </div>
        <div className="eco rv">
          <div className="eco-tabs" role="tablist">
            {ECO.map((e, n) => (
              <button
                key={n}
                role="tab"
                aria-selected={n === k}
                className={n === k ? "on" : ""}
                onClick={() => setK(n)}
              >
                <span>{e[0]}</span>
                {t(e[1])}
                <small>{t(e[2])}</small>
              </button>
            ))}
          </div>
          <div className="eco-body" key={k}>
            <div className="big">{ic}</div>
            <h3>
              {t(hi)} <em>· {t(en)}</em>
            </h3>
            <p>{t(d)}</p>
            <ul>
              {pts.map((p) => (
                <li key={p}>{t(p)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function States() {
  const { t } = useT();

  return (
    <section className="reach-section" id="states">
      <div className="wrap">
        <div className="reach-header rv">
          <span className="reach-kicker">OUR PRESENCE</span>

          <h2>
            {t("We are in")} {STATES.length} {t("States and Counting")}
          </h2>

          <p>
            {t(
              "Making inroads into more underserved areas each day, Manthan Pay is building a growing network of retailers and distributors across India.",
            )}
          </p>
        </div>

        <div className="reach-content">
          {/* INDIA MAP */}
          <div className="india-map-box rv">
            <div className="map-glow"></div>

            <img
              src={`${import.meta.env.BASE_URL}maps/india-states.png`}
              alt="Map of India"
              className="india-map"
            />

            {/* <div className="map-label">
              <span>INDIA</span>
              <strong>16 States</strong>
              <small>and counting</small>
            </div> */}
          </div>

          {/* STATE LIST */}
          <div className="state-list rv">
            {STATES.map((state, n) => (
              <div className="state-item" key={state} style={{ "--i": n }}>
                <span className="state-dot"></span>

                <span className="state-name">{t(state)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const VOICES = [
  [
    "Rakesh Yadav",
    "Village shopkeeper, Uttar Pradesh",
    "Before this I sent customers to the bank for everything. Now they come to me, and my monthly income has clearly gone up.",
  ],
  [
    "Sunita Devi",
    "CSC operator, Rajasthan",
    "The screens are simple and in Hindi. I learned it in one afternoon and now I run recharges and bills without any help.",
  ],
  [
    "Arjun Reddy",
    "Retailer, Telangana",
    "Failed transactions come back to the wallet quickly. That is why my customers trust me and keep coming back.",
  ],
  [
    "Meena Patil",
    "Distributor, Maharashtra",
    "I added twelve new retailers in my area in two months. The dashboard shows me exactly who earns what.",
  ],
];
export function Voices() {
  const { t } = useT();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % VOICES.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="alt">
      <div className="wrap">
        <div className="head rv">
          <h2>{t("Our happy partners")}</h2>
          <p>
            {t(
              "Sample testimonials. Replace with real customer stories before launch.",
            )}
          </p>
        </div>
        <div className="voices rv">
          <blockquote key={i}>
            <div className="stars">★★★★★</div>
            <p>“{t(VOICES[i][2])}”</p>
            <footer>
              <span className="av">{VOICES[i][0][0]}</span>
              <div>
                <b>{t(VOICES[i][0])}</b>
                <small>{t(VOICES[i][1])}</small>
              </div>
            </footer>
          </blockquote>
          <div className="dots dark">
            {VOICES.map((_, n) => (
              <button
                key={n}
                className={n === i ? "on" : ""}
                onClick={() => setI(n)}
                aria-label={`Testimonial ${n + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Partner({ toast }) {
  const { t } = useT();
  const [role, setRole] = useState("Retailer");
  const F = [
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
      k: "state",
      label: "State",
      options: STATES,
      validate: V.required("State"),
    },
    {
      k: "city",
      label: "City or village",
      validate: (v) =>
        v.trim().length >= 2 ? "" : "Enter your city or village",
    },
  ];
  const send = async (v) => {
    await new Promise((r) => setTimeout(r, 700));
    localStorage.setItem(
      "mp_leads",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("mp_leads") || "[]"),
        { role, ...v },
      ]),
    );
    toast(
      `Thanks ${v.name.split(" ")[0]}! Our team will call you within 24 hours.`,
    );
  };
  return (
    <section id="partner">
      <div className="wrap partner rv">
        {/* LEFT SIDE */}
        <div className="partner-content">
          {/* IMAGE ABOVE */}
          <div className="partner-image">
            <img
              src={`${import.meta.env.BASE_URL}banners/manthan-pay-partner-banner.png`}
              alt="Manthan Pay digital services"
            />
          </div>

          {/* HEADING BELOW IMAGE */}
          <h2>{t("Manthan Pay as your trusted digital partner")}</h2>

          <p>
            {t(
              "Join Manthan Pay and bring reliable digital and financial services closer to your customers.",
            )}
          </p>

          <div className="seg">
            {["Retailer", "Distributor"].map((r) => (
              <button
                key={r}
                className={role === r ? "on" : ""}
                onClick={() => setRole(r)}
              >
                {t(r)}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="pform">
          <Form
            fields={F}
            submitLabel={`${t("Apply as")} ${t(role)}`}
            onSubmit={send}
          />
        </div>
      </div>
    </section>
  );
}

const TRUST = [
  ["🔐", "Encrypted data"],
  ["🔢", "MPIN on every payment"],
  ["⏱️", "Auto logout when idle"],
  ["↩️", "Instant refunds"],
  ["🪪", "KYC verified partners"],
  ["🧮", "Clear fees and commission"],
];
export function Trust() {
  const { t } = useT();
  return (
    <section>
      <div className="wrap">
        <div className="head rv">
          <h2>{t("Built for trust")}</h2>
          <p>{t("Money is personal. Here is how we protect yours.")}</p>
        </div>
        <div className="trustg">
          {TRUST.map(([i, x], n) => (
            <div className="tcard rv" style={{ "--i": n }} key={x}>
              <span>{i}</span>
              <b>{t(x)}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
