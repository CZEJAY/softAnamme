"use client"

import { userSchema } from '@/lib/validations'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FaSpinner } from "react-icons/fa"

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
import { useToast } from './ui/use-toast'

export function FormLocal() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()
    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            username: "",
            name: "",
            city: "",
            DOB: "",
            email: "",
            password: ""
        }
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof userSchema>) {
        setIsLoading(true)
        console.log(values)
        try {
            await axios.post("/api/register", values)
            .then((res) => {
                
            })
            .catch((err) => {
                // toast({
                //     title: "User Creation Failed",
                //     description: `${values.username}`,
                // })
                console.log(err)
            }).finally(() => setIsLoading(false))
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 w-full">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input className='bg-zinc-900'  {...field} />
                            </FormControl>
                            <FormDescription className='text-small-regular'>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage className='text-small-regular text-red-500' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input className='bg-zinc-900'  {...field} />
                            </FormControl>
                            <FormMessage className='text-small-regular text-red-500' />
                        </FormItem>
                    )}
                />
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
                <div className="flex w-full justify-between">
                    <FormField
                        control={form.control}
                        name="DOB"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date of birth</FormLabel>
                                <FormControl>
                                    <Input type='date' className='bg-zinc-900'  {...field} />
                                </FormControl>
                                <FormMessage className='text-small-regular text-red-500' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input type='text' className='bg-zinc-900'  {...field} />
                                </FormControl>
                                <FormMessage className='text-small-regular text-red-500' />
                            </FormItem>
                        )}
                    />
                </div>
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
                <div className="flex items-center  justify-between">
                    <Button type="submit" className='mt-4 community-card_btn !text-base-semibold hover:opacity-80'>{isLoading ? <FaSpinner className={`${isLoading ? "animate-spin" : ""}`}/> : "Submit"} </Button>
                    <div className="flex gap-2 items-center">
                        <p>Already have an account?</p>
                        <a href="/sign-in" className='text-small-medium hover:opacity-80 transition-all duration-300 hover:underline'>Login</a>
                    </div>
                </div>
            </form>
        </Form>
    )
}
