"use client";
import { useEffect, useRef, useState } from "react";
import { company, copy, products, type Language, type ProductId } from "../content";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.35" /></svg>;
}
function Wordmark() { return <span className="wordmark"><span>SIAM<span className="wordmark-jumbo">JUMBO</span><i aria-hidden="true" /></span><small>INTERNATIONAL</small></span>; }

export default function SiamJumbo() {
  const [language, setLanguage] = useState<Language>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState<ProductId | "all">("all");
  const [activeSection, setActiveSection] = useState("home");
  const [modal, setModal] = useState<ProductId | "crispy" | "film" | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const c = copy[language];
  const ids = ["home", "story", "products", "contact"];
  const selected = products.find(p => p.id === modal);

  useEffect(() => {
    if (localStorage.getItem("siam-jumbo-language") === "th") setLanguage("th");
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
    document.querySelectorAll("main > section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (modal && dialog) {
      dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { dialog.close(); document.body.style.overflow = previousOverflow; videoRef.current?.pause(); };
    }
  }, [modal]);
  function changeLanguage(next: Language) { setLanguage(next); localStorage.setItem("siam-jumbo-language", next); }

  return <>
    <a className="skip-link" href="#main">{c.skip}</a>
    <header className="site-header"><div className="header-inner">
      <a href="#home" aria-label="Siam Jumbo home" onClick={() => setMobileOpen(false)}><Wordmark /></a>
      <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} id="main-navigation" aria-label={language === "en" ? "Main navigation" : "เมนูหลัก"}>{ids.map((id, i) => <a key={id} className={activeSection === id ? "active" : ""} aria-current={activeSection === id ? "location" : undefined} href={`#${id}`} onClick={() => setMobileOpen(false)}>{c.nav[i]}</a>)}</nav>
      <div className="header-actions"><div className="language-switch" aria-label="Language"><button lang="en" aria-pressed={language === "en"} onClick={() => changeLanguage("en")}>EN</button><span aria-hidden="true">/</span><button lang="th" aria-pressed={language === "th"} onClick={() => changeLanguage("th")}>TH</button></div><a className="header-inquiry" href="#contact">{c.inquiry}<Arrow diagonal /></a><button className={`menu-toggle ${mobileOpen ? "is-open" : ""}`} aria-label={mobileOpen ? c.close : c.menu} aria-expanded={mobileOpen} aria-controls="main-navigation" onClick={() => setMobileOpen(!mobileOpen)}><span /><span /></button></div>
    </div></header>
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title"><img className="hero-image" src="/images/fields.jpg" alt={language === "en" ? "Green rice fields, illustrative landscape" : "ทุ่งนาสีเขียว ภาพประกอบบรรยากาศ"} fetchPriority="high" /><div className="hero-shade" /><div className="hero-content container"><p className="eyebrow hero-eyebrow"><span />{c.heroTag}</p><h1 id="hero-title">{c.heroOne}<br /><span>{c.heroTwo}</span></h1><p className="hero-description">{c.heroText}</p><a href="#story" className="hero-link">{c.explore}<span className="round-arrow"><Arrow /></span></a></div><div className="hero-bottom container"><span className="hero-index">01 <span>/ SIAM JUMBO</span></span><span>{c.heroFoot}</span><a href="#story" aria-label={c.explore} className="scroll-down">↓</a></div><span className="hero-side" aria-hidden="true">SIAM JUMBO INTERNATIONAL</span></section>
      <section className="story-section section-space container" id="story" aria-labelledby="story-title"><p className="eyebrow section-label">{c.storyLabel}</p><div className="story-grid"><h2 id="story-title">{c.storyTitle}</h2><div className="story-copy"><h3>{c.storyLead}</h3><p>{c.storyText}</p><p>{c.storyTextTwo}</p></div></div><div className="story-facts">{[[c.origin,c.originVal],[c.focus,c.focusVal],[c.approach,c.approachVal]].map(([label,value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}</div></section>
      <section className="products-section section-space" id="products" aria-labelledby="products-title"><div className="container"><p className="eyebrow section-label">{c.productsLabel}</p><div className="section-heading"><h2 id="products-title">{c.productsTitle}</h2><p>{c.productsText}</p></div><div className="product-filters" role="group" aria-label={c.productsLabel}>{(["all","fruit","vegetables","rice"] as const).map((id,i) => <button key={id} aria-pressed={filter === id} onClick={() => setFilter(id)}>{i === 0 ? c.all : c.filters[i-1]}<span>{i === 0 ? "03" : "01"}</span></button>)}</div><div className="product-grid">{products.filter(p => filter === "all" || p.id === filter).map(p => <button className="product-card" key={p.id} onClick={() => setModal(p.id)} aria-label={`${c.view}: ${p[language].name}`}><div className="product-photo"><img src={p.image} alt={p.alt} loading="lazy" /><span className="product-photo-action"><Arrow diagonal /></span></div><div className="product-caption"><div><h3>{p[language].name}</h3><p>{p[language].caption}</p></div><span className="product-number">0{products.indexOf(p)+1}</span></div></button>)}</div></div></section>
      <section className="crispy-section container" aria-labelledby="crispy-title"><div className="crispy-image"><img src="/recommend.png" alt="Siam Jumbo Crispy Fruit — Mangosteen & Mango, original project visual" loading="lazy" /><span className="image-caption">SIAM JUMBO / CRISPY FRUIT</span></div><div className="crispy-copy"><p className="eyebrow section-label">{c.crispyLabel}</p><h2 id="crispy-title">{c.crispyTitle}</h2><p className="body-copy">{c.crispyText}</p><span className="crispy-flavor"><span />{c.crispyTag}</span><button className="text-link" onClick={() => setModal("crispy")}>{c.crispyCta}<Arrow diagonal /></button><button className="film-link" onClick={() => setModal("film")}><span className="play-icon">▷</span>{c.film}</button></div></section>
      <section className="quality-section section-space container" id="quality" aria-labelledby="quality-title"><p className="eyebrow section-label">{c.qualityLabel}</p><div className="section-heading"><h2 id="quality-title">{c.qualityTitle}</h2><p>{c.qualityIntro}</p></div><div className="quality-grid">{c.quality.map((item,i) => <div key={item.title}><span className="quality-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container"><p className="eyebrow">{c.contactLabel}</p><div className="contact-heading"><h2 id="contact-title">{c.contactTitle}</h2><div><p>{c.contactText}</p><a href={`mailto:${company.email}`} className="contact-cta">{c.contactCta}<Arrow diagonal /></a></div></div><div className="contact-details"><div><span>{c.emailLabel}</span><a href={`mailto:${company.email}`}>{company.email}</a></div><div><span>{c.phoneLabel}</span><a href={company.phoneHref}>{company.phone}</a></div><div><span>{c.visitLabel}</span><p>{c.location}</p><p className="contact-address">{company.address}</p></div></div></div></section>
    </main>
    <footer className="site-footer container"><div className="footer-top"><div><a href="#home" aria-label="Siam Jumbo home"><Wordmark /></a><p>{c.footerLine}</p></div><a href="#home" className="back-top">{c.top}<span>↑</span></a></div><div className="footer-bottom"><p>© 2026 {c.companyName} {c.rights}</p><p>{c.demo}</p></div></footer>
    <dialog ref={dialogRef} className={`detail-dialog ${modal === "film" ? "film-dialog" : ""}`} onCancel={() => setModal(null)} onClick={e => { if (e.target === e.currentTarget) setModal(null); }} aria-labelledby="dialog-title">{modal && <div className="dialog-inner"><button className="dialog-close" aria-label={c.close} onClick={() => setModal(null)}>×</button>{modal === "film" ? <><h2 id="dialog-title">{c.filmTitle}</h2><video ref={videoRef} controls playsInline preload="metadata" src="/siam.mp4">{c.filmFallback}</video></> : <><img className="dialog-image" src={modal === "crispy" ? "/recommend.png" : selected?.image} alt={modal === "crispy" ? "Siam Jumbo Crispy Fruit" : selected?.alt} /><div className="dialog-copy"><p className="eyebrow">SIAM JUMBO / {c.nav[2]}</p><h2 id="dialog-title">{modal === "crispy" ? c.crispyDetail : selected?.[language].name}</h2><p>{modal === "crispy" ? c.crispyDetailText : selected?.[language].description}</p><a className="solid-link" href={`mailto:${company.email}?subject=${encodeURIComponent(`Product enquiry: ${modal === "crispy" ? "Crispy Fruit" : selected?.en.name}`)}`}>{c.enquire}<Arrow diagonal /></a><button className="dialog-back" onClick={() => setModal(null)}>{c.back}</button></div></>}</div>}</dialog>
  </>;
}
