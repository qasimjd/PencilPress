"use client";

import { LogoIcon } from '@/components/logo'
import SocialProviders from '@/components/auth/social-providers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import LoadingSwapButton from '@/components/sheard/loadingswap-button'
import { FormEvent, useState } from 'react'
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignupPage() {

    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        fullname: '',
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
            const { error } = await authClient.signUp.email({
                email: formData.email,
                password: formData.password,
                name: formData.fullname,
                callbackURL: from ?? "/"
            })
            if (error) {
                toast.error(error.message || "Sign-up failed. Please try again.")
                console.error("Sign-up error:", error)
            } else {
                toast.success("Sign-up successful!")
                router.push(from ?? "/");
            }
        } catch (error) {
            console.error("Sign-up error:", error)
            toast.error("Sign-up failed. Please try again.")
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
                        <h1 className="mb-1 mt-4 text-xl font-semibold">Create a PencilPress Account</h1>
                        <p className="text-sm">Welcome! Create an account to get started</p>
                    </div>

                    <SocialProviders />

                    <hr className="my-4 border-dashed" />

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label
                                htmlFor="fullname"
                                className="block text-sm">
                                Full Name
                            </Label>
                            <Input
                                type="text"
                                required
                                name="fullname"
                                id="fullname"
                                placeholder='John Doe'
                                value={formData.fullname}
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="block text-sm">
                                Your Email
                            </Label>
                            <Input
                                type="email"
                                required
                                name="email"
                                id="email"
                                placeholder='you@example.com'
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="password"
                                className="text-sm">
                                Password
                            </Label>
                            <Input
                                type="password"
                                required
                                name="password"
                                id="password"
                                placeholder='••••••••'
                                value={formData.password}
                                onChange={handleChange}
                                disabled={isLoading}
                                className="input sz-md variant-mixed"
                            />
                        </div>

                        <LoadingSwapButton
                            isLoading={isLoading}
                            loadingText='Sign-up...'
                            type="submit"
                            className="w-full">
                            Continue
                        </LoadingSwapButton>
                    </form>
                </div>

                <div className="bg-muted rounded-(--radius) border p-3">
                    <p className="text-accent-foreground text-center text-sm">
                        Have an account ?
                        <Button
                            asChild
                            variant="link"
                            className="px-2">
                            <Link href="/login">Login In</Link>
                        </Button>
                    </p>
                </div>
            </div>
        </section>
    )
}