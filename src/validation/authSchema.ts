import z from "zod";

export const phoneNumberRegex = /^[6-9]\d{9}$/;

const userBaseSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Enter a valid email address"),
    phoneNumber: z
        .string()
        .trim()
        .min(1, "Phone number is required")
        .regex(phoneNumberRegex, "Enter a valid 10 digit mobile number"),
    name: z
        .string()
        .min(1, "Name is required")
        .min(2 , "Name should contain min 2 characters")
        .max(50 , "Name should not exceed 50 characters"),
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
})
    .refine((data) => data.confirmPassword === undefined || data.password == data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"]
    })

export const logInFormSchema = userBaseSchema.pick({
    phoneNumber: true,
    password : true
})

export const signUpFormSchema = userBaseSchema