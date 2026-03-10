import { BurgerIcon } from "./burger-icon";

interface BurgerButtonProps {
  onMenuClick?: () => void;
  isOpen?: boolean;
}

export function BurgerButton({ onMenuClick, isOpen = false }: BurgerButtonProps) {
  return (
    <button
      type="button"
      aria-label="Abrir menú"
      aria-expanded={isOpen}
      aria-haspopup="menu"
      onClick={onMenuClick}
      className="rounded-md p-2 text-secondary hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
    >
      <BurgerIcon className="h-7 w-7" />
    </button>
  );
}
