import { BurgerIcon } from "./burger-icon";

interface BurgerButtonProps {
  onMenuClick?: () => void;
}

export function BurgerButton({ onMenuClick }: BurgerButtonProps) {
  return (
    <button
      type="button"
      aria-label="Abrir menú"
      onClick={onMenuClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 rounded-md p-2 text-secondary hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
    >
      <BurgerIcon className="h-7 w-7" />
    </button>
  );
}
