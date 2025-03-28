import { Metadata } from "next";
import { auth } from "../../../auth";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Account Settings - Vibe App",
  description: "Manage your account settings",
};

export default async function AccountPage() {
  const session = await auth();
  
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your account profile information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">{session?.user?.email || "Not available"}</div>
                </div>
                <div className="grid gap-2">
                  <div className="font-medium">Name</div>
                  <div className="text-muted-foreground">{session?.user?.name || "Not available"}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled>Update Profile</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <div className="font-medium">Password</div>
                  <div className="text-muted-foreground">••••••••</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled>Change Password</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Delete Account</CardTitle>
              <CardDescription>
                Permanently delete your account and all of your data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Once you delete your account, there is no going back. This action cannot be undone.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" disabled>Delete Account</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
