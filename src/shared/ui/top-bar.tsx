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
      <div className="select-none text-2xl tracking-[0.35em] text-[#3f382f] sm:text-6xl">
        {logoText}
      </div>
    </div>
  );
}
