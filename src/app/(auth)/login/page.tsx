"use client";

import { LogoIcon } from '@/components/logo'
import SocialProviders from '@/components/auth/social-providers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import LoadingSwapButton from '@/components/sheard/loadingswap-button'
import { FormEvent, useState } from 'react'
import { authClient } from "@/lib/auth-client";
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from");


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      })
      if (error) {
        toast.error(error.message || "Sign-in failed. Please try again.")
        console.error("Sign-in error:", error)
      } else {
        toast.success("Sign-in successful!")
        router.push(from ?? "/");
      }
    } catch (error) {
      console.error("Sign-in error:", error)
      toast.error("Sign-in failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 dark:bg-transparent">
      <div
        className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
        <div className="p-8 pb-6">
          <div>
            <Link
              href="/"
              aria-label="go home">
              <LogoIcon />
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">Log In to PencilPress</h1>
            <p className="text-sm">Welcome back! Sign in to continue</p>
          </div>

          <SocialProviders />

          <hr className="my-4 border-dashed" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="block text-sm">
                Email
              </Label>
              <Input
                type="email"
                required
                name="email"
                id="email"
                placeholder='you@example.com'
                disabled={isLoading}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-sm">
                  Password
                </Label>
                <Button
                  asChild
                  disabled={isLoading}
                  variant="link"
                  size="sm">
                  <Link
                    href="#"
                    className="link intent-info variant-ghost text-sm">
                    Forgot your Password ?
                  </Link>
                </Button>
              </div>
              <Input
                type="password"
                required
                name="password"
                id="password"
                placeholder='••••••••'
                disabled={isLoading}
                value={formData.password}
                onChange={handleChange}
                className="input sz-md variant-mixed"
              />
            </div>

            <LoadingSwapButton type="submit" className="w-full">Sign In</LoadingSwapButton>
          </form>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Don't have an account ?
            <Button
              asChild
              variant="link"
              className="px-2">
              <Link href="/signup">Create account</Link>
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}