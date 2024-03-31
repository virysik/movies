import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { inter } from "@/app/ui/fonts";
import Providers from "@/app/providers";
import { Wrapper } from "@/app/ui/home";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { Container } from "@/app/ui/home";

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
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <Wrapper>
                <Header />
                <Container>{children}</Container>
                <Footer />
              </Wrapper>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
