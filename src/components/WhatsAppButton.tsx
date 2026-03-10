const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5547997689880?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-transform animate-bounce-subtle"
      aria-label="Contato via WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow opacity-40" />
      <svg viewBox="0 0 32 32" width="30" height="30" fill="white" className="relative z-10">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.925 15.925 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.35 22.616c-.392 1.1-1.94 2.016-3.168 2.282-.842.18-1.94.322-5.64-1.212-4.736-1.964-7.786-6.78-8.024-7.094-.228-.314-1.916-2.552-1.916-4.868 0-2.316 1.214-3.454 1.644-3.926.392-.43 1.024-.612 1.63-.612.196 0 .372.01.53.018.47.02.706.048 1.016.788.392.93 1.344 3.276 1.462 3.514.12.238.24.56.08.874-.148.322-.278.466-.516.738-.238.27-.464.478-.702.77-.216.254-.46.526-.194.996.266.462 1.184 1.95 2.542 3.162 1.746 1.558 3.216 2.04 3.672 2.268.456.228.724.19.99-.116.274-.314 1.168-1.362 1.48-1.83.304-.462.616-.386 1.036-.232.424.158 2.684 1.266 3.144 1.496.46.232.766.346.878.538.112.19.112 1.11-.28 2.21z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
