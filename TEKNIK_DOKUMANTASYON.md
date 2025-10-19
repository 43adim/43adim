# 43 ADIM Projesi - Teknik Dokümantasyon

## Genel Bakış

**43 ADIM Projesi**, 3 ADIM Projesi, Kütahya İl Millî Eğitim Müdürlüğü AR-GE Birimi tarafından geliştirilen; il genelinde yürütülen dokuz yenilikçi eğitim projesini kapsayan bütüncül bir oluşumdur.
Bu proje, öğrencilerin bireysel yetenek ve potansiyellerinin keşfedilmesi, eğitim kalitesinin yükseltilmesi ve toplumsal değerlerle bütünleşen bir öğrenme kültürünün güçlendirilmesi amacıyla tasarlanmıştır.
Türkiye Yüzyılı Maarif Modeli’nin temel ilkeleri olan Erdem, Değer ve Eylem doğrultusunda şekillenen 43 ADIM, bilgiyle birlikte erdemli birey olma bilincini de merkeze alır.
Bu yönüyle proje; sadece akademik gelişimi değil, aynı zamanda ahlakî, estetik ve toplumsal duyarlılığı da destekleyen bir eğitim yaklaşımını temsil eder.
43 ADIM, Kütahya’da eğitimin yenilikçi vizyonunu simgeleyen; geleceğe güçlü adımlar atan, insanı merkeze alan bir eğitim hareketidir.

## Uygulama Amacı

- Öğrencilerin yetenek ve potansiyellerinin erken yaşta keşfedilmesi, bu sayede bireysel farklılıkların eğitim sürecine değer katan unsurlar hâline getirilmesi,
- Bilimsel, kültürel, sanatsal ve toplumsal alanlarda etkin, üretken ve sorumluluk bilinci gelişmiş bireyler yetiştirilmesi,
- Veli, öğretmen ve okul yöneticileri arasında güçlü bir iş birliği ve iletişim kültürünün oluşturulması,
- Eğitimde sürdürülebilirlik bilincinin yerleşmesiyle, Türkiye Yüzyılı Maarif Modeli’nin “Erdem, Değer, Eylem” yaklaşımını yaşatan kalıcı bir eğitim kültürünün inşa edilmesi.

## Teknik Yapı

### Frontend Teknolojileri
- **HTML5**: Semantik yapı ve erişilebilirlik
- **CSS3**: Modern stil ve responsive tasarım
- **Tailwind CSS 3.4.3**: Utility-first CSS framework
- **Vanilla JavaScript**: Dinamik işlevsellik ve API entegrasyonu

### Dosya Yapısı
```
├── index.html              # Ana sayfa
├── proje.html             # Proje detay sayfası
├── assets/
│   ├── css/
│   │   ├── proje.css      # Proje sayfası stilleri
│   │   └── footer.css     # Footer stilleri
│   ├── js/
│   │   ├── main.js        # Ana JavaScript dosyası
│   │   ├── proje.js       # Proje detay işlevleri
│   │   └── footer.js      # Footer bileşeni
│   └── data/
│       ├── projects.json  # Proje meta verileri
│       └── [proje].json   # Her proje için ayrı veri dosyası
```

## Özellikler

### 1. Responsive Tasarım
- Mobil öncelikli tasarım yaklaşımı
- Tüm cihaz boyutlarında uyumlu görünüm
- Dinamik grid sistemi

### 2. Dinamik İçerik Yönetimi
- JSON tabanlı veri yapısı
- Proje bilgilerinin dinamik yüklenmesi
- URL parametreleri ile sayfa yönlendirme

### 3. Tema Sistemi
- CSS değişkenleri ile dinamik renk yönetimi
- Her proje için özel renk teması
- Karanlık/aydınlık mod desteği
- LocalStorage ile tema kalıcılığı

### 4. İnteraktif Özellikler
- Yumuşak scroll animasyonları
- Hover efektleri ve geçiş animasyonları
- Dinamik sayfa başlığı güncelleme
- Aktif menü öğesi vurgulama

## Proje Modülleri

Uygulama 9 farklı eğitim projesini kapsar:

1. **Yeşil Adım** - Çevre bilinci ve sürdürülebilirlik
2. **Veli Katılım Sistemi** - Okul-aile iş birliği
3. **Birlikte Okuduk Birlikte Yorumladık** - Okuma kültürü
4. **Güçlü Adımlar** - Akademik ve sosyal gelişim
5. **Okulda Nezaket Hareketi** - Değer eğitimi
6. **Değerlerin Sahnesi** - Sanatsal ifade
7. **Geleneksel Çocuk Oyunları** - Kültürel miras
8. **Kütahya Yardımlaşıyor** - Sosyal dayanışma
9. **Keşfet Öğren** - Deneyimsel öğrenme

## Veri Yapısı

### Projects.json Şeması
```json
{
  "proje": "string",
  "renk": "hex_color",
  "amac": "string",
  "hedef_kitle": "string",
  "uygulama_adimlari": ["array"],
  "aciklama": "string"
}
```

### Faaliyet Verileri
Her proje için ayrı JSON dosyası:
- Başlangıç/Bitiş Tarihleri
- Faaliyet Açıklamaları
- Hedef Kitle Bilgileri
- TYMM Değer Alanları

## Performans Özellikleri

### Optimizasyon Teknikleri
- CDN üzerinden Tailwind CSS yükleme
- Minimal JavaScript kullanımı
- Lazy loading için hazır yapı
- Compressed CSS ve JS dosyaları

### Erişilebilirlik
- Semantic HTML yapısı
- ARIA etiketleri
- Klavye navigasyonu desteği
- Renk kontrastı uyumluluğu

## Tarayıcı Uyumluluğu
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobil tarayıcılar

## Güvenlik Özellikleri
- XSS koruması için güvenli DOM manipülasyonu
- HTTPS ready yapı
- Input sanitization
- KVKK uyumlu veri işleme

## Geliştirme Notları

### Kod Standartları
- ES6+ JavaScript özellikleri
- Modüler CSS yapısı
- Semantic HTML5 etiketleri
- Progressive Enhancement yaklaşımı

### Bakım ve Güncelleme
- JSON dosyaları üzerinden kolay içerik güncelleme
- Modüler CSS yapısı ile kolay stil değişiklikleri
- Versiyon kontrolü için hazır yapı

## Kurulum ve Çalıştırma

1. Dosyaları web sunucusuna yükleyin
2. `index.html` dosyasını tarayıcıda açın
3. Proje detayları için URL parametresi kullanın: `proje.html?proje=YesilAdim`

## Gelecek Geliştirmeler

- PWA (Progressive Web App) desteği
- Offline çalışma özelliği
- API entegrasyonu
- Kullanıcı yönetim sistemi
- Analitik ve raporlama modülü

---

**Geliştirici:** Kütahya İl MEM AR-GE Birimi  
**Versiyon:** 1.0  
**Son Güncelleme:** 2025