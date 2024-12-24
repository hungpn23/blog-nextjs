import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layouts/header";
import { ContentContainer } from "@/components/layouts/content-container";
import { Footer } from "@/components/layouts/footer";

const inconsolata = Inconsolata({
  subsets: ["vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pham Ngoc Hung - Backend Developer",
  description: "Ngoc Hung's personal website and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inconsolata.className}>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              <ContentContainer>{children}</ContentContainer>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
