// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-600 mb-6">Page non trouvée</h2>
        <p className="text-gray-500 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}