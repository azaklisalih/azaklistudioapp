import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Smartphone, AppWindow, Github, Mail, ExternalLink } from "lucide-react";
import { content } from "../content/site";
import azakliLogo from "../assets/azaklistudio_logo.jpeg";
import potentialsRadarLogo from "../assets/app_icon.png";

const colors = {
  bg: "#0F0C1E",
  surface: "#1B1A2C",
  accent1: "#00E676",
  accent2: "#00C8FF",
  text: "#E6E6F0",
  mute: "#A6A6B3",
};

export default function ProductDetail() {
  const { productId } = useParams();
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('privacy-lang');
    return savedLang || "en";
  });
  const t = content[lang];

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('privacy-lang', newLang);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Find the product by ID
  const product = t.products.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === productId
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: colors.bg }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>Product Not Found</h1>
          <Link to="/" className="px-4 py-2 rounded-lg" style={{ background: colors.accent1, color: "#06120b" }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: colors.bg }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5" style={{ backgroundColor: "rgba(15,12,30,0.4)" }}>
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
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
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Info */}
          <div>
            <div className="rounded-2xl p-1 mb-6" style={{ background: `linear-gradient(135deg, ${colors.accent1}55, ${colors.accent2}55)` }}>
              <div className="rounded-2xl p-6" style={{ background: colors.surface }}>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={product.name === "Potentials Radar" ? potentialsRadarLogo : azakliLogo} 
                    alt={`${product.name} Logo`} 
                    className="w-16 h-16 rounded-2xl object-cover"
                    style={{ boxShadow: `0 4px 20px ${colors.accent2}44` }}
                  />
                  <div>
                    <h1 className="text-2xl font-bold" style={{ color: colors.text }}>{product.name}</h1>
                    {product.subtitle && (
                      <p className="text-sm" style={{ color: colors.mute }}>{product.subtitle}</p>
                    )}
                  </div>
                </div>
                <p className="text-base mb-6" style={{ color: colors.mute }}>{product.desc}</p>
                
                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-3 py-1 rounded-lg" style={{ background: "#121124", color: colors.mute, border: "1px solid #ffffff14" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                {product.links && Object.keys(product.links).length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {product.links.appStore && (
                      <a 
                        href={product.links.appStore} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                        style={{ background: colors.accent1, color: "#06120b" }}
                      >
                        <Smartphone className="w-4 h-4" />
                        App Store
                      </a>
                    )}
                    {product.links.googlePlay && (
                      <a 
                        href={product.links.googlePlay} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                        style={{ background: colors.accent2, color: "#031319" }}
                      >
                        <Smartphone className="w-4 h-4" />
                        Google Play
                      </a>
                    )}
                    {product.links.x && (
                      <a 
                        href={product.links.x} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                        style={{ background: "#121124", color: colors.text, border: "1px solid #ffffff14" }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Twitter/X
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Features */}
            <div className="rounded-2xl p-6 border" style={{ background: colors.surface, borderColor: "#ffffff14" }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>
                {lang === "tr" ? "Özellikler" : "Features"}
              </h3>
              <div className="space-y-3">
                {product.name === "Potentials Radar" && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent1 }} />
                      <span className="text-sm" style={{ color: colors.mute }}>
                        {lang === "tr" ? "30+ filtre ile gelişmiş oyuncu arama" : "Advanced player search with 30+ filters"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent2 }} />
                      <span className="text-sm" style={{ color: colors.mute }}>
                        {lang === "tr" ? "Takım önerileri ve analiz" : "Team suggestions and analysis"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent1 }} />
                      <span className="text-sm" style={{ color: colors.mute }}>
                        {lang === "tr" ? "Çok dilli destek (8 dil)" : "Multilingual support (8 languages)"}
                      </span>
                    </div>
                  </>
                )}
                {product.name === "MailAssistantApp" && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent1 }} />
                      <span className="text-sm" style={{ color: colors.mute }}>
                        {lang === "tr" ? "Akıllı e-posta temizleme" : "Smart email cleaning"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent2 }} />
                      <span className="text-sm" style={{ color: colors.mute }}>
                        {lang === "tr" ? "Oyunlaştırma özellikleri" : "Gamification features"}
                      </span>
                    </div>
                  </>
                )}
                {product.name === "Puhtalk" && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent1 }} />
                      <span className="text-sm" style={{ color: colors.mute }}>
                        {lang === "tr" ? "Kanal tabanlı sohbet" : "Channel-based chat"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent2 }} />
                      <span className="text-sm" style={{ color: colors.mute }}>
                        {lang === "tr" ? "Sesli sohbet ve ekran paylaşımı" : "Voice chat and screen sharing"}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl p-6 border" style={{ background: colors.surface, borderColor: "#ffffff14" }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>
                {lang === "tr" ? "İletişim" : "Contact"}
              </h3>
              <p className="text-sm mb-4" style={{ color: colors.mute }}>
                {lang === "tr" 
                  ? "Bu ürün hakkında sorularınız için bizimle iletişime geçin:"
                  : "Contact us for questions about this product:"
                }
              </p>
              <a 
                href="mailto:azakli.dev@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
                style={{ background: colors.accent1, color: "#06120b" }}
              >
                <Mail className="w-4 h-4" />
                azakli.dev@gmail.com
              </a>
            </div>

            {/* Privacy Policy */}
            <div className="rounded-2xl p-6 border" style={{ background: colors.surface, borderColor: "#ffffff14" }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>
                {lang === "tr" ? "Gizlilik Politikası" : "Privacy Policy"}
              </h3>
              <p className="text-sm mb-4" style={{ color: colors.mute }}>
                {lang === "tr" 
                  ? "Bu ürünün gizlilik politikasını inceleyebilirsiniz:"
                  : "You can review the privacy policy for this product:"
                }
              </p>
              <div className="flex flex-col gap-3">
                {product.name === "Potentials Radar" ? (
                  <Link 
                    to="/privacy/potentials-radar"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
                    style={{ background: colors.accent1, color: "#06120b" }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {lang === "tr" ? "Potentials Radar Gizlilik Politikası" : "Potentials Radar Privacy Policy"}
                  </Link>
                ) : (
                  <Link 
                    to="/privacy"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
                    style={{ background: colors.accent1, color: "#06120b" }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {lang === "tr" ? "Genel Gizlilik Politikası" : "General Privacy Policy"}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
