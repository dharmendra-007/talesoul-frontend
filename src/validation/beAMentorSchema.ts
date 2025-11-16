import z from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const pincodeRegex = /^[1-9][0-9]{5}$/;
import { phoneNumberRegex } from "./authSchema";

export const beMentorSchema = z.object({
  image: z
    .instanceof(File, { message: "Image is required" })
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "Max file size is 1MB"
    ),

  fullName: z
    .string()
    .min(1, "Full name is required")
    .min(3, "Full name must have at least 3 characters")
    .max(50, "Full name should not exceed 50 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(phoneNumberRegex, "Enter a valid 10-digit phone number"),

  dob: z
    .string(),

  address: z
    .string()
    .min(1, "Address is required")
    .min(3, "Address must have at least 3 characters"),

  state: z.string().min(1, "State is required"),

  city: z.string().min(1, "City is required"),

  pincode: z
    .string()
    .min(1,"PIN code is required")
    .length(6, "PIN code must be 6 digits")
    .regex(pincodeRegex, "Invalid PIN code"),

  fieldOfExpertise: z
    .string()
    .min(1, "Expertise is required")
    .max(50, "Expertise should not exceed 50 characters"),

  subField: z
    .string()
    .min(1, "Subfield is required")
    .max(50, "Subfield should not exceed 50 characters"),

  yearsOfExperience: z.string().min(1, "Year of experience is required"),

  organization: z.string().min(1, "Organization is required"),

  currentRole: z
    .string()
    .min(1, "Current role is required")
    .max(50, "Current role should not exceed 50 characters"),
  tags: z
    .array(
      z.string()
        .min(1, "Tag cannot be empty")
        .max(30, "Tag should not exceed 30 characters")
    )
    .min(1, "At least 1 tag is required")
    .max(5, "You can select up to 5 tags"),
});

export type BeMentorFormType = z.infer<typeof beMentorSchema>;
