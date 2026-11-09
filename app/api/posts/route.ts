import prisma from "@/app/_lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request : NextRequest) {
    const posts = await prisma.post.findMany()

    return Response.json({
        "posts" : posts
    }, {
        status : 200
    })
}