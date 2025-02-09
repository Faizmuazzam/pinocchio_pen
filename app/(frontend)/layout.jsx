/* eslint-disable react/jsx-no-undef */
import { Inter, Archivo } from "next/font/google";
import "@/app/assets/css/globals.css";
import "@/app/assets/sass/style.scss";
import Navbar from "./components/navbar/navbar";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Error from "./error";
import Loading from "./loading";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pinocchio's Pen",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${archivo.variable} antialiased`}
      >
        <Navbar />
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <main className="main wrap">
              {children}
            </main>
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
