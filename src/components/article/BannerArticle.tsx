import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../style.css';

interface ImageData {
  src: string;
  alt?: string;
  caption?: string;
  link?: string; // Ajout de la propriété link
}

interface Props {
  images: ImageData[];
  title: string;
}

const BannerArticle: React.FC<Props> = ({ images, title }) => {
  return (
    <>
      {/* Section pour les écrans larges */}
      <section className="hidden w-full justify-center py-12 md:flex">
        <div className="container px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-[#101314] dark:text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-4 p-6 md:p-0">
            {images.map((image, index) => (
              <div key={index}>
                {/* Si un lien est fourni, enveloppe l'image dans une balise <a> */}
                {image.link ? (
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt={image.alt}
                      className="h-64 w-full rounded-md object-cover md:shadow"
                      src={image.src}
                      style={{
                        aspectRatio: '300/300',
                        objectFit: 'cover',
                      }}
                      width="300"
                    />
                  </a>
                ) : (
                  <img
                    alt={image.alt}
                    className="h-64 w-full rounded object-cover"
                    src={image.src}
                    style={{
                      aspectRatio: '300/300',
                      objectFit: 'cover',
                    }}
                    width="300"
                  />
                )}
                <p className="py-4 font-bold text-slate-800 dark:text-gray-200 md:py-2">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section pour les écrans plus petits */}
      <section className="flex flex-col items-center justify-center px-10 pb-16 text-center md:hidden">
        <h2 className="text-3xl font-bold tracking-tighter text-[#101314] dark:text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          className="mt-8 h-auto w-full rounded bg-transparent text-base text-[#101314] shadow dark:text-white md:w-[80vw]"
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {images.map((imageSrc, index) => (
            <SwiperSlide key={index} className="image-container">
              {/* Si un lien est fourni, enveloppe l'image dans une balise <a> */}
              {imageSrc.link ? (
                <a
                  href={imageSrc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={imageSrc.src}
                    alt={imageSrc.alt}
                    className="h-full w-full object-cover"
                    style={{
                      aspectRatio: '300/300',
                      objectFit: 'cover',
                    }}
                    width="300"
                  />
                </a>
              ) : (
                <img
                  src={imageSrc.src}
                  alt={imageSrc.alt}
                  className="h-full w-full object-cover"
                  style={{
                    aspectRatio: '300/300',
                    objectFit: 'cover',
                  }}
                  width="300"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default BannerArticle;
