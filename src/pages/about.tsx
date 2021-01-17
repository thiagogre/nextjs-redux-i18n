import React from 'react'
import Head from 'next/head'
import { withTranslation } from '../../i18n'
import { TFunction } from 'next-i18next'

import { Container } from '../styles/pages/About'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = ({ t }: { readonly t: TFunction }) => {
  return (
    <>
      <Head>
        <title>Template</title>
      </Head>
      <Header />
      <Container>
        <h1>{t('LABEL_HI')}</h1>
      </Container>
      <Footer />
    </>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['about', 'header', 'footer']
})

export default withTranslation('about')(About)
