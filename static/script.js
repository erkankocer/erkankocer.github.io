const categorySeeds = [
  ["Meyve & sebze", "food", ["Elma", "Muz", "Domates", "Salatalık", "Avokado", "Portakal", "Çilek", "Patates"]],
  ["Et & şarküteri", "food", ["Dana kıyma", "Tavuk göğüs", "Hindi füme", "Sucuk", "Köfte", "Pastırma", "Antrikot", "Salam"]],
  ["Süt & kahvaltılık", "food", ["Günlük süt", "Beyaz peynir", "Kaşar peynir", "Yoğurt", "Tereyağı", "Yumurta", "Labne", "Kefir"]],
  ["Kahvaltı & atıştırmalık", "food", ["Granola", "Bal", "Reçel", "Fıstık ezmesi", "Mısır gevreği", "Kraker", "Badem", "Kuru üzüm"]],
  ["Bakliyat & tahıl", "food", ["Kırmızı mercimek", "Yeşil mercimek", "Nohut", "Kuru fasulye", "Bulgur", "Pirinç", "Kinoa", "Yulaf"]],
  ["Makarna & hazır yemek", "sauce", ["Spagetti", "Burgu makarna", "Erişte", "Mantı", "Hazır çorba", "Ton balığı", "Ravioli", "Lazanya"]],
  ["Konserve & sos", "sauce", ["Domates sosu", "Ketçap", "Mayonez", "Turşu", "Zeytin", "Mısır konservesi", "Acı sos", "Pesto sos"]],
  ["Kahve & içecek", "coffee", ["Filtre kahve", "Türk kahvesi", "Espresso", "Siyah çay", "Yeşil çay", "Maden suyu", "Limonata", "Soğuk kahve"]],
  ["Su & meşrubat", "coffee", ["Doğal kaynak suyu", "Kola", "Gazoz", "Meyve suyu", "Enerji içeceği", "Ice tea", "Soda", "Ayran"]],
  ["Fırın & pastane", "food", ["Somun ekmek", "Tam buğday ekmek", "Baget ekmek", "Poğaça", "Simit", "Kruvasan", "Yaş pasta", "Kurabiye"]],
  ["Temizlik", "cleaning", ["Çamaşır deterjanı", "Bulaşık deterjanı", "Yüzey temizleyici", "Cam temizleyici", "Çamaşır suyu", "Yumuşatıcı", "Toz deterjan", "Leke çıkarıcı"]],
  ["Kağıt & hijyen", "personal", ["Tuvalet kağıdı", "Kağıt havlu", "Peçete", "Islak mendil", "Kozmetik pamuk", "Kilitli poşet", "Alüminyum folyo", "Streç film"]],
  ["Kişisel bakım", "personal", ["Diş macunu", "Diş fırçası", "El kremi", "Duş jeli", "Deodorant", "Tıraş köpüğü", "Ağız bakım suyu", "Güneş kremi"]],
  ["Saç bakım", "beauty", ["Şampuan", "Saç kremi", "Saç maskesi", "Saç yağı", "Kuru şampuan", "Saç spreyi", "Tarak", "Fön suyu"]],
  ["Cilt bakım", "beauty", ["Yüz temizleme jeli", "Nemlendirici krem", "Tonik", "Serum", "Peeling", "Kil maskesi", "Göz kremi", "Dudak balmı"]],
  ["Ev & yaşam", "home", ["Kahve kupası", "Su bardağı", "Saklama kabı", "Mutfak havlusu", "Mum", "Vazo", "Masa örtüsü", "Çerçeve"]],
  ["Mutfak gereçleri", "home", ["Tava", "Tencere", "Kesme tahtası", "Bıçak seti", "Rende", "Süzgeç", "Spatula", "Çırpıcı"]],
  ["Ev tekstili", "textile", ["Banyo havlusu", "Nevresim", "Yastık kılıfı", "Battaniye", "Mutfak önlüğü", "Pike", "Kırlent", "Halı paspas"]],
  ["Elektrikli ev aletleri", "home", ["Kettle", "Blender", "Tost makinesi", "Mikser", "Kahve makinesi", "Ütü", "Saç kurutma makinesi", "Elektrikli süpürge"]],
  ["Bebek & çocuk", "kids", ["Bebek bezi", "Bebek şampuanı", "Bebek bisküvisi", "Çocuk meyve barı", "Oyuncak araba", "Boyama kitabı", "Biberon", "Emzik"]],
  ["Evcil hayvan", "snack", ["Kedi maması", "Köpek maması", "Kedi kumu", "Köpek ödülü", "Kuş yemi", "Mama kabı", "Tasma", "Tüy tarağı"]],
  ["Kırtasiye", "home", ["Defter", "Kurşun kalem", "Tükenmez kalem", "Silgi", "Ajanda", "Dosya", "Makas", "Yapıştırıcı"]],
  ["Sağlık & wellness", "personal", ["Vitamin", "Bitki çayı", "Magnezyum", "Kolajen", "Termometre", "Masaj yağı", "Aromaterapi yağı", "Protein bar"]],
  ["Bahçe & balkon", "home", ["Saksı", "Toprak", "Bitki besini", "Bahçe eldiveni", "Sulama kabı", "Tohum", "Budama makası", "Balkon feneri"]],
  ["Moda & aksesuar", "textile", ["Çorap", "Tişört", "Şapka", "Kemer", "Cüzdan", "Bez çanta", "Atkı", "Ev terliği"]]
];
const categoryMenuData = [
  ["Meyve & sebze", ["Meyveler", "Sebzeler", "Yeşillikler", "Organik ürünler"]],
  ["Et & şarküteri", ["Kırmızı et", "Beyaz et", "Şarküteri", "Köfte & hazır et"]],
  ["Süt & kahvaltılık", ["Süt & kefir", "Peynir", "Yoğurt", "Yumurta"]],
  ["Kahvaltı & atıştırmalık", ["Kahvaltılık gevrek", "Kuruyemiş", "Kraker", "Tatlı atıştırmalık"]],
  ["Bakliyat & tahıl", ["Bakliyat", "Pirinç & bulgur", "Makarna", "Yulaf & tahıl"]],
  ["Makarna & hazır yemek", ["Makarna", "Hazır çorba", "Konserve yemek", "Dondurulmuş ürün"]],
  ["Konserve & sos", ["Soslar", "Konserveler", "Turşu & zeytin", "Baharatlı soslar"]],
  ["Kahve & içecek", ["Kahve", "Çay", "Maden suyu", "Soğuk içecekler"]],
  ["Su & meşrubat", ["Doğal içecekler", "Gazlı içecekler", "Meyve suyu", "Enerji içeceği"]],
  ["Fırın & pastane", ["Ekmek", "Poğaça & simit", "Kruvasan", "Pasta & kurabiye"]],
  ["Temizlik", ["Çamaşır ürünleri", "Bulaşık ürünleri", "Yüzey temizliği", "Kağıt ürünleri"]],
  ["Kağıt & hijyen", ["Tuvalet kağıdı", "Kağıt havlu", "Peçete", "Islak mendil"]],
  ["Kişisel bakım", ["Ağız bakımı", "Duş & vücut", "Deodorant", "Güneş bakımı"]],
  ["Saç bakım", ["Şampuan", "Saç kremi", "Saç şekillendirme", "Saç aksesuarları"]],
  ["Cilt bakım", ["Yüz bakımı", "Nemlendirici", "Maske & peeling", "Dudak bakımı"]],
  ["Ev & yaşam", ["Dekorasyon", "Saklama", "Mum & koku", "Masa tekstili"]],
  ["Mutfak gereçleri", ["Pişirme", "Kesme & hazırlama", "Servis", "Mutfak yardımcıları"]],
  ["Ev tekstili", ["Havlu", "Nevresim", "Battaniye", "Mutfak tekstili"]],
  ["Elektrikli ev aletleri", ["Küçük ev aletleri", "Kahve makineleri", "Ütü", "Süpürge"]],
  ["Bebek & çocuk", ["Bebek bezi", "Bebek bakım", "Bebek gıda", "Oyuncak"]],
  ["Evcil hayvan", ["Kedi ürünleri", "Köpek ürünleri", "Kuş ürünleri", "Aksesuarlar"]],
  ["Kırtasiye", ["Defter & ajanda", "Kalem", "Ofis ürünleri", "Okul gereçleri"]],
  ["Sağlık & wellness", ["Vitamin", "Bitki çayı", "Sporcu ürünleri", "Kişisel sağlık"]],
  ["Bahçe & balkon", ["Saksı & toprak", "Tohum", "Bahçe el aletleri", "Aydınlatma"]],
  ["Moda & aksesuar", ["Giyim", "Çorap", "Çanta & cüzdan", "Aksesuar"]]
];
const subcategoryTerms = {
  "Doğal içecekler": ["Doğal kaynak suyu", "Maden suyu", "Ayran", "Limonata"],
  "Gazlı içecekler": ["Kola", "Gazoz", "Soda"],
  "Meyve suyu": ["Meyve suyu", "Limonata"],
  "Enerji içeceği": ["Enerji içeceği"],
  "Kahve": ["Filtre kahve", "Türk kahvesi", "Espresso", "Soğuk kahve"],
  "Çay": ["Siyah çay", "Yeşil çay", "Bitki çayı"],
  "Maden suyu": ["Maden suyu", "Soda"],
  "Ekmek": ["ekmek"],
  "Pasta & kurabiye": ["Yaş pasta", "Kurabiye"],
  "Kedi ürünleri": ["Kedi"],
  "Köpek ürünleri": ["Köpek"],
  "Kuş ürünleri": ["Kuş"],
  "Şampuan": ["Şampuan"],
  "Saç kremi": ["Saç kremi"],
  "Küçük ev aletleri": ["Kettle", "Blender", "Mikser"],
  "Kahve makineleri": ["Kahve makinesi"],
  "Süpürge": ["Elektrikli süpürge"]
};
const taxRateFor = (category, base) => {
  if (["Meyve & sebze", "Bakliyat & tahıl", "Fırın & pastane"].includes(category)) return 1;
  if (["Et & şarküteri", "Süt & kahvaltılık", "Kahvaltı & atıştırmalık", "Makarna & hazır yemek", "Konserve & sos", "Kahve & içecek", "Su & meşrubat"].includes(category)) return 10;
  if (category === "Bebek & çocuk" && /Bebek bezi|Bebek bisküvisi|Bebek şampuanı/.test(base)) return 10;
  return 20;
};
const brandPools = [
  ["Pınar", "Sütaş", "Torku", "Duru", "Yudum"],
  ["Namet", "Pınar", "Banvit", "Şahin", "Maret"],
  ["Pınar", "Sütaş", "İçim", "Torku", "Sek"],
  ["Kellogg's", "Eti Lifalif", "Ülker", "Nutella", "Sarelle"],
  ["Duru", "Reis", "Yayla", "Tat", "Anadolu"],
  ["Barilla", "Filiz", "Ülker", "Knorr", "Nuh'un Ankara"],
  ["Tat", "Ülker", "Heinz", "Calve", "Sera"],
  ["Nescafe", "Jacobs", "Kurukahveci Mehmet Efendi", "Lipton", "Doğuş"],
  ["Erikli", "Saka", "Hayat", "Coca-Cola", "Pepsi"],
  ["Uno", "Komşufırın", "Bimbo", "Bağdatlı", "Simit Sarayı"],
  ["Ariel", "Fairy", "Finish", "Domestos", "Cif"],
  ["Selpak", "Solo", "Familia", "Sleepy", "Papilion"],
  ["Sensodyne", "Colgate", "Nivea", "Dove", "Oral-B"],
  ["Elidor", "Pantene", "Head & Shoulders", "Elseve", "Clear"],
  ["Nivea", "Neutrogena", "The Purest Solutions", "Garnier", "L'Oréal Paris"],
  ["Paşabahçe", "IKEA", "Karaca", "English Home", "Madame Coco"],
  ["Tefal", "Karaca", "Korkmaz", "Arzum", "Schafer"],
  ["Özdilek", "Taç", "English Home", "Madame Coco", "IKEA"],
  ["Arzum", "Philips", "Tefal", "Bosch", "Korkmaz"],
  ["Prima", "Sleepy", "Uni Baby", "Milupa", "Aptamil"],
  ["Whiskas", "Royal Canin", "Pro Plan", "Pedigree", "Reflex"],
  ["Faber-Castell", "Bic", "Pilot", "Stabilo", "Mopak"],
  ["Solgar", "Orzax", "Nature's Supreme", "Ocean", "Venatura"],
  ["Gardena", "Lechuza", "Koçtaş", "Renkli Bahçe", "Gardenya"],
  ["Nike", "Adidas", "Puma", "Koton", "LC Waikiki"]
];
const specificBrandPools = {
  "Kahve & içecek": {
    "Filtre kahve": ["Jacobs", "Starbucks", "Tchibo", "Lavazza", "Nescafe"],
    "Türk kahvesi": ["Kurukahveci Mehmet Efendi", "Kocatepe", "Hisar", "Selamlique", "Cezbeli"],
    "Espresso": ["Lavazza", "Illy", "Jacobs", "Segafredo", "Starbucks"],
    "Siyah çay": ["Çaykur", "Doğuş", "Lipton", "Karali", "Ahmad Tea"],
    "Yeşil çay": ["Lipton", "Doğadan", "Çaykur", "Twinings", "Ahmad Tea"],
    "Maden suyu": ["Beypazarı", "Kızılay", "Sırma", "Sarıkız", "Uludağ"],
    "Limonata": ["Dimes", "Tamek", "Pınar", "Cappy", "Uludağ"],
    "Soğuk kahve": ["Starbucks", "Nescafe", "Dimes", "Tchibo", "Jacobs"]
  },
  "Su & meşrubat": {
    "Doğal kaynak suyu": ["Pınar", "Erikli", "Saka", "Hayat", "Damla"],
    "Kola": ["Coca-Cola", "Pepsi", "Cola Turka", "Coca-Cola Zero", "Pepsi Max"],
    "Gazoz": ["Uludağ", "Çamlıca", "Niğde Gazozu", "Fruko", "Schweppes"],
    "Meyve suyu": ["Cappy", "Dimes", "Tamek", "Pınar", "Capri-Sun"],
    "Enerji içeceği": ["Red Bull", "Monster", "Burn", "Powerade", "Hell"],
    "Ice tea": ["Lipton", "Fuse Tea", "Didi", "Nestea", "Arizona"],
    "Soda": ["Beypazarı", "Kızılay", "Sırma", "Sarıkız", "Uludağ"],
    "Ayran": ["Sütaş", "Pınar", "İçim", "Eker", "Yörükoğlu"]
  },
  "Fırın & pastane": {
    "Somun ekmek": ["Uno", "Komşufırın", "Bim", "Halk Ekmek", "Taş Fırın"],
    "Tam buğday ekmek": ["Uno", "Doygun", "Komşufırın", "Halk Ekmek", "Tadım Fırın"],
    "Baget ekmek": ["Uno", "Komşufırın", "Halk Ekmek", "Le Pain Quotidien", "Taş Fırın"],
    "Poğaça": ["Komşufırın", "Simit Sarayı", "Özsüt", "Divan", "Taş Fırın"],
    "Simit": ["Simit Sarayı", "Komşufırın", "Halk Ekmek", "Taş Fırın", "Gevrekçi"],
    "Kruvasan": ["Ülker", "7Days", "Komşufırın", "Simit Sarayı", "Dardanel"],
    "Yaş pasta": ["Özsüt", "Divan", "Pelit", "Yılmaz Pastanesi", "Simit Sarayı"],
    "Kurabiye": ["Eti", "Ülker", "Şölen", "Komşufırın", "Simit Sarayı"]
  }
};
const getBrandsFor = (category, base, categoryIndex) => specificBrandPools[category]?.[base] || brandPools[categoryIndex];
const packSizesFor = (category, packIndex) => {
  if (category === "Su & meşrubat") return ["330 ml", "500 ml", "1 L", "2,5 L", "6 x 330 ml"][packIndex];
  if (category === "Fırın & pastane") return ["400 g", "500 g", "600 g", "750 g", "1 kg"][packIndex];
  if (category === "Elektrikli ev aletleri") return ["800 W", "1000 W", "1200 W", "1500 W", "2000 W"][packIndex];
  if (category === "Evcil hayvan") return ["400 g", "1 kg", "2 kg", "4 kg", "10 kg"][packIndex];
  if (category === "Moda & aksesuar") return ["S beden", "M beden", "L beden", "XL beden", "Tek beden"][packIndex];
  return ["250 g", "500 g", "750 g", "1 kg", "2'li paket"][packIndex];
};
const imageFor = (type) => `static/images/${type}.svg`;
const slugify = (value) => value.toLocaleLowerCase("tr-TR").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const maxQuantityFor = (category, base) => {
  if (/televizyon|tablet|telefon|dizüstü|laptop/i.test(base)) return 2;
  if (category === "Elektrikli ev aletleri" || category === "Mutfak gereçleri") return 2;
  if (category === "Moda & aksesuar" || category === "Ev tekstili") return 5;
  if (category === "Evcil hayvan") return 10;
  if (category === "Bebek & çocuk") return 12;
  if (category === "Fırın & pastane" || category === "Su & meşrubat") return 20;
  if (category === "Meyve & sebze" || category === "Süt & kahvaltılık" || category === "Bakliyat & tahıl") return 20;
  if (category === "Temizlik" || category === "Kağıt & hijyen") return 15;
  return 10;
};
const products = categorySeeds.flatMap(([category, image, names], categoryIndex) => names.flatMap((base, baseIndex) => getBrandsFor(category, base, categoryIndex).flatMap((brand, brandIndex) => [0, 1, 2, 3, 4].map((packIndex) => {
  const pack = packSizesFor(category, packIndex);
  const name = `${brand} ${base} ${pack}`;
  const price = (39.90 + categoryIndex * 4.7 + baseIndex * 8.3 + brandIndex * 6.2 + packIndex * 3.4).toFixed(2).replace(".", ",");
  return {
    id: `${categoryIndex}-${baseIndex}-${brandIndex}-${packIndex}`, name, category, price: `₺${price}`,
    taxRate: taxRateFor(category, base), maxQuantity: maxQuantityFor(category, base),
    image: imageFor(image), alt: `${name} ${category} ürünü - Nova Market`,
    description: `${name}; ${category} kategorisinde günlük kullanıma uygun, özenle seçilmiş ürün.`,
    keywords: `${name}, ${category}, online market, hızlı teslimat, güvenli alışveriş`,
    seoTitle: `${name} | Nova Market`, seoDescription: `${name} ürününü Nova Market'te keşfedin.`
  };
}))));
const heroSlides = [
  { product: products.find((item) => item.name.startsWith("Kellogg's Granola")) || products[15], badge: "HAFTANIN SEÇİMİ", offer: "Kahvaltıya iyi başlayanlara", campaign: "NOVA5 ile sepette 5 TL indirim" },
  { product: products.find((item) => item.name.startsWith("Coca-Cola Kola 2,5 L")) || products[1600], badge: "SOFRANIN KLASİĞİ", offer: "Coca-Cola 2,5 L", campaign: "Meşrubat alışverişine ferahlık" },
  { product: products.find((item) => item.name.startsWith("Pınar Doğal kaynak suyu 500 ml")) || products[160], badge: "GÜN BOYU TAZE", offer: "Pınar su 500 ml", campaign: "Su alışverişine pratik seçim" },
  { product: products.find((item) => item.name.startsWith("Uno Tam buğday ekmek")) || products[1800], badge: "HER SABAH TAZE", offer: "Uno tam buğday ekmek", campaign: "Kahvaltı ürünlerini keşfedin" },
  { product: products.find((item) => item.name.startsWith("Arzum Tost makinesi")) || products[3600], badge: "MUTFAK FAVORİSİ", offer: "Arzum tost makinesi", campaign: "Ev & yaşam ürünlerinde fırsatlar" },
  { product: products.find((item) => item.name.startsWith("Ariel Çamaşır deterjanı")) || products[2000], badge: "EVİNİZ İÇİN", offer: "Ariel çamaşır deterjanı", campaign: "Temizlik alışverişine özel seçenekler" },
  { product: products.find((item) => item.name.startsWith("Nescafe Filtre kahve")) || products[1400], badge: "KAHVE MOLASI", offer: "Nescafe filtre kahve", campaign: "Kahve & içecek kategorisini keşfedin" },
  { product: products.find((item) => item.name.startsWith("Whiskas Kedi maması")) || products[4000], badge: "PATİLİ DOSTLARA", offer: "Whiskas kedi maması", campaign: "PET10 ile evcil hayvan ürünlerinde indirim" },
  { product: products.find((item) => item.name.startsWith("Prima Bebek bezi")) || products[3800], badge: "AİLELERİN TERCİHİ", offer: "Prima bebek bezi", campaign: "Bebek alışverişine uygun ürünler" },
  { product: products.find((item) => item.name.startsWith("Tefal Tava")) || products[3000], badge: "MUTFAKTA İYİ FİKİR", offer: "Tefal tava", campaign: "Mutfak gereçlerinde seçili fırsatlar" }
];
heroSlides.push(
  { campaignOnly: true, badge: "POPÜLER KAMPANYA", offer: "NOVA15 · %15 indirim", campaign: "İlk siparişe özel fırsatı tüm kampanyalarda keşfedin." },
  { campaignOnly: true, badge: "ÜCRETSİZ KARGO", offer: "KARGO0 · 500 TL üzeri", campaign: "Büyük sepetlerde teslimat avantajı sizi bekliyor." },
  { campaignOnly: true, badge: "PET DOSTLARINA", offer: "PET10 · 10 TL indirim", campaign: "Evcil hayvan ürünlerinde popüler fırsat." }
);
const demoUsers = [
  { email: "ayse.demo@novamarket.test", password: "NovaDemo!26" },
  { email: "mert.demo@novamarket.test", password: "MarketDemo#26" },
  { email: "selin.demo@novamarket.test", password: "SepetDemo$26" }
];
let registeredUsers = JSON.parse(window.localStorage.getItem("novaDemoUsers") || "[]");
let currentUser = JSON.parse(window.localStorage.getItem("novaCurrentUser") || "null");
let accountOrders = JSON.parse(window.localStorage.getItem("novaOrders") || "[]");
function normalizeOrder(order) {
  const fallbackDate = order.createdAtISO ? new Date(order.createdAtISO) : null;
  const validDate = fallbackDate && !Number.isNaN(fallbackDate.getTime()) ? fallbackDate : null;
  return {
    ...order,
    status: order.status || "active",
    date: order.date || (validDate ? validDate.toLocaleDateString("tr-TR") : "Tarih bilgisi yok"),
    createdAt: order.createdAt || order.time || (validDate ? validDate.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }) : "Kayıt zamanı yok"),
    createdAtISO: order.createdAtISO || (validDate ? validDate.toISOString() : ""),
    items: Array.isArray(order.items) ? order.items : []
  };
}
accountOrders = accountOrders.map(normalizeOrder);
window.localStorage.setItem("novaOrders", JSON.stringify(accountOrders));

const CART_RETENTION_MS = 30 * 60 * 1000;
const CART_STORAGE_KEY = "novaCart";
function loadSavedCart() {
  const saved = window.localStorage.getItem(CART_STORAGE_KEY);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    if (!parsed || !Array.isArray(parsed.items) || !Number.isFinite(parsed.savedAt) || Date.now() - parsed.savedAt > CART_RETENTION_MS) {
      window.localStorage.removeItem(CART_STORAGE_KEY);
      return [];
    }
    return parsed.items.filter((item) => item && item.id && Number(item.quantity) > 0);
  } catch (error) {
    window.localStorage.removeItem(CART_STORAGE_KEY);
    return [];
  }
}
function persistCart() {
  if (!cart.length) {
    window.localStorage.removeItem(CART_STORAGE_KEY);
    return;
  }
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: cart, savedAt: Date.now() }));
}
let cart = loadSavedCart();
let currentPage = 1;
let pageSize = 20;
let activeCategory = "";
let activeSubcategory = "";
let catalogMode = "featured";
let appliedCoupon = "";
let guestCheckout = false;
const campaigns = [
  ["NOVA5", "Sepette 5 TL indirim", "300 TL ve üzeri alışverişte geçerli.", 300, 5, "discount"],
  ["NOVA15", "İlk siparişe %15 indirim", "Yeni müşterilere özel fırsat.", 0, 15, "percent"],
  ["KARGO0", "500 TL üzeri ücretsiz kargo", "Yüksek tutarlı sepetlerde kargo bizden.", 500, 0, "shipping"],
  ["NOVA10", "750 TL üzeri 10 TL indirim", "750 TL ve üzeri sepetlerde.", 750, 10, "discount"],
  ["HAFTAICI", "Hafta içi 20 TL indirim", "Hafta içi verilen siparişlerde.", 600, 20, "discount"],
  ["PAZAR", "Pazar alışverişine 15 TL", "Pazar günü sepet avantajı.", 450, 15, "discount"],
  ["SABAH", "09.00 öncesi 10 TL indirim", "Güne erken başlayanlara özel.", 350, 10, "discount"],
  ["AILE", "Aile sepetine 25 TL", "1.000 TL ve üzeri alışverişte.", 1000, 25, "discount"],
  ["KAHVALTI", "Kahvaltı ürünlerinde 10 TL", "Kahvaltı kategorisi ürünleriyle.", 250, 10, "category"],
  ["TEMIZLIK", "Temizlikte 20 TL indirim", "Temizlik ürünleri içeren sepetlerde.", 500, 20, "category"],
  ["PET10", "Evcil hayvan ürünlerine 10 TL", "Pet ürünleri içeren sepetlerde.", 300, 10, "category"],
  ["BEBEK", "Bebek ürünlerinde 15 TL", "Bebek & çocuk kategorisinde.", 400, 15, "category"],
  ["EV10", "Ev yaşam ürünlerine 10 TL", "Ev ve mutfak ürünlerinde.", 350, 10, "category"],
  ["COKLU", "3 ürün ve üzeri 10 TL", "En az 3 farklı ürün çeşidinde.", 0, 10, "items"],
  ["SEPET20", "1.250 TL üzeri 20 TL", "Büyük alışveriş sepetlerine özel.", 1250, 20, "discount"],
  ["YENIYIL", "1.500 TL üzeri 50 TL", "Yüksek tutarlı alışverişlerde.", 1500, 50, "discount"],
  ["SAGLIK", "Wellness ürünlerinde 12 TL", "Sağlık & wellness ürünlerinde.", 300, 12, "category"],
  ["KAHVE", "Kahve alışverişine 8 TL", "Kahve & içecek kategorisinde.", 200, 8, "category"],
  ["FIRIN", "Fırın ürünlerine 7 TL", "Fırın & pastane kategorisinde.", 150, 7, "category"],
  ["DOSTUM", "Pet dostlarına ücretsiz kargo", "Evcil hayvan ürünlerinde 600 TL üzeri.", 600, 0, "shipping"]
];
const productGrid = document.querySelector("#productGrid");
const toast = document.querySelector("#toast");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItems = document.querySelector("#cartItems");
const searchPanel = document.querySelector("#searchPanel");
const searchResults = document.querySelector("#searchResults");
const productModal = document.querySelector("#productModal");
const productModalContent = document.querySelector("#productModalContent");
const normalize = (value) => value.toLocaleLowerCase("tr-TR").replace(/ı/g, "i");
const money = (value) => `₺${value.toFixed(2).replace(".", ",")}`;
function openAccountPage(tab = "profile") {
  if (!currentUser) {
    openAccountModal();
    return;
  }
  document.querySelector("#anasayfa").hidden = true;
  document.querySelector("#kampanyalar").hidden = true;
  document.querySelector("#accountPage").hidden = false;
  document.body.classList.remove("content-page-active");
  delete document.body.dataset.activePage;
  document.querySelector("#accountButton").textContent = "Hesabım";
  document.querySelector("#accountWelcome").textContent = `${currentUser.email} hesabınızı buradan yönetin.`;
  document.querySelector("#accountProfileEmail").textContent = currentUser.email;
  document.querySelector("#profileEmail").value = currentUser.email;
  document.querySelector("#accountProfileName").textContent = `${currentUser.firstName || "Nova"} ${currentUser.lastName || "Müşterisi"}`;
  document.querySelector("#profileFirstName").value = currentUser.firstName || "Nova";
  document.querySelector("#profileLastName").value = currentUser.lastName || "Müşterisi";
  document.querySelector("#profilePhone").value = currentUser.phone || "";
  document.querySelector("#profileBirthDate").value = currentUser.birthDate || "";
  document.querySelector("#accountAvatar").textContent = (currentUser.firstName || currentUser.email).charAt(0).toLocaleUpperCase("tr-TR");
  renderOrderHistory();
  activateAccountTab(tab);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function closeAccountPage() {
  document.querySelector("#accountPage").hidden = true;
  document.querySelector("#anasayfa").hidden = false;
  document.querySelectorAll("#anasayfa > section").forEach((section) => { section.hidden = false; });
  document.querySelector("#accountButton").textContent = currentUser ? "Hesabım" : "Giriş";
  document.body.classList.remove("content-page-active");
  delete document.body.dataset.activePage;
}
function activateAccountTab(tab) {
  document.querySelectorAll("[data-account-tab]").forEach((button) => button.classList.toggle("is-active", button.dataset.accountTab === tab));
  document.querySelectorAll("[data-account-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.accountPanel === tab));
}
function renderOrderHistory() {
  const activeHistory = document.querySelector("#activeOrderHistory");
  const oldHistory = document.querySelector("#orderHistory");
  const orders = accountOrders.filter((order) => order.email === currentUser?.email);
  const activeOrders = orders.filter((order) => order.status === "active" || order.status === "preparing");
  const oldOrders = orders.filter((order) => order.status !== "active");
  document.querySelector("#accountOrderCount").textContent = orders.length;
  const empty = (title, text) => `<div class="empty-account-state"><strong>${title}</strong><p>${text}</p></div>`;
  const renderOrders = (list, emptyTitle, emptyText) => list.length ? list.slice().reverse().map((order) => `<article class="order-card"><div class="order-card-head"><div><strong>${order.orderNumber}</strong><span>${order.date} · ${order.createdAt}</span></div><b>${money(order.total)}</b></div><div class="order-card-items">${order.items.map((item) => `<div class="order-line-item"><span>${item.name} × ${item.quantity}</span><strong>${money(Number(item.price.replace("₺", "").replace(",", ".")) * item.quantity)}</strong></div>`).join("")}</div><div class="order-card-foot"><span class="order-delivery-status ${order.status === "delivered" ? "is-delivered" : ""}">● ${getOrderStatusText(order.status)}</span><button class="text-button order-detail-button" type="button" data-order-number="${order.orderNumber}">Sipariş detayları</button></div></article>`).join("") : empty(emptyTitle, emptyText);
  activeHistory.innerHTML = renderOrders(activeOrders, "Aktif siparişiniz yok.", "Teslim edilmemiş siparişleriniz burada görünecek.");
  oldHistory.innerHTML = renderOrders(oldOrders, "Henüz eski sipariş yok.", "Teslim edilen siparişleriniz burada saklanacak.");
  renderReturnHistory(orders);
  document.querySelectorAll(".order-detail-button").forEach((button) => button.addEventListener("click", () => openOrderDetails(button.dataset.orderNumber)));
}
function renderReturnHistory(orders) {
  const cancelled = document.querySelector("#cancelledOrderHistory");
  const refunds = document.querySelector("#refundOrderHistory");
  if (!cancelled || !refunds) return;
  const empty = (title, text) => `<div class="empty-account-state"><strong>${title}</strong><p>${text}</p></div>`;
  const render = (list, title, text) => list.length ? list.slice().reverse().map((order) => `<article class="order-card return-order-card"><div class="order-card-head"><div><strong>${order.orderNumber}</strong><span>${order.date} · ${order.createdAt}</span></div><b>${money(order.total)}</b></div><div class="order-card-foot"><span class="order-delivery-status">${getOrderStatusText(order.status)}</span><button class="text-button order-detail-button" type="button" data-order-number="${order.orderNumber}">Detaylar</button></div>${order.refundRequest ? `<p class="return-reason"><strong>${order.refundRequest.reason}</strong><br>${order.refundRequest.description}</p>` : ""}</article>`).join("") : empty(title, text);
  cancelled.innerHTML = render(orders.filter((order) => order.status === "cancelled"), "İptal edilen sipariş yok.", "İptal edilen siparişleriniz burada listelenir.");
  refunds.innerHTML = render(orders.filter((order) => order.status === "refund_requested"), "İade talebi yok.", "Teslim sonrası iade talepleriniz burada listelenir.");
}
function getOrderStatusText(status) {
  return { active: "Sipariş alındı · Hazırlanacak", preparing: "Mağaza kabul etti · Sipariş hazırlanıyor", delivered: "Teslim edildi", cancelled: "İptal edildi", refund_requested: "İade talebi oluşturuldu" }[status] || "Sipariş durumu güncelleniyor";
}
function openOrderDetails(orderNumber) {
  const order = accountOrders.find((item) => item.orderNumber === orderNumber);
  if (!order) return;
  const statusText = getOrderStatusText(order.status);
  const actions = order.status === "active" ? `<div class="order-action-row"><button class="button button-dark mark-delivered-button" type="button" data-order-number="${order.orderNumber}">Teslim edildi olarak işaretle <span>✓</span></button><button class="button button-outline cancel-order-button" type="button" data-order-number="${order.orderNumber}">Siparişi iptal et</button></div>` : order.status === "preparing" ? `<div class="order-action-row"><button class="button button-dark mark-delivered-button" type="button" data-order-number="${order.orderNumber}">Teslim edildi olarak işaretle <span>✓</span></button><a class="button button-outline" href="tel:08501234567">İptal için bizi arayın <span>☎</span></a></div>` : order.status === "delivered" ? `<button class="button button-outline refund-order-button" type="button" data-order-number="${order.orderNumber}">İade talebi oluştur</button>` : "";
  const review = order.status === "delivered" ? `<form class="order-review-form" id="orderReviewForm"><h3>Siparişi puanla</h3><label>Puan<select name="rating" required><option value="">Puan seçin</option><option value="5">★★★★★ · 5</option><option value="4">★★★★☆ · 4</option><option value="3">★★★☆☆ · 3</option><option value="2">★★☆☆☆ · 2</option><option value="1">★☆☆☆☆ · 1</option></select></label><label>Yorum<textarea name="comment" rows="4" maxlength="600" placeholder="Deneyiminizi paylaşın">${order.review?.comment || ""}</textarea></label><label>Görsel ekle<input type="file" name="images" accept="image/png,image/jpeg,image/webp" multiple></label><small class="upload-note">En fazla 3 görsel, görsel başına 2 MB. PNG, JPG veya WebP.</small><p class="form-message" id="reviewMessage" role="status"></p><button class="button button-dark" type="submit">Değerlendirmeyi kaydet <span>→</span></button></form>` : "";
  document.querySelector("#receiptContent").innerHTML = `<p class="eyebrow">NOVA MARKET · SİPARİŞ DETAYI</p><h2 id="receiptTitle">${order.orderNumber}</h2><div class="order-detail-meta"><div><span>Sipariş kodu</span><strong>${order.orderNumber}</strong></div><div><span>Oluşturulma tarihi</span><strong>${order.date}</strong></div><div><span>Oluşturulma saati</span><strong>${order.createdAt}</strong></div><div><span>Durum</span><strong>${statusText}</strong></div></div><div class="receipt-items">${order.items.map((item) => `<div><span>${item.name} × ${item.quantity}</span><strong>${money(Number(item.price.replace("₺", "").replace(",", ".")) * item.quantity)}</strong></div>`).join("")}</div><div class="receipt-total"><span>Ödenecek toplam</span><strong>${money(order.total)}</strong></div>${actions}${review}`;
  document.querySelector("#receiptModal").classList.add("is-open");
  document.querySelector("#receiptModal").setAttribute("aria-hidden", "false");
  const markButton = document.querySelector(".mark-delivered-button");
  if (markButton) markButton.addEventListener("click", () => {
    order.status = "delivered";
    window.localStorage.setItem("novaOrders", JSON.stringify(accountOrders));
    closeReceiptModal();
    renderOrderHistory();
    activateAccountTab("orders");
    showToast("Sipariş eski siparişler alanına taşındı.");
  });
  const cancelButton = document.querySelector(".cancel-order-button");
  if (cancelButton) cancelButton.addEventListener("click", () => updateOrderStatus(order, "cancelled", "Sipariş iptal edildi."));
  const refundButton = document.querySelector(".refund-order-button");
  if (refundButton) refundButton.addEventListener("click", () => {
    document.querySelector("#receiptContent").innerHTML = `<p class="eyebrow">NOVA MARKET · İADE TALEBİ</p><h2 id="receiptTitle">İade talebi oluştur.</h2><p class="account-description">Siparişiniz için uygun nedeni seçin ve açıklamanızı ekleyin.</p><form class="refund-request-form" id="refundRequestForm"><label>İade nedeni<select name="reason" required><option value="">Neden seçin</option><option>Hasarlı ürün</option><option>Eksik ürün</option><option>Yanlış ürün gönderildi</option><option>Ürün beklentimi karşılamadı</option><option>Diğer</option></select></label><label>Açıklama<textarea name="description" rows="5" maxlength="800" required placeholder="Talebinizle ilgili ayrıntıları yazın"></textarea></label><small class="upload-note">Açıklamanız en fazla 800 karakter olabilir.</small><p class="form-message" id="refundMessage" role="status"></p><div class="order-action-row"><button class="button button-outline" type="button" id="cancelRefundForm">Vazgeç</button><button class="button button-dark" type="submit">Talebi gönder <span>→</span></button></div></form>`;
    document.querySelector("#cancelRefundForm").addEventListener("click", () => openOrderDetails(order.orderNumber));
    document.querySelector("#refundRequestForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      order.refundRequest = { reason: data.get("reason"), description: String(data.get("description")).trim(), createdAt: new Date().toISOString() };
      updateOrderStatus(order, "refund_requested", "İade talebiniz oluşturuldu.");
    });
  });
  const reviewForm = document.querySelector("#orderReviewForm");
  if (reviewForm) reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const files = [...reviewForm.elements.images.files];
    const message = document.querySelector("#reviewMessage");
    if (files.length > 3 || files.some((file) => file.size > 2 * 1024 * 1024)) {
      message.textContent = "En fazla 3 görsel yükleyebilirsiniz; her görsel 2 MB sınırını aşmamalıdır.";
      return;
    }
    const formData = new FormData(reviewForm);
    order.review = { rating: formData.get("rating"), comment: String(formData.get("comment") || "").trim(), images: files.map((file) => file.name), updatedAt: new Date().toISOString() };
    window.localStorage.setItem("novaOrders", JSON.stringify(accountOrders));
    message.textContent = "Değerlendirmeniz kaydedildi.";
    showToast("Sipariş değerlendirmeniz kaydedildi.");
  });
}
function updateOrderStatus(order, status, message) {
  order.status = status;
  order.statusUpdatedAt = new Date().toISOString();
  window.localStorage.setItem("novaOrders", JSON.stringify(accountOrders));
  closeReceiptModal();
  renderOrderHistory();
  activateAccountTab(status === "cancelled" || status === "refund_requested" ? "returns" : "orders");
  showToast(message);
}

function productCard(product) {
  const quantity = cart.find((item) => item.id === product.id)?.quantity || 0;
  const atLimit = quantity >= product.maxQuantity;
  return `<article class="product-card" tabindex="0" role="button" aria-label="${product.name} ürün detayını aç" data-product-detail-id="${product.id}"><div class="product-image"><img src="${product.image}" alt="${product.alt}" loading="lazy"></div><div class="product-info"><small>${product.category} · KDV %${product.taxRate}</small><h3>${product.name}</h3><p class="product-description">${product.description}</p><div class="product-bottom"><span class="product-price">${product.price}</span><div class="product-controls"><button class="quantity-button" aria-label="${product.name} azalt" data-product-id="${product.id}" data-product-action="minus">−</button><span class="product-quantity" title="En fazla ${product.maxQuantity} adet">${quantity}</span><button class="quantity-button add-product" aria-label="${product.name} artır" data-product-id="${product.id}" data-product-action="plus" ${atLimit ? "disabled" : ""}>+</button></div></div><small class="product-limit">Maksimum ${product.maxQuantity} adet · Detay için ürüne tıklayın</small></div></article>`;
}
function renderProducts() {
  const featuredProducts = products.filter((product, index) => index % 200 === 0 || index % 200 === 25 || index % 200 === 50 || index % 200 === 75 || index % 200 === 100 || index % 200 === 125 || index % 200 === 150 || index % 200 === 175);
  const filteredProducts = activeCategory ? products.filter((product) => {
    if (product.category !== activeCategory) return false;
    const terms = subcategoryTerms[activeSubcategory];
    return !terms || terms.some((term) => normalize(product.name).includes(normalize(term)));
  }) : catalogMode === "featured" ? featuredProducts : products;
  const start = (currentPage - 1) * pageSize;
  const visible = filteredProducts.slice(start, start + pageSize);
  productGrid.innerHTML = visible.map(productCard).join("");
  document.querySelector("#catalogStatus").textContent = `${visible.length ? start + 1 : 0}-${Math.min(start + pageSize, filteredProducts.length)} / ${filteredProducts.length} ürün${activeCategory ? ` · ${activeCategory}` : catalogMode === "featured" ? " · farklı kategorilerden öne çıkanlar" : ""}`;
  document.querySelector("#pageStatus").textContent = `${currentPage} / ${Math.max(1, Math.ceil(filteredProducts.length / pageSize))}`;
  document.querySelector("#prevPage").disabled = currentPage === 1;
  document.querySelector("#nextPage").disabled = currentPage === Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  document.querySelector("#catalogHeading").innerHTML = activeCategory ? `${activeSubcategory || activeCategory}<br><em>ürünleri.</em>` : catalogMode === "featured" ? `Haftanın<br><em>öne çıkanları.</em>` : `İhtiyacınız olan<br><em>her şey burada.</em>`;
  document.querySelectorAll(".quantity-button").forEach((button) => button.addEventListener("click", () => changeCart(button.dataset.productId, button.dataset.productAction)));
  document.querySelectorAll("[data-product-detail-id]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".quantity-button")) return;
      openProductModal(card.dataset.productDetailId);
    });
    card.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && !event.target.closest(".quantity-button")) {
        event.preventDefault();
        openProductModal(card.dataset.productDetailId);
      }
    });
  });
}
function openProductModal(id) {
  const product = products.find((item) => item.id === id);
  if (!product || !productModal) return;
  const quantity = cart.find((item) => item.id === id)?.quantity || 0;
  productModalContent.innerHTML = `<div class="product-modal-layout"><div class="product-modal-image"><img src="${product.image}" alt="${product.alt}"></div><div class="product-modal-copy"><p class="eyebrow">${product.category} · KDV %${product.taxRate}</p><h2 id="productModalTitle">${product.name}</h2><p>${product.description}</p><div class="product-modal-meta"><span>SEO uyumlu ürün açıklaması</span><span>Maksimum ${product.maxQuantity} adet</span></div><strong class="product-modal-price">${product.price}</strong><button class="button button-dark product-modal-add" data-product-id="${product.id}" ${quantity >= product.maxQuantity ? "disabled" : ""}>${quantity >= product.maxQuantity ? "Maksimum adette" : "Sepete ekle"} <span>→</span></button></div></div>`;
  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  productModalContent.querySelector(".product-modal-add").addEventListener("click", () => {
    addToCart(id);
    closeProductModal();
  });
}
function closeProductModal() {
  if (!productModal) return;
  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
function getCatalogSource() {
  const featuredProducts = products.filter((product, index) => index % 200 === 0 || index % 200 === 25 || index % 200 === 50 || index % 200 === 75 || index % 200 === 100 || index % 200 === 125 || index % 200 === 150 || index % 200 === 175);
  if (!activeCategory) return catalogMode === "featured" ? featuredProducts : products;
  const terms = subcategoryTerms[activeSubcategory];
  return products.filter((product) => product.category === activeCategory && (!terms || terms.some((term) => normalize(product.name).includes(normalize(term)))));
}
function addToCart(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const existing = cart.find((item) => item.id === id);
  if (existing && existing.quantity >= product.maxQuantity) {
    showToast(`${product.name} için en fazla ${product.maxQuantity} adet eklenebilir.`);
    return;
  }
  existing ? existing.quantity += 1 : cart.push({ ...product, quantity: 1 });
  updateCart();
  showToast(`${product.name} sepete eklendi.`);
}
function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + Number(item.price.replace("₺", "").replace(",", ".")) * item.quantity, 0);
}
function getCartTax(discountedSubtotal = getCartSubtotal()) {
  const grossSubtotal = getCartSubtotal();
  if (!grossSubtotal) return 0;
  const discountRatio = Math.max(0, discountedSubtotal) / grossSubtotal;
  return cart.reduce((sum, item) => {
    const gross = Number(item.price.replace("₺", "").replace(",", ".")) * item.quantity;
    return sum + gross * discountRatio * item.taxRate / (100 + item.taxRate);
  }, 0);
}
function getCartSummary() {
  const grossSubtotal = getCartSubtotal();
  const originalTax = getCartTax(grossSubtotal);
  const discountGross = getAppliedDiscount(grossSubtotal);
  const discountedGross = Math.max(0, grossSubtotal - discountGross);
  const discountedTax = getCartTax(discountedGross);
  const netSubtotal = grossSubtotal - originalTax;
  const netDiscount = Math.max(0, discountGross - (originalTax - discountedTax));
  return { grossSubtotal, originalTax, discountGross, discountedGross, discountedTax, netSubtotal, netDiscount, total: discountedGross };
}
function updateCart() {
  persistCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector("#cartCount").textContent = count;
  document.querySelector("#mobileCartCount").textContent = count;
  document.querySelector("#mobileCartBubble").classList.toggle("has-items", count > 0);
  const subtotal = getCartSubtotal();
  const summary = getCartSummary();
  document.querySelector("#cartSubtotal").textContent = money(summary.netSubtotal);
  document.querySelector("#cartDiscount").textContent = `-${money(summary.netDiscount)}`;
  document.querySelector("#cartTax").textContent = money(summary.discountedTax);
  document.querySelector("#cartTotal").textContent = money(summary.total);
  const cartNotice = document.querySelector("#cartNotice");
  cartNotice.textContent = count ? `${count} ürün sepetinizde${summary.discountGross ? ` · ${money(summary.discountGross)} indirim uygulandı` : ""}.` : "Sepetiniz boş. Ödemeye geçmek için en az bir ürün ekleyin.";
  if (count) cartNotice.classList.remove("cart-notice-error");
  const suggestion = document.querySelector("#campaignSuggestion");
  document.querySelector(".campaign-apply").hidden = guestCheckout;
  suggestion.hidden = guestCheckout;
  if (suggestion) {
    const recommendation = getCampaignRecommendation(subtotal);
    suggestion.innerHTML = recommendation ? `<strong>Size uygun kampanya</strong><span>${recommendation.title}</span><small>${recommendation.detail}</small>` : "<strong>Kampanya önerisi</strong><span>Sepetinize ürün ekleyin, size uygun fırsatı önerelim.</span>";
  }
  cartItems.innerHTML = cart.length ? cart.map((item) => `<div class="cart-item"><img src="${item.image}" alt=""><div><strong>${item.name}</strong><small>${item.price} · ${item.quantity}/${item.maxQuantity} adet · KDV %${item.taxRate}</small><div class="cart-item-actions"><button data-cart-action="minus" data-product-id="${item.id}">−</button><button data-cart-action="plus" data-product-id="${item.id}" ${item.quantity >= item.maxQuantity ? "disabled" : ""}>+</button><button data-cart-action="remove" data-product-id="${item.id}">Sil</button></div></div></div>`).join("") : "<p class=\"empty-cart\">Sepetiniz henüz boş. Ürün ekleyerek başlayın.</p>";
  cartItems.querySelectorAll("[data-cart-action]").forEach((button) => button.addEventListener("click", () => changeCart(button.dataset.productId, button.dataset.cartAction)));
  renderProducts();
}
function isCampaignEligible(campaign, subtotal) {
  const [, , , minimum, , type] = campaign;
  if (subtotal < minimum) return false;
  if (type === "category") {
    const categoryNames = cart.map((item) => item.category);
    return categoryNames.some((category) => campaign[2].includes(category.split(" ")[0]));
  }
  if (type === "items") return cart.reduce((sum, item) => sum + item.quantity, 0) >= 3;
  return true;
}
function getAppliedDiscount(subtotal) {
  const campaign = campaigns.find((item) => item[0] === appliedCoupon);
  if (!campaign || !isCampaignEligible(campaign, subtotal)) return 0;
  return campaign[5] === "percent" ? subtotal * campaign[4] / 100 : campaign[5] === "discount" ? campaign[4] : 0;
}
function getCampaignRecommendation(subtotal) {
  const eligible = campaigns.filter((campaign) => isCampaignEligible(campaign, subtotal));
  if (!eligible.length) return campaigns.find((campaign) => campaign[3] > subtotal) ? { title: `${campaigns.find((campaign) => campaign[3] > subtotal)[3]} TL'ye ${campaigns.find((campaign) => campaign[3] > subtotal)[1]}`, detail: "Sepetinize biraz daha ürün ekleyerek bu fırsata yaklaşabilirsiniz." } : null;
  const best = eligible.sort((a, b) => (b[4] || 0) - (a[4] || 0))[0];
  return { title: `${best[0]} · ${best[1]}`, detail: best[2] };
}
function changeCart(id, action) {
  const item = cart.find((product) => product.id === id);
  if (!item && action === "plus") return addToCart(id);
  if (!item) return;
  if (action === "plus") {
    if (item.quantity >= item.maxQuantity) {
      showToast(`${item.name} için en fazla ${item.maxQuantity} adet eklenebilir.`);
      return;
    }
    item.quantity += 1;
  }
  if (action === "minus") item.quantity -= 1;
  if (action === "remove" || item.quantity <= 0) cart = cart.filter((product) => product.id !== id);
  updateCart();
}
function renderSearchResults(query) {
  const term = normalize(query.trim());
  if (term.length < 2) {
    searchResults.innerHTML = term ? "<p class=\"search-hint\">En az 2 harf yazın.</p>" : "<p class=\"search-hint\">5.000 ürün arasında arama yapın.</p>";
    return;
  }
  const matches = products
    .filter((product) => normalize(`${product.name} ${product.category} ${product.keywords}`).includes(term))
    .sort((a, b) => {
      const score = (product) => {
        const name = normalize(product.name);
        const words = name.split(/\s+/);
        if (name === term) return 0;
        if (words.some((word) => word === term)) return 1;
        if (name.startsWith(term)) return 2;
        if (words.some((word) => word.startsWith(term))) return 3;
        if (name.includes(term)) return 4;
        if (normalize(product.category).includes(term)) return 5;
        return 6;
      };
      return score(a) - score(b) || a.name.localeCompare(b.name, "tr");
    });
  searchResults.innerHTML = matches.length ? `<p class="search-summary">${matches.length} eşleşme gösteriliyor</p>${matches.map((product) => `<button class="search-result" type="button" data-product-id="${product.id}"><img src="${product.image}" alt=""><span><strong>${product.name}</strong><small>${product.category} · ${product.price}</small></span><i>→</i></button>`).join("")}` : "<p class=\"search-hint\">Eşleşen ürün bulunamadı.</p>";
  searchResults.querySelectorAll(".search-result").forEach((result) => result.addEventListener("click", () => {
    const index = products.findIndex((product) => product.id === result.dataset.productId);
    activeCategory = "";
    catalogMode = "catalog";
    currentPage = Math.floor(index / pageSize) + 1;
    renderProducts();
    closeSearch();
    document.querySelector("#one-cikanlar").scrollIntoView({ behavior: "smooth" });
  }));
}
function openSearch() { searchPanel.classList.add("is-open"); searchPanel.setAttribute("aria-hidden", "false"); document.querySelector("#siteSearch").focus(); }
function closeSearch() { searchPanel.classList.remove("is-open"); searchPanel.setAttribute("aria-hidden", "true"); }
function openCart() { cartDrawer.classList.add("is-open"); document.body.classList.add("drawer-open"); }
function closeCart() { cartDrawer.classList.remove("is-open"); document.body.classList.remove("drawer-open"); }
function showToast(message) { toast.textContent = message; toast.classList.add("show"); window.setTimeout(() => toast.classList.remove("show"), 2600); }
function digitsOnly(value, limit) { return value.replace(/\D/g, "").slice(0, limit); }
function formatCardNumber(value) {
  return digitsOnly(value, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
}
function formatExpiry(value) {
  const digits = digitsOnly(value, 4);
  return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
}
function formatPhone(value) {
  const digits = digitsOnly(value, 11);
  if (!digits) return "";
  const groups = [digits.slice(0, 4), digits.slice(4, 7), digits.slice(7, 9), digits.slice(9, 11)].filter(Boolean);
  return groups.join(" ");
}
function formatField(input, formatter) {
  if (!input) return;
  input.addEventListener("input", () => { input.value = formatter(input.value); });
  input.addEventListener("paste", () => window.setTimeout(() => { input.value = formatter(input.value); }, 0));
}
function openAccountModal() {
  if (currentUser) {
    openAccountPage();
    return;
  }
  document.querySelector("#accountForm").reset();
  setAccountMode("login");
  document.querySelector("#accountModal").classList.add("is-open");
  document.querySelector("#accountModal").setAttribute("aria-hidden", "false");
}
function closeAccountModal() {
  document.querySelector("#accountModal").classList.remove("is-open");
  document.querySelector("#accountModal").setAttribute("aria-hidden", "true");
}
function openReceipt(orderNumber, orderItems, total, customerType) {
  const receiptContent = document.querySelector("#receiptContent");
  receiptContent.innerHTML = `<p class="eyebrow">NOVA MARKET · ${customerType}</p><h2 id="receiptTitle">Siparişiniz alındı.</h2><p class="receipt-number">Sipariş no: <strong>${orderNumber}</strong></p><div class="receipt-items">${orderItems.map((item) => `<div><span>${item.name} × ${item.quantity}</span><strong>${money(Number(item.price.replace("₺", "").replace(",", ".")) * item.quantity)}</strong></div>`).join("")}</div><div class="receipt-total"><span>Ödenecek toplam</span><strong>${money(total)}</strong></div><p class="receipt-note">Bu fiş demo amaçlı geçici olarak oluşturuldu. Sipariş numaranızı destek ekibine iletebilirsiniz.</p>`;
  document.querySelector("#receiptModal").classList.add("is-open");
  document.querySelector("#receiptModal").setAttribute("aria-hidden", "false");
}
function closeReceiptModal() {
  document.querySelector("#receiptModal").classList.remove("is-open");
  document.querySelector("#receiptModal").setAttribute("aria-hidden", "true");
}
function renderCategoryMenu() {
  const menu = document.querySelector("#categoryMenu");
  if (!menu) return;
  menu.innerHTML = categoryMenuData.map(([category, subcategories]) => `<div class="category-menu-group"><button class="category-menu-main" type="button" data-category="${category}" aria-expanded="false">${category}<span>+</span></button><div class="category-submenu">${subcategories.map((subcategory) => `<button type="button" data-category="${category}" data-subcategory="${subcategory}">${subcategory}</button>`).join("")}</div></div>`).join("");
  menu.querySelectorAll(".category-menu-main").forEach((button) => button.addEventListener("click", () => {
    const group = button.closest(".category-menu-group");
    const isOpen = group.classList.toggle("is-expanded");
    button.setAttribute("aria-expanded", String(isOpen));
    button.querySelector("span").textContent = isOpen ? "−" : "+";
  }));
  menu.querySelectorAll(".category-submenu button[data-subcategory]").forEach((button) => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    activeSubcategory = button.dataset.subcategory || "";
    catalogMode = "catalog";
    currentPage = 1;
    document.querySelector("#categoryMenu").classList.remove("is-open");
    document.querySelector("#categoryToggle").setAttribute("aria-expanded", "false");
    renderProducts();
    document.querySelector("#one-cikanlar").scrollIntoView({ behavior: "smooth" });
  }));
}
function renderCampaigns() {
  const grid = document.querySelector("#campaignGrid");
  if (!grid) return;
  grid.innerHTML = campaigns.map(([code, title, detail, minimum, value, type], index) => `<article class="campaign-card ${index % 3 === 1 ? "campaign-card-lime" : ""} ${index % 3 === 2 ? "campaign-card-dark" : ""}"><span class="campaign-badge">${code}</span><h3>${title}</h3><p>${detail}</p>${type === "shipping" ? `<a href="#one-cikanlar">Ürünleri keşfet →</a>` : `<button class="campaign-copy" data-code="${code}">Kodu kopyala</button>`}</article>`).join("");
  grid.querySelectorAll(".campaign-copy").forEach((button) => button.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(button.dataset.code); } catch { /* Clipboard permission is optional. */ }
    showToast(`${button.dataset.code} kodu hazır. Sepette kullanabilirsiniz.`);
  }));
}
let activeHeroSlide = 0;
let heroTimer;
function renderHeroSlide() {
  const carousel = document.querySelector("#heroCarousel");
  const dots = document.querySelector("#heroDots");
  if (!carousel || !dots) return;
  const slide = heroSlides[activeHeroSlide];
  const slideImage = slide.campaignOnly ? `<div class="hero-slide-image hero-campaign-art"><span>★</span><strong>NOVA</strong></div>` : `<div class="hero-slide-image"><img src="${slide.product.image}" alt="${slide.product.alt}" loading="eager"></div>`;
  const slideDescription = slide.campaignOnly ? slide.campaign : slide.product.description;
  const slidePrice = slide.campaignOnly ? "Fırsatı keşfet" : slide.product.price;
  const slideTarget = slide.campaignOnly ? `href="#kampanyalar" data-page-link="kampanyalar"` : `href="#one-cikanlar" data-hero-product-id="${slide.product.id}"`;
  carousel.innerHTML = `<article class="hero-slide is-active">${slideImage}<div class="hero-slide-copy"><span class="card-label">${slide.badge}</span><h3>${slide.offer}</h3><p>${slideDescription}</p><strong class="hero-slide-price">${slidePrice}</strong><small>${slide.campaign}</small><a ${slideTarget} class="hero-slide-link">${slide.campaignOnly ? "Kampanyaları gör" : "Ürünü keşfet"} <span>↗</span></a></div></article>`;
  const heroProductLink = carousel.querySelector("[data-hero-product-id]");
  if (heroProductLink) heroProductLink.addEventListener("click", (event) => {
    event.preventDefault();
    openProductModal(heroProductLink.dataset.heroProductId);
  });
  const heroSlide = carousel.querySelector(".hero-slide");
  if (heroSlide) heroSlide.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    if (slide.campaignOnly) openContentPage("kampanyalar");
    else openProductModal(slide.product.id);
  });
  dots.innerHTML = heroSlides.map((item, index) => `<button type="button" class="${index === activeHeroSlide ? "is-active" : ""}" data-hero-index="${index}" aria-label="${index + 1}. slaytı göster"></button>`).join("");
  dots.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    activeHeroSlide = Number(button.dataset.heroIndex);
    renderHeroSlide();
    restartHeroTimer();
  }));
}
function moveHeroSlide(step) {
  activeHeroSlide = (activeHeroSlide + step + heroSlides.length) % heroSlides.length;
  renderHeroSlide();
  restartHeroTimer();
}
function restartHeroTimer() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => moveHeroSlide(1), 5200);
}

document.querySelector("#searchButton").addEventListener("click", () => searchPanel.classList.contains("is-open") ? closeSearch() : openSearch());
document.querySelector("#siteSearch").addEventListener("input", (event) => renderSearchResults(event.target.value));
document.querySelector("#clearSearch").addEventListener("click", () => { document.querySelector("#siteSearch").value = ""; renderSearchResults(""); });
document.querySelector("#cartButton").addEventListener("click", openCart);
document.querySelector("#mobileCartBubble").addEventListener("click", openCart);
document.querySelector("#closeCart").addEventListener("click", closeCart);
document.querySelector("#cartBackdrop").addEventListener("click", closeCart);
document.querySelector("#closeProductModal").addEventListener("click", closeProductModal);
document.querySelector("#productModalBackdrop").addEventListener("click", closeProductModal);
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeProductModal(); });
document.querySelector("#pageSize").addEventListener("change", (event) => { pageSize = Number(event.target.value); currentPage = 1; renderProducts(); });
function focusCatalog() {
  const catalog = document.querySelector("#one-cikanlar");
  if (catalog) catalog.scrollIntoView({ behavior: "smooth", block: "start" });
}
document.querySelector("#prevPage").addEventListener("click", () => { if (currentPage > 1) { currentPage -= 1; renderProducts(); focusCatalog(); } });
document.querySelector("#nextPage").addEventListener("click", () => { const source = getCatalogSource(); if (currentPage < Math.ceil(source.length / pageSize)) { currentPage += 1; renderProducts(); focusCatalog(); } });
document.querySelector("#nextProduct").addEventListener("click", () => { const totalPages = Math.max(1, Math.ceil(getCatalogSource().length / pageSize)); currentPage = currentPage === totalPages ? 1 : currentPage + 1; renderProducts(); focusCatalog(); });
document.querySelector("#prevProduct").addEventListener("click", () => { const totalPages = Math.max(1, Math.ceil(getCatalogSource().length / pageSize)); currentPage = currentPage === 1 ? totalPages : currentPage - 1; renderProducts(); focusCatalog(); });
document.querySelector("#checkoutButton").addEventListener("click", () => {
  if (!cart.length) {
    const notice = document.querySelector("#cartNotice");
    notice.textContent = "Sepet boş. Ödemeye geçmek için önce en az bir ürün ekleyin.";
    notice.classList.add("cart-notice-error");
    showToast("Sepet boş. Önce ürün ekleyin.");
    return;
  }
  document.querySelector("#cartNotice").classList.remove("cart-notice-error");
  document.querySelector("#checkoutStep").classList.add("is-visible");
  document.querySelector("#checkoutStep").setAttribute("aria-hidden", "false");
  document.querySelector("#cartItems").classList.add("is-hidden");
  document.querySelector(".campaign-apply").classList.add("is-hidden");
  document.querySelector("#campaignSuggestion").classList.add("is-hidden");
  document.querySelector("#cartNotice").classList.add("is-hidden");
  document.querySelector(".cart-footer").classList.add("is-hidden");
});
document.querySelector("#closePayment").addEventListener("click", () => {
  document.querySelector("#checkoutStep").classList.remove("is-visible");
  document.querySelector("#checkoutStep").setAttribute("aria-hidden", "true");
  document.querySelector("#cartItems").classList.remove("is-hidden");
  document.querySelector(".campaign-apply").classList.remove("is-hidden");
  document.querySelector("#campaignSuggestion").classList.remove("is-hidden");
  document.querySelector("#cartNotice").classList.remove("is-hidden");
  document.querySelector(".cart-footer").classList.remove("is-hidden");
});
document.querySelectorAll(".payment-method").forEach((method) => method.addEventListener("click", () => {
  const selectedMethod = method.dataset.method;
  document.querySelectorAll(".payment-method").forEach((item) => item.classList.toggle("active", item === method));
  document.querySelectorAll(".payment-panel").forEach((panel) => panel.classList.toggle("is-visible", panel.dataset.panel === selectedMethod));
  document.querySelectorAll(".payment-panel input").forEach((input) => {
    input.required = selectedMethod === "card" ? input.closest("[data-panel='card']") !== null : input.closest(`[data-panel='${selectedMethod}']`) !== null;
  });
}));
document.querySelector("#paymentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentUser) {
    document.querySelector("#closePayment").click();
    openAccountModal();
    document.querySelector("#accountMessage").textContent = "Siparişi tamamlamak için önce giriş yapmalısınız.";
    showToast("Sipariş oluşturmak için giriş yapmalısınız.");
    return;
  }
  const orderItems = cart.map((item) => ({ ...item }));
  const summary = getCartSummary();
  const total = summary.total;
  const now = new Date();
  const orderNumber = `NOVA-${now.getFullYear()}-${String(Date.now()).slice(-6)}`;
  const customerType = document.querySelector("#accountButton").dataset.email ? "Üyelikli sipariş" : "Üyeliksiz sipariş";
  if (currentUser) {
    accountOrders.push({ orderNumber, email: currentUser.email, date: now.toLocaleDateString("tr-TR"), createdAt: now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }), createdAtISO: now.toISOString(), status: "active", total, discount: summary.discountGross, tax: summary.discountedTax, items: orderItems });
    window.localStorage.setItem("novaOrders", JSON.stringify(accountOrders));
  }
  cart = [];
  window.localStorage.removeItem(CART_STORAGE_KEY);
  document.querySelector("#closePayment").click();
  updateCart();
  closeCart();
  openReceipt(orderNumber, orderItems, total, customerType);
});
formatField(document.querySelector(".payment-panel[data-panel='card'] input[autocomplete='cc-number']"), formatCardNumber);
formatField(document.querySelector(".payment-panel[data-panel='card'] input[autocomplete='cc-exp']"), formatExpiry);
formatField(document.querySelector(".payment-panel[data-panel='card'] input[autocomplete='cc-csc']"), (value) => digitsOnly(value, 3));
formatField(document.querySelector(".payment-panel[data-panel='cash'] input[type='tel']"), formatPhone);
formatField(document.querySelector(".payment-panel[data-panel='cash'] input[inputmode='numeric']"), (value) => digitsOnly(value, 5));
document.querySelector("#accountButton").addEventListener("click", openAccountModal);
document.querySelector("#closeAccountModal").addEventListener("click", closeAccountModal);
document.querySelector("#accountModalBackdrop").addEventListener("click", closeAccountModal);
document.querySelector("#guestOrderButton").addEventListener("click", () => {
  guestCheckout = true;
  appliedCoupon = "";
  document.querySelector("#couponInput").value = "";
  document.querySelector("#couponMessage").textContent = "";
  closeAccountModal();
  updateCart();
  openCart();
  showToast("Üyeliksiz siparişte kampanyalar devre dışıdır.");
});
document.querySelector("#accountForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#accountEmail").value.trim().toLowerCase();
  const password = document.querySelector("#accountPassword").value;
  const isSignup = event.target.dataset.signup === "true";
  if (isSignup) {
    if (password.length < 6) {
      document.querySelector("#accountMessage").textContent = "Şifre en az 6 karakter olmalıdır.";
      return;
    }
    if (password !== document.querySelector("#signupPasswordConfirm").value) {
      document.querySelector("#accountMessage").textContent = "Şifre tekrarı eşleşmiyor.";
      return;
    }
    if (demoUsers.some((item) => item.email === email) || registeredUsers.some((item) => item.email === email)) {
      document.querySelector("#accountMessage").textContent = "Bu e-posta demo ortamında zaten kayıtlı.";
      return;
    }
    registeredUsers = [...registeredUsers, { email, password, firstName: document.querySelector("#signupFirstName").value.trim() || "Nova", lastName: document.querySelector("#signupLastName").value.trim() || "Müşterisi" }];
    window.localStorage.setItem("novaDemoUsers", JSON.stringify(registeredUsers));
    setAccountMode("login");
    document.querySelector("#accountMessage").textContent = "Üyeliğiniz oluşturuldu. Şimdi giriş yapabilirsiniz.";
    return;
  }
  const user = [...demoUsers, ...registeredUsers].find((item) => item.email === email && item.password === password);
  if (!user) {
    document.querySelector("#accountMessage").textContent = "Demo kullanıcı bilgileri eşleşmedi.";
    return;
  }
  document.querySelector("#accountButton").textContent = "Hesabım";
  document.querySelector("#accountButton").dataset.email = email;
  currentUser = { ...user, firstName: user.firstName || "Nova", lastName: user.lastName || "Müşterisi" };
  guestCheckout = false;
  window.localStorage.setItem("novaCurrentUser", JSON.stringify(currentUser));
  document.querySelector("#accountMessage").textContent = `${email} ile giriş yapıldı.`;
  closeAccountModal();
  openAccountPage();
});
document.querySelector("#signupButton").addEventListener("click", () => {
  setAccountMode("signup");
});
function setAccountMode(mode) {
  const signup = mode === "signup";
  const form = document.querySelector("#accountForm");
  form.dataset.signup = String(signup);
  document.querySelector("#accountModalTitle").textContent = signup ? "Yeni üye ol." : "E-posta ile giriş.";
  document.querySelector("#accountDescription").textContent = signup ? "Nova hesabınızı oluşturun; siparişlerinizi ve teslimat bilgilerinizi tek yerde yönetin." : "Siparişlerinizi ve fişlerinizi bu demo hesapla takip edin.";
  document.querySelectorAll(".signup-only-field").forEach((field) => { field.hidden = !signup; });
  document.querySelector("#signupPasswordConfirmLabel").hidden = !signup;
  document.querySelector("#signupPasswordConfirm").required = signup;
  document.querySelector("#accountSubmitButton").innerHTML = signup ? "Üyeliği tamamla <span>→</span>" : "Giriş yap <span>→</span>";
  document.querySelector("#signupButton").hidden = signup;
  document.querySelector("#loginModeButton").hidden = !signup;
  document.querySelector("#accountMessage").textContent = signup ? "Bilgilerinizi doldurarak demo üyeliğinizi oluşturabilirsiniz." : "";
  if (!signup) {
    document.querySelector("#signupPasswordConfirm").value = "";
    document.querySelector("#signupFirstName").value = "";
    document.querySelector("#signupLastName").value = "";
  }
}
document.querySelector("#loginModeButton").addEventListener("click", () => setAccountMode("login"));
document.querySelectorAll("[data-account-tab]").forEach((button) => button.addEventListener("click", () => activateAccountTab(button.dataset.accountTab)));
document.querySelector("#accountBackButton").addEventListener("click", closeAccountPage);
document.querySelector("#accountLogout").addEventListener("click", () => {
  currentUser = null;
  appliedCoupon = "";
  window.localStorage.removeItem("novaCurrentUser");
  closeAccountPage();
  document.querySelector("#accountButton").textContent = "Giriş";
  delete document.querySelector("#accountButton").dataset.email;
  showToast("Hesabınızdan güvenli çıkış yapıldı.");
});
document.querySelector("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  currentUser = { ...currentUser, firstName: document.querySelector("#profileFirstName").value.trim(), lastName: document.querySelector("#profileLastName").value.trim(), phone: document.querySelector("#profilePhone").value.trim(), birthDate: document.querySelector("#profileBirthDate").value };
  window.localStorage.setItem("novaCurrentUser", JSON.stringify(currentUser));
  document.querySelector("#profileMessage").textContent = "Kişisel bilgileriniz kaydedildi.";
  openAccountPage("profile");
});
document.querySelector("#addCardButton").addEventListener("click", () => showToast("Demo kart ekleme alanı ödeme adımında kullanılabilir."));
document.querySelector("#addAddressButton").addEventListener("click", () => showToast("Demo adres ekleme formu yakında kullanılabilir."));
document.querySelector("#clearAccountData").addEventListener("click", () => {
  accountOrders = accountOrders.filter((order) => order.email !== currentUser?.email);
  window.localStorage.setItem("novaOrders", JSON.stringify(accountOrders));
  renderOrderHistory();
  showToast("Hesabınıza ait demo sipariş verileri temizlendi.");
});
function openContentPage(pageId) {
  const validPages = new Set(["one-cikanlar", "hikayemiz", "iletisim", "teslimat-iade", "sss", "kampanyalar"]);
  const targetPage = validPages.has(pageId) ? pageId : "one-cikanlar";
  if (targetPage === "one-cikanlar") {
    activeCategory = "";
    activeSubcategory = "";
    catalogMode = "featured";
    currentPage = 1;
    renderProducts();
  }
  document.querySelector("#accountPage").hidden = true;
  document.querySelector("#anasayfa").hidden = targetPage === "kampanyalar";
  document.querySelector("#kampanyalar").hidden = targetPage !== "kampanyalar";
  document.querySelectorAll("#anasayfa > section").forEach((section) => {
    section.hidden = section.id !== targetPage;
    section.classList.toggle("is-page-target", section.id === targetPage);
  });
  document.body.classList.add("content-page-active");
  document.body.dataset.activePage = targetPage;
  if (targetPage === "one-cikanlar") focusCatalog();
  else window.scrollTo(0, 0);
}
document.addEventListener("click", (event) => {
  const pageLink = event.target.closest("[data-page-link]");
  if (!pageLink) return;
  event.preventDefault();
  openContentPage(pageLink.dataset.pageLink);
});
document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#accountPage").hidden = true;
  document.querySelector("#kampanyalar").hidden = true;
  document.querySelector("#anasayfa").hidden = false;
  document.querySelectorAll("#anasayfa > section").forEach((section) => { section.hidden = false; });
  document.body.classList.remove("content-page-active");
  delete document.body.dataset.activePage;
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelector("#closeReceiptModal").addEventListener("click", closeReceiptModal);
document.querySelector("#receiptModalBackdrop").addEventListener("click", closeReceiptModal);
document.querySelector("#newsletterForm").addEventListener("submit", (event) => { event.preventDefault(); document.querySelector("#formMessage").textContent = "Harika! Nova dünyasına hoş geldiniz."; event.target.reset(); });
document.querySelector("#contactForm").addEventListener("submit", (event) => { event.preventDefault(); document.querySelector("#contactMessage").textContent = "Mesajınız alındı. En kısa sürede size dönüş yapacağız."; event.target.reset(); });
document.querySelector("#applyCoupon").addEventListener("click", () => {
  if (!currentUser) {
    appliedCoupon = "";
    document.querySelector("#couponMessage").textContent = "Kupon kodunu kullanmak için giriş yapmalısınız.";
    return;
  }
  const code = document.querySelector("#couponInput").value.trim().toUpperCase();
  const subtotal = getCartSubtotal();
  const campaign = campaigns.find((item) => item[0] === code);
  if (campaign && isCampaignEligible(campaign, subtotal)) {
    appliedCoupon = code;
    document.querySelector("#couponMessage").textContent = `${code} uygulandı: ${campaign[1]}.`;
  } else if (campaign) {
    appliedCoupon = "";
    document.querySelector("#couponMessage").textContent = `${code} için kampanya koşullarını henüz karşılamıyorsunuz.`;
  } else {
    appliedCoupon = "";
    document.querySelector("#couponMessage").textContent = "Bu indirim kodu geçerli değil.";
  }
  updateCart();
});
document.querySelector("#categoryToggle").addEventListener("click", () => {
  openContentPage("one-cikanlar");
  const menu = document.querySelector("#categoryMenu");
  const isOpen = menu.classList.toggle("is-open");
  menu.setAttribute("aria-hidden", String(!isOpen));
  document.querySelector("#categoryToggle").setAttribute("aria-expanded", String(isOpen));
});
document.querySelector("#menuButton").addEventListener("click", () => document.querySelector(".main-nav").classList.toggle("is-open"));
document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => document.querySelector(".main-nav").classList.remove("is-open")));
document.addEventListener("click", (event) => {
  if (!searchPanel.contains(event.target) && event.target !== document.querySelector("#searchButton")) closeSearch();
  const categoryMenu = document.querySelector("#categoryMenu");
  if (!categoryMenu.contains(event.target) && event.target !== document.querySelector("#categoryToggle")) {
    categoryMenu.classList.remove("is-open");
    categoryMenu.setAttribute("aria-hidden", "true");
    document.querySelector("#categoryToggle").setAttribute("aria-expanded", "false");
  }
});
document.querySelector("#catalogCount").textContent = `${products.length.toLocaleString("tr-TR")} ürün`;
if (currentUser) {
  document.querySelector("#accountButton").textContent = "Hesabım";
  document.querySelector("#accountButton").dataset.email = currentUser.email;
}
renderCategoryMenu();
renderCampaigns();
document.querySelector("#heroPrev").addEventListener("click", () => moveHeroSlide(-1));
document.querySelector("#heroNext").addEventListener("click", () => moveHeroSlide(1));
renderHeroSlide();
restartHeroTimer();
renderProducts();
renderSearchResults("");
updateCart();
