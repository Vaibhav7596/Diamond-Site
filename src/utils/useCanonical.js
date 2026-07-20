import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://rsutariyaexports.com';

/**
 * useCanonical — dynamically sets/updates the <link rel="canonical"> tag
 * in the document <head> on every route change.
 * Call this once inside MainLayout so it fires on every navigation.
 */
export function useCanonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonical = BASE_URL + (pathname === '/' ? '' : pathname);

    // Find or create the canonical link tag
    let tag = document.querySelector('link[rel="canonical"]');
    if (!tag) {
      tag = document.createElement('link');
      tag.setAttribute('rel', 'canonical');
      document.head.appendChild(tag);
    }
    tag.setAttribute('href', canonical);

    // Also keep og:url in sync
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonical);
    }
  }, [pathname]);
}
