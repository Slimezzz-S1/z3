"use client"

export default function SignUp() {
    const onSignUp = () => {
        
    }

    return (
        <div className="flex flex-col gap-4 border-3 p-6 rounded-lg">
            <h2 className="text-2xl">
                Sign up
            </h2>

            <input type="email" name="email" placeholder="example@mail.com" className="border-3 px-2 py-1 rounded-lg" />

            <input type="password" name="password" placeholder="Password123" className="border-3 px-2 py-1 rounded-lg" />

            <button type="submit" className="border-3 px-2 py-1 rounded-lg">
                Sign up
            </button>
        </div>
    )
}