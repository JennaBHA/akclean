const AccueilArticle = () => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-center text-left md:h-full md:flex-row lg:p-8">
        {/* Image section */}
        <div className="relative h-full p-6 md:h-full md:flex-1">
          <div className="relative flex h-full items-end rounded bg-gray-50 px-4 pb-10 pt-40 shadow sm:px-6 sm:pb-16 md:justify-center lg:w-[40vw] lg:px-8 lg:pb-24">
            <div className="absolute inset-0 rounded">
              <img
                className="h-full w-full rounded object-cover object-top shadow"
                src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nettoyage"
              />
            </div>
            <div className="absolute inset-0 rounded bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative">
              <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                <h3 className="text-4xl font-bold text-white">
                  Toujours à votre <br className="hidden xl:block" />
                  service
                </h3>
                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#5ce1e6]">
                      <svg
                        className="h-3.5 w-3.5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Nettoyage à domicile
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#5ce1e6]">
                      <svg
                        className="h-3.5 w-3.5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Disponible 7j/7
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#5ce1e6]">
                      <svg
                        className="h-3.5 w-3.5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Lyon et sa périphérie
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#5ce1e6]">
                      <svg
                        className="h-3.5 w-3.5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      À partir de ?€
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Text section */}
        <div className="relative flex px-4 py-6 sm:px-6 sm:py-10 md:flex-1 md:items-center md:justify-center lg:px-8 lg:py-16">
          <div className="md:text-left xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-[#101314] dark:text-white sm:text-4xl">
              Qui sommes-nous ?
            </h2>
            <p className="mt-2 text-base text-[#101314] dark:text-white">
              Entreprise de nettoyage
            </p>
            <div className="mt-2 text-slate-800 dark:text-slate-200">
              <p>
                AK Clean Service est une société spécialisée dans le nettoyage
                et l’entretien professionnel et résidentiel. Nous proposons des
                prestations complètes et adaptées à chaque besoin, allant du
                nettoyage de bureaux et parties communes à la remise en état
                après sinistre, en passant par le débarras d’encombrants et le
                nettoyage de surfaces spécifiques (vitres, mobilier, matelas,
                plaques vitrocéramiques, sanitaires…). <br></br> <br></br> Notre
                priorité est de fournir un travail soigné, fiable et rapide,
                avec des produits professionnels respectueux des surfaces et de
                l’environnement. AK Clean Service s’adresse autant aux
                particuliers qu’aux professionnels, offrant des interventions
                ponctuelles ou régulières selon vos besoins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccueilArticle;
