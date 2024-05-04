"use client";
import {
  SignInButton,
  useSession,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { isLoaded, session, isSignedIn } = useSession();

  if (!isLoaded) {
    // Add logic to handle loading state
    return null;
  }
  if (!isSignedIn) {
    // Add logic to handle not signed in state
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 p-24">
      <SignedIn>
        <SignOutButton>
        <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <div>
        <p>
          This session has been active since{" "}
          {session.lastActiveAt.toLocaleString()}
        </p>
      </div>
    </main>
  );
}
