import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Model from "./components/models/Model";
import RegisterModel from "./components/models/RegisterModel";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModel />
          <Model
            actionLabel="Submit"
            secondaryActionLabel="hello"
            title="Hello World"
            isOpen
          />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
