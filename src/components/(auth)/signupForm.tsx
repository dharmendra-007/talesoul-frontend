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
import Image from "next/image";
import Link from "next/link"
import { signUpFormSchema } from "@/validation/authSchema"
import { useState } from "react"
import { Eye, EyeClosed} from "lucide-react"

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            email: "",
            phoneNumber: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
    })

    function onSubmit(values: z.infer<typeof signUpFormSchema>) {
        console.log(values)
    }

    return (
        <div className="flex flex-col gap-1 sm:gap-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                    {/* email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="gap-2">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter Email ID"
                                        className="h-[3rem] md:h-[3.5rem] lg:h-[3rem]"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* phone number */}
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile Number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your number"
                                        type="tel"
                                        className="h-[3rem] md:h-[3.5rem] lg:h-[3rem]"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your Name"
                                        type="tel"
                                        className="h-[3rem] md:h-[3.5rem] lg:h-[3rem]"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* password */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Set Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            placeholder="Enter Password"
                                            type={showPassword ? "text" : "password"}
                                            className="h-[3rem] md:h-[3.5rem] lg:h-[3rem]"
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

                    {/* confirm password */}
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            placeholder="Enter Confirm Password"
                                            type={showConfirmPassword ? "text" : "password"}
                                            className="h-[3rem] md:h-[3.5rem] lg:h-[3rem] bg-white"
                                            {...field} />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                                            tabIndex={-1}
                                        >
                                            {showConfirmPassword ? (
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

                    <Button type="submit" className="w-full h-[56px] md:h-[3.5rem] lg:h-[3rem]" variant="primaryButton">Sign Up</Button>
                </form>
            </Form>
            <div className="relative text-center">
                <span className="text-[1rem] text-muted-foreground bg-background px-4 relative z-10">
                    Or
                </span>
                <div className="absolute top-1/2 left-0 w-full border-t border-border z-0" />
            </div>

            <Button variant="secondaryButton" className="w-full h-[3rem] md:h-[3.5rem] lg:h-[3rem] font-[400] text-secondary-foreground"><Image src="/images/Google.svg" height={24} width={24} alt="google logo" className="mr-2" />Sign up with Google</Button>

            <span className="text-center para2">Are you have already an account?<Link href={"/login"} className="text-secondary ml-1 font-medium">Login</Link></span>
        </div>
    )
}