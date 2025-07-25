

# mustafayigitacar.github.io

Bu proje, [https://mustafayigitacar.github.io/](https://mustafayigitacar.github.io/) adresinde yayınlanan kişisel portfolyo web sitesidir. Modern React ile geliştirilmiş, tamamen responsive (mobil/tablet uyumlu) ve Github Pages üzerinde barındırılmaktadır.

## Özellikler
- Kişisel bilgiler, projeler, blog, sertifikalar ve iletişim bölümü
- Modern ve mobil uyumlu tasarım
- React Router ile sayfa geçişleri
- Koyu/açık tema desteği
- Github Pages ile otomatik deploy

## Canlı Demo
[https://mustafayigitacar.github.io/](https://mustafayigitacar.github.io/)

## Kurulum ve Geliştirme
1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/mustafayigitacar/mustafayigitacar.github.io.git
   cd mustafayigitacar.github.io/personal-website
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Geliştirme sunucusunu başlatın:
   ```bash
   npm start
   ```
   Ardından [http://localhost:3000](http://localhost:3000) adresinden ulaşabilirsiniz.

## Github Pages'a Deploy
Ana dizinden (https://mustafayigitacar.github.io/) yayınlanacak şekilde ayarlanmıştır.

1. Build alın:
   ```bash
   npm run build
   ```
2. 404.html dosyasını oluşturun (SPA yönlendirmeleri için):
   ```bash
   cp build/index.html build/404.html
   ```
3. Deploy edin:
   ```bash
   npm run deploy
   ```

> Not: Deploy işlemi otomatik olarak `gh-pages` branch'ine gönderir ve Github Pages'da ana dizinden yayına alır.

## Lisans
MIT 