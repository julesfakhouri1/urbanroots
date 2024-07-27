import { signIn } from 'next-auth/react';

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold">Login</h1>
            <button
                onClick={() => signIn('google')}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Sign in with Google
            </button>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    const email = e.currentTarget.email.value;
                    const password = e.currentTarget.password.value;
                    await signIn('credentials', { email, password });
                }}
                className="mt-4"
            >
                <input name="email" type="email" placeholder="Email" required />
                <input name="password" type="password" placeholder="Password" required />
                <button type="submit" className="mt-4 p-2 bg-green-500 text-white rounded">
                    Sign in with Email
                </button>
            </form>
        </div>
    );
}