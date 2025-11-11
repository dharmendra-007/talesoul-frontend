"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { logInFormSchema } from "@/validation/authSchema"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm<z.infer<typeof logInFormSchema>>({
        resolver: zodResolver(logInFormSchema),
        defaultValues: {
            phoneNumber: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof logInFormSchema>) {
        console.log(values)
    }

    return (
        <div className="flex flex-col gap-1 sm:gap-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem className="gap-2">
                                <FormLabel >Mobile Number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your number"
                                        className="h-[3rem] md:h-[3.5rem] lg:h-[3rem] bg-white"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            placeholder="Enter your password"
                                            type={showPassword ? "text" : "password"}
                                            className="h-[3rem] md:h-[3.5rem] lg:h-[3rem] bg-white"
                                            {...field} />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                                            tabIndex={-1}
                                        >
                                            {showPassword ? (
                                                <Eye className="w-5 h-5" />
                                            ) : (
                                                <EyeClosed className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full h-[3rem] md:h-[3.5rem] lg:h-[3rem]" variant="primaryButton">Sign In</Button>
                </form>
            </Form>
            <a className="w-full flex justify-end text-primary font-medium cursor-pointer text-[14px]">Forgot Password?</a>
            <div className="relative text-center">
                <span className="text-[1rem] text- bg-background px-4 relative z-10">
                    Or
                </span>
                <div className="absolute top-1/2 left-0 w-full border-t border-[#BCBCBC] z-0" />
            </div>

            <Button variant="secondaryButton" className="w-full h-[3rem] md:h-[3.5rem] lg:h-[3rem] font-[400]"><Image src="/images/Google.svg" height={24} width={24} alt="google logo" className="mr-2" />Sign in with Google</Button>

            <span className="text-center para2">Don&apos;t you have an account?<Link href={"/signup"} className="ml-1 font-medium text-secondary">Sign up</Link></span>
        </div>
    )
}