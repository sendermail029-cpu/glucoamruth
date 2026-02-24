"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";

// Types and Reviews remain same as your existing code...
type AlertType = "success" | "error" | null;
type Review = { quote: string; text: string; meta: string; image?: string; };

const REVIEWS: Review[] = [
  {
    quote: "నా షుగర్ లెవల్స్ 280 నుండి 130 కి తగ్గాయి.",
    text: "గ్లూకోఅమృత్ వాడటం మొదలుపెట్టిన 10 రోజుల్లోనే మంచి మార్పు కనిపించింది. అలసట కూడా తగ్గింది.",
    meta: "కె. లింగయ్య | కడప, ఆంధ్రప్రదేశ్ | ✅ Verified Buyer",
    image: "/report.jpeg",
  },
  {
    quote: "రాత్రి తరచుగా మూత్రం వెళ్లే సమస్య తగ్గింది.",
    text: "ఇంతకుముందు రాత్రి 4-5 సార్లు లేవాల్సి వచ్చేది, ఇప్పుడు హాయిగా నిద్ర పడుతోంది. ధన్యవాదాలు.",
    meta: "మోహన్ రెడ్డి | వరంగల్, తెలంగాణ | ✅ Verified Buyer",
  },
  {
    quote: "కాళ్ల నొప్పి, నీరసం చాలా వరకు తగ్గాయి.",
    text: "షుగర్ వల్ల వచ్చే నీరసం పోయి బాడీ చాలా యాక్టివ్‌గా ఉంది. ఎటువంటి సైడ్ ఎఫెక్ట్స్ లేవు.",
    meta: "శివకృష్ణ | గుంటూరు, ఆంధ్రప్రదేశ్ | ✅ Verified Buyer",
  },
  {
    quote: "HbA1c రిపోర్ట్‌లో స్పష్టమైన మెరుగుదల.",
    text: "డాక్టర్ కూడా ఆశ్చర్యపోయారు. మూడు నెలల నుండి వాడుతున్నాను, రిజల్ట్స్ అద్భుతం.",
    meta: "రాజేష్ వి | ఖమ్మం, తెలంగాణ | ✅ Verified Buyer",
  },
  {
    quote: "ನನ್ನ ಸಕ್ಕರೆ ಮಟ್ಟ ಈಗ ನಿಯಂತ್ರಣದಲ್ಲಿದೆ.",
    text: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಕೆಲಸ ಮಾಡುವ ನನಗೆ ಈ ಆಯುರ್ವೇದ ಚೂರ್ಣ ತುಂಬಾ ಸಹಾಯ ಮಾಡಿದೆ.",
    meta: "Suresh Gowda | Bangalore, Karnataka | ✅ Verified Buyer",
  },
  {
    quote: "சர்க்கரை நோய் கட்டுப்பாட்டுக்கு சிறந்த மருந்து.",
    text: "இயற்கையான முறையில் சர்க்கரை அளவை குறைக்க இது உதவுகிறது. நல்ல முன்னேற்றம் தெரிகிறது.",
    meta: "Anand Kumar | Chennai, Tamil Nadu | ✅ Verified Buyer",
  },
  {
    quote: "Best natural support for managing my blood sugar levels!",
    text: "I was looking for an ayurvedic solution in Hyderabad and GlucoAmruth really delivered results in just 2 weeks.",
    meta: "Srinivas Rao | Hyderabad, Telangana | ✅ Verified Buyer",
  },
{
    quote: "కాళ్ల నొప్పులు మరియు తగ్గని గాయాలకు ఇది ఒక అద్భుతమైన పరిష్కారం!",
    text: "నేను వైజాగ్‌లో ఉంటున్నాను. నాకు షుగర్ వల్ల కాళ్ల నొప్పులు మరియు చిన్న గాయాలు అయినా అస్సలు తగ్గేవి కావు. కానీ గ్లూకోఅమృత్ వాడటం మొదలుపెట్టాక గాయాలు త్వరగా మానిపోయాయి, నీరసం కూడా తగ్గింది. ఖచ్చితంగా వాడవచ్చు!",
    meta: "P. Venkat | Vizag, Andhra Pradesh | ✅ Verified Buyer",
  },
];

export default function Home() {
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [alertType, setAlertType] = useState<AlertType>(null);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 0 ? 15 * 60 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return (
    <main className="min-h-screen bg-[#fcfcfc] pb-28 text-[#1f2a44] sm:pb-24">
      {/* --- TOP NAV (UNTOUCHED) --- */}
      <section className="sticky top-0 z-50 border-b border-black bg-black px-3 py-2 text-center">
        <p className="text-sm font-extrabold tracking-wide text-red-500 sm:text-base">
          ⚠️ స్టాక్: కేవలం 15 ప్యాకెట్లు మాత్రమే ఉన్నాయి
        </p>
        <p className="mt-1 text-xl font-black text-red-500">
          ఆఫర్ ముగియడానికి: {minutes}:{seconds}
        </p>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        
        {/* 1. POWERFUL TITLE */}
        <div className="text-center">
          <h1 className="text-4xl font-black leading-tight text-[#1a2b49] sm:text-6xl">
            షుగర్ నియంత్రణలో తిరుగులేని ఆయుర్వేద శక్తి! <br/> 
            <span className="text-[#c23616]">గ్లూకోఅమృత్ !</span>
          </h1>
          <p className="mt-4 text-xl font-bold text-[#b96b2d]">
            HBA1C స్థాయిలను సహజంగా తగ్గించే అద్భుత ఫార్ములా
          </p>
        </div>

        {/* 2. PRODUCT IMAGE */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl border-4 border-[#f8f2e7]">
            <Image
              src="/gluco.png"
              alt="గ్లూకోఅమృత్ ఉత్పత్తి చిత్రం"
              width={900}
              height={1200}
              priority
              className="h-auto w-full object-contain p-4"
            />
          </div>
        </div>

        {/* 3. PRICING & 1+1 OFFER */}
        <div className="mt-10 text-center bg-[#fff9e6] p-8 rounded-3xl border-2 border-dashed border-[#b96b2d]">
          <p className="text-2xl font-bold text-gray-500 line-through">MRP: ₹5,998 (2 Products)</p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <span className="text-5xl font-black text-[#c23616] sm:text-7xl">₹2,999/-</span>
          </div>
          <a
            href="https://wa.me/917842121315?text=%E0%B0%A8%E0%B0%BE%E0%B0%95%E0%B1%81%20%E0%B0%97%E0%B1%8D%E0%B0%B2%E0%B1%82%E0%B0%95%E0%B1%8B%E0%B0%85%E0%B0%AE%E0%B1%83%E0%B0%A4%E0%B1%8D%20(1%2B1%20%E0%B0%86%E0%B0%AB%E0%B0%B0%E0%B1%8D)%20%E0%B0%86%E0%B0%B0%E0%B1%8D%E0%B0%A1%E0%B0%B0%E0%B1%8D%20%E0%B0%9A%E0%B1%87%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B0%BF."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-[#0e5a61] px-8 py-3 text-2xl font-black text-white animate-pulse"
          >
            BUY 1 GET 1 FREE (1+1 OFFER)
          </a>
          <p className="mt-3 font-bold text-[#8f4b00]">ఒకటి కొంటే ఒకటి ఉచితం - కేవలం ఈరోజు మాత్రమే!</p>
        </div>

        {/* 4. INGREDIENTS SECTION (Extracted from your photo) */}
        <section className="mt-16">
          <h2 className="text-3xl font-black text-center text-[#1a2b49] mb-8">
            15+ శక్తివంతమైన వనమూలికల మిశ్రమం
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "గుర్మార్ (Gurmar)", "నింబ (Neem)", "కారవేల్లక (Bitter Gourd)", 
              "మేషశృంగి (Gudmar)", "త్రిఫల (Triphala)", "గుడుచి (Tinospora)",
              "యష్టిమధు (Licorice)", "శిలాజిత్ (Shilajit)", "వంగ భస్మ",
              "యశద భస్మ", "లౌహ భస్మ", "కర్బోజర్ (Salacia)",
              "జామున్ (Black Plum)", "మెంతి (Fenugreek)", "అశ్వగంధ (Ashwagandha)"
            ].map((item) => (
              <div key={item} className="bg-white border border-[#e2e8f0] p-3 rounded-xl shadow-sm flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span>
                <span className="font-bold text-[#2d3748]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. HOW TO USE */}
        <div className="mt-12 bg-[#1a2b49] text-white p-8 rounded-3xl text-center">
          <h3 className="text-2xl font-black mb-4 underline decoration-[#b96b2d] underline-offset-8">ఎలా వాడాలి? (Usage Instructions)</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-xl">
            <div className="bg-white/10 p-4 rounded-2xl">
              <p className="font-bold">ఉదయం (Morning)</p>
              <p className="text-sm mt-1">అల్పాహారానికి ముందు 1 క్యాప్సూల్</p>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl">
              <p className="font-bold">రాత్రి (Night)</p>
              <p className="text-sm mt-1">రాత్రి భోజనానికి ముందు 1 క్యాప్సూల్</p>
            </div>
          </div>
        </div>

       {/* 6. SOLUTIONS - UNIQUE MODERN GRID */}
<section className="mt-16 px-4">
  <div className="text-center">
    <h2 className="text-3xl font-black text-[#1a2b49] leading-tight">
      షుగర్ వల్ల కలిగే <span className="text-[#c23616]">తీవ్రమైన సమస్యలు</span>
    </h2>
    <p className="mt-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
      వీటన్నింటికీ ఒకే పరిష్కారం: గ్లూకోఅమృత్
    </p>
  </div>

  {/* Circular Problem Grid */}
  <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
    {[
      { img: "/leg.jpeg", title: "కాళ్ల నొప్పులు", sub: "నరాల బలహీనత" },
      { img: "/urine1.jpeg", title: "తరచుగా మూత్రం", sub: "రాత్రి సమయాల్లో" },
      { img: "/eye.jpg", title: "కంటి చూపు", sub: "మందగించడం" },
         { img: "/insulin.webp", title: "ఇన్సులిన్  పెరగడం ", sub: "అకస్మాత్తుగా" },
      { img: "/thirsty.jpeg", title: "అధిక దప్పిక", sub: "నోరు ఎండిపోవడం" },
      { img: "/heal.jpeg", title: "మొండి గాయాల", sub: "నివారణ" },
   
      
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center group">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-110">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="mt-3 text-center">
          <p className="text-base font-black text-[#1a2b49]">{item.title}</p>
          <p className="text-[10px] font-bold text-[#c23616] uppercase">{item.sub}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Trust Quote Box with New Style */}
 {/* ENHANCED SOLUTION SECTION */}
<section className="mt-16 px-4">
  <div className="text-center">
    <h2 className="text-3xl font-black text-[#1a2b49] leading-tight">
      కేవలం షుగర్ తగ్గించడమే కాదు.. <br/> 
      <span className="text-[#0e5a61]">అన్ని సమస్యలకు ఒకే పరిష్కారం!</span>
    </h2>
  </div>

  {/* Comprehensive Solution Box */}
  <div className="relative mt-10 overflow-hidden rounded-[3rem] bg-[#1a2b49] p-8 text-white shadow-2xl">
    {/* Decorative Background Element */}
    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
    
    <p className="relative z-10 text-center text-xl font-medium leading-relaxed italic border-b border-white/10 pb-6">
      "గ్లూకోఅమృత్ 15 శక్తివంతమైన వనమూలికల కలయిక. ఇది కేవలం చక్కెరను తగ్గించడమే కాదు, 
      <span className="mx-1 font-black text-[#ffad66]">నరాల బలహీనత మరియు నీరసాన్ని</span> 
      మొదటి 15 రోజుల్లోనే తగ్గిస్తుంది."
    </p>

    {/* Specific Solutions for Every Problem */}
    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffad66] text-[#1a2b49] font-black text-xl shadow-lg">1</div>
        <div>
          <p className="text-lg font-black text-[#ffad66]">మొండి గాయాల నివారణ</p>
          <p className="text-sm opacity-90 mt-1 font-medium leading-relaxed">
            రక్త ప్రసరణను మెరుగుపరిచి, షుగర్ వల్ల వచ్చే మొండి పుండ్లు మరియు తగ్గని గాయాలను త్వరగా మానేలా చేస్తుంది.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffad66] text-[#1a2b49] font-black text-xl shadow-lg">2</div>
        <div>
          <p className="text-lg font-black text-[#ffad66]">నరాల శక్తి & తిమ్మిర్ల ఉపశమనం</p>
          <p className="text-sm opacity-90 mt-1 font-medium leading-relaxed">
            కాళ్ల తిమ్మిర్లు, మంటలు మరియు నరాల బలహీనతను మొదటి 2 వారాల్లోనే అదుపులోకి తెస్తుంది.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffad66] text-[#1a2b49] font-black text-xl shadow-lg">3</div>
        <div>
          <p className="text-lg font-black text-[#ffad66]">కంటి చూపు మెరుగుదల</p>
          <p className="text-sm opacity-90 mt-1 font-medium leading-relaxed">
            చక్కెర స్థాయిలను సమతుల్యం చేయడం ద్వారా మధుమేహం వల్ల వచ్చే చూపు మందగించే సమస్యను నివారిస్తుంది.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffad66] text-[#1a2b49] font-black text-xl shadow-lg">4</div>
        <div>
          <p className="text-lg font-black text-[#ffad66]">నిరంతర అలసట నుండి విముక్తి</p>
          <p className="text-sm opacity-90 mt-1 font-medium leading-relaxed">
            శరీరంలో ఇన్సులిన్ శోషణను పెంచి, రోజంతా ఉత్సాహంగా ఉండేలా నీరసాన్ని తగ్గిస్తుంది.
          </p>
        </div>
      </div>
    </div>

    {/* Action Callout */}
    <div className="mt-10 rounded-2xl bg-white/10 p-4 text-center border border-white/20">
      <p className="text-sm font-black uppercase tracking-widest text-[#ffad66] animate-pulse">
        అద్భుత ఫలితం: కేవలం 15 రోజుల్లో మార్పు మొదలవుతుంది!
      </p>
    </div>
  </div>
</section>
</section>


        {/* 8. BOOKING FORM (Simplified) */}
    <section className="mt-16 overflow-hidden rounded-[2.5rem] bg-[#0b3d2e] p-1 shadow-2xl">
  <div className="rounded-[2.4rem] bg-white p-6 sm:p-10">
    <div className="text-center">
      <h3 className="text-3xl font-black text-[#0b3d2e] sm:text-4xl">
        ఇప్పుడే మీ ఆర్డర్ పూర్తి చేయండి
      </h3>
      <div className="mt-2 flex items-center justify-center gap-2 text-[#b96b2d]">
        <span className="h-px w-8 bg-[#b96b2d]"></span>
        <p className="text-xs font-black uppercase tracking-[0.2em]">Premium Quality Care</p>
        <span className="h-px w-8 bg-[#b96b2d]"></span>
      </div>
    </div>

    {/* Elegant Discount Section */}
    <div className="mt-8 rounded-3xl bg-[#fdfaf5] border border-[#e8dcc4] p-6">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-[#b96b2d]">PRE-PAYMENT OFFER</p>
          <p className="text-base font-medium text-gray-600">
            PhonePe / GPay ద్వారా చెల్లిస్తే
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-400 line-through">₹2999</p>
            <p className="text-2xl font-black text-[#0b3d2e]">₹2699/-</p>
          </div>
          <div className="rounded-full bg-[#0b3d2e] px-4 py-1 text-[10px] font-black text-white">
            10% OFF
          </div>
        </div>
      </div>
    </div>

    {/* Minimalist Form */}
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        const name = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const phone = (e.currentTarget.elements[1] as HTMLInputElement).value;
        const address = (e.currentTarget.elements[2] as HTMLTextAreaElement).value;
        
        const message = `*GlucoAmruth New Order*%0A%0A` +
                        `*Customer Name:* ${name}%0A` +
                        `*Phone:* ${phone}%0A` +
                        `*Address:* ${address}%0A%0A` +
                        `*Offer:* Buy 1 Get 1 Free%0A` +
                        `*Total Amount:* ₹2999%0A` +
                        `*Online Discounted Price:* ₹2699`;
        
        window.open(`https://wa.me/917842121315?text=${message}`, '_blank');
      }}
      className="mt-8 space-y-5"
    >
      <div className="group relative">
        <input 
          type="text" 
          required
          placeholder="పూర్తి పేరు (Full Name)" 
          className="w-full border-b-2 border-gray-100 bg-transparent py-4 text-lg font-bold text-[#0b3d2e] outline-none transition-all focus:border-[#b96b2d] placeholder:text-gray-300" 
        />
      </div>

      <div className="group relative">
        <input 
          type="tel" 
          required
          pattern="[0-9]{10}"
          placeholder="ఫోన్ నంబర్ (10 Digit Phone)" 
          className="w-full border-b-2 border-gray-100 bg-transparent py-4 text-lg font-bold text-[#0b3d2e] outline-none transition-all focus:border-[#b96b2d] placeholder:text-gray-300" 
        />
      </div>

      <div className="group relative">
        <textarea 
          required
          placeholder="పూర్తి అడ్రస్ (Full Address)" 
          className="w-full border-b-2 border-gray-100 bg-transparent py-4 text-lg font-bold text-[#0b3d2e] outline-none transition-all focus:border-[#b96b2d] placeholder:text-gray-300" 
          rows={2} 
        />
      </div>

      <button 
        type="submit" 
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0b3d2e] py-6 text-xl font-black text-white shadow-xl transition-all hover:bg-[#082d22] active:scale-95"
      >
        <span>ORDER NOW</span>
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      <div className="flex items-center justify-center gap-4 pt-4 text-[10px] font-black text-gray-400">
        <span className="flex items-center gap-1">🔒 SECURE CHECKOUT</span>
        <span className="h-1 w-1 rounded-full bg-gray-300"></span>
        <span className="flex items-center gap-1">🚚 CASH ON DELIVERY</span>
      </div>
    </form>
  </div>
</section>
      </div>

        {/* 7. REVIEWS SECTION */}
        <section className="mt-16">
          <h3 className="mx-auto mb-6 w-fit whitespace-nowrap rounded-full border border-[#cfe3e6] bg-white px-4 py-2 text-center text-xl font-extrabold tracking-tight text-[#0e5a61] shadow-sm sm:px-8 sm:text-3xl">
            వినియోగదారుల అభిప్రాయాలు
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <article key={review.meta} className="rounded-2xl border border-[#bfe7df] bg-white p-6 shadow-sm">
                <p className="text-xl text-[#f7b801]">★★★★★</p>
                <p className="mt-2 text-xl font-black text-[#1f2a44]">"{review.quote}"</p>
                <p className="mt-2 text-base font-medium text-[#33415c]">{review.text}</p>
                <p className="mt-4 text-xs font-bold text-[#23555d] uppercase">{review.meta}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-[#e6efec] bg-gradient-to-r from-[#f8fbfa] via-[#f3f8f6] to-[#eef5f2] px-4 py-3 text-center">
            <p className="text-sm font-semibold text-[#4a5d63] sm:text-base">Note:</p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-[#4a5d63] sm:text-base">
              All testimonials displayed on this website are shared with prior consent from customers. Individual experiences may vary.
            </p>
          </div>
        </section>
      {/* --- FOOTER (UNTOUCHED) --- */}
      <footer className="mt-12 border-t bg-white p-8 text-center">
        <p className="text-4xl font-black tracking-tight text-[#1f4d1d] sm:text-5xl">GLUCO AMRUTH</p>
        <div className="mx-auto mt-2 w-fit rounded-sm bg-[#365f2d] px-5 py-1">
   <p className="text-sm font-extrabold tracking-wide text-[#f3f7ea] sm:text-base"> 
  A Wellness Care Company Product
</p>
        </div>
        <hr className="my-6 border-dashed" />
        <p className="text-lg font-bold text-[#1f2a44]">📞 +91 7842121315</p>
         <p className="text-lg font-bold text-[#1f2a44]">✉️ info.svwellness@gmail.com</p>
        <p className="mt-4 text-sm text-gray-500">గమనిక: ఇది ఆయుర్వేద సహాయక ఉత్పత్తి మాత్రమే. ఫలితాలు వ్యక్తికి వ్యక్తి మారవచ్చు.</p>
      </footer>

      {/* FIXED BOTTOM BAR */}
      <section className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e6d2b6] bg-[#fff9ee]/95 px-3 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="text-lg font-black text-[#c23616]">Special Offer: ₹2999 (1+1)</p>
          <a href="https://wa.me/917842121315" className="bg-[#18a558] text-white px-6 py-2 rounded-full font-black">WhatsApp Order</a>
        </div>
      </section>
    </main>
  );
}
