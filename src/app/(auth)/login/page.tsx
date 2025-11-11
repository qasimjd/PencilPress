import { LogoIcon } from '@/components/logo'
import SocialProviders from '@/components/auth/social-providers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import LoadingSwapButton from '@/components/sheard/loadingswap-button'

export default function LoginPage() {
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

          <form action="" className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="block text-sm">
                Username
              </Label>
              <Input
                type="email"
                required
                name="email"
                id="email"
              />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="pwd"
                  className="text-sm">
                  Password
                </Label>
                <Button
                  asChild
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
                name="pwd"
                id="pwd"
                className="input sz-md variant-mixed"
              />
            </div>

            <LoadingSwapButton className="w-full">Sign In</LoadingSwapButton>
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