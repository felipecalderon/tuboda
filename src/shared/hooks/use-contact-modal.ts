"use client";

import { useContactModalStore } from "@/shared/lib/contact-modal-store";

export function useContactModal() {
  const isOpen = useContactModalStore((state) => state.isOpen);
  const openModal = useContactModalStore((state) => state.openModal);
  const closeModal = useContactModalStore((state) => state.closeModal);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
