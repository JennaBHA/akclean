import Banner from '../components/header/Banner';

const Medics = () => {
  return (
    <>
      <header>
        <Banner
          title="Nettoyage médicale et paramédicale"
          subtitle="L’hygiène dans le domaine médical et paramédical est essentielle pour la sécurité des patients."
          backgroundImageUrl="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Contactez-moi"
          button1Link="/contact"
          button2Label="Lire plus"
        />
      </header>

      <main id="main" className="bg-white dark:bg-[#000302]">
        <section className="flex flex-col md:flex-row">
          {' '}
          <div className="relative flex px-4 py-6 sm:px-6 sm:py-10 md:flex-1 md:items-center md:justify-center lg:px-8 lg:py-16">
            <div className="md:text-left xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-[#101314] dark:text-white sm:text-4xl">
                Nettoyage médical & paramédical
              </h2>
              <p className="mt-2 text-base text-[#101314] dark:text-white">
                Hygiène certifiée
              </p>
              <div className="mt-2 text-slate-800 dark:text-slate-200">
                <p>
                  Chez AK Clean Service, nous savons que l’hygiène dans le
                  domaine médical et paramédical ne se limite pas à une simple
                  question de propreté : elle est un véritable pilier de la
                  sécurité et de la confiance. Un environnement parfaitement
                  sain est indispensable pour protéger les patients, rassurer
                  leurs proches et permettre au personnel soignant d’exercer ses
                  missions dans les meilleures conditions. Conscients de cette
                  responsabilité, nous mettons tout en œuvre pour garantir un
                  niveau d’exigence élevé dans chacune de nos interventions.
                  Notre approche repose sur une parfaite connaissance des
                  contraintes propres aux établissements de santé, qu’il
                  s’agisse de la gestion des risques infectieux, du respect des
                  protocoles hospitaliers ou de la traçabilité des opérations de
                  nettoyage et de désinfection.<br></br>
                  <br></br>
                  C’est pourquoi nous proposons des prestations complètes et
                  spécialisées, alliant rigueur, efficacité et conformité
                  réglementaire. Tous nos services de nettoyage et de
                  désinfection sont réalisés selon des protocoles stricts,
                  validés par les normes en vigueur, et avec des produits
                  homologués et agréés pour le secteur médical. Ces solutions
                  assurent une action ciblée contre les bactéries, virus et
                  champignons, afin de limiter tout risque de contamination.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex px-4 py-6 sm:px-6 sm:py-10 md:flex-1 md:items-center md:justify-center lg:px-8 lg:py-16">
            <div className="md:text-left xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-[#101314] dark:text-white sm:text-4xl">
                Nos engagements pour une hygiène maîtrisée et sécurisée
              </h2>
              <p className="mt-2 text-base text-[#101314] dark:text-white">
                Et nos domaines d’intervention
              </p>
              <div className="mt-2 text-slate-800 dark:text-slate-200">
                <p>
                  Nous garantissons un niveau d’exigence élevé en matière de
                  propreté et de désinfection. Nos interventions reposent sur
                  l’utilisation de produits certifiés conformes aux normes
                  européennes (EN 1276, EN 13697, EN 14476) assurant une
                  efficacité bactéricide, fongicide et virucide. Nos équipes
                  suivent des protocoles stricts inspirés des pratiques
                  hospitalières, assurant rigueur et sécurité à chaque étape.
                  Chaque prestation est tracée grâce à des fiches de passage et
                  un plan de nettoyage/désinfection détaillé. Enfin, notre
                  personnel est spécialement formé au nettoyage en milieu
                  médical et paramédical afin de répondre aux exigences
                  spécifiques de votre secteur.<br></br>
                  <br></br>
                  Nous intervenons dans l’ensemble des environnements médicaux
                  et paramédicaux nécessitant une hygiène renforcée : cabinets
                  médicaux et dentaires, cliniques et centres de soins,
                  laboratoires, cabinets paramédicaux (kinésithérapeutes,
                  infirmiers, ostéopathes, etc.). Nos prestations couvrent
                  également les espaces communs tels que salles d’attente,
                  sanitaires et zones techniques, afin d’assurer un cadre sain,
                  sécurisé et accueillant pour vos patients comme pour vos
                  équipes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Medics;
