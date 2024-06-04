import { useEffect } from 'react';

export const MapApp = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div >
      <div className="commonninja_component pid-8a4795d9-2e2d-4c17-91c5-32a9d0233abd"></div>
    </div>
  );
};