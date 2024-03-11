import { z } from "zod";

export const RegisterSchema = z.object({
  userName: z.string().min(4),
  password: z.string().min(4),
});
