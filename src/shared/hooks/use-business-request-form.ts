"use client";

import { useForm, type FieldPath } from "react-hook-form";
import {
  businessRequestDefaultValues,
  EventTypeFormValues,
  eventTypeSchema,
} from "@/shared/schemas/business-request-schema";

interface UseBusinessRequestFormParams {
  onSuccess?: (values: EventTypeFormValues) => void;
}

export function useBusinessRequestForm({
  onSuccess,
}: UseBusinessRequestFormParams) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<EventTypeFormValues>({
    defaultValues: businessRequestDefaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    clearErrors();

    const parsed = eventTypeSchema.safeParse(values);

    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const fieldName = issue.path[0];
        if (typeof fieldName === "string") {
          setError(fieldName as FieldPath<EventTypeFormValues>, {
            message: issue.message,
          });
        }
      }
      return;
    }

    await new Promise((r) => setTimeout(r, 500));
    onSuccess?.(parsed.data);
  });

  return {
    register,
    errors,
    isSubmitting,
    onSubmit,
  };
}
