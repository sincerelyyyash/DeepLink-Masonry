'use client';

import { useEffect, useState } from 'react';

const RedirectPage = () => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://uat.api.soshals.app/portfolio/reroute?user=kritarthmittal');
        const data = await res.json();
        setRedirectUrl(data.redirectUrl);
      } catch (error) {
        console.error('Error fetching redirect URL:', error);
      }
    };

    fetchData();
  }, []);

  const handleRedirect = () => {
    if (redirectUrl) {
      const userAgent = window.navigator.userAgent || window.navigator.vendor;
      const isAndroid = /android/i.test(userAgent);
      const isIOS = /iPad|iPhone|iPod/.test(userAgent);

      if (isAndroid) {
        const appUrl = redirectUrl.replace('https://', 'intent://');
        window.location.href = appUrl;
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1000);
      } else if (isIOS) {
        window.location.href = redirectUrl;
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1000);
      } else {
        window.open(redirectUrl, '_blank');
      }
    }
  };

  useEffect(() => {
    handleRedirect();
  }, [redirectUrl]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Redirecting...</h1>
    </div>
  );
};

export default RedirectPage;

