import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X, Github, AppWindow, Smartphone, Mail, Globe2 } from "lucide-react";

// Renk Paleti (Potentials Radar ile uyumlu)

import { content, locales } from "./content/site";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PotentialsRadarPrivacy from "./pages/PotentialsRadarPrivacy";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import azakliLogo from "./assets/azaklistudio_logo.jpeg";
import potentialsRadarLogo from "./assets/app_icon.png";

const colors = {
  bg: "#0F0C1E",
  surface: "#1B1A2C",
  accent1: "#00E676",
  accent2: "#00C8FF",
  text: "#E6E6F0",
  mute: "#A6A6B3",
};

// Navigation items will be generated from content

function HomePage() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('privacy-lang');
    return savedLang || "en";
  });
  const t = content[lang];

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('privacy-lang', newLang);
  };

  return (
    <div id="home" className="min-h-screen" style={{ background: `radial-gradient(1200px 600px at 80% -10%, ${colors.accent2}15, transparent 60%), radial-gradient(900px 500px at 0% 0%, ${colors.accent1}12, transparent 60%), ${colors.bg}` }}>
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5" style={{ backgroundColor: "rgba(15,12,30,0.4)" }}>
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img 
              src={azakliLogo} 
              alt="Azakli Studio Logo" 
              className="w-9 h-9 rounded-2xl object-cover"
              style={{ boxShadow: `0 8px 30px ${colors.accent2}44` }}
            />
            <span className="font-semibold text-lg tracking-wide" style={{ color: colors.text }}>Azakli Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {t.nav.map((label, index) => {
              const hrefs = ["#home", "#products", "/about", "#contact"];
              return (
                <a key={hrefs[index]} href={hrefs[index]} className="text-sm hover:opacity-90 transition" style={{ color: colors.mute }}>
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
  <button onClick={() => handleLangChange(lang === "tr" ? "en" : "tr")}
    className="px-3 py-1 rounded-lg border text-xs"
    style={{ borderColor: "#ffffff22", color: colors.text }}>
    {lang.toUpperCase()}
  </button>
  <a href="#contact" className="px-4 py-2 rounded-xl font-medium shadow"
     style={{ background: colors.accent1, color: "#06120b" }}>
    {t.ctaContact}
  </a>
</div>


          <button className="md:hidden p-2 rounded-xl" aria-label="Menu" onClick={() => setOpen(!open)} style={{ background: colors.surface }}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile nav */}
        {open && (
          <div className="md:hidden border-t" style={{ borderColor: "#ffffff14", backgroundColor: colors.surface }}>
            <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
              {t.nav.map((label, index) => {
                const hrefs = ["#home", "#products", "/about", "#contact"];
                return (
                  <a onClick={() => setOpen(false)} key={hrefs[index]} href={hrefs[index]} className="py-2 rounded-lg px-2" style={{ color: colors.text }}>
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-12 md:pt-20 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: colors.text }}>
              {t.taglineTop}
              <span className="block mt-1 text-2xl md:text-4xl font-semibold" style={{ background: `linear-gradient(90deg, ${colors.accent1}, ${colors.accent2})`, WebkitBackgroundClip: "text", color: "transparent" }}>
                {t.taglineAccent}
              </span>
            </motion.h1>

            <p className="mt-4 text-base md:text-lg" style={{ color: colors.mute }}>
              {t.heroText}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#products" className="px-5 py-3 rounded-xl font-semibold flex items-center gap-2 shadow" style={{ background: colors.accent2, color: "#031319" }}>
                {t.ctaExplore} <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl font-semibold" style={{ background: colors.surface, color: colors.text }}>
                {t.ctaContact}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm" style={{ color: colors.mute }}>
              {t.badges.map((badge, index) => {
                const icons = [<Smartphone className="w-4 h-4" />, <AppWindow className="w-4 h-4" />, <Github className="w-4 h-4" />];
                return (
                  <div key={index} className="flex items-center gap-2">
                    {icons[index]}
                    {badge}
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[16/10] w-full rounded-2xl p-1" style={{ background: `linear-gradient(135deg, ${colors.accent1}55, ${colors.accent2}55)` }}>
              <div className="w-full h-full rounded-xl p-6 flex items-center justify-center" style={{ background: colors.surface }}>
                {/* Demo ekran: ürün vitrin kartı */}
                <div className="grid gap-4 w-full max-w-md">
                  <div className="rounded-xl p-4" style={{ background: "#121124" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={potentialsRadarLogo} 
                        alt="Potentials Radar Logo" 
                        className="w-8 h-8 rounded-lg object-cover"
                        style={{ boxShadow: `0 2px 10px ${colors.accent2}44` }}
                      />
                      <div>
                        <span className="text-xs uppercase tracking-widest" style={{ color: colors.mute }}>Featured</span>
                        <h3 className="mt-1 text-xl font-semibold" style={{ color: colors.text }}>{t.featured.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm mt-2" style={{ color: colors.mute }}>{t.featured.desc}</p>
                    <div className="mt-3 flex gap-2">
                      <a href={t.featured.appStore} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-2 rounded-lg" style={{ background: colors.accent1, color: "#06120b" }}>App Store</a>
                      <a href={t.featured.googlePlay} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-2 rounded-lg" style={{ background: colors.accent2, color: "#031319" }}>Google Play</a>
                    </div>
                  </div>
                  <div className="rounded-xl p-4 border" style={{ borderColor: "#ffffff14", background: "#121124" }}>
                    <p className="text-sm" style={{ color: colors.mute }}>{lang === "tr" ? "Hızlı performans, güvenilir veri ve kullanıcı dostu deneyim." : "Fast performance, reliable data and user-friendly experience."}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-6 -z-10 rounded-[2rem]" style={{ background: `radial-gradient(600px 200px at 70% 20%, ${colors.accent2}22, transparent), radial-gradient(500px 350px at 20% 80%, ${colors.accent1}18, transparent)` }} />
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>{t.productsTitle}</h2>
          <a href="#contact" className="text-sm" style={{ color: colors.accent2 }}>{t.productsCTA}</a>
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.products.map((product, index) => {
            const productId = product.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={index} className={`rounded-2xl p-${index === 0 ? '1' : '5'} ${index === 0 ? '' : 'border'} cursor-pointer hover:scale-105 transition-transform`} style={{ 
                background: index === 0 ? `linear-gradient(135deg, ${colors.accent1}55, ${colors.accent2}55)` : colors.surface, 
                borderColor: index === 0 ? 'transparent' : "#ffffff14" 
              }}>
                <Link to={`/product/${productId}`}>
                  <div className={`${index === 0 ? 'h-full rounded-2xl p-5 flex flex-col' : ''}`} style={{ background: index === 0 ? colors.surface : 'transparent' }}>
                    {index === 0 && (
                      <div className="flex items-center gap-3">
                        <img 
                          src={potentialsRadarLogo} 
                          alt="Potentials Radar Logo" 
                          className="w-12 h-12 rounded-2xl object-cover"
                          style={{ boxShadow: `0 4px 20px ${colors.accent2}44` }}
                        />
                        <div>
                          <h3 className="font-semibold text-lg" style={{ color: colors.text }}>{product.name}</h3>
                          <p className="text-xs" style={{ color: colors.mute }}>{product.subtitle}</p>
                        </div>
                      </div>
                    )}
                    {index !== 0 && (
                      <h3 className="font-semibold text-lg" style={{ color: colors.text }}>{product.name}</h3>
                    )}
                    <p className={`${index === 0 ? 'mt-3' : 'mt-2'} text-sm`} style={{ color: colors.mute }}>{product.desc}</p>
                    {index === 0 && product.links && Object.keys(product.links).length > 0 && (
                      <div className="mt-auto flex gap-2 pt-4">
                        {product.links.appStore && <a href={product.links.appStore} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg text-sm font-medium" style={{ background: colors.accent1, color: "#06120b" }}>App Store</a>}
                        {product.links.googlePlay && <a href={product.links.googlePlay} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg text-sm font-medium" style={{ background: colors.accent2, color: "#031319" }}>Google Play</a>}
                        {product.links.x && <a href={product.links.x} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg text-sm font-medium" style={{ background: "#121124", color: colors.text, border: "1px solid #ffffff14" }}>Twitter/X</a>}
                      </div>
                    )}
                    {index !== 0 && (
                      <div className="mt-4 flex gap-2">
                        {product.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs px-2 py-1 rounded-lg" style={{ background: "#121124", color: colors.mute, border: "1px solid #ffffff14" }}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>{t.aboutTitle}</h2>
            <p className="mt-4 text-base" style={{ color: colors.mute }}>
              {t.aboutText}
            </p>
            <ul className="mt-6 grid gap-3 text-sm" style={{ color: colors.text }}>
              {t.aboutBullets.map((bullet, index) => {
                const accentColors = [colors.accent1, colors.accent2, colors.accent1];
                return (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: accentColors[index] }} /> 
                    {bullet}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rounded-2xl p-6 border" style={{ background: colors.surface, borderColor: "#ffffff14" }}>
            <h3 className="font-semibold" style={{ color: colors.text }}>{t.vision.title}</h3>
            <p className="mt-2 text-sm" style={{ color: colors.mute }}>
              {lang === "tr" ? "Niş problemlere odaklanan, hızlı, temiz ve anlaşılır ürünler. Kullanıcıya gerçekten fayda sağlayan özellikler ve net bir değer önerisi." : "Focus on niche problems, fast, clean and understandable products. Features that truly benefit users and a clear value proposition."}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {t.vision.items.map((item, index) => (
                <div key={index} className="rounded-xl p-3" style={{ background: "#121124" }}>
                  <p className="opacity-80" style={{ color: colors.mute }}>{item.k}</p>
                  <p className="font-semibold" style={{ color: colors.text }}>{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="rounded-2xl p-6 border" style={{ background: colors.surface, borderColor: "#ffffff14" }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>{t.contactTitle}</h2>
              <p className="mt-2 text-sm" style={{ color: colors.mute }}>{t.contactDesc}</p>
            </div>
            <div className="grid gap-3 w-full md:w-auto">
              <a href={`mailto:${t.email}`} className="px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2" style={{ background: colors.accent1, color: "#06120b" }}>
                <Mail className="w-4 h-4"/> {t.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t" style={{ borderColor: "#ffffff14" }}>
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: colors.mute }}>{t.footerNote}</p>
          <div className="flex items-center gap-3 text-xs" style={{ color: colors.mute }}>
            <Link to={t.footerLinks.privacy} className="hover:opacity-90">{lang === "tr" ? "Gizlilik" : "Privacy"}</Link>
            <span className="opacity-30">•</span>
            <a href={t.footerLinks.terms} className="hover:opacity-90">{lang === "tr" ? "Kullanım Şartları" : "Terms"}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy/potentials-radar" element={<PotentialsRadarPrivacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
  );
}
