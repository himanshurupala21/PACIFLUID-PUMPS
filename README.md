# PACIFLUID PUMPS (SHAKTI ENGINEERS)

Official OEM Enterprise Web Portal for **Pacifluid Pumps / Shakti Engineers**, leading Indian manufacturer and global exporter of high-precision positive displacement rotary gear pumps, internal lobe pumps, bitumen jacketed pumps, and viscous fluid transfer pumping systems.

---

## 🚀 Key Features

- **Industrial Engineering Portfolio**: Full catalog of Rotary Twin Gear (GP / GPSS), Internal Gear, Jacketed, Barrel Unloading, and Sanitary Lobe Pumps.
- **Dynamic Technical Specifications**: Duty conditions, viscosity ratings, metallurgy guides (CI, WCB, SS-304, SS-316), and dimensional overviews.
- **Instant Inquiry System**: Direct-to-inbox lead pipeline powered by Nodemailer and Gmail SMTP with automated lead logging.
- **One-Click Communication**: Pre-formatted WhatsApp direct chat links and email quoting integration.
- **Modern Next.js 16 App Router**: Ultra-fast server components, optimized static pre-rendering, and responsive industrial design.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Dispatch**: Nodemailer (Gmail SMTP / Google App Password)

---

## ⚙️ Environment Configuration

Create a `.env.local` file in the root directory (based on `.env.example`):

```env
# Gmail account that dispatches inquiry alerts
GMAIL_USER=your-email@gmail.com

# 16-character Google App Password (generated via Google Account > Security > App Passwords)
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Destination inbox for website leads (defaults to GMAIL_USER if omitted)
INQUIRY_RECIPIENT_EMAIL=pacifluidpumps@gmail.com
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 🌐 Deployment on Vercel

1. Push this repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com) and click **"Add New..."** > **"Project"**.
3. Import the `PACIFLUID-PUMPS` repository.
4. In the **Environment Variables** section, add:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `INQUIRY_RECIPIENT_EMAIL`
5. Click **Deploy**.
