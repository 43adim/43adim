# 43 ADIM Projesi Web Sitesi

Kütahya İl Millî Eğitim Müdürlüğü AR-GE Birimi tarafından geliştirilen 43 ADIM eğitim projelerinin modern, responsive web sitesi.

## 🚀 Canlı Demo

Bu proje GitHub Pages üzerinde yayınlanmıştır: [43 ADIM Projesi](https://your-username.github.io/43adim-web)

## 📋 Proje Hakkında

43 ADIM Projesi, Kütahya'da öğrenme kültürünü toplumsal değerlerle harmanlayarak güçlendiren 9 farklı eğitim projesini içerir. Bu web sitesi, projelerin tanıtımı, detayları ve takibi için geliştirilmiştir.

### 🎯 Özellikler

- **Modern ve Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **İnteraktif Proje Galerisi**: Renk kodlu proje kartları ve hover efektleri
- **Dinamik Zaman Çizelgesi**: Her proje için interaktif timeline görünümü
- **Canlı İzleme Sistemi**: Kullanıcı etkileşimlerinin gerçek zamanlı takibi
- **Mobil Öncelikli**: Touch-friendly arayüz ve mobil optimizasyonu
- **GitHub Pages Uyumlu**: Tamamen statik dosyalar ile çalışır

## 🏗️ Teknoloji Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **CSS Framework**: Tailwind CSS 3.4.3 (CDN)
- **Veri Depolama**: JSON dosyları (manuel güncelleme)
- **Hosting**: GitHub Pages
- **İzleme**: Client-side analytics (localStorage)

## 📁 Proje Yapısı

```
43adim-web/
├── index.html              # Ana sayfa - proje galerisi
├── proje.html              # Proje detay sayfası
├── monitor.html            # Canlı izleme paneli
├── assets/
│   ├── css/
│   │   ├── main.css        # Ana stil dosyası
│   │   ├── proje.css       # Proje sayfası stilleri
│   │   ├── timeline.css    # Zaman çizelgesi stilleri
│   │   └── footer.css      # Footer stilleri
│   ├── js/
│   │   ├── main.js         # Ana sayfa JavaScript
│   │   ├── proje.js        # Proje sayfası JavaScript
│   │   ├── timeline.js     # İnteraktif timeline
│   │   ├── monitor.js      # İzleme sistemi
│   │   ├── footer.js       # Footer işlevleri
│   │   └── imageUtils.js   # Görsel yönetimi
│   ├── data/
│   │   ├── projects.json   # Genel proje listesi
│   │   └── [proje-adi].json # Her proje için ayrı JSON
│   └── images/
│       ├── logos/          # Proje logoları
│       ├── projects/       # Proje görselleri
│       ├── speakers/       # Konuşmacı fotoğrafları
│       └── common/         # Ortak görseller
└── README.md               # Bu dosya
```

## 🚀 Kurulum ve Çalıştırma

### GitHub Pages ile Deployment

1. Bu repository'yi fork edin veya kendi hesabınıza kopyalayın
2. Repository ayarlarından GitHub Pages'i etkinleştirin
3. Source olarak "Deploy from a branch" seçin
4. Branch olarak "main" ve folder olarak "/ (root)" seçin
5. Siteniz `https://[kullanici-adi].github.io/[repo-adi]` adresinde yayınlanacaktır

### Yerel Geliştirme

```bash
# Repository'yi klonlayın
git clone https://github.com/[kullanici-adi]/43adim-web.git

# Proje dizinine gidin
cd 43adim-web

# Basit bir HTTP server başlatın (Python 3)
python -m http.server 8000

# Veya Node.js ile
npx serve .

# Tarayıcıda http://localhost:8000 adresini açın
```

## 📊 Projeler

Web sitesinde yer alan 9 proje:

1. **Yeşil Adım** - Çevre bilinci ve sürdürülebilirlik
2. **Veli Katılım Sistemi** - Dijital veli katılım platformu
3. **Birlikte Okuduk Birlikte Yorumladık** - Aile okuma kültürü
4. **Güçlü Adımlar** - DYK sınav hazırlık programı
5. **Okulda Nezaket Hareketi** - Akran zorbalığı önleme
6. **Değerlerin Sahnesi** - Tiyatro ile değerler eğitimi
7. **Geleneksel Çocuk Oyunları** - Kültürel miras koruma
8. **Kütahya Yardımlaşıyor** - Sosyal sorumluluk projesi
9. **Keşfet Öğren** - Özel eğitim bilim etkinlikleri

## 🔧 Veri Güncelleme

### Proje Verilerini Güncelleme

1. `assets/data/` klasöründeki ilgili JSON dosyasını düzenleyin
2. Değişiklikleri commit edin ve push yapın
3. GitHub Pages otomatik olarak güncellenecektir

### Yeni Proje Ekleme

1. `assets/data/` klasörüne yeni proje JSON dosyası ekleyin
2. `assets/data/projects.json` dosyasını güncelleyin
3. Proje logosunu `assets/images/logos/` klasörüne ekleyin
4. `index.html` dosyasındaki proje kartlarını güncelleyin

### JSON Dosya Formatı

```json
{
  "proje": "Proje Adı",
  "renk": "#HexColor",
  "logo": "path/to/logo.png",
  "amac": "Proje amacı açıklaması",
  "hedef_kitle": "Hedef kitle bilgisi",
  "aciklama": "Detaylı açıklama",
  "uygulama_adimlari": [
    "Adım 1",
    "Adım 2"
  ],
  "faaliyetler": [
    {
      "Başlangıç Tarihi": "2024-01-01",
      "Bitiş Tarihi": "2024-12-31",
      "Faaliyet": "Faaliyet adı",
      "Açıklama": "Faaliyet açıklaması",
      "Hedef Kitle": "Hedef kitle",
      "TYMM Değer Alanı": "Değer alanı"
    }
  ]
}
```

## 📱 Responsive Tasarım

- **Mobile First**: 320px'den başlayan responsive tasarım
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch Optimized**: Minimum 44px dokunma alanları
- **Adaptive Tables**: Mobilde kart görünümüne dönüşen tablolar

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: Blue gradient (#667eea → #764ba2)
- **Secondary**: Project-specific colors
- **Neutral**: Gray scale (#f8fafc → #1a202c)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Headings**: System font stack with fallbacks
- **Body**: Optimized for readability
- **Scale**: Modular typography scale

## 📈 İzleme ve Analytics

Site, client-side analytics sistemi ile kullanıcı etkileşimlerini takip eder:

- **Sayfa görüntülemeleri**
- **Proje etkileşimleri**
- **Cihaz ve tarayıcı bilgileri**
- **Oturum süreleri**
- **Popüler içerik analizi**

Tüm veriler kullanıcının cihazında localStorage'da saklanır ve gizlilik odaklıdır.

## 🔒 Gizlilik

- **No External Tracking**: Harici izleme servisleri kullanılmaz
- **Local Storage Only**: Tüm analytics verileri yerel olarak saklanır
- **No Cookies**: Çerez kullanılmaz
- **GDPR Compliant**: Gizlilik dostu yaklaşım

## 🚀 Performans Optimizasyonları

- **Lazy Loading**: Görseller ve içerik gecikmeli yüklenir
- **Critical CSS**: Kritik stiller inline olarak yüklenir
- **Minified Assets**: CSS ve JavaScript dosyaları sıkıştırılmıştır
- **CDN Usage**: Tailwind CSS CDN üzerinden yüklenir
- **Image Optimization**: Responsive görseller ve WebP desteği

## 🛠️ Geliştirme

### Kod Standartları
- **HTML5 Semantic**: Anlamsal HTML yapısı
- **CSS3 Modern**: Flexbox, Grid, Custom Properties
- **ES6+ JavaScript**: Modern JavaScript özellikleri
- **Accessibility**: WCAG 2.1 AA uyumluluğu
- **SEO Optimized**: Meta tags ve structured data

### Browser Desteği
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful Degradation**: Eski tarayıcılarda temel işlevsellik

## 📞 İletişim

**Kütahya İl Millî Eğitim Müdürlüğü AR-GE Birimi**
- Web: [mem.gov.tr/kutahya](https://kutahya.meb.gov.tr)
- E-posta: kutahya@meb.gov.tr
- Telefon: +90 274 XXX XX XX

## 📄 Lisans

Bu proje Kütahya İl Millî Eğitim Müdürlüğü tarafından geliştirilmiştir. Eğitim amaçlı kullanım için açık kaynak olarak sunulmaktadır.

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Changelog

### v2.0.0 (2024)
- Modern responsive tasarım
- İnteraktif timeline sistemi
- Canlı izleme paneli
- GitHub Pages optimizasyonu
- Performans iyileştirmeleri

### v1.0.0 (2023)
- İlk versiyon
- Temel proje listesi
- Statik içerik yönetimi

---


**43 ADIM Projesi** - Kütahya'da eğitimi güçlendiren, öğrencilerin potansiyelini ortaya çıkaran yenilikçi yaklaşım.
