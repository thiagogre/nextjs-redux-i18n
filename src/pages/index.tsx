import React from 'react'
import Head from 'next/head'
import { withTranslation } from '../../i18n'
import { TFunction } from 'next-i18next'

import { Container } from '../styles/pages/PageLanding'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PageLanding = ({ t }: { readonly t: TFunction }) => {
  return (
    <>
      <Head>
        <title>Template</title>
      </Head>
      <Header />
      <Container>
        <h1>{t('LABEL_WELCOME')}</h1>
      </Container>
      <Footer />
    </>
  )
}

PageLanding.getInitialProps = async () => ({
  namespacesRequired: ['pageLanding', 'header', 'footer']
})

export default withTranslation('pageLanding')(PageLanding)
