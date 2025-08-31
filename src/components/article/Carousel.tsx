import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../style.css';

const slideImages = ['/car_1.jpg', '/car_2.jpg', '/car_3.jpg', '/car_4.jpg'];

const Carousel = () => {
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 text-left lg:grid-cols-2">
        <div className="relative flex overflow-hidden px-4 py-10 sm:px-6 sm:py-16 md:min-h-screen md:items-center md:justify-center lg:px-8 lg:py-24">
          <div className="md:text-left xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-[#101314] dark:text-white sm:text-4xl">
              Que faisons-nous ?
            </h2>
            <p className="mt-2 text-base text-[#101314] dark:text-white">
              Voici quelques résultats de nos lavages
            </p>
            <div className="mt-2 text-slate-800 dark:text-slate-200">
              <p>
                Nous proposons une gamme complète de services de nettoyage et
                d’entretien adaptés aux professionnels comme aux particuliers.
                De l’entretien régulier des bureaux et parties communes à des
                interventions spécifiques après sinistre ou événement, nous
                veillons à offrir des espaces propres, sains et accueillants.
                <br></br> <br></br>Nos équipes interviennent également sur le
                mobilier en tissu, les vitres, les terrasses et les extérieurs,
                avec des prestations sur mesure et flexibles selon vos besoins.
                Notre objectif : garantir votre confort et valoriser vos lieux
                de vie ou de travail par un nettoyage rigoureux et
                professionnel.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center p-6">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            className="h-auto w-full rounded bg-transparent text-base text-[#101314] shadow dark:text-white md:h-[70vh] md:w-[40vw]"
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            navigation={isPC}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {slideImages.map((imageSrc, index) => (
              <SwiperSlide key={index} className="image-container">
                <img
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel;
