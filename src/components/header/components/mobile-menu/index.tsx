import { AnimatePresence, motion } from "motion/react";
import { FiX } from "react-icons/fi";

type Props = {
  isOpen: boolean;
  onOpenMobileMenu: () => void;
};

export function MobileMenu({ isOpen, onOpenMobileMenu }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 flex backdrop-blur-lg justify-center w-full h-full z-50 bg-[rgba(0,0,0,.8)]"
        >
          <button
            className="z-[1] absolute top-2 right-2 hover:opacity-70 duration-300"
            type="button"
            onClick={onOpenMobileMenu}
          >
            <FiX className="size-10" />
          </button>

          <nav className="z-[1] mx-auto mb-auto mt-52">
            <ul className="flex flex-col gap-4">
              <li className="text-center text-2xl font-medium bg-clip-text text-transparent bg-gradient-text">
                <button type="button">Início</button>
              </li>
              <li className="text-center text-2xl font-medium">
                <button type="button">Sobre Mim</button>
              </li>
              <li className="text-center text-2xl font-medium">
                <button type="button">Portfólio</button>
              </li>
              <li className="text-center text-2xl font-medium">
                <button type="button">Experiências</button>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
