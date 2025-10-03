import Switcher from './Switcher';

const SwitchButton = () => {
  return (
    <button className="fixed bottom-4 right-4 z-50 rounded-3xl border border-[#101314] bg-white p-3 font-bold text-white shadow-lg hover:bg-gray-200 dark:border-white dark:bg-[#101314] dark:hover:bg-black">
      <Switcher />
    </button>
  );
};

export default SwitchButton;
