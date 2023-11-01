import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/lib/prismadb"
//@ts-ignore
import bcrypt from "bcrypt"



export async function POST (req: NextRequest) {
    try {
        const body = await req.json()
        console.log(body)
        const { username, name, email, password, city, DOB } = body
        const exist = await prismadb.user.findUnique({
            //@ts-ignore
            where: {
                //@ts-ignore
                email
            }
        })
        if (exist) {
            return NextResponse.json({
                message: "User already exist"
            }, {status: 400})
        }

        const hashedpassword = bcrypt.hash(password, 10)
        const user = await prismadb.user.create({
            //@ts-ignore
            data: {
                name,
                username,
                city,
                DOB,
                hashed_password: hashedpassword,
            }
        })
        if(user) {
            return NextResponse.json({
                message: "User Created Success"
            }, {status: 200})
        }
    } catch (error) {
        return NextResponse.json({
            message: "Error"
        }, { status: 500})
    }
}