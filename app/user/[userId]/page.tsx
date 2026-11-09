import prisma from "@/app/_lib/prisma"

export default async function UserPage({
    params
} : {
    params : Promise<{ userId : string }>
}) {
    "use cache"
    const { userId } = await params

    const user = await prisma.user.findUnique({
        where : {
            id : userId
        }
    })

    return (
        <div>
            <h1 className="text-2xl">
                User
            </h1>

            <div>
                {user?.username}
            </div>
        </div>
    )
}

export const instant = false