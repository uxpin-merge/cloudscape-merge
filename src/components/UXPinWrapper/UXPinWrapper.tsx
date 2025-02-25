import { ReactNode, useEffect } from 'react';
import { Theme, applyTheme } from '@cloudscape-design/components/theming';
import "@cloudscape-design/global-styles/index.css";
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.all';

const theme: Theme = {
  //Edit your tokens here if needed
  tokens: {
    colorBackgroundButtonPrimaryDefault: {
      light: '#006ce0',
      dark: '#ff0000',
    },
  },
};

export default function UXPinWrapper({ children }: { children: ReactNode }) {

  useEffect(() => {
    applyTheme({ theme });
  }, []);

  return <I18nProvider messages={[messages]}>
    {children}</I18nProvider>
}
