import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LocaleRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Detect locale
    const browserLang = navigator.language || (navigator as any).userLanguage || 'fr';
    if (browserLang.toLowerCase().startsWith('en')) {
      navigate('/en/', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return null;
}
