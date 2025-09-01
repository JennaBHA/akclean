import AccueilArticle from '../components/article/AccueilArticle';
import AccueilAvis from '../components/article/AccueilAvis';
import Carousel from '../components/article/Carousel';
import Banner from '../components/header/Banner';

const Accueil = () => {
  return (
    <>
      <header>
        <Banner
          title="AK CLEAN SERVICE"
          subtitle="La qualité qui se voit, la qualité qui se sent."
          backgroundImageUrl="/backgroundHome.jpg"
          button1Label="Mes prestations"
          button1Link="/prestation"
          button2Label="Lire plus"
        />
      </header>

      <main id="main" className="bg-white dark:bg-[#000302]">
        <AccueilArticle />
        <Carousel />
        <AccueilAvis />
      </main>
    </>
  );
};

export default Accueil;
