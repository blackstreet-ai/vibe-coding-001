import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose prose-sm">
        <p className="mb-4">Last updated: March 28, 2025</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you create an account, 
          update your profile, or communicate with us. This may include your name, email address, 
          and any other information you choose to provide.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, 
          to communicate with you, and to protect our services and users.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">3. Sharing Your Information</h2>
        <p>
          We do not share your personal information with companies, organizations, or individuals 
          outside of our company except in the following cases:
        </p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>With your consent</li>
          <li>For legal reasons</li>
          <li>To protect our services</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">4. Data Security</h2>
        <p>
          We work hard to protect our users from unauthorized access to or unauthorized alteration, 
          disclosure, or destruction of information we hold.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3">5. Changes to This Policy</h2>
        <p>
          We may revise this Privacy Policy from time to time. The most current version will 
          always be posted on our website.
        </p>
        
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/terms">Terms of Service</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
