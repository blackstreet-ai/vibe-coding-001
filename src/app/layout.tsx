import type { Metadata } from "next";
import "./globals.css";

// Import providers
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/components/providers/session-provider";

export const metadata: Metadata = {
  title: "Vibe App - Next.js with Shadcn UI",
  description: "A modern Next.js application with Shadcn UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
