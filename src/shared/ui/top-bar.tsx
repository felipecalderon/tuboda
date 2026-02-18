import { BurgerIcon } from "./burger-icon";

export function TopBar({
  logoText,
  onMenuClick,
}: {
  logoText: string;
  onMenuClick?: () => void;
}) {
  return (
    <div className="relative flex items-center justify-center py-10">
      <div className="select-none text-5xl tracking-[0.35em] text-[#3f382f] sm:text-6xl">
        {logoText}
      </div>

      <button
        type="button"
        aria-label="Abrir menú"
        onClick={onMenuClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-md p-2 text-[#3f382f] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
      >
        <BurgerIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
