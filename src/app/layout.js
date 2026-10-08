import "./globals.css";

export const metadata = {
  title: "Pacifluid Pumps | Industrial Rotary Gear Pump Manufacturer | Shakti Engineers",
  description: "Manufacturer and exporter of heavy-duty positive displacement rotary twin gear pumps, sanitary stainless steel gear pumps, and internal fuel injection gear pumps in India. ISO 9001:2015 & TUV Rheinland certified.",
  keywords: "rotary gear pump manufacturer, fuel injection internal gear pump, stainless steel gear pump, industrial positive displacement pump, pacifluid pumps, shakti engineers ahmedabad Ahmedabad",
  metadataBase: new URL("https://www.pacifluidpumps.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pacifluid Pumps | Industrial Positive Displacement Gear Pumps",
    description: "Precision engineered rotary gear pumps for boilers, chemical, petrochemical, food, and heavy industrial duties. Tested to 35-50 Bar.",
    url: "https://www.pacifluidpumps.com",
    siteName: "Pacifluid Pumps — Shakti Engineers",
    images: [
      {
        url: "/assets/img/product/gp.png",
        width: 1200,
        height: 630,
        alt: "Pacifluid Industrial Gear Pump",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/img/favicon.png",
    shortcut: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white text-[#111827] antialiased selection:bg-[#155A9C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
