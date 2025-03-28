"use client";

import Link from "next/link";

// Import Shadcn UI components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-8">
      <header className="w-full max-w-4xl flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-center">Vibe App</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-center max-w-2xl">
          A modern web application with secure authentication using NextAuth.js
        </p>
      </header>

      <main className="w-full max-w-4xl flex flex-col items-center gap-8">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Welcome to Vibe App</h2>
          <p className="text-lg mb-8">
            Experience seamless authentication with Google login and email/password credentials.
            Built with Next.js, Tailwind CSS, and Shadcn UI for a modern user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/register">Create Account</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Secure Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Login securely with Google OAuth or email/password credentials. Your data is always protected.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern UI</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Enjoy a beautiful, responsive interface built with Tailwind CSS and Shadcn UI components.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your profile information and account settings with our intuitive dashboard.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>Built with Next.js, TypeScript, Tailwind CSS, and NextAuth.js</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}
