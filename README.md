# React Film Arama Uygulaması

Bu proje, harici bir film API'si (The Movie Database - TMDB gibi) kullanarak filmleri listeleyen, arama yapmaya olanak tanıyan ve film detaylarını gösteren modern bir web uygulamasıdır. Kullanıcıların filmleri keşfetmesi, detaylarını incelemesi ve favorilerine eklemesi için geliştirilmiştir.

## ✨ Özellikler

- **Dinamik Film Listesi:** Popüler filmleri API'den çekerek ana sayfada listeler.
- **Film Arama:** Kullanıcıların istedikleri filmi isme göre aramalarını sağlayan bir arama çubuğu içerir.
- **Detaylı Film Sayfası:** Her film için puan, özet, çıkış tarihi ve benzer filmler gibi ayrıntılı bilgilerin yer aldığı özel bir sayfa sunar.
- **Favorilere Ekleme:** Kullanıcıların beğendikleri filmleri favori listesine eklemesini sağlar.
- **Sayfalandırma:** Filmler arasında ileri ve geri butonları ile kolayca gezinme imkanı.
- **Yüklenme ve Hata Yönetimi:** Veri beklenirken bir yüklenme animasyonu gösterir ve olası API hatalarında kullanıcıyı bilgilendirir.
- **Modern ve Duyarlı Arayüz:** Tüm cihazlarda (mobil, tablet, masaüstü) sorunsuz çalışan temiz bir tasarıma sahiptir.

## 🛠️ Kullanılan Teknolojiler

Bu projeyi geliştirirken kullanılan ana teknolojiler ve kütüphaneler:

- **Frontend:** React, Vite
- **Routing (Sayfa Yönlendirme):** React Router
- **API İstekleri:** Axios / Fetch API (`async/await` ile)
- **State Management:** React Hooks (useState, useEffect, useContext)
- **Styling:** Modern CSS veya bir CSS Framework

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler

- Node.js (v18 veya üstü)
- npm

### Kurulum

1.  **Projeyi klonlayın:**

    ```bash
    git clone https://github.com/EmirCobanOfficial/API-Film-Website.git
    ```

2.  **Proje dizinine gidin:**

    ```bash
    cd API-Film-Website
    ```

3.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    ```

### Projeyi Çalıştırma

Geliştirme sunucusunu başlatmak için aşağıdaki komutu çalıştırın. Bu komut, projeyi varsayılan olarak `http://localhost:5173` adresinde çalıştıracaktır.

```bash
npm run dev
```
