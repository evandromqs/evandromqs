// Utility to report Google Ads & Analytics conversions reliably
export const reportWhatsAppConversion = (label = 'whatsapp_click') => {
  if (typeof window === 'undefined') return;

  try {
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion();
    } else if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-16799646775/15WVCP-ujuEbELeI2co-',
      });
    }

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'lead',
        event_label: label,
        value: 1,
      });
    }
  } catch (err) {
    console.warn('Analytics report conversion error:', err);
  }
};
