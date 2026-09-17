# Haydarali Akbarov — Portfolio

Frontend dasturchi portfolio-sayti. React + Vite bilan qurilgan, admin panel orqali
loyiha cardlarini kod yozmasdan qo'shish mumkin.

## ⚠️ Muhim eslatma — Admin panel haqida

Admin panelda qo'shgan loyihalar hozircha **faqat sizning brauzeringizda**
saqlanadi (localStorage), chunki loyihada hali server/baza yo'q. Ya'ni:

- Siz o'z kompyuteringizda loyiha qo'shsangiz — faqat o'sha brauzerda ko'rinadi.
- Sayt boshqa odamlarga (yoki boshqa qurilmada sizga) ochilganda, siz
  qo'shgan loyihalar **ko'rinmaydi**.

Bu — shunchaki demo/boshlang'ich versiya uchun. Agar loyihalar **hammaga**
(saytga kirgan har bir odamga) ko'rinishini xohlasangiz, ortga (backend)
kerak bo'ladi — masalan bepul Supabase yoki Firebase bazasi. Aytsangiz, shuni
ham keyingi qadamda ulab beraman.

## Mahalliy ishga tushirish

```bash
npm install
npm run dev
```

Sayt: http://localhost:5173
Admin panel: http://localhost:5173/admin (standart parol: `admin123`)

Parolni o'zgartirish uchun `.env.example` faylini `.env` nomi bilan nusxalang
va `VITE_ADMIN_PASSWORD` qiymatini o'zgartiring:

```bash
cp .env.example .env
```

## GitHub'ga yuklash

```bash
git init
git add .
git commit -m "Portfolio saytim"
git branch -M main
git remote add origin https://github.com/akbarovhaydarali886-star/portfolio.git
git push -u origin main
```

(Avval GitHub'da bo'sh repository yarating, keyin yuqoridagi `origin` havolasini
o'sha repo manziliga almashtiring.)

## Vercel'ga deploy qilish

1. https://vercel.com ga GitHub akkountingiz bilan kiring.
2. "Add New → Project" tugmasini bosing va shu repository'ni tanlang.
3. Framework avtomatik "Vite" deb aniqlanadi — hech narsani o'zgartirmang.
4. **Environment Variables** bo'limiga `VITE_ADMIN_PASSWORD` va o'zingiz
   xohlagan parolni qo'shing (aks holda standart `admin123` ishlatiladi).
5. "Deploy" tugmasini bosing — bir necha soniyada sayt tayyor bo'ladi.

## Domen ulash

Domen sotib olgach (Namecheap, GoDaddy va h.k.):

1. Vercel loyihangizda **Settings → Domains** bo'limiga o'ting.
2. Domeningizni kiriting va Vercel ko'rsatgan DNS yozuvlarini (A yoki CNAME)
   domen provayderingizning DNS sozlamalariga qo'shing.
3. DNS yangilanishi odatda bir necha daqiqadan bir necha soatgacha vaqt oladi.

## Loyiha tuzilishi

```
src/
  components/   → Navbar, Hero, About, Skills, ProjectCard, Contact, Footer
  pages/
    Home.jsx     → asosiy sahifa
    Admin.jsx    → admin panel (loyiha qo'shish/tahrirlash/o'chirish)
  utils/storage.js → loyihalarni saqlash (hozircha localStorage)
```