"use client";

import { useEffect, useRef, useState } from "react";
import { company, copy, products, type Language, type ProductId } from "../content";

type Category = ProductId | "crispy" | "general";
const ui = {
  en: {
    talk: "Discuss your requirements", origin: "FOOD EXPORTS FROM THAILAND", storyLink: "Get to know Siam Jumbo",
    categoryLink: "View category", imageNote: "Illustrative category image", portfolio: "OUR PRODUCT SELECTION",
    productNote: "A starting point for your sourcing conversation. Ask our team about current availability and product specifications.",
    originLabel: "Origin", originValue: "Thailand", askLabel: "Discuss with our team", categoryLabel: "Category",
    topics: {fruit:"Varieties, seasonality & packing",vegetables:"Available range, packing & delivery",rice:"Product specifications & packing",crispy:"Product range & packaging"},
    emailHint: "Opens your email app with an enquiry draft.", emailCopied: "Email address copied", copyEmail: "Copy email address",
    enquiryLabel: "03 / WORK WITH US", enquiryTitle: "Your next step,\nmade simple.", enquiryText: "A few details help us understand what your business is looking for. Include these in your enquiry to start the conversation.",
    steps: [{title:"Your market",text:"Tell us about your business and the country you supply."},{title:"Your products",text:"Share the categories, quantities and packing you have in mind."},{title:"Your timing",text:"Let us know your preferred schedule and any questions."}],
    interest:"I’m interested in", general:"General product enquiry", productInquiry:"Product enquiry", enquirySubject:"Business enquiry",
    emailBody:"Hello Siam Jumbo team,\n\nI would like to discuss: {category}\n\nCompany:\nDestination market:\nProduct / estimated quantity:\nPacking requirements:\nPreferred timing:\n\nThank you.",
    crispyFooter:"Product artwork from the original project", choice:"EXPLORE THE COLLECTION", crispyInfo:"Vacuum-fried tropical fruit", scroll:"Scroll to discover",
  },
  th: {
    talk:"พูดคุยเรื่องสินค้าที่ต้องการ",origin:"ส่งออกอาหารจากประเทศไทย",storyLink:"รู้จักสยามจัมโบ้",
    categoryLink:"ดูรายละเอียด",imageNote:"ภาพประกอบหมวดสินค้า",portfolio:"คัดสรรสินค้าจากเมืองไทย",
    productNote:"เริ่มต้นเลือกหมวดสินค้าที่สนใจ แล้วพูดคุยกับทีมงานเรื่องสินค้าที่มีและรายละเอียดที่คุณต้องการ",
    originLabel:"แหล่งสินค้า",originValue:"ประเทศไทย",askLabel:"สอบถามทีมงานเรื่อง",categoryLabel:"หมวดสินค้า",
    topics:{fruit:"ชนิดผลไม้ ฤดูกาล และบรรจุภัณฑ์",vegetables:"รายการสินค้า บรรจุภัณฑ์ และการจัดส่ง",rice:"รายละเอียดสินค้าและบรรจุภัณฑ์",crispy:"รายการสินค้าและบรรจุภัณฑ์"},
    emailHint:"เปิดแอปอีเมลพร้อมร่างข้อความสอบถาม",emailCopied:"คัดลอกอีเมลแล้ว",copyEmail:"คัดลอกที่อยู่อีเมล",
    enquiryLabel:"03 / เริ่มต้นร่วมงานกับเรา",enquiryTitle:"เริ่มต้นพูดคุย\nได้ง่าย ๆ",enquiryText:"ข้อมูลเล็กน้อยช่วยให้เราเข้าใจความต้องการของธุรกิจคุณ ระบุข้อมูลเหล่านี้ในอีเมลเพื่อเริ่มต้นพูดคุยกับเรา",
    steps:[{title:"ตลาดของคุณ",text:"แนะนำธุรกิจและประเทศที่คุณต้องการนำสินค้าไปจำหน่าย"},{title:"สินค้าที่ต้องการ",text:"ระบุหมวดสินค้า ปริมาณ และบรรจุภัณฑ์ที่สนใจ"},{title:"ช่วงเวลาของคุณ",text:"แจ้งกำหนดเวลาที่ต้องการ พร้อมคำถามหรือรายละเอียดเพิ่มเติม"}],
    interest:"สินค้าที่สนใจ",general:"สอบถามสินค้าทั่วไป",productInquiry:"สอบถามสินค้า",enquirySubject:"สอบถามข้อมูลธุรกิจ",
    emailBody:"สวัสดีทีมงานสยามจัมโบ้\n\nสนใจสอบถามเรื่อง: {category}\n\nชื่อบริษัท:\nประเทศปลายทาง:\nสินค้า / ปริมาณโดยประมาณ:\nบรรจุภัณฑ์ที่ต้องการ:\nช่วงเวลาที่ต้องการ:\n\nขอบคุณครับ/ค่ะ",
    crispyFooter:"กราฟิกสินค้าจากโปรเจกต์เดิม",choice:"รู้จักคอลเลกชันของเรา",crispyInfo:"ผลไม้กรอบผ่านการทอดสุญญากาศ",scroll:"เลื่อนเพื่อดูเพิ่มเติม",
  },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Wordmark() { return <span className="wordmark"><span>SIAM<span>JUMBO</span><i aria-hidden="true" /></span><small>INTERNATIONAL</small></span>; }
function Leaf() { return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M7 25C7 15 12 7 26 6c0 13-6 20-14 17M6 27 22 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>; }

export default function SiamJumbo() {
  const [language, setLanguage] = useState<Language>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState<ProductId | "all">("all");
  const [activeSection, setActiveSection] = useState("home");
  const [modal, setModal] = useState<ProductId | "crispy" | "film" | null>(null);
  const [interest, setInterest] = useState<Category>("general");
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const c = copy[language];
  const t = ui[language];
  const selected = products.find(p => p.id === modal);
  const ids = ["home", "story", "products", "contact"];

  useEffect(() => {
    try { if (localStorage.getItem("siam-jumbo-language") === "th") setLanguage("th"); } catch {}
    const sections = [...document.querySelectorAll<HTMLElement>("main > section[id]")];
    let frame = 0;
    const updateLocation = () => {
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height || 88;
      const marker = Math.min(window.innerHeight * 0.3, headerHeight + 100);
      let current = "home";
      sections.forEach(section => { if (section.getBoundingClientRect().top <= marker) current = section.dataset.nav || section.id; });
      setActiveSection(current);
      frame = 0;
    };
    const scheduleUpdate = () => { if (!frame) frame = requestAnimationFrame(updateLocation); };
    updateLocation();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => { window.removeEventListener("scroll", scheduleUpdate); window.removeEventListener("resize", scheduleUpdate); cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  useEffect(() => {
    const closeMenu = (e: KeyboardEvent) => { if(e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown",closeMenu);
    return () => document.removeEventListener("keydown",closeMenu);
  }, []);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!modal || !dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    const video = videoRef.current;
    document.body.style.overflow = "hidden";
    return () => { video?.pause(); dialog.close(); document.body.style.overflow = previousOverflow; };
  }, [modal]);
  function changeLanguage(next: Language) {
    setLanguage(next);
    try { localStorage.setItem("siam-jumbo-language",next); } catch {}
  }
  function categoryName(category: Category) {
    return category === "general" ? t.general : category === "crispy" ? c.crispyDetail : products.find(p=>p.id === category)![language].name;
  }
  function emailHref(category: Category) {
    const name = categoryName(category);
    return `mailto:${company.email}?subject=${encodeURIComponent(`${t.enquirySubject}: ${name}`)}&body=${encodeURIComponent(t.emailBody.replace("{category}",name))}`;
  }
  async function copyEmail() {
    try { await navigator.clipboard.writeText(company.email); setCopied(true); } catch { setCopied(false); }
  }

  return <>
    <a className="skip-link" href="#main">{c.skip}</a>
    <header className="site-header"><div className="header-inner">
      <a href="#home" aria-label="Siam Jumbo home" onClick={()=>setMobileOpen(false)}><Wordmark/></a>
      <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} id="main-navigation" aria-label={language === "en" ? "Main navigation" : "เมนูหลัก"}>
        {ids.map((id,i)=><a key={id} className={activeSection === id ? "active" : ""} aria-current={activeSection === id ? "location" : undefined} href={`#${id}`} onClick={()=>setMobileOpen(false)}>{c.nav[i]}</a>)}
      </nav>
      <div className="header-actions"><div className="language-switch" aria-label="Language"><button lang="en" aria-pressed={language === "en"} onClick={()=>changeLanguage("en")}>EN</button><button lang="th" aria-pressed={language === "th"} onClick={()=>changeLanguage("th")}>TH</button></div><a className="header-inquiry" href="#contact">{c.inquiry}<Arrow diagonal/></a><button className={`menu-toggle ${mobileOpen ? "is-open" : ""}`} aria-label={mobileOpen ? c.close : c.menu} aria-expanded={mobileOpen} aria-controls="main-navigation" onClick={()=>setMobileOpen(!mobileOpen)}><span/><span/></button></div>
    </div></header>
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero-image" src="/images/fields.jpg" width="1500" height="1125" alt={language === "en" ? "Rice fields, illustrative landscape" : "ทุ่งนา ภาพประกอบบรรยากาศ"} fetchPriority="high"/>
        <div className="hero-shade"/>
        <div className="hero-content container"><p className="eyebrow hero-eyebrow"><span/>{c.heroTag}</p><h1 id="hero-title">{c.heroOne}<br/><span>{c.heroTwo}</span></h1><p className="hero-description">{c.heroText}</p><div className="hero-actions"><a className="button button-light" href="#products" onClick={()=>setFilter("all")}>{c.explore}<Arrow/></a><a className="hero-secondary" href="#contact">{t.talk}<Arrow diagonal/></a></div></div>
        <div className="hero-bottom container"><span>{t.origin}</span><a href="#story" aria-label={t.scroll}>{t.scroll}<span>↓</span></a></div>
      </section>
      <div className="category-ribbon"><div className="container"><span>{t.portfolio}</span>{products.map(p=><a href="#products" key={p.id} onClick={()=>setFilter(p.id)}>{p[language].name}<Arrow diagonal/></a>)}</div></div>
      <section className="story-section container section-space" id="story" aria-labelledby="story-title">
        <div className="section-topline"><p className="eyebrow">{c.storyLabel}</p><Leaf/></div>
        <div className="story-grid"><h2 id="story-title">{c.storyTitle}</h2><div className="story-copy"><h3>{c.storyLead}</h3><p>{c.storyText}</p><p>{c.storyTextTwo}</p><a className="text-link" href="#contact">{t.talk}<Arrow diagonal/></a></div></div>
        <div className="story-facts">{[[c.origin,c.originVal],[c.focus,c.focusVal],[c.approach,c.approachVal]].map(([label,value])=><div key={label}><span>{label}</span><p>{value}</p></div>)}</div>
      </section>
      <section className="products-section section-space" id="products" aria-labelledby="products-title"><div className="container">
        <p className="eyebrow section-label">{c.productsLabel}</p><div className="section-heading"><h2 id="products-title">{c.productsTitle}</h2><p>{t.productNote}</p></div>
        <div className="product-filters" role="group" aria-label={c.productsLabel}>{(["all","fruit","vegetables","rice"] as const).map((id,i)=><button key={id} aria-pressed={filter === id} onClick={()=>setFilter(id)}>{i===0 ? c.all : c.filters[i-1]}</button>)}</div>
        <div className="product-grid">{products.filter(p=>filter === "all" || p.id === filter).map(p=><button className="product-card" key={p.id} onClick={()=>setModal(p.id)} aria-label={`${c.view}: ${p[language].name}`}><div className="product-photo"><img src={p.image} width="1024" height="1024" alt={language === "en" ? p.alt : `${p.th.name} — ${t.imageNote}`} loading="lazy"/><span className="product-photo-action"><Arrow diagonal/></span></div><div className="product-caption"><div><span className="product-kicker">{language === "en" ? `THAILAND / ${p.id === "rice" ? "GRAINS" : "PRODUCE"}` : `ประเทศไทย / ${p.id === "rice" ? "ข้าว" : "ผักและผลไม้"}`}</span><h3>{p[language].name}</h3><p>{p[language].caption}</p></div><span className="product-number">0{products.indexOf(p)+1}</span></div><span className="product-card-link">{t.categoryLink}<Arrow/></span></button>)}</div>
        <p className="imagery-note">{t.imageNote}</p>
      </div></section>
      <section className="crispy-section container" id="crispy" data-nav="products" aria-labelledby="crispy-title">
        <div className="crispy-copy"><p className="eyebrow section-label">{c.crispyLabel}</p><h2 id="crispy-title">{c.crispyTitle}</h2><p className="body-copy">{c.crispyText}</p><div className="crispy-flavor"><span/>{c.crispyTag}</div><button className="text-link" onClick={()=>setModal("crispy")}>{c.crispyCta}<Arrow diagonal/></button><button className="film-link" onClick={()=>setModal("film")}><span className="play-icon">▷</span>{c.film}</button></div>
        <figure className="crispy-image"><div><img src="/images/crispy-artwork.webp" width="1000" height="1182" alt="Siam Jumbo Crispy Fruit — Mangosteen & Mango, concept artwork from original project" loading="lazy"/></div><figcaption><span>SIAM JUMBO / CRISPY FRUIT</span><span>{t.crispyFooter}</span></figcaption></figure>
      </section>
      <section className="enquiry-section" id="enquiries" data-nav="contact" aria-labelledby="enquiry-title"><div className="container"><p className="eyebrow section-label">{t.enquiryLabel}</p><div className="section-heading"><h2 id="enquiry-title">{t.enquiryTitle}</h2><p>{t.enquiryText}</p></div><div className="enquiry-steps">{t.steps.map((step,i)=><div key={step.title}><span className="step-number">0{i+1}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container"><p className="eyebrow">{c.contactLabel}</p><div className="contact-heading"><h2 id="contact-title">{c.contactTitle}</h2><div className="contact-action-panel"><p>{c.contactText}</p><label className="interest-label" htmlFor="interest">{t.interest}</label><select id="interest" value={interest} onChange={e=>setInterest(e.target.value as Category)}><option value="general">{t.general}</option>{products.map(p=><option key={p.id} value={p.id}>{p[language].name}</option>)}<option value="crispy">{c.crispyDetail}</option></select><a href={emailHref(interest)} className="button contact-cta">{c.contactCta}<Arrow diagonal/></a><p className="email-hint">{t.emailHint}</p></div></div><div className="contact-details"><div><span>{c.emailLabel}</span><div className="email-line"><a href={emailHref("general")}>{company.email}</a><button className="copy-email" aria-label={t.copyEmail} onClick={copyEmail}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.3"/><path d="M15 5V3H3v12h2" stroke="currentColor" strokeWidth="1.3"/></svg></button></div><p className="copy-status" role="status">{copied ? t.emailCopied : ""}</p></div><div><span>{c.phoneLabel}</span><a href={company.phoneHref}>{company.phone}</a></div><div><span>{c.visitLabel}</span><p>{c.location}</p><p className="contact-address">{company.address}</p></div></div></div></section>
    </main>
    <footer className="site-footer container"><div className="footer-top"><div><a href="#home" aria-label="Siam Jumbo home"><Wordmark/></a><p>{c.footerLine}</p></div><a href="#home" className="back-top">{c.top}<span>↑</span></a></div><div className="footer-bottom"><p>© 2026 {c.companyName}<br/>{c.rights}</p><p>{c.demo}</p></div></footer>
    <dialog ref={dialogRef} className={`detail-dialog ${modal === "film" ? "film-dialog" : ""}`} onCancel={()=>setModal(null)} onClick={e=>{if(e.target===e.currentTarget)setModal(null);}} aria-labelledby="dialog-title">{modal && <div className="dialog-inner"><button className="dialog-close" aria-label={c.close} onClick={()=>setModal(null)}>×</button>{modal === "film" ? <><h2 id="dialog-title">{c.filmTitle}</h2><video ref={videoRef} controls playsInline preload="metadata" src="/siam.mp4">{c.filmFallback}</video></> : <><div className={`dialog-image-wrap ${modal === "crispy" ? "is-artwork" : ""}`}><img className="dialog-image" src={modal === "crispy" ? "/images/crispy-artwork.webp" : selected?.image} alt={modal === "crispy" ? "Siam Jumbo Crispy Fruit concept artwork" : selected?.alt}/><span>{modal === "crispy" ? t.crispyFooter : t.imageNote}</span></div><div className="dialog-copy"><p className="eyebrow">SIAM JUMBO / {c.nav[2]}</p><h2 id="dialog-title">{modal === "crispy" ? c.crispyDetail : selected?.[language].name}</h2><p>{modal === "crispy" ? c.crispyDetailText : selected?.[language].description}</p><dl className="product-specs"><div><dt>{t.originLabel}</dt><dd>{t.originValue}</dd></div><div><dt>{t.askLabel}</dt><dd>{t.topics[modal]}</dd></div></dl><a className="button solid-link" href={emailHref(modal)}>{c.enquire}<Arrow diagonal/></a><p className="email-hint">{t.emailHint}</p><button className="dialog-back" onClick={()=>setModal(null)}>{c.back}</button></div></>}</div>}</dialog>
  </>;
}
