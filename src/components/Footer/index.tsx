import React from 'react'
import { TFunction } from 'next-i18next'
import { withTranslation } from '../../../i18n'
import { useSelector, useDispatch } from 'react-redux'

import * as Action from '../../store/actions/changeBackground'
import { Container } from './styles'

const Footer = ({ t }: { readonly t: TFunction }) => {
  const dispatch = useDispatch()
  const props = useSelector(
    (data: any) => data?.changeBackground?.changeBackground
  )
  return (
    <Container
      props={props}
      onMouseEnter={() => dispatch(Action.changeBackground(false))}
    >
      <div>
        <h2>{t('LABEL_NOWMOUSEENTERHERE')}</h2>
        <p>{t('LABEL_COPYRIGHT')}</p>
      </div>
    </Container>
  )
}

Footer.getInitialProps = async () => ({
  namespacesRequired: ['footer']
})

export default withTranslation('footer')(Footer)
