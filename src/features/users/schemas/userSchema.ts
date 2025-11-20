import { z } from "zod";

const phoneRegex = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().regex(emailRegex, "Invalid email format"),
  phone: z
    .string()
    .regex(phoneRegex, "Phone must be in format +375 (XX) XXX-XX-XX"),
  company: z.object({
    name: z.string().min(1, "Company name is required"),
  }),
  address: z.object({
    city: z.string().min(1, "City is required"),
  }),
});
