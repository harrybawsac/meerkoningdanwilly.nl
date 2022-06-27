import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';

import English from '../locales/compiled/en.json';
import Spanish from '../locales/compiled/es.json';
import Dutch from '../locales/compiled/nl.json';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'nl':
        return Dutch;
      case 'en':
        return English;
      case 'es':
        return Spanish;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <IntlProvider
      locale={shortLocale || 'en'}
      messages={messages}
      onError={() => null}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default MyApp;
