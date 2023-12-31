import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }
  return (
    <>
      <div className="flex flex-col items-center space-y-8">
        <h1 className="lg:text-5xl md:text-3xl font-bold hidden sm:block">Laughter. Tears. Thrills. Find it all on Netflix.</h1>
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
          <form action="/api/auth/signin" method="post">
            <h1 className="text-3xl font-semibold text-white">Login</h1>
            <div className="space-y-4 mt-5">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
              />
              <Button
                type="submit"
                variant={"destructive"}
                className="w-full bg-[#e50914] "
              >
                Login
              </Button>
            </div>
          </form>
          <div className="text-gray-500 text-sm mt-2">
            New to Netflix?{" "}
            <Link className="text-white hover:underline" href="/sign-up">
              Sign up now!
            </Link>
          </div>

          <div className="flex w-full justify-center items-center gap-x-3 mt-6">
            <GithubSignInButton />
            <GoogleSignInButton />
          </div>
        </div>
      </div>
    </>
  );
}
