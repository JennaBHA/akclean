import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const userNameInput = form.current.user_name;
      const userEmailInput = form.current.user_email;
      const messageInput = form.current.message;

      if (!userNameInput.value.trim()) {
        setErrorMessage('Veuillez entrer votre nom et prénom.');
        return;
      }

      if (!validator.isEmail(userEmailInput.value)) {
        setErrorMessage('Veuillez entrer une adresse email valide.');
        return;
      }

      if (!messageInput.value.trim()) {
        setErrorMessage('Veuillez entrer votre message.');
        return;
      }

      try {
        const result = await emailjs.sendForm(
          'service_2oynge9',
          'template_p1zkry3',
          form.current,
          'h34udmuo6d7b6IwKz'
        );
        console.log(result.text);
        setIsSubmitted(true); // Affiche la boîte de dialogue de confirmation
        form.current.reset(); // Réinitialise le formulaire
        setErrorMessage(null); // Réinitialise le message d'erreur
      } catch (error) {
        console.error(error);
        setErrorMessage("Une erreur est survenue lors de l'envoi de l'e-mail.");
      }
    }
  };

  return (
    <>
      <section className="h-fit px-6 py-10 text-[#101314] dark:text-white sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:items-stretch lg:gap-x-20">
            <div className="flex flex-col justify-between lg:py-5">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-[#101314] dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  Il est temps de nettoyer vos locaux ?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#101314] dark:text-white">
                  Chez AK CLEAN SERVICE, l'excellence est notre norme.
                  Faites-nous confiance pour redonner à votre appartement son
                  éclat d'origine, car chez AK CLEAN SERVICE, la qualité prime
                  toujours.
                </p>

                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#101314] dark:text-white">
                  Pour réserver veuillez nous contacter par téléphone (06 50 40
                  08 96), par instagram (akclean_service) ou par le formulaire
                  de contact !
                </p>

                <img
                  className="relative z-10 mx-auto -mb-16 max-w-xs brightness-50 dark:brightness-200 md:hidden"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                  alt=""
                />

                <img
                  className="hidden w-full translate-x-24 translate-y-8 brightness-50 dark:brightness-200 md:block"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="overflow-hidden rounded-md bg-[#F3F8FF] shadow dark:bg-[#101314]">
                <div className="p-6 sm:p-10">
                  <h3 className="text-3xl font-semibold text-[#101314] dark:text-white">
                    Contactez nous !
                  </h3>
                  <p className="text-gray-6200 mt-4 text-base">
                    Nous sommes ravis de vous accueillir et sommes prêts à
                    répondre à toutes vos questions ou commentaires.
                  </p>

                  <form
                    action="#"
                    ref={form}
                    onSubmit={sendEmail}
                    method="POST"
                    className="mt-4"
                  >
                    <div className="space-y-6">
                      <div>
                        <label className="text-base font-medium text-slate-700 dark:text-gray-100">
                          Nom et prénom
                        </label>
                        <div className="relative mt-2.5">
                          <input
                            type="text"
                            name="user_name"
                            id=""
                            placeholder="Entrez votre nom et prénom"
                            className="block w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 caret-autoclean_blue transition-all duration-200 focus:border-autoclean_blue focus:outline-none focus:ring-autoclean_blue"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-slate-700 dark:text-gray-100">
                          Email
                        </label>
                        <div className="relative mt-2.5">
                          <input
                            type="text"
                            name="user_email"
                            id=""
                            placeholder="Entrez votre e-mail"
                            className="block w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 caret-autoclean_blue transition-all duration-200 focus:border-autoclean_blue focus:outline-none focus:ring-autoclean_blue"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-slate-700 dark:text-gray-100">
                          Message
                        </label>
                        <div className="relative mt-2.5">
                          <textarea
                            name="message"
                            id=""
                            placeholder="Entrez votre message"
                            className="block w-full resize-y rounded-md border border-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 caret-autoclean_blue transition-all duration-200 focus:border-autoclean_blue focus:outline-none focus:ring-autoclean_blue"
                          ></textarea>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-400 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:bg-blue-800"
                        >
                          Envoyez votre message
                        </button>
                      </div>
                    </div>
                  </form>
                  {isSubmitted && (
                    <div className="mt-4 text-green-500">
                      Votre e-mail a été envoyé avec succès !
                    </div>
                  )}
                  {errorMessage && (
                    <div className="mt-4 text-red-500">{errorMessage}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
