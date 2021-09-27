import React from 'react'
import { useTranslation } from '../../modules/i18n/i18n.hook'
import IdentitySidebar from '../../layouts/identity-sidebar/identity-sidebar.component'
import { Routes } from '../../enums/routes.enum'

const ForgotPasswordSidebar = () => {
  const { t } = useTranslation()
  return (
    <>
      <IdentitySidebar.Title>
        {t('auth:recover-password')}
      </IdentitySidebar.Title>
      <IdentitySidebar.Subtitle>
        {t('auth:recover-password-subtitle')}
      </IdentitySidebar.Subtitle>
      <IdentitySidebar.Hr />
      <IdentitySidebar.Desc>{t('auth:dont-have-account')}</IdentitySidebar.Desc>
      <IdentitySidebar.Link to={Routes.REGISTER}>
        {t('auth:create-account')}
      </IdentitySidebar.Link>
      <IdentitySidebar.Space />
      <IdentitySidebar.Desc>{t('auth:remember-password')}</IdentitySidebar.Desc>
      <IdentitySidebar.Link to={Routes.LOGIN}>
        {t('auth:back-login')}
      </IdentitySidebar.Link>
    </>
  )
}

export default ForgotPasswordSidebar
