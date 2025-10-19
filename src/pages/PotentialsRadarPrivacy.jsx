import { useState } from "react";
import { ArrowLeft, Shield, Smartphone, Mail, Lock } from "lucide-react";
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

export default function PotentialsRadarPrivacy() {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('privacy-lang');
    return savedLang || "en";
  });

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('privacy-lang', newLang);
  };

  return (
    <div className="min-h-screen w-full" style={{ background: colors.bg, overflowY: 'auto' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5" style={{ backgroundColor: "rgba(15,12,30,0.4)" }}>
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={azakliLogo} 
              alt="Azakli Studio Logo" 
              className="w-8 h-8 rounded-xl object-cover"
              style={{ boxShadow: `0 4px 20px ${colors.accent2}44` }}
            />
            <ArrowLeft className="w-5 h-5" style={{ color: colors.text }} />
            <span className="font-semibold" style={{ color: colors.text }}>
              {lang === "tr" ? "Ana Sayfaya Dön" : "Back to Home"}
            </span>
          </a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" style={{ color: colors.accent1 }} />
              <span className="text-sm font-medium" style={{ color: colors.text }}>
                {lang === "tr" ? "Potentials Radar Gizlilik Politikası" : "Potentials Radar Privacy Policy"}
              </span>
            </div>
            <button 
              onClick={() => handleLangChange(lang === "tr" ? "en" : "tr")}
              className="px-4 py-2 rounded-lg border text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ 
                borderColor: "#ffffff22", 
                color: colors.text,
                background: "rgba(255,255,255,0.05)"
              }}
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-8 pb-16" style={{ minHeight: 'calc(100vh - 200px)' }}>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl" style={{ background: `linear-gradient(135deg, ${colors.accent1}20, ${colors.accent2}20)` }}>
              <Smartphone className="w-8 h-8" style={{ color: colors.accent1 }} />
            </div>
            <h1 className="text-4xl font-bold" style={{ color: colors.text }}>
              {lang === "tr" ? "Potentials Radar - Gizlilik Politikası" : "Potentials Radar - Privacy Policy"}
            </h1>
          </div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.mute }}>
            {lang === "tr" 
              ? "Potentials Radar uygulamasını kullandığınız için teşekkür ederiz. Bu sayfa, uygulamamızı kullanırken toplanan, kullanılan ve korunan bilgilerinizi açıklar."
              : "Thank you for using the Potentials Radar application. This page describes the information we collect, use, and protect when you use our app."
            }
          </p>
        </div>

        <div className="rounded-2xl p-8 border" style={{ background: colors.surface, borderColor: "#ffffff14" }}>
          
          <div className="prose prose-invert max-w-none overflow-visible" style={{ color: colors.mute }}>
            {lang === "tr" ? (
              <>
                <div className="mb-8 p-6 rounded-xl border" style={{ 
                  background: `linear-gradient(135deg, ${colors.accent1}10, ${colors.accent2}10)`, 
                  borderColor: `${colors.accent1}30`,
                  color: colors.text 
                }}>
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={potentialsRadarLogo} 
                      alt="Potentials Radar Logo" 
                      className="w-6 h-6 rounded-lg object-cover"
                      style={{ boxShadow: `0 2px 10px ${colors.accent1}44` }}
                    />
                    <h3 className="text-lg font-semibold" style={{ color: colors.text }}>
                      {lang === "tr" ? "Uygulama Bilgileri" : "App Information"}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent1 }} />
                      <span className="text-sm"><strong>Son Güncelleme:</strong> 3 Eylül 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent2 }} />
                      <span className="text-sm"><strong>Uygulama Adı:</strong> Potentials Radar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent1 }} />
                      <span className="text-sm"><strong>Geliştirici:</strong> Azakli Studio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" style={{ color: colors.accent1 }} />
                      <span className="text-sm"><strong>E-posta:</strong> <a href="mailto:azakli.dev@gmail.com" style={{ color: colors.accent1 }}>azakli.dev@gmail.com</a></span>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>1. Giriş</h2>
                <p className="mb-4">
                  Potentials Radar uygulamasını ("Uygulama") kullandığınız için teşekkür ederiz. Bu Gizlilik Politikası, uygulamamızı kullanırken toplanan, kullanılan ve korunan bilgilerinizi açıklar.
                </p>
                <p className="mb-6">
                  Bu politikayı kabul ederek, belirtilen şekilde bilgilerinizi toplamamıza ve kullanmamıza izin vermiş olursunuz.
                </p>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>2. Toplanan Bilgiler</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>2.1 Otomatik Olarak Toplanan Bilgiler</h3>
                <p className="mb-2"><strong>Cihaz Bilgileri:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Cihaz modeli ve işletim sistemi</li>
                  <li>Uygulama sürümü</li>
                  <li>Benzersiz cihaz tanımlayıcıları</li>
                  <li>Ekran çözünürlüğü ve donanım bilgileri</li>
                </ul>
                
                <p className="mb-2"><strong>Kullanım Verileri:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Uygulama içi etkileşimler</li>
                  <li>Özellik kullanım istatistikleri</li>
                  <li>Hata raporları ve performans verileri</li>
                  <li>Oturum süreleri</li>
                </ul>
                
                <p className="mb-2"><strong>Ağ Bilgileri:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>İnternet bağlantı türü</li>
                  <li>IP adresi (genel konum bilgisi için)</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>2.2 Kullanıcı Tarafından Sağlanan Bilgiler</h3>
                <p className="mb-2"><strong>Premium Özellikler:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Satın alma geçmişi</li>
                  <li>Abonelik bilgileri</li>
                  <li>Ödeme yöntemi (işlenir ancak saklanmaz)</li>
                </ul>
                
                <p className="mb-2"><strong>Kullanıcı İçeriği:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Favori oyuncu listeleri</li>
                  <li>Takım oluşturmaları</li>
                  <li>Filtre tercihleri</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>3. Kullanılan Hizmetler</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>3.1 Firebase (Google)</h3>
                <p className="mb-2"><strong>Analytics:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Kullanıcı davranış analizi</li>
                  <li>Uygulama performans metrikleri</li>
                  <li>Hata izleme ve raporlama</li>
                </ul>
                
                <p className="mb-2"><strong>Authentication:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Anonim kullanıcı kimlik doğrulama</li>
                  <li>Güvenli oturum yönetimi</li>
                </ul>
                
                <p className="mb-2"><strong>Cloud Storage:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Veritabanı dosyalarının güvenli saklanması</li>
                  <li>Yedekleme ve senkronizasyon</li>
                </ul>
                
                <p className="mb-2"><strong>Cloud Firestore:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Kullanıcı verilerinin bulut tabanlı saklanması</li>
                  <li>Gerçek zamanlı veri senkronizasyonu</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>3.2 RevenueCat</h3>
                <p className="mb-2"><strong>Abonelik Yönetimi:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Premium özellik satın alma işlemleri</li>
                  <li>Abonelik durumu takibi</li>
                  <li>Ödeme doğrulama</li>
                </ul>
                
                <p className="mb-2"><strong>Kullanıcı Kimliği:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Firebase ile entegre anonim kullanıcı ID'leri</li>
                  <li>Satın alma geçmişi korunması</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>3.3 Google AdMob</h3>
                <p className="mb-2"><strong>Reklam Hizmetleri:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Kişiselleştirilmiş reklam gösterimi</li>
                  <li>Reklam performans analizi</li>
                  <li>Kullanıcı reklam etkileşimleri</li>
                </ul>
                
                <p className="mb-2"><strong>Reklam Tanımlayıcıları:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Android Advertising ID (AAID)</li>
                  <li>iOS Identifier for Advertisers (IDFA)</li>
                </ul>

                <div className="mb-6 p-4 rounded-xl" style={{ background: "#fff3cd", border: "1px solid #ffc107" }}>
                  <p className="mb-2"><strong>Bu veriler; Uygulama işlevselliği, Analiz, Reklam ve Hesap yönetimi (abonelik) amaçlarıyla kullanılır; satılmaz ve isteğe bağlı kişiselleştirme sunulur.</strong></p>
                  <p className="mb-0"><strong>Kişisel verilerinizi satmıyoruz.</strong></p>
                </div>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>4. Bilgilerin Kullanım Amaçları</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>4.1 Temel Hizmetler</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Uygulama işlevselliğini sağlama</li>
                  <li>Kullanıcı deneyimini iyileştirme</li>
                  <li>Teknik sorunları çözme</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>4.2 Premium Özellikler</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Satın alma işlemlerini işleme</li>
                  <li>Abonelik durumunu yönetme</li>
                  <li>Premium içerik erişimini sağlama</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>4.3 Analiz ve Geliştirme</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Uygulama performansını izleme</li>
                  <li>Kullanıcı davranışlarını analiz etme</li>
                  <li>Yeni özellikler geliştirme</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>4.4 Reklam Hizmetleri</h3>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Kişiselleştirilmiş reklam gösterme</li>
                  <li>Reklam etkinliğini ölçme</li>
                  <li>Reklam gelirlerini optimize etme</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>5. Veri Güvenliği</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>5.1 Güvenlik Önlemleri</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>SSL/TLS şifreleme</li>
                  <li>Güvenli veri depolama</li>
                  <li>Düzenli güvenlik güncellemeleri</li>
                  <li>Erişim kontrolü ve yetkilendirme</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>5.2 Veri Saklama</h3>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Kullanıcı verileri güvenli sunucularda saklanır</li>
                  <li>Yedekleme ve felaket kurtarma planları</li>
                  <li>Düzenli güvenlik denetimleri</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>6. Kullanıcı Hakları</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>6.1 Bilgi Erişimi</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Toplanan verilerinizi görüntüleme</li>
                  <li>Veri kullanım amacını öğrenme</li>
                  <li>Veri işleme süreçlerini anlama</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>6.2 Veri Düzenleme</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Yanlış bilgileri düzeltme</li>
                  <li>Eksik bilgileri tamamlama</li>
                  <li>Güncel bilgileri sağlama</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>6.3 Veri Silme</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Hesap kapatma talebi</li>
                  <li>Kişisel verilerin silinmesi</li>
                  <li>Anonimleştirme seçeneği</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>6.4 Veri Taşınabilirliği</h3>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Verilerinizi dışa aktırma</li>
                  <li>Başka hizmetlere aktarma</li>
                  <li>Standart formatlarda veri sağlama</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>7. Çocukların Gizliliği</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>7.1 Yaş Sınırı</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Uygulamamız 13 yaş altı kullanıcılar için tasarlanmamıştır</li>
                  <li>13 yaş altı kullanıcılardan bilerek bilgi toplamayız</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>7.2 Ebeveyn Onayı</h3>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>13-18 yaş arası kullanıcılar için ebeveyn onayı gerekebilir</li>
                  <li>Ebeveynler çocuklarının verilerini kontrol edebilir</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>8. İletişim</h2>
                
                <div className="mb-6 p-4 rounded-xl" style={{ background: "#d1ecf1", border: "1px solid #17a2b8" }}>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>8.1 Gizlilik Soruları</h3>
                  <p className="mb-2">Gizlilik politikamız hakkında sorularınız için:</p>
                  <p className="mb-4"><strong>E-posta:</strong> <a href="mailto:azakli.dev@gmail.com" style={{ color: "#3498db" }}>azakli.dev@gmail.com</a></p>
                  
                  <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>8.2 Veri Koruma Sorumlusu</h3>
                  <p className="mb-2">Veri koruma konularında:</p>
                  <p className="mb-4"><strong>E-posta:</strong> <a href="mailto:azakli.dev@gmail.com" style={{ color: "#3498db" }}>azakli.dev@gmail.com</a></p>

                  <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>8.3 Şirket Adresi</h3>
                  <p className="mb-2">Şirket bilgileri:</p>
                  <p className="mb-0"><strong>Adres:</strong> Türkiye</p>
                </div>

                <div className="mb-6 p-4 rounded-xl" style={{ background: "#fff3cd", border: "1px solid #ffc107" }}>
                  <p className="mb-0"><strong>Not:</strong> Bu gizlilik politikası, uygulamamızın mevcut özelliklerini ve kullanılan hizmetleri yansıtır. Uygulama güncellemeleri ile birlikte politika da güncellenebilir. En güncel versiyonu için uygulamayı kontrol etmenizi öneririz.</p>
                </div>

                <div className="text-center p-4 border-t" style={{ borderColor: "#ffffff14" }}>
                  <p className="mb-2"><strong>Son Güncelleme Tarihi:</strong> 3 Eylül 2025</p>
                  <p className="mb-0"><strong>Versiyon:</strong> 1.0.0</p>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8 p-6 rounded-xl border" style={{ 
                  background: `linear-gradient(135deg, ${colors.accent1}10, ${colors.accent2}10)`, 
                  borderColor: `${colors.accent1}30`,
                  color: colors.text 
                }}>
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={potentialsRadarLogo} 
                      alt="Potentials Radar Logo" 
                      className="w-6 h-6 rounded-lg object-cover"
                      style={{ boxShadow: `0 2px 10px ${colors.accent1}44` }}
                    />
                    <h3 className="text-lg font-semibold" style={{ color: colors.text }}>
                      App Information
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent1 }} />
                      <span className="text-sm"><strong>Last Updated:</strong> September 3, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent2 }} />
                      <span className="text-sm"><strong>App Name:</strong> Potentials Radar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accent1 }} />
                      <span className="text-sm"><strong>Developer:</strong> Azakli Studio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" style={{ color: colors.accent1 }} />
                      <span className="text-sm"><strong>Email:</strong> <a href="mailto:azakli.dev@gmail.com" style={{ color: colors.accent1 }}>azakli.dev@gmail.com</a></span>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>1. Introduction</h2>
                <p className="mb-4">
                  Thank you for using the Potentials Radar application ("App"). This Privacy Policy describes the information we collect, use, and protect when you use our app.
                </p>
                <p className="mb-6">
                  By accepting this policy, you consent to our collection and use of your information as described.
                </p>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>2. Information We Collect</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>2.1 Automatically Collected Information</h3>
                <p className="mb-2"><strong>Device Information:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Device model and operating system</li>
                  <li>App version</li>
                  <li>Unique device identifiers</li>
                  <li>Screen resolution and hardware information</li>
                </ul>
                
                <p className="mb-2"><strong>Usage Data:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>In-app interactions</li>
                  <li>Feature usage statistics</li>
                  <li>Error reports and performance data</li>
                  <li>Session durations</li>
                </ul>
                
                <p className="mb-2"><strong>Network Information:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Internet connection type</li>
                  <li>IP address (for general location information)</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>2.2 User-Provided Information</h3>
                <p className="mb-2"><strong>Premium Features:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Purchase history</li>
                  <li>Subscription information</li>
                  <li>Payment method (processed but not stored)</li>
                </ul>
                
                <p className="mb-2"><strong>User Content:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Favorite player lists</li>
                  <li>Team formations</li>
                  <li>Filter preferences</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>3. Services We Use</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>3.1 Firebase (Google)</h3>
                <p className="mb-2"><strong>Analytics:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>User behavior analysis</li>
                  <li>App performance metrics</li>
                  <li>Error tracking and reporting</li>
                </ul>
                
                <p className="mb-2"><strong>Authentication:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Anonymous user authentication</li>
                  <li>Secure session management</li>
                </ul>
                
                <p className="mb-2"><strong>Cloud Storage:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Secure storage of database files</li>
                  <li>Backup and synchronization</li>
                </ul>
                
                <p className="mb-2"><strong>Cloud Firestore:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Cloud-based storage of user data</li>
                  <li>Real-time data synchronization</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>3.2 RevenueCat</h3>
                <p className="mb-2"><strong>Subscription Management:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Premium feature purchase transactions</li>
                  <li>Subscription status tracking</li>
                  <li>Payment verification</li>
                </ul>
                
                <p className="mb-2"><strong>User Identity:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Firebase-integrated anonymous user IDs</li>
                  <li>Purchase history preservation</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>3.3 Google AdMob</h3>
                <p className="mb-2"><strong>Advertising Services:</strong></p>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Personalized ad display</li>
                  <li>Ad performance analysis</li>
                  <li>User ad interactions</li>
                </ul>
                
                <p className="mb-2"><strong>Advertising Identifiers:</strong></p>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Android Advertising ID (AAID)</li>
                  <li>iOS Identifier for Advertisers (IDFA)</li>
                </ul>

                <div className="mb-6 p-4 rounded-xl" style={{ background: "#fff3cd", border: "1px solid #ffc107" }}>
                  <p className="mb-2"><strong>This data is used for App functionality, Analytics, Advertising, and Account management (subscription) purposes; it is not sold and optional personalization is offered.</strong></p>
                  <p className="mb-0"><strong>We do not sell your personal data.</strong></p>
                </div>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>4. How We Use Information</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>4.1 Core Services</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Providing app functionality</li>
                  <li>Improving user experience</li>
                  <li>Resolving technical issues</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>4.2 Premium Features</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Processing purchase transactions</li>
                  <li>Managing subscription status</li>
                  <li>Providing premium content access</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>4.3 Analytics and Development</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Monitoring app performance</li>
                  <li>Analyzing user behavior</li>
                  <li>Developing new features</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>4.4 Advertising Services</h3>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Displaying personalized ads</li>
                  <li>Measuring ad effectiveness</li>
                  <li>Optimizing ad revenue</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>5. Data Security</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>5.1 Security Measures</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>SSL/TLS encryption</li>
                  <li>Secure data storage</li>
                  <li>Regular security updates</li>
                  <li>Access control and authorization</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>5.2 Data Storage</h3>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>User data stored on secure servers</li>
                  <li>Backup and disaster recovery plans</li>
                  <li>Regular security audits</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>6. User Rights</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>6.1 Data Access</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>View your collected data</li>
                  <li>Learn the purpose of data use</li>
                  <li>Understand data processing procedures</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>6.2 Data Correction</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Correct inaccurate information</li>
                  <li>Complete missing information</li>
                  <li>Provide updated information</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>6.3 Data Deletion</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Request account closure</li>
                  <li>Delete personal data</li>
                  <li>Anonymization option</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>6.4 Data Portability</h3>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Export your data</li>
                  <li>Transfer to other services</li>
                  <li>Provide data in standard formats</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>7. Children's Privacy</h2>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>7.1 Age Limit</h3>
                <ul className="mb-4 space-y-1 list-disc list-inside">
                  <li>Our app is not designed for users under 13</li>
                  <li>We do not knowingly collect information from users under 13</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>7.2 Parental Consent</h3>
                <ul className="mb-6 space-y-1 list-disc list-inside">
                  <li>Parental consent may be required for users aged 13-18</li>
                  <li>Parents can control their children's data</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>8. Contact</h2>
                
                <div className="mb-6 p-4 rounded-xl" style={{ background: "#d1ecf1", border: "1px solid #17a2b8" }}>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>8.1 Privacy Questions</h3>
                  <p className="mb-2">For questions about our privacy policy:</p>
                  <p className="mb-4"><strong>Email:</strong> <a href="mailto:azakli.dev@gmail.com" style={{ color: "#3498db" }}>azakli.dev@gmail.com</a></p>
                  
                  <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>8.2 Data Protection Officer</h3>
                  <p className="mb-2">For data protection matters:</p>
                  <p className="mb-4"><strong>Email:</strong> <a href="mailto:azakli.dev@gmail.com" style={{ color: "#3498db" }}>azakli.dev@gmail.com</a></p>

                  <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>8.3 Company Address</h3>
                  <p className="mb-2">Company information:</p>
                  <p className="mb-0"><strong>Address:</strong> Turkey</p>
                </div>

                <div className="mb-6 p-4 rounded-xl" style={{ background: "#fff3cd", border: "1px solid #ffc107" }}>
                  <p className="mb-0"><strong>Note:</strong> This privacy policy reflects the current features of our app and the services used. The policy may be updated with app updates. We recommend checking the app for the most current version.</p>
                </div>

                <div className="text-center p-4 border-t" style={{ borderColor: "#ffffff14" }}>
                  <p className="mb-2"><strong>Last Updated:</strong> September 3, 2025</p>
                  <p className="mb-0"><strong>Version:</strong> 1.0.0</p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
