import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { inter } from "@/app/ui/fonts";
import Providers from "@/app/providers";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { BackgroundWrapper, Container } from "@/app/ui/home";
import ThemeProvider from "@/app/theme";

export const metadata: Metadata = {
  title: "Movies",
  description: "Popular movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Providers>
          {/* <AppRouterCacheProvider options={{}}> */}
          <ThemeProvider>
            <BackgroundWrapper>
              <Container>
                <Header />
                {children}
                <Footer />
              </Container>
            </BackgroundWrapper>
          </ThemeProvider>
          {/* </AppRouterCacheProvider> */}
        </Providers>
      </body>
    </html>
  );
}
