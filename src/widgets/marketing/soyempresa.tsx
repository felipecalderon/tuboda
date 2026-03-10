import { BusinessRequestForm } from "@/shared/ui/business-request-form";
import type { ReactNode } from "react";
import { SectionShell } from "../../shared/components/section-shell";
import { SOY_EMPRESA_CONTENT } from "./data/soy-empresa-data";

type SoyEmpresaProps = {
  content?: typeof SOY_EMPRESA_CONTENT;
  formSlot?: ReactNode;
};

export const SoyEmpresa = ({
  content = SOY_EMPRESA_CONTENT,
  formSlot = <BusinessRequestForm />,
}: SoyEmpresaProps) => {
  return (
    <SectionShell>
      <div className="flex flex-col sm:flex-row justify-center sm:gap-20">
        <div className="w-full sm:w-2/3 text-center sm:text-left">
          <p className="text-8xl">{content.title}</p>
          <p className="text-xl pt-6">{content.subtitle}</p>
          <p className="text-lg py-10">{content.description}</p>
        </div>
        <div className="w-full sm:w-1/3">
          <div className="min-w-0 pt-0 lg:pt-2 text-lg">{formSlot}</div>
        </div>
      </div>
    </SectionShell>
  );
};
