 import {z} from "zod"
 
 export const schema = z.object({
    name: z.string().min(1, "Name field is required"),
    description: z.string(),
    priority: z.string().min(1),
    date: z.string(),
  });