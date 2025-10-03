import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../style.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blurNavbar, setBlurNavbar] = useState(false);
  const location = useLocation();

  // Chemins où le flou est toujours activé
  const shouldBlurNavbar = [
    '/contact',
    '/mention_legales',
    '/politique_confidentialite',
  ].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      // Définit blurNavbar true si le défilement est supérieur à 50px
      setBlurNavbar(window.scrollY > 50);
    };

    // Ajout d'un écouteur d'événements de défilement lorsque le composant est monté
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ferme le menu mobile et supprime le cache en cas de changement de chemin d'accès
    setMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full text-white transition duration-300 ease-in-out ${
        shouldBlurNavbar || blurNavbar
          ? 'bg-[#000302] bg-opacity-50 backdrop-blur-lg'
          : ''
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-screen-xl items-center justify-between p-3 ${
          menuOpen ? 'menu-open-blur' : '' // Classe conditionnelle pour le flou
        }`}
      >
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="logoAK.jpg"
              className="mr-3 h-8"
              alt="AK CLEAN SERVICE Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              AK CLEAN SERVICE
            </span>
          </Link>
        </div>
        <div className="flex gap-2 md:order-2">
          <a
            className="ml-2 hidden text-white md:block"
            href="https://www.instagram.com/akclean_service/"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
          </a>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={toggleMenu}
          >
            <span className="sr-only">Ouvrir le menu</span>
            {menuOpen ? (
              // Afficher la croix lorsque le menu est ouvert
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Afficher les lignes lorsque le menu est fermé
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          {menuOpen && (
            // Afficher le menu mobile sous forme de carré blanc en bas de la croix
            <div
              className="absolute bottom-0 left-0 top-16 z-50 h-screen w-full bg-[#000302] bg-opacity-80 p-4 backdrop-blur-lg"
              id="navbar-sticky"
            >
              <ul className="bg-transpaent flex flex-col rounded font-medium text-white shadow">
                <li>
                  <Link
                    to="/"
                    className="md:link md:link-underline md:link-underline-black block py-2 pl-3 pr-4"
                    aria-current="page"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/prestation"
                    className="md:link md:link-underline md:link-underline-black block py-2 pl-3 pr-4"
                  >
                    Mes prestations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/medics"
                    className="md:link md:link-underline md:link-underline-black block py-2 pl-3 pr-4"
                  >
                    Nettoyage médicale et paramédicale
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="md:link md:link-underline md:link-underline-black block py-2 pl-3 pr-4"
                  >
                    Contact
                  </Link>
                </li>
                <span className="mx-auto my-3 h-[1px] w-[98%] bg-white px-2"></span>
                <li>
                  <p className="block py-2 pl-3 pr-4">06 50 40 08 96</p>
                </li>
                <div className="flex flex-row">
                  <li>
                    <a
                      className="ml-2 block py-2 pr-4"
                      href="https://www.instagram.com/akclean_service/"
                      target="blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                        <circle cx="11.994" cy="11.979" r="3.003"></circle>
                      </svg>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          )}
        </div>
        <div
          className={`hidden w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-row p-4 font-medium md:mt-0 md:space-x-8 md:border-0 md:p-0">
            <li>
              <Link
                to="/"
                className="link link-underline link-underline-black py-2 pl-3 pr-4 text-white"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/prestation"
                className="link link-underline link-underline-black py-2 pl-3 pr-4 text-white"
              >
                Mes prestations
              </Link>
            </li>
            <li>
              <Link
                to="/medics"
                className="link link-underline link-underline-black py-2 pl-3 pr-4 text-white"
              >
                Nettoyage médicale et paramédicale
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="link link-underline link-underline-black py-2 pl-3 pr-4 text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
