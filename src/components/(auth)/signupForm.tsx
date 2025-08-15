"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image";
import Link from "next/link"
import { signUpFormSchema } from "@/validation/authSchema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useState } from "react"
import { Eye, EyeClosed, Plus, X } from "lucide-react"
import { Badge } from "../ui/badge"
import { interestSuggestions } from "@/constants"
import { Checkbox } from "../ui/checkbox"

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            role: "",
            interests: [],
            term: false
        },
    })

    const addInterest = (interest: string) => {
        const current = form.getValues("interests");
        if (interest && !current.includes(interest)) {
            form.setValue("interests", [...current, interest], { shouldValidate: true });
        }
        setInputValue("");
    };

    function onSubmit(values: z.infer<typeof signUpFormSchema>) {
        console.log(values)
    }

    return (
        <div className="flex flex-col gap-2 sm:gap-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="gap-2">
                                <FormLabel className="text-[1rem] text-[#3A3A3A] font-semibold">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your email-id"
                                        className="h-[3rem] md:h-[3.5rem] lg:h-[3rem] bg-white"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[1rem] text-[#3A3A3A] font-semibold">Phone Number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="your phone number"
                                        type="tel"
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
                                <FormLabel className="text-[1rem] text-[#3A3A3A] font-semibold">Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            placeholder="Type password here..."
                                            type={showPassword ? "text" : "password"}
                                            className="h-[3rem] md:h-[3.5rem] lg:h-[3rem] bg-white"
                                            {...field} />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
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
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[1rem] text-[#3A3A3A] font-semibold">Confirm Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            placeholder="Confirm your password.."
                                            type={showConfirmPassword ? "text" : "password"}
                                            className="h-[3rem] md:h-[3.5rem] lg:h-[3rem] bg-white"
                                            {...field} />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
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
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[1rem] text-[#3A3A3A] font-semibold">Role</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="w-full !h-[3rem] md:h-[3.5rem] lg:h-[3rem] bg-white">
                                            <SelectValue placeholder="Select your role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="student">Student</SelectItem>
                                            <SelectItem value="working professional">Working Professional</SelectItem>
                                            <SelectItem value="senior citizen">Senior Citizen</SelectItem>
                                            <SelectItem value="orphan">Orphan</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="interests"
                        render={() => (
                            <FormItem>
                                <FormLabel className="text-[1rem] text-[#3A3A3A] font-semibold">
                                    Interests
                                </FormLabel>
                                <FormControl>
                                    <div className="space-y-3">
                                        {/* Input */}
                                        <Input
                                            placeholder="Type your interests"
                                            value={inputValue}
                                            className="h-[3rem] md:h-[3.5rem] lg:h-[3rem] bg-white"
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    addInterest(inputValue.trim());
                                                }
                                            }}
                                        />

                                        <FormDescription>
                                            Type and press Enter to add custom skills, or click suggestions above
                                        </FormDescription>

                                        {/* Suggestions */}
                                        <div className="flex flex-wrap gap-2">
                                            {interestSuggestions.map((s) => {
                                                const isSelected = form.watch("interests").includes(s);
                                                return (
                                                    <Button
                                                        key={s}
                                                        type="button"
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => {
                                                            const current = form.getValues("interests");
                                                            if (isSelected) {
                                                                form.setValue(
                                                                    "interests",
                                                                    current.filter((i) => i !== s),
                                                                    { shouldValidate: true }
                                                                );
                                                            } else {
                                                                form.setValue("interests", [...current, s], {
                                                                    shouldValidate: true,
                                                                });
                                                            }
                                                        }}
                                                        className={`rounded-full cursor-pointer ${isSelected
                                                            ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                                                            : "border-yellow-300 text-orange-500 hover:text-orange-500"
                                                            }`}
                                                    >
                                                        <Plus /> {s}
                                                    </Button>
                                                );
                                            })}
                                        </div>

                                        {/* Selected Interests */}
                                        <div className="flex flex-wrap gap-2">
                                            {form.watch("interests").map((interest) => (
                                                <Badge
                                                    key={interest}
                                                    variant="secondary"
                                                    className="flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {interest}
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            form.setValue(
                                                                "interests",
                                                                form
                                                                    .getValues("interests")
                                                                    .filter((i) => i !== interest),
                                                                { shouldValidate: true }
                                                            )
                                                        }
                                                        className="ml-1 text-red-500"
                                                        title="cross"
                                                    >
                                                        <X className="h-4 w-4 cursor-pointer" />
                                                    </button>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="term"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex space-x-4">
                                    <FormControl >
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            className="border-neutral-400 checked:bg-[#D96F62] data-[state=checked]:bg-[#D96F62] data-[state=checked]:border-white mt-1"
                                        />
                                    </FormControl>
                                    <FormLabel className="tracking-wider text-[#A9A6A0] leading-5 text-justify data-[error=true]:text-[#A9A6A0]">*By signing up, I promise to share with kindness and not
                                        post anything that hurts others or spreads negativity. If I
                                        break this, my account may be blocked and legal action
                                        could be taken.
                                    </FormLabel>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full h-[3rem] md:h-[3.5rem] lg:h-[3rem]" variant="primaryButton">Sign Up</Button>
                </form>
            </Form>
            <a className="w-full flex justify-end text-[1rem] text-[#D96F62] font-semibold cursor-pointer">Forgot Password?</a>
            <div className="relative text-center py-2 md:py-4">
                <span className="text-[1rem] text- bg-background lg:bg-amber-50 px-4 relative z-10">
                    Or continue with
                </span>
                <div className="absolute top-1/2 left-0 w-full border-t border-[#BCBCBC] z-0" />
            </div>

            <Button variant="secondaryButton" className="w-full h-[3rem] md:h-[3.5rem] lg:h-[3rem] font-[400]"><Image src="/images/Google.svg" height={24} width={24} alt="google logo" className="mr-2" />Sign up with Google</Button>

            <span className="text-center text-[#3A3A3A] text-[1rem] font-[400]">Already have an account?<Link href={"/signin"} className="text-[#D96F62] ml-1">Sign in</Link></span>
        </div>
    )
}