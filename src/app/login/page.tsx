"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl mb-4">Connexion</h1>
                <button
                    onClick={() => signIn('google')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Connexion avec Google
                </button>
            </div>
        </div>
    );
}
