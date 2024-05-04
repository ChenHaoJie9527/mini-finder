import type { Metadata } from "next";
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider";
import ConvexClientProvider from "./ConvexClientProvider";
import { ModeToggle } from "@/components/modo-toggle";
import { APP_INFO } from "../../config";
import "./globals.css";

export const ubuntuFont = localFont({
  src: [
    {
      path: "./fonts/Ubuntu-Light.ttf",
      weight: "300",
    },
    {
      path: "./fonts/Ubuntu-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Ubuntu-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Ubuntu-MediumItalic.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Ubuntu-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Ubuntu-BoldItalic.ttf",
      weight: "800",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  ...APP_INFO,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <html lang="en" suppressContentEditableWarning>
        <body className={ubuntuFont.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div>
              <ModeToggle />
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ConvexClientProvider>
  );
}
