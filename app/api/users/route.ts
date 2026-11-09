import prisma from "@/app/_lib/prisma"
import { NextRequest } from "next/server"

export async function GET(request : NextRequest) {
    const user = await prisma.user.findMany()

    return Response.json({
        "users" : user
    }, {
        status : 200,
    })
}