import type { ContactFormSource } from '../server/contactApi';

export interface ContactLeadSubmission {
  lang: 'fr' | 'en';
  source: ContactFormSource;
  name: string;
  email?: string;
  phone?: string;
  contact?: string;
  business?: string;
  service: string;
  message?: string;
  privacyAccepted: boolean;
  _gotcha?: string;
  pageUrl?: string;
}

export interface ContactSubmitResult {
  ok: boolean;
  status: number;
  code: string;
  userMessage: string;
  showDirectFallback: boolean;
}

const CLIENT_TIMEOUT_MS = 12000;

function getLocalizedErrorMessage(
  code: string,
  status: number,
  lang: 'fr' | 'en'
): { userMessage: string; showDirectFallback: boolean } {
  const isFR = lang === 'fr';

  switch (code) {
    case 'CONSENT_REQUIRED':
      return {
        userMessage: isFR
          ? 'Veuillez accepter la politique de confidentialité pour envoyer votre demande.'
          : 'Please accept the privacy policy to submit your inquiry.',
        showDirectFallback: false,
      };
    case 'INVALID_NAME':
      return {
        userMessage: isFR
          ? 'Veuillez saisir votre nom complet (au moins 2 caractères).'
          : 'Please enter your full name (at least 2 characters).',
        showDirectFallback: false,
      };
    case 'INVALID_EMAIL':
      return {
        userMessage: isFR
          ? 'Veuillez saisir une adresse e-mail professionnelle valide (ex. vous@etablissement.com).'
          : 'Please enter a valid email address (e.g. name@property.com).',
        showDirectFallback: false,
      };
    case 'INVALID_PHONE':
      return {
        userMessage: isFR
          ? 'Veuillez saisir un numéro de téléphone ou WhatsApp valide (ex. +212 600-000000).'
          : 'Please enter a valid phone or WhatsApp number (e.g. +212 600-000000).',
        showDirectFallback: false,
      };
    case 'INVALID_CONTACT':
      return {
        userMessage: isFR
          ? 'Veuillez saisir une adresse e-mail valide ou un numéro WhatsApp (ex. +212 600-000000).'
          : 'Please enter a valid email address or WhatsApp number (e.g. +212 600-000000).',
        showDirectFallback: false,
      };
    case 'INVALID_BUSINESS':
      return {
        userMessage: isFR
          ? "Veuillez indiquer le nom de votre établissement ou entreprise."
          : 'Please enter your hotel, riad, or company name.',
        showDirectFallback: false,
      };
    case 'INVALID_SERVICE':
      return {
        userMessage: isFR
          ? 'Veuillez sélectionner un service ou type d’activité.'
          : 'Please select a service or business type.',
        showDirectFallback: false,
      };
    case 'MESSAGE_TOO_LONG':
      return {
        userMessage: isFR
          ? 'Votre message dépasse la limite autorisée (3 000 caractères maximum).'
          : 'Your message exceeds the maximum length (3,000 characters).',
        showDirectFallback: false,
      };
    case 'PAYLOAD_TOO_LARGE':
      return {
        userMessage: isFR
          ? 'La taille de la requête dépasse la limite autorisée. Veuillez raccourcir votre message.'
          : 'Your submission is too large. Please shorten your message and try again.',
        showDirectFallback: false,
      };
    case 'RATE_LIMITED':
      return {
        userMessage: isFR
          ? 'Trop de tentatives récentes. Veuillez patienter quelques minutes ou nous écrire directement sur WhatsApp.'
          : 'Too many recent attempts. Please wait a few minutes or message us directly on WhatsApp.',
        showDirectFallback: true,
      };
    case 'DUPLICATE_SUBMISSION':
      return {
        userMessage: isFR
          ? 'Cette demande vient déjà d’être envoyée. Merci de patienter pendant son traitement.'
          : 'This inquiry was just submitted. Please wait while our team processes your request.',
        showDirectFallback: false,
      };
    case 'SPAM_DETECTED':
      return {
        userMessage: isFR
          ? 'Votre soumission n’a pas pu être validée (trop de liens ou filtre anti-spam). Contactez-nous par e-mail ou WhatsApp.'
          : 'Your submission could not be validated by our spam filter. Please contact us directly via WhatsApp or email.',
        showDirectFallback: true,
      };
    case 'EMAIL_PROVIDER_UNCONFIGURED':
    case 'EMAIL_DELIVERY_FAILED':
    default:
      return {
        userMessage: isFR
          ? 'L’envoi automatique par formulaire est momentanément indisponible. Votre message n’a pas été perdu : contactez-nous directement sur WhatsApp (+212 668-802096) ou à contact@urunk.com.'
          : 'Automated form delivery is temporarily unavailable. Please reach us directly on WhatsApp (+212 668-802096) or email contact@urunk.com.',
        showDirectFallback: status >= 500 || status === 0 || status === 403,
      };
  }
}

function createIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `urunk-${crypto.randomUUID()}`;
  }
  return `urunk-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

export async function submitContactLead(
  payload: ContactLeadSubmission
): Promise<ContactSubmitResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), CLIENT_TIMEOUT_MS);
  const idempotencyKey = createIdempotencyKey();

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Idempotency-Key': idempotencyKey,
      },
      body: JSON.stringify({
        ...payload,
        pageUrl:
          payload.pageUrl ||
          (typeof window !== 'undefined' ? window.location.pathname : ''),
      }),
      signal: controller.signal,
    });

    let body: { ok?: boolean; code?: string } = {};
    try {
      body = (await response.json()) as { ok?: boolean; code?: string };
    } catch {
      body = {};
    }

    if (response.ok && body.ok === true) {
      return {
        ok: true,
        status: response.status,
        code: 'DELIVERED',
        userMessage: '',
        showDirectFallback: false,
      };
    }

    const code = body.code || `HTTP_${response.status}`;
    const { userMessage, showDirectFallback } = getLocalizedErrorMessage(
      code,
      response.status,
      payload.lang
    );

    return {
      ok: false,
      status: response.status,
      code,
      userMessage,
      showDirectFallback,
    };
  } catch {
    const { userMessage } = getLocalizedErrorMessage(
      'NETWORK_ERROR',
      0,
      payload.lang
    );
    return {
      ok: false,
      status: 0,
      code: 'NETWORK_ERROR',
      userMessage,
      showDirectFallback: true,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
