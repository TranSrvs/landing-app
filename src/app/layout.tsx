import React from "react";
import "@/assets/css/globals.css";

export const metadata: Metadata = {
  title: "Company name",
  description: "Company description"
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
