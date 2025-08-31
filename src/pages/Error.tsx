import { Link, useLocation } from 'react-router-dom';

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error || { message: 'Unknown error' };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#000302] text-white">
      <div className="mb-6 flex flex-col items-center md:mb-0 md:flex-row">
        <svg
          className="h-16 w-16 text-red-500 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1 className="text-3xl font-extrabold text-red-500">ERREUR 404</h1>
      </div>
      <h2 className="mb-2 px-6 text-center text-4xl">Page introuvable</h2>
      <p className="mb-4 px-6 text-center text-lg">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <p className="px-6 text-center italic text-gray-300">{error.message}</p>
      <Link
        to="/"
        className="mt-4 text-red-500 transition duration-300 hover:underline"
      >
        Retour à la page d'accueil
      </Link>
    </div>
  );
}
