import "./globals.css";
import NavLink from "./components/NavLink";
import Footer from "./components/Footer";

export const metadata = {
  title: "Audiophile - Premium Audio Equipment",
  description: "Discover premium headphones, speakers, and earphones at Audiophile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavLink />
        {children}
        <Footer />
      </body>
    </html>
  );
}