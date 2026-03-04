import { BusinessRequestForm } from "@/shared/ui/business-request-form";

export const SoyEmpresa = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 space-y-10 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row justify-center sm:gap-20">
        <div className="w-full sm:w-2/3 text-center sm:text-left">
          <p className={`text-8xl`}>Soy Empresa</p>
          <p className={`text-xl pt-6`}>
            Plataforma digital y exposiciones presenciales para el rubro de las
            bodas
          </p>
          <p className="text-lg py-10">
            Un espacio abierto y neutral para el mercado nupcial, TU BODA CHILE
            es una plataforma digital especializada en bodas, complementada con
            exposiciones presenciales, creada para recibir a todas las empresas
            del rubro, sin distinción. Nuestro propósito es ofrecer a las marcas
            un espacio profesional donde puedan dar a conocer su propuesta y
            acceder, en igualdad de condiciones, a una alta convocatoria de
            novias reales, tanto a través de nuestra plataforma online como de
            nuestras exposiciones en distintas ciudades del país. Creemos en un
            mercado diverso, colaborativo y transparente, donde cada empresa
            tenga la oportunidad de conectar con su público objetivo durante
            toda la temporada de bodas. Únete a TU BODA EXPO CHILE el evento de
            novios mas destacado en el mund nupcial.
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          <div className="min-w-0 pt-0 lg:pt-2 text-lg">
            <BusinessRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
};
