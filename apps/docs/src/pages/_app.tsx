import { config as faConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { MDXProvider } from '@mdx-js/react';
import '@strum/react/styles';
import { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import Footer from '../components/Footer/Footer';
import GridContainer from '../components/GridContainer/GridContainer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import MainNav from '../components/MainNav/MainNav';
import MDXComponents from '../components/MDX/MDXComponents';
import { appLayoutStyle } from '../styles/layout.css';

import '@fontsource/inter/variable.css';
import '@fontsource/jetbrains-mono/variable.css';
import { StrumProvider } from '@strum/react';
import Script from 'next/script';

faConfig.autoAddCss = false;

type MenuContextProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const MenuContext = createContext<MenuContextProps>({
  isOpen: false,
  setIsOpen: () => null,
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <StrumProvider>
      <MenuContext.Provider
        value={{ isOpen: menuIsOpen, setIsOpen: setMenuIsOpen }}
      >
        <MDXProvider components={MDXComponents}>
          <div className={appLayoutStyle}>
            <Header />
            <GridContainer>
              <MainNav />
              <Main>
                <Component {...pageProps} />
              </Main>
            </GridContainer>
            <Footer />
          </div>
        </MDXProvider>
      </MenuContext.Provider>

      <Script
        data-domain="strum.design"
        src="https://plausible.io/js/plausible.js"
        strategy="afterInteractive"
      />
    </StrumProvider>
  );
};

export default App;
