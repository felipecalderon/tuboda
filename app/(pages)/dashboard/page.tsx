import { auth0 } from "@/shared/config/auth0.config";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth0.getSession();
  const user = session?.user;
  console.log(user);
  return (
    <main className="min-h-screen bg-primary">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.4em] text-secondary/70">
            EXPOBODAS
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-secondary sm:text-5xl">
            {user ? "Tu cuenta" : "Accede a tu cuenta"}
          </h1>
          <p className="mt-3 text-sm text-secondary/80 sm:text-base">
            {user
              ? "Revisa tu informacion personal y gestiona tu sesion."
              : "Debes iniciar sesion para ver tu informacion personal."}
          </p>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white p-8 shadow-lg">
          {user ? (
            <div className="flex flex-col items-center gap-6 text-center">
              {user.picture ? (
                // eslint-disable-next-line @next/next/no-img-element
                <Image
                  src={user.picture}
                  width={300}
                  height={300}
                  alt={user.name ?? "Usuario"}
                  className="h-26 w-26 rounded-full border border-black/10 object-cover"
                />
              ) : null}
              <div className="space-y-1">
                <p className="text-lg font-semibold text-secondary">
                  {user.name ?? "Usuario"}
                </p>
                {user.email ? (
                  <p className="text-sm text-secondary/70">{user.email}</p>
                ) : null}
              </div>
              <a
                href="/auth/logout"
                className="flex w-full items-center justify-center rounded-full border border-secondary/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary transition hover:border-secondary/60 hover:bg-secondary/5"
              >
                Cerrar sesion
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <a
                href="/auth/login"
                className="flex w-full items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-secondary/90"
              >
                Iniciar sesion
              </a>
              <a
                href="/auth/login?screen_hint=signup"
                className="flex w-full items-center justify-center rounded-full border border-secondary/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary transition hover:border-secondary/60 hover:bg-secondary/5"
              >
                Crear cuenta
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
