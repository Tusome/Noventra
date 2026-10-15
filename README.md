# Noventra Technologies — Website

A modern, interactive website for Noventra Technologies built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Navigate into the project
cd noventra

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
noventra/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (all sections)
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx          # Sticky navbar with mobile menu
│   ├── Hero.tsx            # Hero section with animations
│   ├── Services.tsx        # Services grid (9 services)
│   └── Contact.tsx         # Contact form + info
├── public/
│   └── logo.png            # ADD YOUR LOGO HERE
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Adding Your Logo

1. Export your logo as **PNG or SVG** (recommended: 200×50px transparent background)
2. Place it in the `/public/` folder as `logo.png`
3. In `Navbar.tsx`, replace the `logo-mark` div:

```tsx
// Replace this:
<div className="logo-mark">NT</div>
Noventra <span className="text-teal">Technologies</span>

// With this:
<Image src="/logo.png" alt="Noventra Technologies" width={160} height={40} />
```

---

## 🌍 Deployment Options

### Option 1: Vercel (Recommended — Free)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Click **Deploy** — done! Vercel auto-detects Next.js

```bash
# Or deploy via CLI:
npm install -g vercel
vercel
```

### Option 2: Netlify

```bash
npm run build
# Upload the `.next` folder OR connect GitHub repo on netlify.com
```

### Option 3: Custom VPS (Ubuntu)

```bash
# Build
npm run build

# Start production server
npm start

# Or use PM2 for process management:
npm install -g pm2
pm2 start npm --name "noventra" -- start
pm2 save
pm2 startup
```

### Option 4: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t noventra-website .
docker run -p 3000:3000 noventra-website
```

---

## 🔧 Customization

### Update Contact Details
In `app/page.tsx` → `Contact` component, update:
- Location, email, phone number
- Business hours

### Update Colors
In `tailwind.config.js`:
```js
colors: {
  teal: '#00c8a0',   // Primary brand color
  sky: '#0ea5e9',    // Secondary accent
  ink: '#0a0e1a',    // Background dark
}
```

### Add Pages
Create new files in `app/`:
- `app/about/page.tsx` → `/about`
- `app/services/page.tsx` → `/services`
- `app/contact/page.tsx` → `/contact`

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icons |

---

## 📝 License

© 2024 Noventra Technologies. All rights reserved.
