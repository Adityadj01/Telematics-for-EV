import { useEffect } from 'react';

export const WeatherApp = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="commonninja_component pid-b0f18c32-6654-4a3c-b609-1d944f113b07"></div>
    </div>
  );
};