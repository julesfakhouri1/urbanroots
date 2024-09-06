"use client";

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../images/logo.webp";
import Navbar from "../components/Navbar";

export default function LoginPage() {
    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
            <div className="p-8 bg-white rounded-xl shadow-lg w-full max-w-md">
                <div className="text-center mb-8">
                    <Image
                        src={logo}
                        alt="UrbanRoots Logo"
                        width={120}
                        height={120}
                        className="mx-auto mb-4"
                    />
                    <h1 className="text-3xl font-bold text-primary-700">Connexion</h1>
                </div>
                <button
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="w-full py-2 px-4 bg-primary-200 text-primary-950 rounded-full transition duration-300 flex items-center justify-center mb-4 shadow-md ease-in-out hover:bg-primary-300"
                >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#2b7660" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                    </svg>
                    Se connecter avec Google
                </button>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-primary-200"></div>
                    <span className="flex-shrink mx-4 text-primary-500">Ou</span>
                    <div className="flex-grow border-t border-primary-200"></div>
                </div>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const email = e.currentTarget.email.value;
                        const password = e.currentTarget.password.value;
                        await signIn('credentials', { email, password, callbackUrl: '/' });
                    }}
                    className="space-y-4"
                >
                    <input
                        name="email"
                        type="email"
                        placeholder="Adresse e-mail"
                        required
                        className="w-full px-4 py-2 border border-primary-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-primary-400"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                        required
                        className="w-full px-4 py-2 border border-primary-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-primary-400"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition duration-300 shadow-md"
                    >
                        Se connecter
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-primary-600">
                        Vous n'avez pas de compte ?
                        <Link
                            href="/register"
                            className="text-primary-700 hover:underline ml-1 font-semibold"
                        >
                            S'inscrire
                        </Link>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}