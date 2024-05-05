"use client";
import {
  SignInButton,
  useSession,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { v4 } from "uuid";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { isLoaded, session, isSignedIn } = useSession();
  const mutation = useMutation(api.file.createFile);
  const files = useQuery(api.file.getFiles);

  if (!isLoaded) {
    // Add logic to handle loading state
    return null;
  }
  if (!isSignedIn) {
    // Add logic to handle not signed in state
    return null;
  }

  const createFile = async () => {
    await mutation({
      name: v4(),
    });
  };

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
        <Button
          onClick={() => {
            createFile();
          }}
        >
          Create File
        </Button>
      </div>

      {files && (
        <ul>
          {files.map((item) => {
            return <li key={item.key}>{item.name}</li>;
          })}
        </ul>
      )}
    </main>
  );
}
