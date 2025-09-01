import BannerArticle from '../components/article/BannerArticle';
import ComparisonSlider from '../components/article/ComparaisonSlider';
import PlanList from '../components/article/PlanList';
import Banner from '../components/header/Banner';

const Prestation = () => {
  const plans = [
    {
      title: "Nettoyage d'entretien",
      iconColor: 'text-green-500',
      features: [
        {
          name: 'Intérieur standard',
          subname: {
            first: 'Citadine',
            second: 'SUV',
            third: 'Monospace',
          },
          prices: {
            first: '45€',
            second: '55€',
            third: '60€',
          },
        },
        {
          name: 'Avec nettoyage extérieur',
          subname: {
            first: 'Citadine',
            second: 'SUV',
            third: 'Monospace',
          },
          prices: {
            first: '80€',
            second: '95€',
            third: '105€',
          },
        },
      ],
      description: [
        'Aspirateur, plastiques, vitres intérieures',
        'Carrosserie, jantes, vitres, pneus',
      ],
    },

    {
      title: 'Nettoyage profond',
      iconColor: 'text-yellow-500',
      features: [
        {
          name: 'Intérieur complet',
          subname: {
            first: 'Citadine',
            second: 'SUV',
            third: 'Monospace',
          },
          prices: {
            first: '75€',
            second: '85€',
            third: '100€',
          },
        },
        {
          name: 'Avec nettoyage extérieur',
          subname: {
            first: 'Citadine',
            second: 'SUV',
            third: 'Monospace',
          },
          prices: {
            first: '105€',
            second: '120€',
            third: '140€',
          },
        },
      ],
      description: [
        'Intérieur standard avec shampoing pour sièges, tapis, moquette',
        'Carrosserie, jantes, vitres, pneus',
      ],
    },

    {
      title: 'Supplément',
      iconColor: 'text-red-500',
      features: [
        {
          name: 'Shampoing pour siège',
          subname: {
            second: 'Tout véhicule',
          },
          prices: {
            second: '10€',
          },
        },
        {
          name: "Poils d'animaux",
          subname: {
            second: 'Tout véhicule',
          },
          prices: {
            second: '10€',
          },
        },
      ],
      description: [
        'Nettoyage et traitement spécial pour le cuir',
        "Élimination des poils d'animaux",
      ],
    },
  ];

  const gammes = [
    {
      src: 'https://images.unsplash.com/photo-1639640163962-9e845bd7294a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: "Photo d'une voiture citadine",
      caption: 'Citadine',
    },
    {
      src: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: "Photot d'un SUV",
      caption: 'SUV',
    },
    {
      src: 'https://images.unsplash.com/photo-1605410791216-3d9653a95667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: "Photo d'un monospace",
      caption: 'Monospace',
    },
  ];

  const exemples = [
    {
      src: '/audiQ8.png',
      link: 'https://www.instagram.com/p/CvNWrguoY7z/?img_index=1',
    },
    {
      src: '/GLE34.png',
      link: 'https://www.instagram.com/p/C3dQAjEIiFI/?img_index=1',
    },
    {
      src: '/mx5.png',
      link: 'https://www.instagram.com/p/C5Yu7_1opuA/?img_index=1',
    },
    {
      src: '/gole8s.png',
      link: 'https://www.instagram.com/autoclean.lyon/',
    },
    {
      src: '/passat.png',
      link: 'https://www.instagram.com/p/C6MQUbVoCEi/?img_index=1',
    },
    {
      src: '/x5mbw.jpg',
      link: 'https://www.instagram.com/p/Cyv_2zoILOY/?img_index=1',
    },
    {
      src: '/tiguanne.png',
      link: 'https://www.instagram.com/p/Czg-RV-IwbO/?img_index=2',
    },
    {
      src: 'tesla-model3.png',
      link: 'https://www.instagram.com/p/CwasP7foYo2/',
    },
    {
      src: '/utilitai.png',
      link: 'https://www.instagram.com/p/C1KeaLbozWh/?img_index=1',
    },
  ];

  return (
    <>
      <header>
        <Banner
          title="Lavage automobile"
          subtitle="Redonnez vie à votre voiture avec notre lavage professionnel."
          backgroundImageUrl="https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Textile"
          button1Link="/textile"
          button2Label="Lire plus"
        />
      </header>

      <main id="main" className="bg-white dark:bg-[#000302]">
        <section className="mb-8 flex grid-cols-1 flex-col items-center justify-center gap-2 pt-10 md:grid lg:grid-cols-2">
          <div className="container mb-6 px-10 text-left md:mb-0 md:px-6 xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold tracking-tighter text-[#101314] dark:text-white sm:text-4xl md:text-5xl">
              Nos lavages automobiles
            </h2>
            <div className="mt-2 text-slate-800 dark:text-gray-200">
              <p>
                Découvrez le lavage automobile supérieur avec Autoclean. Notre
                service à domicile vous offre un véhicule impeccable sans
                bouger. De l'extérieur étincelant au nettoyage intérieur, notre
                équipe dévouée et équipée garantit une propreté incomparable et
                élimine les mauvaises odeurs. Réservez maintenant pour redonner
                à votre voiture son éclat d'origine.
              </p>
            </div>
          </div>
          <ComparisonSlider
            topImage="/before_auto.jpg"
            bottomImage="/after_auto.jpg"
          />
        </section>
        <BannerArticle images={gammes} title="Nos gammes de lavages" />
        <PlanList plans={plans} />
        <BannerArticle images={exemples} title="Voici quelques exemples" />
      </main>
    </>
  );
};

export default Prestation;
