declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export const GOOGLE_ADS_CONVERSION_ID = "AW-17865495674/uY4TCO_Lg40dEPqo98ZC";

/**
 * Mirrors Google's "Event snippet for Purchase conversion page".
 * Call on click of the chosen link/button. If `url` is provided,
 * navigates there after the event callback fires.
 *
 * Usage (React):
 *   <a href="tel:+18888824649" onClick={() => gtag_report_conversion()}>
 */
export function gtag_report_conversion(url?: string): boolean {
  const callback = () => {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_ID,
      transaction_id: "",
      event_callback: callback,
    });
  } else {
    callback();
  }

  return false;
}
