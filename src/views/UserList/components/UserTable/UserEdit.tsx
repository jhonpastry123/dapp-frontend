import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal, Input, Text, Flex, Box } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const CellContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  width: 100%;
`

export default function UserEdit({ onDismiss, userData }) {
  const { t } = useTranslation()
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [verEmail, setVerEmail] = useState('')
  const [verKyc, setVerKyc] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState(false)

  return (
    <Modal title={t('User Info')} onDismiss={onDismiss}>
      <CellContainer>
        <Row>
          <Text>Email</Text>
          <Input />
        </Row>
        <Row>
          <Text>Email</Text>
          <Input />
        </Row>
        <Row>
          <Text>Email</Text>
          <Input />
        </Row>
        <Row>
          <Text>Email</Text>
          <Input />
        </Row>
        <Row>
          <Text>Email</Text>
          <Input />
        </Row>
        <div>s</div>
        <div>s</div>
        <div>s</div>
        <div>s</div>
      </CellContainer>
    </Modal>
  )
}
