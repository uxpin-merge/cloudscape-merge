import { ReactNode, useEffect } from 'react';
import { Theme, applyTheme } from '@cloudscape-design/components/theming';
import "@cloudscape-design/global-styles/index.css";

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

  return children;
}
