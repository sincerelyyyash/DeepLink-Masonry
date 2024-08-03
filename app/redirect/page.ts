"use client"

import { useEffect } from 'react';
import * as React from 'react'; // Add this line

interface RedirectProps {
  redirectUrl: string;
}

const Redirect: React.FC<RedirectProps> = ({ redirectUrl }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
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

  return React.createElement('div', null,
    React.createElement('h1', null, 'Redirecting...')
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://uat.api.soshals.app/portfolio/reroute?user=kritarthmittal');
  const data = await res.json();

  return {
    props: {
      redirectUrl: data.redirectUrl,
    },
  };
}

export default Redirect;
