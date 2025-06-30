import React from 'react';

export const HubSpotForm = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);

      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: 'eu1', // Replace with your region (e.g., "eu1" for Europe)
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID,
          target: '#hubspotForm',
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="hubspotForm"></div>
    </>
  );
};
