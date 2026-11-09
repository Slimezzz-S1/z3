import prisma from "@/app/_lib/prisma"

export default async function Home({
  searchParams
} : {
  searchParams? : { [keys : string] : string | string[] | undefined}
}) {
  const users = await prisma.user.findMany()

  return (
    <section className="p-8">
      <h1 className="text-2xl">
        Welcome to Z3!
      </h1>

      <div>
        <p>
          Users : 
        </p>

        <ol className="list-decimal mx-[1em]">
          {users.length !== 0 ? users.map((user) => (
            <li key={user.id}>
              {user.username} {user.name ?? ""}
            </li>
          )) : "no users"}
        </ol>
      </div>
    </section>
  )
}
