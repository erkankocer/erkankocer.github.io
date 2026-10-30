# Nova Market

Modern, SEO uyumlu ve responsive perakende sitesi. Proje iki şekilde çalışır:

- **GitHub Pages:** Kök dizindeki `index.html` doğrudan statik olarak yayınlanır.
- **Python/Flask:** `app.py`, aynı tasarımı yerel Flask sunucusuyla çalıştırır.

## Yerel çalıştırma

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
py app.py
```

Tarayıcıdan `http://127.0.0.1:5000` adresini açın.

## GitHub üzerinden yayınlama

1. GitHub'da **New repository** ile `erkankocer.github.io` adında yeni bir repository oluşturun.
2. Bu klasörde terminal açıp aşağıdaki komutları çalıştırın:

```powershell
git init
git add .
git commit -m "Create Nova Market website"
git branch -M main
git remote add origin https://github.com/erkankocer/erkankocer.github.io.git
git push -u origin main
```

3. GitHub repository sayfasında **Settings → Pages** bölümüne gidin.
4. **Build and deployment** altında **Source: Deploy from a branch**, branch olarak `main`, klasör olarak `/ (root)` seçin ve **Save** düğmesine basın.
5. Site birkaç dakika içinde şu adreste açılır:
   `https://erkankocer.github.io/`
6. SEO için `index.html` içindeki `canonical`, `og:url` ve JSON-LD içindeki URL'yi kendi GitHub Pages adresinizle değiştirin.

> GitHub Pages Python/Flask sunucusu çalıştırmaz; bu nedenle Pages üzerinde kök `index.html` yayınlanır. Flask sürümü yerel geliştirme veya Flask destekleyen bir hosting (Render, Railway, PythonAnywhere vb.) içindir.

## Ürün kataloğu ve görseller

`static/script.js` içindeki katalog üreticisi 25 market kategorisindeki 200 ürün ailesini 5 marka ve 5 ambalaj seçeneğiyle çeşitlendirerek tam 5.000 ürün oluşturur. Her ürünün adı, kategori bilgisi, fiyatı, açıklaması, SEO başlığı, SEO açıklaması, anahtar kelimeleri ve görsel yolu bulunur.

Geçici yerel ürün görselleri `static/images/` klasöründedir:

```text
static/images/
├── food.svg
├── kitchen.svg
├── care.svg
├── home.svg
├── coffee.svg
├── snack.svg
├── personal.svg
├── cleaning.svg
├── textile.svg
├── sauce.svg
├── kids.svg
└── beauty.svg
```

Kendi ürün fotoğrafınızı eklemek için dosyayı `static/images/` içine boşluksuz ve Türkçe karaktersiz bir adla koyun. Ardından `static/script.js` içindeki ilgili ürünün `image` alanını şu biçimde değiştirin:

```javascript
image: "static/images/urun-fotografi.webp"
```

Arama simgesi artık tarayıcı penceresi açmaz. Arama panelindeki kutuya en az üç harf yazıldığında ürün adı, kategori ve anahtar kelimelerde eşleşen sonuçlar; ürün görseli, açıklaması ve fiyatıyla anında listelenir.

Katalogda sayfa başına 20, 50 veya 100 ürün seçilebilir. Ürün aralığı ve toplam ürün sayısı gösterilir; önceki/sonraki sayfa kontrolleriyle katalog gezilebilir. Öne Çıkanlar bağlantısı, kategori filtresinden bağımsız olarak farklı market kategorilerinden seçilmiş ürünleri gösterir. Kategori kartları ise yalnızca seçilen kategoriye ait ürünleri listeler.

Sepet paneli ürün ekleme, adet artırma/azaltma, ürün silme ve toplam tutar hesaplama özelliklerine sahiptir. Ödeme penceresi kart, havale ve kapıda ödeme seçeneklerini; kapıda ödeme için teslimat adresi alanlarını sunan bir demodur. Gerçek tahsilat için güvenli bir ödeme sağlayıcısı ve backend entegrasyonu gerekir.

Sepet özetinde KDV hariç ara toplam, uygulanan indirim, indirim sonrası KDV ve ödenecek toplam ayrı satırlarda gösterilir. Üyelikli siparişler aktif siparişler ve teslim edilmiş eski siparişler olarak ayrılır; sipariş detayında kod, oluşturulma tarihi, saat, ürünler, ürün tutarları ve durum bilgisi bulunur.

## Hesap sayfası ve sipariş geçmişi

Demo kullanıcı bilgileriyle giriş yapıldığında modal kapanır ve tam hesap sayfası açılır. Bu sayfada kişisel bilgiler, kayıtlı kart görünümü, adresler, geçmiş siparişler ve hesap ayarları sekmeleri bulunur. Üyelikli siparişler tarayıcının `localStorage` alanına demo olarak kaydedilir; gerçek kullanıcı hesabı ve sipariş geçmişi için backend ve veritabanı gerekir.

## Ürün görsellerini API ile getirme

Mevcut katalog varsayılan olarak `static/images/` içindeki yerel SVG görselleri kullanır. API ile görsel eklemek mümkündür; ancak GitHub Pages üzerinde API anahtarını JavaScript içine koymak güvenli değildir. Unsplash Source, Pexels veya kendi backend proxy'niz kullanılabilir.

Basit, anahtarsız bir örnek:

```javascript
const imageForApi = (query) =>
  `https://source.unsplash.com/800x800/?${encodeURIComponent(query)}`;

// Ürün oluşturulurken:
image: imageForApi(`${base} ${category}`)
```

Üretim için önerilen yöntem:

1. Ürün ve görsel eşleşmelerini bir JSON/CSV dosyasında tutun.
2. Backend üzerinden Pexels/Unsplash API çağrısı yapın.
3. API anahtarını `.env` içinde yalnızca backend'de saklayın.
4. Dönen `image` URL'sini ürün nesnesine yazın veya kendi CDN'nizde önbelleğe alın.
5. Görsel kullanım lisansını ve kaynak bilgisini kontrol edin.

Harici görsellerin URL'si her zaman kalıcı olmayabilir; performans, CORS, kota ve lisans sınırları nedeniyle gerçek mağaza için görselleri kendi depolama/CDN alanınıza almanız daha güvenlidir.
