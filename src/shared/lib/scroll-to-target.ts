export function scrollToTarget(targetId: string) {
  if (typeof document === "undefined") {
    return false;
  }

  const normalizedId = targetId.replace(/^#/, "");
  const target = document.getElementById(normalizedId);

  if (!target) {
    return false;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}
