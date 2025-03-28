import { auth } from "@/../auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await auth()
  
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>
            Welcome back, {session?.user?.name || "User"}!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">You are logged in as {session?.user?.email}</p>
          <div className="flex space-x-4">
            <Button asChild variant="outline">
              <Link href="/profile">View Profile</Link>
            </Button>
            <Button asChild variant="destructive">
              <Link href="/api/auth/signout">Sign Out</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
