import BannerArticle from '../components/article/BannerArticle';
import ComparisonSlider from '../components/article/ComparaisonSlider';
import PlanList from '../components/article/PlanList';
import Banner from '../components/header/Banner';

const Vitrage = () => {
  const plans = [
    {
      title: 'Nettoyage simple',
      iconColor: 'text-green-500',
      features: [
        {
          name: 'Nettoyage standard',
          subname: {},
          prices: {
            second: '30€',
          },
        },
      ],
      description: ["Jusqu'à 4 carreaux de vitres"],
    },
    {
      title: 'Nettoyage complet',
      iconColor: 'text-yellow-500',
      features: [
        {
          name: 'Nettoyage complet',
          subname: {},
          prices: {
            second: '40€',
          },
        },
      ],
      description: ["Jusqu'à 8 carreaux de vitres"],
    },
  ];

  const exemples = [
    {
      src: 'https://images.unsplash.com/photo-1586634303877-05d91c3a3607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://www.instagram.com/autoclean.lyon/',
    },
    {
      src: 'https://images.unsplash.com/photo-1462430400578-427dee6734d2?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://www.instagram.com/autoclean.lyon/',
    },
    {
      src: 'https://images.unsplash.com/photo-1603300227857-2144d620670c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://www.instagram.com/autoclean.lyon/',
    },
  ];

  return (
    <>
      <header>
        <Banner
          title="Lavage de vitres"
          subtitle="Vitres impeccables, clarté assurée, choisissez notre expertise !"
          backgroundImageUrl="https://images.unsplash.com/photo-1563693998336-93c10e5d8f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Textile"
          button1Link="/textile"
          button2Label="Lire plus"
        />
      </header>

      <main id="main" className="bg-white dark:bg-[#000302]">
        <section className="mb-8 flex grid-cols-1 flex-col items-center justify-center gap-2 pt-10 md:grid lg:grid-cols-2">
          <div className="container mb-6 px-10 text-left md:mb-0 md:px-6 xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold tracking-tighter text-[#101314] dark:text-white sm:text-4xl md:text-5xl">
              Nos lavages vitriers
            </h2>
            <div className="mt-2 text-slate-800 dark:text-gray-200">
              <p>
                Laissez entrer la lumière avec notre service de nettoyage de
                vitres à domicile chez Autoclean Lyon. Nos professionnels
                apportent une clarté éclatante à vos fenêtres, qu'il s'agisse de
                maisons ou d'espaces professionnels. Dites adieu aux traces et
                accueillez une vue impeccable. Contactez-nous dès aujourd'hui
                pour illuminer votre espace.
              </p>
            </div>
          </div>
          <ComparisonSlider
            topImage="https://images.unsplash.com/photo-1464519586905-a8c004d307cc?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            bottomImage="https://images.unsplash.com/photo-1536509814050-49f492a201b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </section>
        <PlanList plans={plans} />
        <BannerArticle images={exemples} title="Voici quelques exemples" />
      </main>
    </>
  );
};

export default Vitrage;
