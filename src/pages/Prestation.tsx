import BannerArticle from '../components/article/BannerArticle';
import ComparisonSlider from '../components/article/ComparaisonSlider';
import PlanList from '../components/article/PlanList';
import Banner from '../components/header/Banner';

const Prestation = () => {
  const plans = [
    {
      title: 'Nettoyage',
      iconColor: 'text-green-500',
      features: [
        {
          name: 'Particulier',
          subname: {
            first: 'De 20 à 50m²',
            second: 'Au delà de 50m²',
            third: 'Traitement anti-mousse / hydrofuge',
          },
          prices: {
            first: '6€/m²',
            second: '5€/m²',
            third: '3 à 5€/m²',
          },
        },
      ],
      description: [
        'Nettoyage de bureaux et parties communes à la remise en état après sinistre, en passant par le débarras d’encombrants et le nettoyage de surfaces spécifiques',
      ],
    },

    {
      title: 'Nettoyage médicale',
      iconColor: 'text-yellow-500',
      features: [
        {
          name: 'Professionnel',
          subname: {
            first: 'De 20 à 50m²',
            second: 'Au delà de 50m²',
            third: 'Traitement anti-mousse / hydrofuge',
          },
          prices: {
            first: '7€/m²',
            second: '6€/m²',
            third: '4 à 6€/m²',
          },
        },
      ],
      description: [
        'Du nettoyage quotidien des cabinets médicaux et paramédicaux à la désinfection renforcée des laboratoires, en passant par l’entretien des espaces communs et la remise en état après sinistre.',
      ],
    },

    {
      title: 'Canapés',
      iconColor: 'text-red-500',
      features: [
        {
          name: 'Particulier',
          subname: {
            first: '3 places',
            second: '4 places',
            third: '5 places et +',
          },
          prices: {
            first: '50€',
            second: '60€',
            third: '70€',
          },
        },
        {
          name: 'Professionnel',
          subname: {
            first: '3 places',
            second: '4 places',
            third: '5 places et +',
          },
          prices: {
            first: '60€',
            second: '70€',
            third: '80€',
          },
        },
      ],
      description: [
        'Nettoyage professionnel de canapés : efficacité, soin des matériaux et résultats impeccables',
        'Prestations dédiées aux entreprises',
      ],
    },
  ];

  const exemples = [
    {
      src: '/post1.jpeg',
      link: 'https://www.instagram.com/akclean_service/',
    },
    {
      src: '/post2.jpeg',
      link: 'https://www.instagram.com/akclean_service/',
    },
    {
      src: '/post3.png',
      link: 'https://www.instagram.com/akclean_service/',
    },
  ];

  return (
    <>
      <header>
        <Banner
          title="Mes prestations"
          subtitle="Redonnez vie à votre appartement avec notre lavage professionnel."
          backgroundImageUrl="https://images.unsplash.com/photo-1647381518264-97ff1835026f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Nettoyage médicale"
          button1Link="/medics"
          button2Label="Lire plus"
        />
      </header>

      <main id="main" className="bg-white dark:bg-[#000302]">
        <div className="pt-10">
          <PlanList plans={plans} />
        </div>
        <section className="mb-8 flex grid-cols-1 flex-col items-center justify-center gap-2 pt-10 md:grid lg:grid-cols-2">
          <div className="container mb-6 px-10 text-left md:mb-0 md:px-6 xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-xl font-bold tracking-tighter text-[#101314] dark:text-white sm:text-2xl md:text-3xl">
              Redonnez vie à votre intérieur avec AK CLEAN SERVICE
            </h2>
            <div className="mt-2 text-slate-800 dark:text-gray-200">
              <p>
                Notre service de nettoyage d’appartement à domicile vous
                garantit un espace impeccable sans effort. Du dépoussiérage
                minutieux au traitement des surfaces délicates, notre équipe
                professionnelle élimine saletés, allergènes et mauvaises odeurs
                pour un logement sain et rafraîchi. <br></br>
                <br /> Réservez dès maintenant et profitez d’un chez-vous aussi
                propre que confortable.
              </p>
            </div>
          </div>
          <ComparisonSlider topImage="/before1.png" bottomImage="/after1.png" />
        </section>
        <BannerArticle
          images={exemples}
          title="Plongez dans l’univers du propre : découvrez nos lavages en action sur Instagram !"
        />
      </main>
    </>
  );
};

export default Prestation;
