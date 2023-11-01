
"use client"
import { FormLocal } from "@/components/form"
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
import { userLoginSchema } from "@/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { FaSpinner } from "react-icons/fa"
import { z } from "zod"


const page = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof userLoginSchema>>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  async function onSubmit(values: z.infer<typeof userLoginSchema>) {
    setIsLoading(true)
    try {
      await signIn("credentials", { ...values, redirect: false })
        .then((callback) => {
          if (callback?.error) {
            // toast.error(callback?.error)
            console.log(callback.error);
            
          }
          if (callback?.ok && !callback.error) {
            toast.success("User Logged In Successfully")
            // reset()

          }
        }
        ).finally(() => setIsLoading(false))
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className="flex w-full  justify-center  text-light-1 items-center">
      <div className="h-auto md:w-[500px]
        bg-black rounded-md flex 
        flex-col py-5 px-6 sm:px-10 w-full
        items-center justify-center ">
        <div className="flex flex-col gap-1 mb-4 w-full items-center justify-center">
          <img src="/assets/logo.jpg" alt="" className='w-24 h-24 ' />
          <p >Welcome to Birthmate, pleasse fill the form to create an account.</p>
        </div>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 w-full">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className='bg-zinc-900'  {...field} />
                  </FormControl>
                  <FormMessage className='text-small-regular text-red-500' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input className='bg-zinc-900 outline-none' type='password'  {...field} />
                  </FormControl>
                  <FormMessage className='text-small-regular text-red-500' />
                </FormItem>
              )}
            />
            <div className="flex items-center flex-col justify-between">
              <Button disabled={isLoading} type="submit" className={`disabled:cursor-not-allowed mt-4 community-card_btn !text-base-semibold hover:opacity-80`}>{isLoading ? <FaSpinner className={`${isLoading ? "animate-spin" : ""}`} /> : "Submit"} </Button>
              <div className="flex gap-2 items-center">
                <p>Don't have an account?</p>
                <a href="/sign-up" className='text-small-medium hover:opacity-80 transition-all duration-300 hover:underline'>Sign up</a>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default page