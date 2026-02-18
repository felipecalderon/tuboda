export function TopBar({ logoText }: { logoText: string }) {
  return (
    <div className="relative flex items-center justify-center py-10">
      <div className="select-none text-2xl tracking-[0.35em] text-secondary sm:text-6xl">
        {logoText}
      </div>
    </div>
  );
}
