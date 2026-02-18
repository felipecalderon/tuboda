"use client";

import { useForm, type FieldPath } from "react-hook-form";
import {
  contactRequestDefaultValues,
  contactRequestSchema,
  type ContactFormValues,
} from "@/shared/lib/contact-request-schema";

interface UseContactRequestFormParams {
  onSuccess: () => void;
}

export function useContactRequestForm({
  onSuccess,
}: UseContactRequestFormParams) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: contactRequestDefaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    clearErrors();
    const parsed = contactRequestSchema.safeParse(values);

    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const fieldName = issue.path[0];
        if (typeof fieldName === "string") {
          setError(fieldName as FieldPath<ContactFormValues>, {
            message: issue.message,
          });
        }
      }
      return;
    }

    await new Promise((resolve) => window.setTimeout(resolve, 500));
    reset();
    onSuccess();
  });

  return {
    register,
    errors,
    isSubmitting,
    onSubmit,
  };
}
