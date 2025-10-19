import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import azakliLogo from "../assets/azaklistudio_logo.jpeg";

const colors = {
  bg: "#0F0C1E",
  surface: "#1B1A2C",
  accent1: "#00E676",
  accent2: "#00C8FF",
  text: "#E6E6F0",
  mute: "#A6A6B3",
};

export default function About() {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('privacy-lang');
    return savedLang || "en";
  });

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('privacy-lang', newLang);
  };

  return (
    <div className="min-h-screen" style={{ background: colors.bg }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5" style={{ backgroundColor: "rgba(15,12,30,0.4)" }}>
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={azakliLogo} 
              alt="Azakli Studio Logo" 
              className="w-6 h-6 rounded-lg object-cover"
            />
            <ArrowLeft className="w-5 h-5" style={{ color: colors.text }} />
            <span className="font-semibold" style={{ color: colors.text }}>
              {lang === "tr" ? "Ana Sayfaya Dön" : "Back to Home"}
            </span>
          </Link>
          <button 
            onClick={() => handleLangChange(lang === "tr" ? "en" : "tr")}
            className="px-3 py-1 rounded-lg border text-xs"
            style={{ borderColor: "#ffffff22", color: colors.text }}
          >
            {lang.toUpperCase()}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-2xl p-8 border" style={{ background: colors.surface, borderColor: "#ffffff14" }}>
          <h1 className="text-3xl font-bold mb-6" style={{ color: colors.text }}>
            {lang === "tr" ? "Hakkımızda" : "About Us"}
          </h1>
          
          <div className="prose prose-invert max-w-none" style={{ color: colors.mute }}>
            {lang === "tr" ? (
              <>
                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>
                  Azakli Studio
                </h2>
                
                <p className="mb-6">
                  Azakli Studio, mobil uygulama geliştirme, oyun prototipleme ve veri odaklı ürünler geliştiren 
                  bir stüdyodur. Modern teknolojiler kullanarak kullanıcı odaklı çözümler üretiyoruz.
                </p>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  Misyonumuz
                </h3>
                <p className="mb-4">
                  Niş problemlere odaklanan, hızlı, temiz ve anlaşılır ürünler geliştirmek. 
                  Kullanıcıya gerçekten fayda sağlayan özellikler ve net bir değer önerisi sunmak.
                </p>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  Teknolojiler
                </h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Jetpack Compose / Flutter / KMP</li>
                  <li>Firebase / Firestore / SQLite</li>
                  <li>AdMob / RevenueCat / Analytics</li>
                  <li>Git + CI/CD</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  Ürünlerimiz
                </h3>
                <p className="mb-4">
                  Potentials Radar, MailAssistantApp ve Puhtalk gibi çeşitli mobil uygulamalar geliştiriyoruz. 
                  Her ürün, belirli bir problemi çözmek için özel olarak tasarlanmıştır.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>
                  Azakli Studio
                </h2>
                
                <p className="mb-6">
                  Azakli Studio is a studio that develops mobile applications, game prototypes and data-driven products. 
                  We create user-focused solutions using modern technologies.
                </p>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  Our Mission
                </h3>
                <p className="mb-4">
                  To develop fast, clean and understandable products focused on niche problems. 
                  To provide features that truly benefit users and a clear value proposition.
                </p>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  Technologies
                </h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Jetpack Compose / Flutter / KMP</li>
                  <li>Firebase / Firestore / SQLite</li>
                  <li>AdMob / RevenueCat / Analytics</li>
                  <li>Git + CI/CD</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  Our Products
                </h3>
                <p className="mb-4">
                  We develop various mobile applications such as Potentials Radar, MailAssistantApp and Puhtalk. 
                  Each product is specifically designed to solve a particular problem.
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
