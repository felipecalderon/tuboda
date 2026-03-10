import type { PropsWithChildren } from "react";

type SectionShellProps = PropsWithChildren<{
  className?: string;
}>;

export function SectionShell({
  className = "mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 space-y-10 overflow-x-hidden",
  children,
}: SectionShellProps) {
  return <div className={className}>{children}</div>;
}
