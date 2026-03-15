import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const GA_ID = "G-ZRHDQSLNW2";
const CONSENT_KEY = "wifire_cookie_consent";

type ConsentValue = "accepted" | "rejected";

function loadGA4() {
  if (document.querySelector(`script[src*="gtag/js?id=${GA_ID}"]`)) return;
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);
  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_ID, { send_page_view: true });
}

function revokeGA4() {
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
  });
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
    if (consent === "accepted") {
      loadGA4();
    } else if (consent === "rejected") {
      revokeGA4();
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGA4();
    setVisible(false);
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    revokeGA4();
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-foreground/95 backdrop-blur-sm text-primary-foreground p-4 md:p-6 shadow-lg border-t border-white/10"
    >
      <div className="container flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm leading-relaxed flex-1">
          Utilizamos cookies para analisar o tráfego do site e melhorar sua experiência.
          Ao clicar em "Aceitar", você concorda com o uso de cookies analíticos.{" "}
          <Link to="/privacidade" className="text-primary underline hover:text-primary/80">
            Política de Privacidade
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-heading font-semibold rounded-md border border-white/20 hover:bg-white/10 transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-heading font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
