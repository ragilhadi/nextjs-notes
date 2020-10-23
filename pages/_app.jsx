import React from 'react'
import {ThemeProvider} from 'theme-ui'
import Theme from '../Theme'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
  }