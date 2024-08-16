 import {z} from "zod"
 
 export const schema = z.object({
    title: z.string().min(1, "Title field is required"),
    body: z.string().min(1, "Description field is required"),
   
  });