// Validators return '' when valid, otherwise an error message.
export const V = {
  required: (l) => (v) => (String(v ?? "").trim() ? "" : `${l} is required`),
  name: (v) =>
    /^[A-Za-z][A-Za-z .]{2,49}$/.test(v.trim())
      ? ""
      : "Enter your full name (letters only, min 3)",
  mobile: (v) =>
    /^[6-9]\d{9}$/.test(v)
      ? ""
      : "Enter a valid 10-digit mobile number starting with 6-9",
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
      ? ""
      : "Enter a valid email address",
  pan: (v) =>
    /^[A-Z]{5}\d{4}[A-Z]$/.test(v.toUpperCase())
      ? ""
      : "PAN format: ABCDE1234F",
  password: (v) =>
    /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(v)
      ? ""
      : "Min 8 characters with a letter and a number",
  account: (v) =>
    /^\d{9,18}$/.test(v) ? "" : "Account number must be 9-18 digits",
  ifsc: (v) =>
    /^[A-Z]{4}0[A-Z0-9]{6}$/.test(v.toUpperCase())
      ? ""
      : "IFSC format: SBIN0001234",
  vehicle: (v) =>
    /^[A-Z]{2}\d{1,2}[A-Z]{0,3}\d{4}$/.test(v.toUpperCase().replace(/\s/g, ""))
      ? ""
      : "Vehicle format: DL01AB1234",
  digits: (min, max, l) => (v) =>
    new RegExp(`^\\d{${min},${max}}$`).test(v)
      ? ""
      : `${l} must be ${min}-${max} digits`,
  amount: (min, max) => (v) => {
    const n = Number(v);
    if (!v) return "Enter an amount";
    if (!Number.isFinite(n) || n < min) return `Minimum amount is ₹${min}`;
    if (n > max) return `Maximum amount is ₹${max.toLocaleString("en-IN")}`;
    return "";
  },
};

const amt = (max = 50000, min = 10) => ({
  k: "amount",
  label: "Amount (₹)",
  type: "num",
  validate: V.amount(min, max),
});

export const SERVICES = {
  "Mobile Recharge": {
    icon: "📱",
    fields: [
      {
        k: "no",
        label: "Mobile number",
        type: "num",
        max: 10,
        validate: V.mobile,
      },
      {
        k: "op",
        label: "Operator",
        options: ["Jio", "Airtel", "Vi", "BSNL"],
        validate: V.required("Operator"),
      },
      amt(5000),
    ],
  },
  DTH: {
    icon: "📡",
    fields: [
      {
        k: "no",
        label: "Subscriber ID",
        type: "num",
        max: 12,
        validate: V.digits(8, 12, "Subscriber ID"),
      },
      {
        k: "op",
        label: "Provider",
        options: ["Tata Play", "Dish TV", "Airtel Digital TV", "Sun Direct"],
        validate: V.required("Provider"),
      },
      amt(10000),
    ],
  },
  Electricity: {
    icon: "💡",
    fields: [
      {
        k: "no",
        label: "Consumer number",
        type: "num",
        max: 14,
        validate: V.digits(8, 14, "Consumer number"),
      },
      {
        k: "op",
        label: "Board",
        options: ["BSES Rajdhani", "Tata Power-DDL", "MSEDCL", "BESCOM"],
        validate: V.required("Board"),
      },
      amt(100000, 50),
    ],
  },
  FASTag: {
    icon: "🚗",
    fields: [
      {
        k: "no",
        label: "Vehicle number",
        upper: true,
        max: 12,
        validate: V.vehicle,
      },
      {
        k: "op",
        label: "Bank",
        options: ["ICICI", "HDFC", "Paytm", "IDFC First", "Airtel"],
        validate: V.required("Bank"),
      },
      amt(10000, 100),
    ],
  },
  "Money Transfer": {
    icon: "💸",
    fields: [
      { k: "name", label: "Beneficiary name", validate: V.name },
      {
        k: "no",
        label: "Account number",
        type: "num",
        max: 18,
        validate: V.account,
      },
      { k: "ifsc", label: "IFSC code", upper: true, max: 11, validate: V.ifsc },
      amt(25000, 100),
    ],
  },
};

export const INFO = [
  [
    "🧾",
    "BBPS Bill Pay",
    "Electricity, water, gas, broadband, EMI and credit card bills.",
  ],
  [
    "🖐️",
    "AEPS",
    "Cash withdrawal, balance check and mini statement with fingerprint.",
  ],
  ["🏧", "Micro ATM", "Turn your shop into a mini bank branch."],
  ["✈️", "Travel", "Flights, bus and IRCTC tickets with live fares."],
  [
    "🛡️",
    "Insurance",
    "Health, motor and life premiums, collected in one place.",
  ],
  [
    "🪪",
    "PAN Card",
    "New PAN applications and corrections, tracked to completion.",
  ],
];

export const RATE = {
  "Mobile Recharge": 0.025,
  DTH: 0.03,
  Electricity: 0.005,
  FASTag: 0.01,
  "Money Transfer": 0.004,
};
