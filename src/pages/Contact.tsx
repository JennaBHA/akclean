import ContactForm from '../components/article/ContactForm';
import Banner from '../components/header/Banner';

const Contact = () => {
  return (
    <>
      <header>
        <Banner
          title="Contactez-nous"
          subtitle="Il est temps de nettoyer vos locaux ?"
          backgroundImageUrl="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          button1Label="Retour à l'accueil"
          button1Link="/"
          button2Label="Lire plus"
        />
      </header>

      <main
        id="main"
        className="bg-white pt-10 text-[#101314] dark:bg-[#000302] dark:text-white"
      >
        <ContactForm />
      </main>
    </>
  );
};

export default Contact;
