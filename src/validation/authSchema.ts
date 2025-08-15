import z from "zod";

const phoneNumberRegex = /^[6-9]\d{9}$/;

export const signInFormSchema = z.object({
    userId: z
        .string()
        .trim()
        .refine(
            (val) => z.email().safeParse(val).success || phoneNumberRegex.test(val),
            { message: "Enter a valid email or 10 digit phone number" }
        ),
    password: z
        .string()
        .trim()
        .min(8, "Password must be atleast 8 characters")
        .max(64, "Password must be atmost 64 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
})

export const signUpFormSchema = z.object({
    email: z
        .email("Enter a valid email address"),
    phoneNumber: z
        .string()
        .trim()
        .regex(phoneNumberRegex, "Enter a valid 10 digit mobile number"),
    password: z
        .string()
        .trim()
        .min(8, "Password must be atleast 8 characters")
        .max(64, "Password must be atmost 64 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmPassword: z
        .string()
        .trim(),
    role: z
        .string("Please select a role")
        .min(1, "Please select a role"),
    interests: z
        .array(z.string("Interest must be a string.").min(1, "Please select atleast one")),
    term: z
    .boolean()
    .refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
})
    .refine((data) => data.password == data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"]
    }) 