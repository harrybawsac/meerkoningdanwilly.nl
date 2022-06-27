import { render as rtlRender } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

function render(ui: any, { locale = 'en', ...renderOptions } = {}) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <IntlProvider locale={locale}>{children}</IntlProvider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
