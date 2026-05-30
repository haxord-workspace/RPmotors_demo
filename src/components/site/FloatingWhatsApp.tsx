import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-gold text-gold-foreground flex items-center justify-center shadow-gold-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20" />
    </a>
  );
}
