'use client';

import { useEffect, useState } from 'react';

const RedirectPage = () => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://uat.api.soshals.app/portfolio/reroute?user=kritarthmittal');
      const data = await res.json();
      setRedirectUrl(data.redirectUrl);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (redirectUrl) {
      const userAgent = window.navigator.userAgent || window.navigator.vendor;
      const isAndroid = /android/i.test(userAgent);
      const isIOS = /iPad|iPhone|iPod/.test(userAgent);

      if (isAndroid || isIOS) {
        window.location.href = redirectUrl;
      } else {
        window.open(redirectUrl, '_blank');
      }
    }
  }, [redirectUrl]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default RedirectPage;
