import React from 'react'
import { Image, Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { useTranslation } from 'contexts/Localization'
import PageHeader from 'components/PageHeader'
import ProfileForm from './components/profile'

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`

const Profile: React.FC = () => {
  const { t } = useTranslation()

  // Users with no wallet connected should see 0 as Earned amount
  // Connected users should see loading indicator until first userData has loaded

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary">
          {t('User Profile')}
        </Heading>
      </PageHeader>
      <Page>
        <ProfileForm />
        <StyledImage src="/images/3dpan.png" alt="Pancake illustration" width={120} height={103} />
      </Page>
    </>
  )
}

export default Profile
