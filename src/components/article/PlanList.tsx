import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface PlanFeature {
  name: string;
  subname: {
    first?: string;
    second?: string;
    third?: string;
  };
  prices: {
    first?: string;
    second?: string;
    third?: string;
  };
}

interface Plan {
  title: string;
  iconColor: string;
  features: PlanFeature[];
  description?: string[];
}

interface PlanListProps {
  plans: Plan[];
}

const PlanList: React.FC<PlanListProps> = ({ plans }) => {
  return (
    <>
      <div className="px-10 md:px-0">
        <h2 className="text-center text-3xl font-bold tracking-tighter text-[#101314] dark:text-white sm:text-4xl md:text-5xl">
          Nos tarifs
        </h2>
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center justify-center overflow-hidden p-4 md:hidden">
        <Swiper
          modules={[Pagination]}
          className="h-full w-full rounded bg-transparent text-base text-[#101314] shadow dark:text-white"
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
        >
          {plans.map((plan, planIndex) => (
            <SwiperSlide key={planIndex}>
              <div
                key={planIndex}
                className="flex h-[70vh] w-full flex-col items-center justify-center rounded bg-[#F3F8FF] p-6 text-[#101314] shadow-md dark:bg-[#101314] dark:text-white md:w-1/2"
              >
                <DollarSignIcon
                  className={`h-12 w-12 ${plan.iconColor} mb-4`}
                />
                <h2 className="mb-2 text-2xl font-bold">{plan.title}</h2>
                <ul className="mb-6 text-center">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mt-6">
                      <div className="text-center font-semibold">
                        <p className="text-lg">{feature.name}</p>
                        {plan.description && plan.description[featureIndex] && (
                          <p className="text-center text-sm text-slate-800 dark:text-gray-200">
                            {plan.description[featureIndex]}
                          </p>
                        )}
                        <div className="mt-2 flex justify-around">
                          <div>
                            <p className="text-md">{feature.subname.first}</p>
                            <p className="text-xl font-bold">
                              {feature.prices.first}
                            </p>
                          </div>
                          <div>
                            <p className="text-md">{feature.subname.second}</p>
                            <p className="text-xl font-bold">
                              {feature.prices.second}
                            </p>
                          </div>
                          <div>
                            <p className="text-md">{feature.subname.third}</p>
                            <p className="text-xl font-bold">
                              {feature.prices.third}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PC */}
      <div className="container mx-auto hidden flex-col gap-8 p-8 md:flex md:flex-row">
        {plans.map((plan, planIndex) => (
          <div
            key={planIndex}
            className="flex w-auto flex-col items-center rounded bg-[#F3F8FF] p-6 text-[#101314] shadow dark:bg-[#101314] dark:text-white md:w-1/2"
          >
            <DollarSignIcon className={`h-12 w-12 ${plan.iconColor} mb-4`} />
            <h2 className="mb-2 text-2xl font-bold">{plan.title}</h2>
            <ul className="mb-4 text-center">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="mt-6">
                  <div className="text-center font-semibold">
                    <p className="text-lg">{feature.name}</p>
                    {plan.description && plan.description[featureIndex] && (
                      <p className="text-center text-sm text-slate-800 dark:text-gray-200">
                        {plan.description[featureIndex]}
                      </p>
                    )}
                    <div className="mt-2 flex justify-around">
                      <div className="px-3">
                        <p className="text-md">{feature.subname.first}</p>
                        <p className="text-xl font-bold">
                          {feature.prices.first}
                        </p>
                      </div>
                      <div className="px-3">
                        <p className="text-md">{feature.subname.second}</p>
                        <p className="text-xl font-bold">
                          {feature.prices.second}
                        </p>
                      </div>
                      <div className="px-3">
                        <p className="text-md">{feature.subname.third}</p>
                        <p className="text-xl font-bold">
                          {feature.prices.third}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

interface DollarSignIconProps extends React.SVGProps<SVGSVGElement> {
  className: string;
}

const DollarSignIcon: React.FC<DollarSignIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
};

export default PlanList;
