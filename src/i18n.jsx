import { createContext, useContext, useState, useEffect } from "react";

// English text is the key. Add Hindi here; anything missing falls back to English.
const hi = {
  Services: "सेवाएँ",
  Ecosystem: "इकोसिस्टम",
  States: "राज्य",
  "Partner with us": "हमसे जुड़ें",
  "Log in": "लॉग इन",
  "Sign up": "साइन अप",
  "Log out": "लॉग आउट",
  "Open free account": "मुफ़्त खाता खोलें",
  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance. All from one dashboard, with instant wallet settlement and clear commissions.":
    "रिचार्ज, बिल भुगतान, आधार बैंकिंग, पैसे भेजना, यात्रा और बीमा। सब कुछ एक डैशबोर्ड से, तुरंत वॉलेट सेटलमेंट और साफ़ कमीशन के साथ।",
  "Start with ₹500 free balance": "₹500 मुफ़्त बैलेंस के साथ शुरू करें",
  "Explore services": "सेवाएँ देखें",
  "Secure and encrypted": "सुरक्षित और एन्क्रिप्टेड",
  "Instant refunds on failures": "फेल होने पर तुरंत रिफंड",
  "24×7 support": "24×7 सहायता",
  "Wallet balance": "वॉलेट बैलेंस",
  Recharge: "रिचार्ज",
  "Bill paid": "बिल जमा",
  "Electricity · ₹1,842": "बिजली · ₹1,842",
  "commission earned": "कमीशन मिला",
  "Recharge successful": "रिचार्ज सफल",
  "Money sent": "पैसे भेजे गए",
  "FASTag topped up": "FASTag रिचार्ज",
  "DTH recharged": "DTH रिचार्ज",
  "Mobile Recharge": "मोबाइल रिचार्ज",
  Electricity: "बिजली",
  "Money Transfer": "पैसे भेजें",
  "BBPS Bill Pay": "BBPS बिल भुगतान",
  "Micro ATM": "माइक्रो ATM",
  Travel: "यात्रा",
  Insurance: "बीमा",
  "PAN Card": "पैन कार्ड",
  "Electricity board": "बिजली बोर्ड",
  "Electricity, water, gas, broadband, EMI and credit card bills.":
    "बिजली, पानी, गैस, ब्रॉडबैंड, EMI और क्रेडिट कार्ड बिल।",
  "Cash withdrawal, balance check and mini statement with fingerprint.":
    "फ़िंगरप्रिंट से नक़द निकासी, बैलेंस और मिनी स्टेटमेंट।",
  "Turn your shop into a mini bank branch.":
    "अपनी दुकान को मिनी बैंक शाखा बनाएँ।",
  "Flights, bus and IRCTC tickets with live fares.":
    "फ़्लाइट, बस और IRCTC टिकट, लाइव किराए के साथ।",
  "Health, motor and life premiums, collected in one place.":
    "स्वास्थ्य, वाहन और जीवन बीमा प्रीमियम, एक जगह।",
  "New PAN applications and corrections, tracked to completion.":
    "नया पैन और सुधार, पूरा होने तक ट्रैक।",
  "Everything your customers ask for": "आपके ग्राहकों को जो चाहिए, सब कुछ",
  "Turn on the services you need and start taking transactions today.":
    "जो सेवाएँ चाहिए चालू करें और आज ही लेन-देन शुरू करें।",
  "Available now. Validated inputs, instant confirmation and automatic refund on failure.":
    "अभी उपलब्ध। जाँचे हुए विवरण, तुरंत पुष्टि और फेल होने पर अपने-आप रिफंड।",
  "Payments should just work": "भुगतान बिना झंझट होना चाहिए",
  "The problems retailers face most, solved.":
    "दुकानदारों की सबसे आम परेशानियाँ, अब हल।",
  "Failed transactions stay stuck for days":
    "फेल लेन-देन दिनों तक अटके रहते हैं",
  "Failures are refunded to your wallet automatically":
    "फेल होने पर पैसा अपने-आप वॉलेट में लौटता है",
  "Hidden charges and unclear commissions": "छिपे चार्ज और अस्पष्ट कमीशन",
  "Every amount is shown before you confirm": "पुष्टि से पहले हर रकम दिखती है",
  "Slow, cluttered dashboards": "धीमे और उलझे डैशबोर्ड",
  "Clean, fast, and works on your phone": "साफ़, तेज़ और फ़ोन पर चलने वाला",
  "Wallet top-ups take hours": "वॉलेट में पैसा आने में घंटों लगते हैं",
  "Wallet balance updates the moment you add money":
    "पैसे जोड़ते ही बैलेंस अपडेट हो जाता है",
  "Start in four steps": "चार कदम में शुरू करें",
  Step: "कदम",
  "Create your account with mobile and PAN.": "मोबाइल और पैन से खाता बनाएँ।",
  "Add money": "पैसे जोड़ें",
  "Load your wallet.": "वॉलेट में पैसे डालें।",
  "Pick a service": "सेवा चुनें",
  "Recharge, bills, transfer and more.": "रिचार्ज, बिल, ट्रांसफर और बहुत कुछ।",
  Confirm: "पुष्टि करें",
  "Get an instant receipt.": "तुरंत रसीद पाएँ।",
  "success rate": "सफलता दर",
  "average recharge time": "औसत रिचार्ज समय",
  "billers on BBPS": "BBPS पर बिलर",
  "transactions & support": "लेन-देन और सहायता",
  "Every village deserves a bank at its doorstep":
    "हर गाँव को चाहिए दरवाज़े पर बैंक",
  "Recharge, cash withdrawal and bill payment, right from your local shop.":
    "रिचार्ज, नक़द निकासी और बिल भुगतान, अपनी गली की दुकान से।",
  "Kirana store today. Digital dukaan tomorrow.":
    "आज किराना दुकान, कल डिजिटल दुकान।",
  "Earn on every transaction with clear commissions and instant settlement.":
    "हर लेन-देन पर कमाई, साफ़ कमीशन और तुरंत सेटलमेंट के साथ।",
  "Empowering women entrepreneurs, one gali at a time":
    "महिला उद्यमियों को सशक्त बनाना, एक-एक गली से",
  "Simple Hindi-first screens that work even on a basic phone.":
    "सरल हिंदी स्क्रीन, जो साधारण फ़ोन पर भी चलें।",
  "Become a partner": "पार्टनर बनें",
  "Why Manthan Pay?": "मंथन पे क्यों?",
  "Because a payment is not just a number. It is a family's fee, a farmer's bill, a shopkeeper's trust. We build technology that respects that.":
    "क्योंकि भुगतान सिर्फ़ एक रकम नहीं है। यह परिवार की फ़ीस है, किसान का बिल है, दुकानदार का भरोसा है। हम ऐसी तकनीक बनाते हैं जो इसका सम्मान करे।",
  "Secure transactions": "सुरक्षित लेन-देन",
  "Customer support": "ग्राहक सहायता",
  "Accurate analytics": "सटीक विश्लेषण",
  "Better returns": "बेहतर कमाई",
  "Account assistance": "खाता सहायता",
  "Versatile solutions": "हर ज़रूरत का हल",
  "Quick set-up": "तेज़ शुरुआत",
  "The Manthan ecosystem": "मंथन इकोसिस्टम",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "रोज़मर्रा के भुगतान और बिल सेवाओं से लेकर सहायक वित्तीय सेवाओं तक, मंथन पे स्थानीय व्यवसाय को एक संपूर्ण डिजिटल सेवा केंद्र में बदलने में मदद करता है।",

  "Six ways we help you earn, protect and grow, in cities and villages alike.":
    "कमाने, सुरक्षित रहने और आगे बढ़ने के छह तरीक़े, शहर और गाँव दोनों में।",
  Sahayak: "सहायक",
  Suraksha: "सुरक्षा",
  Vikas: "विकास",
  Bazaar: "बाज़ार",
  Dukaan: "दुकान",
  Sangrah: "संग्रह",
  Assist: "सहायता",
  Health: "स्वास्थ्य",
  Edge: "बढ़त",
  Joy: "ख़ुशी",
  Aspire: "आकांक्षा",
  Collect: "वसूली",
  "We are in": "हम मौजूद हैं",

  "States and Counting": "राज्यों में और लगातार बढ़ रहे हैं",

  "Making inroads into more underserved areas each day, Manthan Pay is building a growing network of retailers and distributors across India.":
    "हर दिन अधिक वंचित क्षेत्रों तक पहुँच बनाते हुए, मंथन पे पूरे भारत में रिटेलर्स और डिस्ट्रीब्यूटर्स का एक बढ़ता हुआ नेटवर्क तैयार कर रहा है।",
  "Grow your daily income with recharges, bill payments, money transfer and travel bookings.":
    "रिचार्ज, बिल भुगतान, पैसे भेजने और यात्रा बुकिंग से रोज़ की कमाई बढ़ाएँ।",
  "Bring health and general insurance to families who never had it before.":
    "उन परिवारों तक स्वास्थ्य और सामान्य बीमा पहुँचाएँ जिनके पास कभी नहीं था।",
  "Get loan assistance to stock more, expand your shop and serve more customers.":
    "ज़्यादा माल रखने और दुकान बढ़ाने के लिए ऋण सहायता पाएँ।",
  "Buy inventory straight from manufacturers, with no middlemen taking a cut.":
    "सीधे निर्माता से माल ख़रीदें, बिचौलियों के बिना।",
  "Draw more footfall with Micro ATM and AEPS services at your counter.":
    "माइक्रो ATM और AEPS से दुकान पर ज़्यादा ग्राहक बुलाएँ।",
  "Collect from customers with one UPI QR and see it in your ledger instantly.":
    "एक UPI QR से भुगतान लें और बही-खाते में तुरंत देखें।",
  "states, and counting": "राज्य, और बढ़ते जा रहे",
  "Now in": "अब",
  "Reaching the underserved areas first, one district after another.":
    "सबसे पहले वंचित इलाक़ों तक, एक-एक ज़िला करके।",
  Karnataka: "कर्नाटक",
  Haryana: "हरियाणा",
  Maharashtra: "महाराष्ट्र",
  "Andhra Pradesh": "आंध्र प्रदेश",
  Delhi: "दिल्ली",
  Telangana: "तेलंगाना",
  Punjab: "पंजाब",
  "Tamil Nadu": "तमिलनाडु",
  Goa: "गोवा",
  "Uttar Pradesh": "उत्तर प्रदेश",
  "Himachal Pradesh": "हिमाचल प्रदेश",
  Uttarakhand: "उत्तराखंड",
  Gujarat: "गुजरात",
  Rajasthan: "राजस्थान",
  Kerala: "केरल",
  "Madhya Pradesh": "मध्य प्रदेश",
  "Built for trust": "भरोसे के लिए बना",
  "Money is personal. Here is how we protect yours.":
    "पैसा निजी होता है। हम इसे ऐसे सुरक्षित रखते हैं।",
  "Encrypted data": "एन्क्रिप्टेड डेटा",
  "MPIN on every payment": "हर भुगतान पर MPIN",
  "Auto logout when idle": "निष्क्रिय होने पर अपने-आप लॉग आउट",
  "Instant refunds": "तुरंत रिफंड",
  "KYC verified partners": "KYC सत्यापित पार्टनर",
  "Clear fees and commission": "साफ़ शुल्क और कमीशन",
  "Our happy partners": "हमारे संतुष्ट पार्टनर",
  "Sample testimonials. Replace with real customer stories before launch.":
    "नमूना राय। लॉन्च से पहले असली ग्राहकों की कहानियाँ लगाएँ।",
  "Manthan Pay is your opportunity. The right one.":
    "मंथन पे आपका मौक़ा है। सही मौक़ा।",
  "Join as a retailer or distributor and start earning from the first day. Leave your details and we will call you.":
    "दुकानदार या वितरक बनकर पहले दिन से कमाई शुरू करें। अपना विवरण दें, हम आपको कॉल करेंगे।",
  Retailer: "दुकानदार",
  Distributor: "वितरक",
  "Manthan Pay as your trusted digital partner":
    "मंथन पे — आपका भरोसेमंद डिजिटल पार्टनर",

  "Join Manthan Pay and bring reliable digital and financial services closer to your customers.":
    "मंथन पे से जुड़ें और भरोसेमंद डिजिटल एवं वित्तीय सेवाओं को अपने ग्राहकों के और करीब लाएँ।",
  "Apply as": "आवेदन करें:",
  "Privacy Policy": "गोपनीयता नीति",
  "Terms of Use": "उपयोग की शर्तें",
  "Refund Policy": "रिफंड नीति",
  "Grievance Officer": "शिकायत अधिकारी",
  "Full name": "पूरा नाम",
  "Mobile number": "मोबाइल नंबर",
  Email: "ईमेल",
  "PAN number": "पैन नंबर",
  Password: "पासवर्ड",
  "Confirm password": "पासवर्ड दोबारा डालें",
  "Set 4-digit MPIN": "4 अंकों का MPIN बनाएँ",
  State: "राज्य",
  "City or village": "शहर या गाँव",
  Operator: "ऑपरेटर",
  Provider: "प्रदाता",
  "Amount (₹)": "रकम (₹)",
  "Subscriber ID": "सब्सक्राइबर ID",
  "Consumer number": "उपभोक्ता नंबर",
  Board: "बोर्ड",
  "Vehicle number": "वाहन नंबर",
  Bank: "बैंक",
  "Beneficiary name": "पाने वाले का नाम",
  "Account number": "खाता नंबर",
  "IFSC code": "IFSC कोड",
  Select: "चुनें",
  "Enter a valid 10-digit mobile number starting with 6-9":
    "6-9 से शुरू होने वाला सही 10 अंकों का मोबाइल नंबर डालें",
  "Enter a valid email address": "सही ईमेल पता डालें",
  "Min 8 characters with a letter and a number":
    "कम से कम 8 अक्षर, जिसमें एक अक्षर और एक अंक हो",
  "Passwords do not match": "पासवर्ड मेल नहीं खाते",
  "PAN format: ABCDE1234F": "पैन का प्रारूप: ABCDE1234F",
  "MPIN must be 4 digits": "MPIN 4 अंकों का होना चाहिए",
  "Incorrect MPIN": "MPIN गलत है",
  "Enter your full name (letters only, min 3)":
    "पूरा नाम डालें (सिर्फ़ अक्षर, कम से कम 3)",
  "Enter an amount": "रकम डालें",
  "IFSC format: SBIN0001234": "IFSC प्रारूप: SBIN0001234",
  "Vehicle format: DL01AB1234": "वाहन प्रारूप: DL01AB1234",
  "Enter your city or village": "शहर या गाँव का नाम डालें",
  "Create account": "खाता बनाएँ",
  "I agree to the Terms and Privacy Policy":
    "मैं नियम और गोपनीयता नीति से सहमत हूँ",
  "Accept the terms to continue": "आगे बढ़ने के लिए शर्तें मानें",
  Weak: "कमज़ोर",
  Good: "ठीक",
  Strong: "मज़बूत",
  Show: "दिखाएँ",
  Hide: "छिपाएँ",
  "Demo: accounts are saved in your browser only. New accounts get ₹500 wallet balance.":
    "डेमो: खाते सिर्फ़ आपके ब्राउज़र में सहेजे जाते हैं। नए खाते में ₹500 वॉलेट बैलेंस मिलता है।",
  Namaste: "नमस्ते",
  "Make a payment": "भुगतान करें",
  "Add to wallet": "वॉलेट में जोड़ें",
  "Recent transactions": "हाल के लेन-देन",
  "No transactions yet. Make your first payment.":
    "अभी कोई लेन-देन नहीं। पहला भुगतान करें।",
  Success: "सफल",
  "Confirm payment": "भुगतान की पुष्टि करें",
  Amount: "रकम",
  "Service fee": "सेवा शुल्क",
  "Your commission": "आपका कमीशन",
  "Enter your 4-digit MPIN": "अपना 4 अंकों का MPIN डालें",
  "Confirm and pay": "पुष्टि करें और भुगतान करें",
  Cancel: "रद्द करें",
  "Payment successful": "भुगतान सफल",
  "Print receipt": "रसीद प्रिंट करें",
  Done: "ठीक है",
  Reference: "संदर्भ",
  Service: "सेवा",
  Free: "निःशुल्क",
  "Processing…": "प्रोसेस हो रहा है…",
};
const Ctx = createContext({ t: (s) => s, lang: "en", toggle() {} });
export const useT = () => useContext(Ctx);
export function LangProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("mp_lang") || "en",
  );
  useEffect(() => {
    localStorage.setItem("mp_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const t = (s) => (lang === "hi" && hi[s]) || s;
  return (
    <Ctx.Provider
      value={{ t, lang, toggle: () => setLang(lang === "en" ? "hi" : "en") }}
    >
      {children}
    </Ctx.Provider>
  );
}
