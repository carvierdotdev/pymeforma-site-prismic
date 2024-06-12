import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pymeforma Studio - Marketing y Copywriting",
  description:
    "Pymeforma Studio se especializa en crear contenido de marketing y copywriting para pequeñas empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
