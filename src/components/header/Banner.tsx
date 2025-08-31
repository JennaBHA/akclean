import { Link } from 'react-router-dom';

interface BannerProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  button1Label: string;
  button1Link: string;
  button2Label: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  button1Label,
  button1Link,
  button2Label,
}) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('main');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center text-white">
      <div className="absolute inset-0">
        <img
          loading="lazy"
          className="h-full w-full object-cover object-center"
          src={backgroundImageUrl}
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r from-black to-transparent md:block"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="container relative mx-auto text-center">
        <h1 className="mb-4 max-w-sm text-5xl font-extrabold md:max-w-full">
          {title}
        </h1>
        <p className="mb-8 px-6 text-xl opacity-80 md:px-64">{subtitle}</p>
        <div className="space-x-4">
          <button className="w-25 rounded bg-white p-1 text-black transition delay-150 duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110">
            <Link to={button1Link} className="p-5">
              {button1Label}
            </Link>
          </button>

          <button
            onClick={scrollToNextSection}
            className="w-25 rounded p-1 outline transition delay-150 duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110"
          >
            <span className="p-5">{button2Label}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
