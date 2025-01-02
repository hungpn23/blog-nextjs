import "./globals.css";
import { Inconsolata } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ContentContainer } from "@/components/layouts/content-container";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import type { Metadata } from "next";
import { AuthProvider } from "@/contexts/auth.context";

const inconsolata = Inconsolata({
  subsets: ["vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Ngoc Hung's personal website and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("text-lg", inconsolata.className)}
    >
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">
                <NuqsAdapter>
                  <ContentContainer>
                    {children}
                    <Toaster />
                  </ContentContainer>
                </NuqsAdapter>
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
