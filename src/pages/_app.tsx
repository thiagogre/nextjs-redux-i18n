import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../../i18n'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from '../store'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async appContext => ({
  ...(await App.getInitialProps(appContext))
})

export default appWithTranslation(MyApp)
