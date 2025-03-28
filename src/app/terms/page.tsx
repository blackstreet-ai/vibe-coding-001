import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <div className="prose prose-sm">
        <p className="mb-4">Last updated: March 28, 2025</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h2>
        <p>
          Welcome to Vibe App. These Terms of Service govern your use of our website and services.
          By accessing or using our service, you agree to be bound by these Terms.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">2. User Accounts</h2>
        <p>
          When you create an account with us, you must provide accurate and complete information.
          You are responsible for safeguarding the password and for all activities that occur under your account.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">3. Content</h2>
        <p>
          Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material.
          You are responsible for the content that you post to the Service.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">4. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason.
          Upon termination, your right to use the Service will immediately cease.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">5. Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of the jurisdiction in which the Company is established,
          without regard to its conflict of law provisions.
        </p>
        
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
