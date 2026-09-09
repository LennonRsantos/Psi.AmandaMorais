"use client";

import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5561995543525?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Intensivo%20de%20TCC.";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 sm:right-5 sm:bottom-5 sm:h-14 sm:w-14"
    >
      <i className="bi bi-whatsapp text-2xl sm:text-3xl" />
    </motion.a>
  );
}
