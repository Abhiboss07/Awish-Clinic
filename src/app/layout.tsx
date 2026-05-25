import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Awish Clinic - Best Dermatologist & Aesthetic Clinic in Delhi NCR | Hair, Skin & Cosmetic Care",
  description: "Awish Clinic is a leading dermatology, hair transplant and aesthetic surgery clinic in Sarita Vihar, New Delhi, with locations across Gurugram, East Patel Nagar and Jaipur. Founded by board-certified dermatologists Dr. Vijay Kumar (MBBS, MD) and Dr. Pooja Varshney (MBBS, MD).",
  keywords: "best dermatologist in delhi, skin specialist delhi ncr, hair transplant delhi, cosmetic surgery sarita vihar, awish clinic delhi, aesthetic clinic gurugram, hair loss treatment delhi",
  robots: "index, follow",
  openGraph: {
    title: "Awish Clinic - Best Dermatologist & Aesthetic Clinic in Delhi NCR | Hair, Skin & Cosmetic Care",
    description: "Awish Clinic is a leading dermatology, hair transplant and aesthetic surgery clinic in Sarita Vihar, New Delhi, with locations across Gurugram, East Patel Nagar and Jaipur.",
    url: "https://awishclinic.com",
    siteName: "Awish Clinic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awish Clinic - Best Dermatologist & Aesthetic Clinic in Delhi NCR | Hair, Skin & Cosmetic Care",
    description: "Awish Clinic is a leading dermatology, hair transplant and aesthetic surgery clinic in Sarita Vihar, New Delhi, with locations across Gurugram, East Patel Nagar and Jaipur.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-clinic-bg text-clinic-dark font-sans flex flex-col antialiased">
        <SmoothScroll>
          <Header />
          <main className="flex-1 pt-[80px]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
