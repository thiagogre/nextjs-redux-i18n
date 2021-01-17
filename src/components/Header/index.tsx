import React from 'react'
import Link from 'next/link'
import { TFunction } from 'next-i18next'
import { i18n, withTranslation } from '../../../i18n'
import { useSelector, useDispatch } from 'react-redux'
import * as Icons from 'react-feather'

import * as Action from '../../store/actions/changeBackground'
import { Container } from './styles'

const Header = ({ t }: { readonly t: TFunction }) => {
  const dispatch = useDispatch()
  const props = useSelector(
    (data: any) => data?.changeBackground?.changeBackground
  )

  return (
    <Container
      props={props}
      onMouseEnter={() => dispatch(Action.changeBackground(true))}
    >
      <div>
        <Icons.Smile />
        <Link href="/about">
          <a>{t('LABEL_ABOUT')}</a>
        </Link>
        <Link href="/">
          <a>{t('LABEL_HOME')}</a>
        </Link>
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')
          }
        >
          {t('LABEL_CHANGELANGUAGE')}
        </button>
      </div>
      <h2>{t('LABEL_MOUSEENTERHERE')}</h2>
    </Container>
  )
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['header']
})

export default withTranslation('header')(Header)
