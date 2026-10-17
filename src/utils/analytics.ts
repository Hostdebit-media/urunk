// Analytics event tracking & GDPR Consent Mode v2 utility for GA4 & GTM

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export type ConsentStatus = 'granted' | 'denied' | null;

export function getCookieConsent(): ConsentStatus {
  try {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cookie_consent');
      if (stored === 'granted' || stored === 'denied') {
        return stored;
      }
    }
  } catch (err) {
    console.warn('Could not read cookie consent status:', err);
  }
  return null;
}

export function setCookieConsent(granted: boolean) {
  try {
    if (typeof window !== 'undefined') {
      const status: ConsentStatus = granted ? 'granted' : 'denied';
      localStorage.setItem('cookie_consent', status);

      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          ad_storage: status,
          ad_user_data: status,
          ad_personalization: status,
          analytics_storage: status
        });
      }

      window.dispatchEvent(new CustomEvent('cookie_consent_updated', { detail: { status } }));
    }
  } catch (err) {
    console.warn('Could not save cookie consent status:', err);
  }
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString()
      });

      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
      }
      
      console.log(`[Analytics Event Tracked]: ${eventName}`, params);
    }
  } catch (err) {
    console.warn('Analytics event tracking warning:', err);
  }
}
