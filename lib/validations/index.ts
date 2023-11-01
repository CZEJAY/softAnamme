import * as z from "zod"

export const userSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters."}),
    name: z.string().min(4, { message: "Name must be more than 4 character"}),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be more than 8 character"}),
    city: z.string().min(2, { message: "Please Enter a valid City name"}),
    DOB: z.string().min(2, { message: "Please Enter a valid DOB"}),
})
export const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be more than 8 character"}),
})
