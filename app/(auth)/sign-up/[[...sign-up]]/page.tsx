import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <Suspense
        fallback={
          <div
            aria-label="Loading sign-up form"
            className="h-[480px] w-full max-w-md animate-pulse rounded-xl bg-base-200"
          />
        }
      >
        <SignUp forceRedirectUrl="/dashboard" signInUrl="/sign-in" />
      </Suspense>
    </main>
  );
}
