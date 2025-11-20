import { z } from "zod";
import { userSchema } from "../../schemas/userSchema";

export type FormValues = z.infer<typeof userSchema>;
