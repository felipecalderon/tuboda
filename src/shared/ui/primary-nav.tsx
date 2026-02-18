import Link from "next/link";

export type NavItem = {
  label: string;
  href: string;
};

interface PrimaryNavProps {
  items: NavItem[];
}

export function PrimaryNav({ items }: PrimaryNavProps) {
  return (
    <nav aria-label="Navegación principal" className="bg-primary">
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 border-t border-black/10 px-2 py-4 text-[11px] tracking-[0.18em] text-secondary sm:flex-nowrap sm:px-6">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-bold hover:text-black focus:outline-none focus:underline"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
