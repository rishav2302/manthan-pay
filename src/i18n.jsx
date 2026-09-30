import { createContext, useContext, useState, useEffect } from "react";
// ======================================================
// ENGLISH TRANSLATIONS
// ======================================================

const en = {
  Services: "Services",
  Ecosystem: "Ecosystem",
  States: "States",
  "Partner with us": "Partner with us",
  "Log in": "Log in",
  "Sign up": "Sign up",
  "Log out": "Log out",
  "Open free account": "Open free account",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.",

  "Understand the service before you serve":
    "Understand the service before you serve",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.",

  "ANIMATED TUTORIALS": "ANIMATED TUTORIALS",

  "Watch AEPS tutorial": "Watch AEPS tutorial",

  "AEPS Tutorial": "AEPS Tutorial",

  Close: "Close",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance. All from one dashboard, with instant wallet settlement and clear commissions.":
    "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance. All from one dashboard, with instant wallet settlement and clear commissions.",

  "Start with ₹500 free balance": "Start with ₹500 free balance",

  "Explore services": "Explore services",

  "Secure and encrypted": "Secure and encrypted",

  "Instant refunds on failures": "Instant refunds on failures",

  "24×7 support": "24×7 support",

  "Wallet balance": "Wallet balance",

  Recharge: "Recharge",

  "Bill paid": "Bill paid",

  "Electricity · ₹1,842": "Electricity · ₹1,842",

  "commission earned": "commission earned",

  "Recharge successful": "Recharge successful",

  "Money sent": "Money sent",

  "FASTag topped up": "FASTag topped up",

  "DTH recharged": "DTH recharged",

  "Mobile Recharge": "Mobile Recharge",

  Electricity: "Electricity",

  "Money Transfer": "Money Transfer",

  "BBPS Bill Pay": "BBPS Bill Pay",

  "Micro ATM": "Micro ATM",

  Travel: "Travel",

  Insurance: "Insurance",

  "PAN Card": "PAN Card",

  "Electricity board": "Electricity board",

  "Electricity, water, gas, broadband, EMI and credit card bills.":
    "Electricity, water, gas, broadband, EMI and credit card bills.",

  "Cash withdrawal, balance check and mini statement with fingerprint.":
    "Cash withdrawal, balance check and mini statement with fingerprint.",

  "Turn your shop into a mini bank branch.":
    "Turn your shop into a mini bank branch.",

  "Flights, bus and IRCTC tickets with live fares.":
    "Flights, bus and IRCTC tickets with live fares.",

  "Health, motor and life premiums, collected in one place.":
    "Health, motor and life premiums, collected in one place.",

  "New PAN applications and corrections, tracked to completion.":
    "New PAN applications and corrections, tracked to completion.",

  "Everything your customers ask for": "Everything your customers ask for",

  "Turn on the services you need and start taking transactions today.":
    "Turn on the services you need and start taking transactions today.",

  "Available now. Validated inputs, instant confirmation and automatic refund on failure.":
    "Available now. Validated inputs, instant confirmation and automatic refund on failure.",

  "Payments should just work": "Payments should just work",

  "The problems retailers face most, solved.":
    "The problems retailers face most, solved.",

  "Failed transactions stay stuck for days":
    "Failed transactions stay stuck for days",

  "Failures are refunded to your wallet automatically":
    "Failures are refunded to your wallet automatically",

  "Hidden charges and unclear commissions":
    "Hidden charges and unclear commissions",

  "Every amount is shown before you confirm":
    "Every amount is shown before you confirm",

  "Slow, cluttered dashboards": "Slow, cluttered dashboards",

  "Clean, fast, and works on your phone":
    "Clean, fast, and works on your phone",

  "Wallet top-ups take hours": "Wallet top-ups take hours",

  "Wallet balance updates the moment you add money":
    "Wallet balance updates the moment you add money",

  "Start in four steps": "Start in four steps",

  Step: "Step",

  "Create your account with mobile and PAN.":
    "Create your account with mobile and PAN.",

  "Add money": "Add money",

  "Load your wallet.": "Load your wallet.",

  "Pick a service": "Pick a service",

  "Recharge, bills, transfer and more.": "Recharge, bills, transfer and more.",

  Confirm: "Confirm",

  "Get an instant receipt.": "Get an instant receipt.",

  "success rate": "success rate",

  "average recharge time": "average recharge time",

  "billers on BBPS": "billers on BBPS",

  "transactions & support": "transactions & support",

  "Every village deserves a bank at its doorstep":
    "Every village deserves a bank at its doorstep",

  "Recharge, cash withdrawal and bill payment, right from your local shop.":
    "Recharge, cash withdrawal and bill payment, right from your local shop.",

  "Kirana store today. Digital dukaan tomorrow.":
    "Kirana store today. Digital dukaan tomorrow.",

  "Earn on every transaction with clear commissions and instant settlement.":
    "Earn on every transaction with clear commissions and instant settlement.",

  "Empowering women entrepreneurs, one gali at a time":
    "Empowering women entrepreneurs, one gali at a time",

  "Simple Hindi-first screens that work even on a basic phone.":
    "Simple Hindi-first screens that work even on a basic phone.",

  "Become a partner": "Become a partner",

  "Why Manthan Pay?": "Why Manthan Pay?",

  "Because a payment is not just a number. It is a family's fee, a farmer's bill, a shopkeeper's trust. We build technology that respects that.":
    "Because a payment is not just a number. It is a family's fee, a farmer's bill, a shopkeeper's trust. We build technology that respects that.",

  "Secure transactions": "Secure transactions",

  "Customer support": "Customer support",

  "Accurate analytics": "Accurate analytics",

  "Better returns": "Better returns",

  "Account assistance": "Account assistance",

  "Versatile solutions": "Versatile solutions",

  "Quick set-up": "Quick set-up",

  "The Manthan ecosystem": "The Manthan ecosystem",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.",

  "Six ways we help you earn, protect and grow, in cities and villages alike.":
    "Six ways we help you earn, protect and grow, in cities and villages alike.",

  Sahayak: "Sahayak",
  Suraksha: "Suraksha",
  Vikas: "Vikas",
  Bazaar: "Bazaar",
  Dukaan: "Dukaan",
  Sangrah: "Sangrah",

  Assist: "Assist",
  Health: "Health",
  Edge: "Edge",
  Joy: "Joy",
  Aspire: "Aspire",
  Collect: "Collect",

  "We are in": "We are in",

  "States and Counting": "States and Counting",

  "Making inroads into more underserved areas each day, Manthan Pay is building a growing network of retailers and distributors across India.":
    "Making inroads into more underserved areas each day, Manthan Pay is building a growing network of retailers and distributors across India.",

  "Grow your daily income with recharges, bill payments, money transfer and travel bookings.":
    "Grow your daily income with recharges, bill payments, money transfer and travel bookings.",

  "Bring health and general insurance to families who never had it before.":
    "Bring health and general insurance to families who never had it before.",

  "Get loan assistance to stock more, expand your shop and serve more customers.":
    "Get loan assistance to stock more, expand your shop and serve more customers.",

  "Buy inventory straight from manufacturers, with no middlemen taking a cut.":
    "Buy inventory straight from manufacturers, with no middlemen taking a cut.",

  "Draw more footfall with Micro ATM and AEPS services at your counter.":
    "Draw more footfall with Micro ATM and AEPS services at your counter.",

  "Collect from customers with one UPI QR and see it in your ledger instantly.":
    "Collect from customers with one UPI QR and see it in your ledger instantly.",

  "states, and counting": "states, and counting",

  "Now in": "Now in",

  "Reaching the underserved areas first, one district after another.":
    "Reaching the underserved areas first, one district after another.",

  Karnataka: "Karnataka",
  Haryana: "Haryana",
  Maharashtra: "Maharashtra",
  "Andhra Pradesh": "Andhra Pradesh",
  Delhi: "Delhi",
  Telangana: "Telangana",
  Punjab: "Punjab",
  "Tamil Nadu": "Tamil Nadu",
  Goa: "Goa",
  "Uttar Pradesh": "Uttar Pradesh",
  "Himachal Pradesh": "Himachal Pradesh",
  Uttarakhand: "Uttarakhand",
  Gujarat: "Gujarat",
  Rajasthan: "Rajasthan",
  Kerala: "Kerala",
  "Madhya Pradesh": "Madhya Pradesh",

  "Built for trust": "Built for trust",

  "Money is personal. Here is how we protect yours.":
    "Money is personal. Here is how we protect yours.",

  "Encrypted data": "Encrypted data",

  "MPIN on every payment": "MPIN on every payment",

  "Auto logout when idle": "Auto logout when idle",

  "Instant refunds": "Instant refunds",

  "KYC verified partners": "KYC verified partners",

  "Clear fees and commission": "Clear fees and commission",

  "Our happy partners": "Our happy partners",

  "Sample testimonials. Replace with real customer stories before launch.":
    "Sample testimonials. Replace with real customer stories before launch.",

  "Manthan Pay is your opportunity. The right one.":
    "Manthan Pay is your opportunity. The right one.",

  "Join as a retailer or distributor and start earning from the first day. Leave your details and we will call you.":
    "Join as a retailer or distributor and start earning from the first day. Leave your details and we will call you.",

  Retailer: "Retailer",
  Distributor: "Distributor",

  "Manthan Pay as your trusted digital partner":
    "Manthan Pay as your trusted digital partner",

  "Join Manthan Pay and bring reliable digital and financial services closer to your customers.":
    "Join Manthan Pay and bring reliable digital and financial services closer to your customers.",

  "Apply as": "Apply as",

  "Privacy Policy": "Privacy Policy",

  "Terms of Use": "Terms of Use",

  "Refund Policy": "Refund Policy",

  "Grievance Officer": "Grievance Officer",

  "Full name": "Full name",

  "Mobile number": "Mobile number",

  Email: "Email",

  "PAN number": "PAN number",

  Password: "Password",

  "Confirm password": "Confirm password",

  "Set 4-digit MPIN": "Set 4-digit MPIN",

  State: "State",

  "City or village": "City or village",

  Operator: "Operator",

  Provider: "Provider",

  "Amount (₹)": "Amount (₹)",

  "Subscriber ID": "Subscriber ID",

  "Consumer number": "Consumer number",

  Board: "Board",

  "Vehicle number": "Vehicle number",

  Bank: "Bank",

  "Beneficiary name": "Beneficiary name",

  "Account number": "Account number",

  "IFSC code": "IFSC code",

  Select: "Select",

  "Enter a valid 10-digit mobile number starting with 6-9":
    "Enter a valid 10-digit mobile number starting with 6-9",

  "Enter a valid email address": "Enter a valid email address",

  "Min 8 characters with a letter and a number":
    "Min 8 characters with a letter and a number",

  "Passwords do not match": "Passwords do not match",

  "PAN format: ABCDE1234F": "PAN format: ABCDE1234F",

  "MPIN must be 4 digits": "MPIN must be 4 digits",

  "Incorrect MPIN": "Incorrect MPIN",

  "Enter your full name (letters only, min 3)":
    "Enter your full name (letters only, min 3)",

  "Enter an amount": "Enter an amount",

  "IFSC format: SBIN0001234": "IFSC format: SBIN0001234",

  "Vehicle format: DL01AB1234": "Vehicle format: DL01AB1234",

  "Enter your city or village": "Enter your city or village",

  "Create account": "Create account",

  "I agree to the Terms and Privacy Policy":
    "I agree to the Terms and Privacy Policy",

  "Accept the terms to continue": "Accept the terms to continue",

  Weak: "Weak",
  Good: "Good",
  Strong: "Strong",

  Show: "Show",
  Hide: "Hide",

  "Demo: accounts are saved in your browser only. New accounts get ₹500 wallet balance.":
    "Demo: accounts are saved in your browser only. New accounts get ₹500 wallet balance.",

  Namaste: "Namaste",

  "Make a payment": "Make a payment",

  "Add to wallet": "Add to wallet",

  "Recent transactions": "Recent transactions",

  "No transactions yet. Make your first payment.":
    "No transactions yet. Make your first payment.",

  Success: "Success",

  "Confirm payment": "Confirm payment",

  Amount: "Amount",

  "Service fee": "Service fee",

  "Your commission": "Your commission",

  "Enter your 4-digit MPIN": "Enter your 4-digit MPIN",

  "Confirm and pay": "Confirm and pay",

  Cancel: "Cancel",

  "Payment successful": "Payment successful",

  "Print receipt": "Print receipt",

  Done: "Done",

  Reference: "Reference",

  Service: "Service",

  Free: "Free",

  "Processing…": "Processing…",
};

// ======================================================
// HINDI TRANSLATIONS
//
const hi = {
  Services: "सेवाएँ",
  Ecosystem: "इकोसिस्टम",
  States: "राज्य",
  "Partner with us": "हमसे जुड़ें",
  "Log in": "लॉग इन",
  "Sign up": "साइन अप",
  "Log out": "लॉग आउट",
  "Open free account": "मुफ़्त खाता खोलें",
  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "रिचार्ज, बिल भुगतान, आधार बैंकिंग, पैसे भेजना, यात्रा और बीमा — पूरे भारत में ग्राहकों और रिटेलर्स के लिए सरल डिजिटल सेवाएँ।",

  "Understand the service before you serve": "सेवा देने से पहले उसे समझें",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "किसी सेवा का पूरा तरीका देखने के लिए सेवा चुनें। हर ट्यूटोरियल रिटेलर्स, डिस्ट्रीब्यूटर्स और ग्राहकों के लिए आसान विज़ुअल समझ के साथ तैयार किया गया है।",

  "ANIMATED TUTORIALS": "एनिमेटेड ट्यूटोरियल",

  "Watch AEPS tutorial": "AEPS ट्यूटोरियल देखें",

  "AEPS Tutorial": "AEPS ट्यूटोरियल",
  Close: "बंद करें",
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
const bn = {
  Services: "সেবাসমূহ",
  Ecosystem: "ইকোসিস্টেম",
  States: "রাজ্যসমূহ",
  "Partner with us": "আমাদের সাথে অংশীদার হোন",
  "Log in": "লগ ইন",
  "Sign up": "সাইন আপ",
  "Log out": "লগ আউট",
  "Open free account": "বিনামূল্যে অ্যাকাউন্ট খুলুন",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "রিচার্জ, বিল পেমেন্ট, আধার ব্যাংকিং, টাকা ট্রান্সফার, ভ্রমণ এবং বিমা — সারা ভারতের গ্রাহক ও রিটেলারদের জন্য সহজ ডিজিটাল পরিষেবা।",

  "Everything your customers ask for": "আপনার গ্রাহকদের প্রয়োজনীয় সবকিছু",

  "The Manthan ecosystem": "মন্তন ইকোসিস্টেম",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "দৈনন্দিন পেমেন্ট ও বিল পরিষেবা থেকে সহায়ক আর্থিক পরিষেবা পর্যন্ত, Manthan Pay একটি স্থানীয় ব্যবসাকে সম্পূর্ণ ডিজিটাল পরিষেবা কেন্দ্রে পরিণত করতে সাহায্য করে।",

  "Understand the service before you serve":
    "পরিষেবা দেওয়ার আগে পরিষেবাটি বুঝুন",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "একটি পরিষেবা বেছে নিয়ে তার সম্পূর্ণ প্রক্রিয়াটি দেখুন। প্রতিটি টিউটোরিয়াল রিটেলার, ডিস্ট্রিবিউটর এবং দ্রুত ভিজ্যুয়াল ব্যাখ্যা চান এমন গ্রাহকদের জন্য তৈরি।",

  "ANIMATED TUTORIALS": "অ্যানিমেটেড টিউটোরিয়াল",

  "Watch AEPS tutorial": "AEPS টিউটোরিয়াল দেখুন",

  "AEPS Tutorial": "AEPS টিউটোরিয়াল",

  "MANTHAN PAY": "মন্তন পে",

  "Manthan Pay": "মন্তন পে",

  Close: "বন্ধ করুন",

  AEPS: "AEPS",
  BBPS: "BBPS",
  "Micro ATM": "মাইক্রো ATM",

  "Money Transfer": "মানি ট্রান্সফার",
  Recharge: "রিচার্জ",
  Insurance: "বিমা",
  Travel: "ভ্রমণ",
  "Aadhaar Banking": "আধার ব্যাংকিং",
  "Bill Payments": "বিল পেমেন্ট",

  "Why Manthan Pay": "কেন Manthan Pay",
  "Our Services": "আমাদের পরিষেবা",
  "Our Presence": "আমাদের উপস্থিতি",
  "Partner with Manthan Pay": "Manthan Pay-এর সাথে অংশীদার হোন",
};
const mr = {
  Services: "सेवा",
  Ecosystem: "इकोसिस्टम",
  States: "राज्ये",
  "Partner with us": "आमच्यासोबत भागीदार व्हा",
  "Log in": "लॉग इन",
  "Sign up": "साइन अप",
  "Log out": "लॉग आउट",
  "Open free account": "मोफत खाते उघडा",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "रिचार्ज, बिल पेमेंट, आधार बँकिंग, पैसे ट्रान्सफर, प्रवास आणि विमा — संपूर्ण भारतातील ग्राहक आणि रिटेलर्ससाठी सोप्या डिजिटल सेवा.",

  "Everything your customers ask for":
    "तुमच्या ग्राहकांना आवश्यक असलेले सर्व काही",

  "The Manthan ecosystem": "मंथन इकोसिस्टम",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "दैनंदिन पेमेंट आणि बिल सेवांपासून सहाय्यक आर्थिक सेवांपर्यंत, Manthan Pay स्थानिक व्यवसायाला संपूर्ण डिजिटल सेवा केंद्रामध्ये बदलण्यास मदत करते.",

  "Understand the service before you serve":
    "सेवा देण्यापूर्वी सेवा समजून घ्या",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "संपूर्ण प्रक्रिया पाहण्यासाठी एखादी सेवा निवडा. प्रत्येक ट्यूटोरियल रिटेलर्स, वितरक आणि ग्राहकांना जलद व्हिज्युअल माहिती मिळावी यासाठी तयार केले आहे.",

  "ANIMATED TUTORIALS": "अॅनिमेटेड ट्यूटोरियल",

  "Watch AEPS tutorial": "AEPS ट्यूटोरियल पहा",

  "AEPS Tutorial": "AEPS ट्यूटोरियल",

  "MANTHAN PAY": "मंथन पे",

  "Manthan Pay": "मंथन पे",

  Close: "बंद करा",

  AEPS: "AEPS",
  BBPS: "BBPS",
  "Micro ATM": "मायक्रो ATM",

  "Money Transfer": "मनी ट्रान्सफर",
  Recharge: "रिचार्ज",
  Insurance: "विमा",
  Travel: "प्रवास",
  "Aadhaar Banking": "आधार बँकिंग",
  "Bill Payments": "बिल पेमेंट",

  "Why Manthan Pay": "Manthan Pay का?",
  "Our Services": "आमच्या सेवा",
  "Our Presence": "आमची उपस्थिती",
  "Partner with Manthan Pay": "Manthan Pay सोबत भागीदार व्हा",
};
const te = {
  Services: "సేవలు",
  Ecosystem: "ఎకోసిస్టమ్",
  States: "రాష్ట్రాలు",
  "Partner with us": "మాతో భాగస్వామ్యం చేయండి",
  "Log in": "లాగిన్",
  "Sign up": "సైన్ అప్",
  "Log out": "లాగ్ అవుట్",
  "Open free account": "ఉచిత ఖాతాను తెరవండి",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "రిచార్జ్, బిల్ చెల్లింపులు, ఆధార్ బ్యాంకింగ్, డబ్బు బదిలీ, ప్రయాణం మరియు బీమా — భారతదేశంలోని కస్టమర్లు మరియు రిటైలర్ల కోసం సులభమైన డిజిటల్ సేవలు.",

  "Everything your customers ask for": "మీ కస్టమర్లు కోరుకునే ప్రతిదీ",

  "The Manthan ecosystem": "మంథన్ ఎకోసిస్టమ్",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "రోజువారీ చెల్లింపులు మరియు బిల్ సేవల నుండి సహాయక ఆర్థిక సేవల వరకు, Manthan Pay స్థానిక వ్యాపారాన్ని పూర్తి డిజిటల్ సేవా కేంద్రంగా మార్చడంలో సహాయపడుతుంది.",

  "Understand the service before you serve":
    "సేవ అందించే ముందు సేవను అర్థం చేసుకోండి",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "పూర్తి ప్రక్రియను చూడటానికి ఒక సేవను ఎంచుకోండి. ప్రతి ట్యుటోరియల్ రిటైలర్లు, డిస్ట్రిబ్యూటర్లు మరియు త్వరితమైన దృశ్య వివరణ కోరుకునే కస్టమర్ల కోసం రూపొందించబడింది.",

  "ANIMATED TUTORIALS": "యానిమేటెడ్ ట్యుటోరియల్స్",

  "Watch AEPS tutorial": "AEPS ట్యుటోరియల్ చూడండి",

  "AEPS Tutorial": "AEPS ట్యుటోరియల్",

  "MANTHAN PAY": "మంథన్ పే",

  "Manthan Pay": "మంథన్ పే",

  Close: "మూసివేయండి",

  AEPS: "AEPS",
  BBPS: "BBPS",
  "Micro ATM": "మైక్రో ATM",

  "Money Transfer": "మనీ ట్రాన్స్‌ఫర్",
  Recharge: "రిచార్జ్",
  Insurance: "బీమా",
  Travel: "ప్రయాణం",
  "Aadhaar Banking": "ఆధార్ బ్యాంకింగ్",
  "Bill Payments": "బిల్ చెల్లింపులు",

  "Why Manthan Pay": "Manthan Pay ఎందుకు?",
  "Our Services": "మా సేవలు",
  "Our Presence": "మా ఉనికి",
  "Partner with Manthan Pay": "Manthan Payతో భాగస్వామ్యం చేయండి",
};
const ta = {
  Services: "சேவைகள்",
  Ecosystem: "சுற்றுச்சூழல் அமைப்பு",
  States: "மாநிலங்கள்",
  "Partner with us": "எங்களுடன் கூட்டாளராகுங்கள்",
  "Log in": "உள்நுழைக",
  "Sign up": "பதிவு செய்க",
  "Log out": "வெளியேறு",
  "Open free account": "இலவச கணக்கைத் திறக்கவும்",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "ரீசார்ஜ், பில் கட்டணங்கள், ஆதார் வங்கி சேவை, பணப் பரிமாற்றம், பயணம் மற்றும் காப்பீடு — இந்தியா முழுவதும் உள்ள வாடிக்கையாளர்கள் மற்றும் சில்லறை விற்பனையாளர்களுக்கான எளிய டிஜிட்டல் சேவைகள்.",

  "Everything your customers ask for":
    "உங்கள் வாடிக்கையாளர்கள் கேட்கும் அனைத்தும்",

  "The Manthan ecosystem": "மந்தன் சுற்றுச்சூழல் அமைப்பு",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "தினசரி பணப்பரிவர்த்தனைகள் மற்றும் பில் சேவைகள் முதல் உதவி நிதிச் சேவைகள் வரை, Manthan Pay ஒரு உள்ளூர் வணிகத்தை முழுமையான டிஜிட்டல் சேவை மையமாக மாற்ற உதவுகிறது.",

  "Understand the service before you serve":
    "சேவை வழங்கும் முன் சேவையைப் புரிந்துகொள்ளுங்கள்",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "முழுமையான செயல்முறையைப் பார்க்க ஒரு சேவையைத் தேர்ந்தெடுக்கவும். ஒவ்வொரு டுடோரியலும் சில்லறை விற்பனையாளர்கள், விநியோகஸ்தர்கள் மற்றும் விரைவான காட்சி விளக்கத்தை விரும்பும் வாடிக்கையாளர்களுக்காக வடிவமைக்கப்பட்டுள்ளது.",

  "ANIMATED TUTORIALS": "அனிமேஷன் டுடோரியல்கள்",

  "Watch AEPS tutorial": "AEPS டுடோரியலைப் பார்க்கவும்",

  "AEPS Tutorial": "AEPS டுடோரியல்",

  "MANTHAN PAY": "மந்தன் பே",

  "Manthan Pay": "மந்தன் பே",

  Close: "மூடுக",

  AEPS: "AEPS",
  BBPS: "BBPS",
  "Micro ATM": "மைக்ரோ ATM",

  "Money Transfer": "பணப் பரிமாற்றம்",
  Recharge: "ரீசார்ஜ்",
  Insurance: "காப்பீடு",
  Travel: "பயணம்",
  "Aadhaar Banking": "ஆதார் வங்கி சேவை",
  "Bill Payments": "பில் கட்டணங்கள்",

  "Why Manthan Pay": "ஏன் Manthan Pay?",
  "Our Services": "எங்கள் சேவைகள்",
  "Our Presence": "எங்கள் இருப்பு",
  "Partner with Manthan Pay": "Manthan Pay உடன் கூட்டாளராகுங்கள்",
};
const gu = {
  Services: "સેવાઓ",
  Ecosystem: "ઇકોસિસ્ટમ",
  States: "રાજ્યો",
  "Partner with us": "અમારી સાથે ભાગીદાર બનો",
  "Log in": "લૉગ ઇન",
  "Sign up": "સાઇન અપ",
  "Log out": "લૉગ આઉટ",
  "Open free account": "મફત ખાતું ખોલો",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "રિચાર્જ, બિલ ચુકવણી, આધાર બેંકિંગ, નાણાં ટ્રાન્સફર, મુસાફરી અને વીમો — સમગ્ર ભારતના ગ્રાહકો અને રિટેલર્સ માટે સરળ ડિજિટલ સેવાઓ.",

  "Everything your customers ask for": "તમારા ગ્રાહકોને જોઈતી દરેક વસ્તુ",

  "The Manthan ecosystem": "મંથન ઇકોસિસ્ટમ",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "રોજિંદા પેમેન્ટ અને બિલ સેવાઓથી લઈને સહાયક નાણાકીય સેવાઓ સુધી, Manthan Pay સ્થાનિક વ્યવસાયને સંપૂર્ણ ડિજિટલ સેવા કેન્દ્રમાં બદલવામાં મદદ કરે છે.",

  "Understand the service before you serve": "સેવા આપતા પહેલા સેવા સમજો",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "સંપૂર્ણ પ્રક્રિયા જોવા માટે સેવા પસંદ કરો. દરેક ટ્યુટોરિયલ રિટેલર્સ, ડિસ્ટ્રિબ્યુટર્સ અને ઝડપી વિઝ્યુઅલ સમજ ઇચ્છતા ગ્રાહકો માટે તૈયાર કરવામાં આવ્યું છે.",

  "ANIMATED TUTORIALS": "એનિમેટેડ ટ્યુટોરિયલ્સ",

  "Watch AEPS tutorial": "AEPS ટ્યુટોરિયલ જુઓ",

  "AEPS Tutorial": "AEPS ટ્યુટોરિયલ",

  "MANTHAN PAY": "મંથન પે",

  "Manthan Pay": "મંથન પે",

  Close: "બંધ કરો",

  AEPS: "AEPS",
  BBPS: "BBPS",
  "Micro ATM": "માઇક્રો ATM",

  "Money Transfer": "મની ટ્રાન્સફર",
  Recharge: "રિચાર્જ",
  Insurance: "વીમો",
  Travel: "મુસાફરી",
  "Aadhaar Banking": "આધાર બેંકિંગ",
  "Bill Payments": "બિલ ચુકવણી",

  "Why Manthan Pay": "Manthan Pay શા માટે?",
  "Our Services": "અમારી સેવાઓ",
  "Our Presence": "અમારી હાજરી",
  "Partner with Manthan Pay": "Manthan Pay સાથે ભાગીદાર બનો",
};
const kn = {
  Services: "ಸೇವೆಗಳು",
  Ecosystem: "ಪರಿಸರ ವ್ಯವಸ್ಥೆ",
  States: "ರಾಜ್ಯಗಳು",
  "Partner with us": "ನಮ್ಮೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಿ",
  "Log in": "ಲಾಗಿನ್",
  "Sign up": "ಸೈನ್ ಅಪ್",
  "Log out": "ಲಾಗ್ ಔಟ್",
  "Open free account": "ಉಚಿತ ಖಾತೆ ತೆರೆಯಿರಿ",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "ರೀಚಾರ್ಜ್, ಬಿಲ್ ಪಾವತಿಗಳು, ಆಧಾರ್ ಬ್ಯಾಂಕಿಂಗ್, ಹಣ ವರ್ಗಾವಣೆ, ಪ್ರಯಾಣ ಮತ್ತು ವಿಮೆ — ಭಾರತದಾದ್ಯಂತ ಗ್ರಾಹಕರು ಮತ್ತು ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳಿಗಾಗಿ ಸರಳ ಡಿಜಿಟಲ್ ಸೇವೆಗಳು.",

  "Everything your customers ask for": "ನಿಮ್ಮ ಗ್ರಾಹಕರು ಕೇಳುವ ಎಲ್ಲವೂ",

  "The Manthan ecosystem": "ಮಂಥನ್ ಪರಿಸರ ವ್ಯವಸ್ಥೆ",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "ದೈನಂದಿನ ಪಾವತಿಗಳು ಮತ್ತು ಬಿಲ್ ಸೇವೆಗಳಿಂದ ಸಹಾಯಕ ಹಣಕಾಸು ಸೇವೆಗಳವರೆಗೆ, Manthan Pay ಸ್ಥಳೀಯ ವ್ಯವಹಾರವನ್ನು ಸಂಪೂರ್ಣ ಡಿಜಿಟಲ್ ಸೇವಾ ಕೇಂದ್ರವಾಗಿ ಪರಿವರ್ತಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",

  "Understand the service before you serve":
    "ಸೇವೆ ನೀಡುವ ಮೊದಲು ಸೇವೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "ಸಂಪೂರ್ಣ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನೋಡಲು ಒಂದು ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಪ್ರತಿಯೊಂದು ಟ್ಯುಟೋರಿಯಲ್ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು, ವಿತರಕರು ಮತ್ತು ತ್ವರಿತ ದೃಶ್ಯ ವಿವರಣೆಯನ್ನು ಬಯಸುವ ಗ್ರಾಹಕರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",

  "ANIMATED TUTORIALS": "ಅನಿಮೇಟೆಡ್ ಟ್ಯುಟೋರಿಯಲ್‌ಗಳು",

  "Watch AEPS tutorial": "AEPS ಟ್ಯುಟೋರಿಯಲ್ ವೀಕ್ಷಿಸಿ",

  "AEPS Tutorial": "AEPS ಟ್ಯುಟೋರಿಯಲ್",

  "MANTHAN PAY": "ಮಂಥನ್ ಪೇ",

  "Manthan Pay": "ಮಂಥನ್ ಪೇ",

  Close: "ಮುಚ್ಚಿ",

  AEPS: "AEPS",
  BBPS: "BBPS",
  "Micro ATM": "ಮೈಕ್ರೋ ATM",

  "Money Transfer": "ಹಣ ವರ್ಗಾವಣೆ",
  Recharge: "ರೀಚಾರ್ಜ್",
  Insurance: "ವಿಮೆ",
  Travel: "ಪ್ರಯಾಣ",
  "Aadhaar Banking": "ಆಧಾರ್ ಬ್ಯಾಂಕಿಂಗ್",
  "Bill Payments": "ಬಿಲ್ ಪಾವತಿಗಳು",

  "Why Manthan Pay": "Manthan Pay ಏಕೆ?",
  "Our Services": "ನಮ್ಮ ಸೇವೆಗಳು",
  "Our Presence": "ನಮ್ಮ ಉಪಸ್ಥಿತಿ",
  "Partner with Manthan Pay": "Manthan Pay ಜೊತೆ ಪಾಲುದಾರರಾಗಿ",
};
const ml = {
  Services: "സേവനങ്ങൾ",
  Ecosystem: "ഇക്കോസിസ്റ്റം",
  States: "സംസ്ഥാനങ്ങൾ",
  "Partner with us": "ഞങ്ങളോടൊപ്പം പങ്കാളിയാകൂ",
  "Log in": "ലോഗിൻ",
  "Sign up": "സൈൻ അപ്പ്",
  "Log out": "ലോഗ് ഔട്ട്",
  "Open free account": "സൗജന്യ അക്കൗണ്ട് തുറക്കുക",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "റീചാർജ്, ബിൽ പേയ്‌മെന്റുകൾ, ആധാർ ബാങ്കിംഗ്, പണം കൈമാറ്റം, യാത്ര, ഇൻഷുറൻസ് — ഇന്ത്യയിലുടനീളമുള്ള ഉപഭോക്താക്കൾക്കും റീട്ടെയിലർമാർക്കുമായി ലളിതമായ ഡിജിറ്റൽ സേവനങ്ങൾ.",

  "Everything your customers ask for":
    "നിങ്ങളുടെ ഉപഭോക്താക്കൾ ആവശ്യപ്പെടുന്നതെല്ലാം",

  "The Manthan ecosystem": "മന്തൻ ഇക്കോസിസ്റ്റം",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "ദൈനംദിന പേയ്‌മെന്റുകളും ബിൽ സേവനങ്ങളും മുതൽ സഹായകമായ സാമ്പത്തിക സേവനങ്ങൾ വരെ, Manthan Pay ഒരു പ്രാദേശിക ബിസിനസിനെ സമ്പൂർണ്ണ ഡിജിറ്റൽ സേവന കേന്ദ്രമാക്കി മാറ്റാൻ സഹായിക്കുന്നു.",

  "Understand the service before you serve":
    "സേവനം നൽകുന്നതിന് മുമ്പ് സേവനം മനസ്സിലാക്കുക",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "പൂർണ്ണമായ പ്രവർത്തനരീതി കാണാൻ ഒരു സേവനം തിരഞ്ഞെടുക്കുക. റീട്ടെയിലർമാർക്കും വിതരണക്കാർക്കും വേഗത്തിലുള്ള ദൃശ്യ വിശദീകരണം ആഗ്രഹിക്കുന്ന ഉപഭോക്താക്കൾക്കുമായി ഓരോ ട്യൂട്ടോറിയലും തയ്യാറാക്കിയതാണ്.",

  "ANIMATED TUTORIALS": "ആനിമേറ്റഡ് ട്യൂട്ടോറിയലുകൾ",

  "Watch AEPS tutorial": "AEPS ട്യൂട്ടോറിയൽ കാണുക",

  "AEPS Tutorial": "AEPS ട്യൂട്ടോറിയൽ",

  "MANTHAN PAY": "മന്തൻ പേ",

  "Manthan Pay": "മന്തൻ പേ",

  Close: "അടയ്ക്കുക",

  AEPS: "AEPS",
  BBPS: "BBPS",
  "Micro ATM": "മൈക്രോ ATM",

  "Money Transfer": "പണം കൈമാറ്റം",
  Recharge: "റീചാർജ്",
  Insurance: "ഇൻഷുറൻസ്",
  Travel: "യാത്ര",
  "Aadhaar Banking": "ആധാർ ബാങ്കിംഗ്",
  "Bill Payments": "ബിൽ പേയ്‌മെന്റുകൾ",

  "Why Manthan Pay": "എന്തുകൊണ്ട് Manthan Pay?",
  "Our Services": "ഞങ്ങളുടെ സേവനങ്ങൾ",
  "Our Presence": "ഞങ്ങളുടെ സാന്നിധ്യം",
  "Partner with Manthan Pay": "Manthan Pay-യുമായി പങ്കാളിയാകൂ",
};
const pa = {
  Services: "ਸੇਵਾਵਾਂ",
  Ecosystem: "ਈਕੋਸਿਸਟਮ",
  States: "ਰਾਜ",
  "Partner with us": "ਸਾਡੇ ਨਾਲ ਭਾਈਵਾਲ ਬਣੋ",
  "Log in": "ਲੌਗ ਇਨ",
  "Sign up": "ਸਾਈਨ ਅੱਪ",
  "Log out": "ਲੌਗ ਆਊਟ",
  "Open free account": "ਮੁਫ਼ਤ ਖਾਤਾ ਖੋਲ੍ਹੋ",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "ਰੀਚਾਰਜ, ਬਿੱਲ ਭੁਗਤਾਨ, ਆਧਾਰ ਬੈਂਕਿੰਗ, ਪੈਸੇ ਟ੍ਰਾਂਸਫਰ, ਯਾਤਰਾ ਅਤੇ ਬੀਮਾ — ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਗਾਹਕਾਂ ਅਤੇ ਰਿਟੇਲਰਾਂ ਲਈ ਸਧਾਰਨ ਡਿਜੀਟਲ ਸੇਵਾਵਾਂ।",

  "Everything your customers ask for":
    "ਤੁਹਾਡੇ ਗਾਹਕਾਂ ਨੂੰ ਲੋੜੀਂਦੀ ਹਰ ਚੀਜ਼",

  "The Manthan ecosystem":
    "ਮੰਥਨ ਈਕੋਸਿਸਟਮ",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "ਰੋਜ਼ਾਨਾ ਭੁਗਤਾਨ ਅਤੇ ਬਿੱਲ ਸੇਵਾਵਾਂ ਤੋਂ ਲੈ ਕੇ ਸਹਾਇਕ ਵਿੱਤੀ ਸੇਵਾਵਾਂ ਤੱਕ, Manthan Pay ਸਥਾਨਕ ਕਾਰੋਬਾਰ ਨੂੰ ਇੱਕ ਪੂਰੇ ਡਿਜੀਟਲ ਸੇਵਾ ਕੇਂਦਰ ਵਿੱਚ ਬਦਲਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",

  "Understand the service before you serve":
    "ਸੇਵਾ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਸੇਵਾ ਨੂੰ ਸਮਝੋ",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "ਪੂਰੀ ਪ੍ਰਕਿਰਿਆ ਦੇਖਣ ਲਈ ਇੱਕ ਸੇਵਾ ਚੁਣੋ। ਹਰ ਟਿਊਟੋਰਿਅਲ ਰਿਟੇਲਰਾਂ, ਡਿਸਟ੍ਰੀਬਿਊਟਰਾਂ ਅਤੇ ਗਾਹਕਾਂ ਲਈ ਤੇਜ਼ ਵਿਜ਼ੂਅਲ ਜਾਣਕਾਰੀ ਦੇਣ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ।",

  "ANIMATED TUTORIALS":
    "ਐਨੀਮੇਟਡ ਟਿਊਟੋਰਿਅਲ",

  "Watch AEPS tutorial":
    "AEPS ਟਿਊਟੋਰਿਅਲ ਦੇਖੋ",

  "AEPS Tutorial":
    "AEPS ਟਿਊਟੋਰਿਅਲ",

  "MANTHAN PAY":
    "ਮੰਥਨ ਪੇ",

  "Manthan Pay":
    "ਮੰਥਨ ਪੇ",

  Close: "ਬੰਦ ਕਰੋ",

  AEPS: "AEPS",
  BBPS: "BBPS",
  "Micro ATM": "ਮਾਈਕ੍ਰੋ ATM",

  "Money Transfer": "ਪੈਸੇ ਟ੍ਰਾਂਸਫਰ",
  Recharge: "ਰੀਚਾਰਜ",
  Insurance: "ਬੀਮਾ",
  Travel: "ਯਾਤਰਾ",
  "Aadhaar Banking": "ਆਧਾਰ ਬੈਂਕਿੰਗ",
  "Bill Payments": "ਬਿੱਲ ਭੁਗਤਾਨ",

  "Why Manthan Pay": "Manthan Pay ਕਿਉਂ?",
  "Our Services": "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ",
  "Our Presence": "ਸਾਡੀ ਮੌਜੂਦਗੀ",
  "Partner with Manthan Pay": "Manthan Pay ਨਾਲ ਭਾਈਵਾਲ ਬਣੋ",
};
const or = {
  Services: "ସେବାଗୁଡ଼ିକ",
  Ecosystem: "ଇକୋସିଷ୍ଟମ",
  States: "ରାଜ୍ୟଗୁଡ଼ିକ",
  "Partner with us": "ଆମ ସହିତ ଭାଗୀଦାର ହୁଅନ୍ତୁ",
  "Log in": "ଲଗ୍ ଇନ୍",
  "Sign up": "ସାଇନ୍ ଅପ୍",
  "Log out": "ଲଗ୍ ଆଉଟ୍",
  "Open free account": "ମାଗଣା ଆକାଉଣ୍ଟ ଖୋଲନ୍ତୁ",

  "Recharge, bill payments, Aadhaar banking, money transfer, travel and insurance — simple digital services for customers and retailers across India.":
    "ରିଚାର୍ଜ, ବିଲ୍ ପେମେଣ୍ଟ, ଆଧାର ବ୍ୟାଙ୍କିଂ, ଟଙ୍କା ସ୍ଥାନାନ୍ତରଣ, ଯାତ୍ରା ଏବଂ ବୀମା — ସମଗ୍ର ଭାରତର ଗ୍ରାହକ ଏବଂ ରିଟେଲରମାନଙ୍କ ପାଇଁ ସରଳ ଡିଜିଟାଲ୍ ସେବା।",

  "Everything your customers ask for":
    "ଆପଣଙ୍କ ଗ୍ରାହକମାନେ ଆବଶ୍ୟକ କରୁଥିବା ସବୁକିଛି",

  "The Manthan ecosystem":
    "ମନ୍ଥନ ଇକୋସିଷ୍ଟମ",

  "From everyday payments and bill services to assisted financial services, Manthan Pay helps turn a local business into a complete digital service point.":
    "ଦୈନନ୍ଦିନ ପେମେଣ୍ଟ ଏବଂ ବିଲ୍ ସେବାଠାରୁ ସହାୟକ ଆର୍ଥିକ ସେବା ପର୍ଯ୍ୟନ୍ତ, Manthan Pay ଏକ ସ୍ଥାନୀୟ ବ୍ୟବସାୟକୁ ସମ୍ପୂର୍ଣ୍ଣ ଡିଜିଟାଲ୍ ସେବା କେନ୍ଦ୍ରରେ ପରିଣତ କରିବାରେ ସାହାଯ୍ୟ କରେ।",

  "Understand the service before you serve":
    "ସେବା ଦେବା ପୂର୍ବରୁ ସେବାକୁ ବୁଝନ୍ତୁ",

  "Pick a service to see its complete flow. Every tutorial is designed for retailers, distributors and customers who want a quick visual explanation.":
    "ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରକ୍ରିୟା ଦେଖିବା ପାଇଁ ଏକ ସେବା ବାଛନ୍ତୁ। ପ୍ରତ୍ୟେକ ଟ୍ୟୁଟୋରିଆଲ୍ ରିଟେଲର, ଡିଷ୍ଟ୍ରିବ୍ୟୁଟର ଏବଂ ଶୀଘ୍ର ଭିଜୁଆଲ୍ ବ୍ୟାଖ୍ୟା ଚାହୁଁଥିବା ଗ୍ରାହକଙ୍କ ପାଇଁ ପ୍ରସ୍ତୁତ କରାଯାଇଛି।",

  "ANIMATED TUTORIALS":
    "ଆନିମେଟେଡ୍ ଟ୍ୟୁଟୋରିଆଲ୍",

  "Watch AEPS tutorial":
    "AEPS ଟ୍ୟୁଟୋରିଆଲ୍ ଦେଖନ୍ତୁ",

  "AEPS Tutorial":
    "AEPS ଟ୍ୟୁଟୋରିଆଲ୍",

  "MANTHAN PAY":
    "ମନ୍ଥନ ପେ",

  "Manthan Pay":
    "ମନ୍ଥନ ପେ",

  Close: "ବନ୍ଦ କରନ୍ତୁ",

  AEPS: "AEPS",
  BBPS: "BBPS",
  "Micro ATM": "ମାଇକ୍ରୋ ATM",

  "Money Transfer": "ଟଙ୍କା ସ୍ଥାନାନ୍ତରଣ",
  Recharge: "ରିଚାର୍ଜ",
  Insurance: "ବୀମା",
  Travel: "ଯାତ୍ରା",
  "Aadhaar Banking": "ଆଧାର ବ୍ୟାଙ୍କିଂ",
  "Bill Payments": "ବିଲ୍ ପେମେଣ୍ଟ",

  "Why Manthan Pay": "Manthan Pay କାହିଁକି?",
  "Our Services": "ଆମ ସେବାଗୁଡ଼ିକ",
  "Our Presence": "ଆମର ଉପସ୍ଥିତି",
  "Partner with Manthan Pay": "Manthan Pay ସହିତ ଭାଗୀଦାର ହୁଅନ୍ତୁ",
};
// ======================================================
// ALL LANGUAGES
// ======================================================

const translations = {
  en,
  hi,
  bn,
  mr,
  te,
  ta,
  gu,
  kn,
  ml,
  pa,
  or,
};
const Ctx = createContext({
  t: (s) => s,
  lang: "en",
  setLang: () => {},
});
export const useT = () => useContext(Ctx);
export function LangProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("mp_lang") || "en",
  );

  useEffect(() => {
    localStorage.setItem("mp_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => {
    return translations[lang]?.[key] || translations.en?.[key] || key;
  };

  return (
    <Ctx.Provider
      value={{
        t,
        lang,
        setLang,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
