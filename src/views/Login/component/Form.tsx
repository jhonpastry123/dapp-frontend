import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Input, Button } from '@pancakeswap/uikit'
import jwt from 'jsonwebtoken'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import { isEmail, minLength, isEmpty } from 'utils/form-validation'
import { signIn } from 'action/auth'
import { useAuth } from 'state/hooks'
import history from 'routerHistory'

// import { Input, Checkbox, Button, Text } from '@pancakeswap/uikit'

const FromDiv = styled.div`
  & > input {
    margin-bottom: 20px;
  }
  margin-bottom: 20px;
`
const RememberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const ActionDiv = styled.div`
  button {
    width: 100%;
  }
`
// const RememberCheck = styled.div`
//   display: flex;
//   gap: 10px;
// `

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [sending, setSending] = useState(false)
  const { toastWarning, toastSuccess } = useToast()
  const { t } = useTranslation()
  const authState = useAuth()

  const handleChange = (type, value) => {
    switch (type) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPass(value)
        break
      default:
        break
    }
  }
  const requestCallback = (event) => {
    event.preventDefault()

    if (email === '') {
      toastWarning(t('Validation Error'), t('Please enter the your email.'))
      return
    }
    if (!isEmail(email)) {
      toastWarning(t('Validation Error'), t('This doesn’t look like e-mail please check it again.'))
      return
    }

    if (password === '' || !minLength(password, 6)) {
      toastWarning(t('Validation Error'), t('Please enter the your password correctly.'))
      return
    }
    setSending(true)
    signIn(email, password).then((data) => {
      setSending(false)
      if (isEmpty(data.success)) return
      if (data.success) {
        history.push('/')
        toastSuccess(t('Login'), t('Welcome!!!'))
        localStorage.setItem('auth_token', data.token)
      } else {
        toastWarning(t('Login Error'), data.message)
      }
    })
  }
  useEffect(() => {
    if (authState.isAuthenticated) history.push('/')
  }, [authState])
  return (
    <FromDiv>
      <Input
        placeholder="Your Email"
        scale="lg"
        onChange={(e) => handleChange('email', e.target.value)}
        value={email}
      />
      <Input
        type="password"
        placeholder="Password"
        scale="lg"
        value={password}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      <RememberContainer>
        {/* <RememberCheck>
          <Checkbox id="checkbox" scale="sm" />
          <Text>{t('Remember me')}</Text>
        </RememberCheck>
        <Text>{t('Forgot password?')}</Text> */}
      </RememberContainer>
      <ActionDiv>
        <Button scale="md" variant="primary" onClick={requestCallback} isLoading={sending}>
          {t('Sign In')}
        </Button>
      </ActionDiv>
    </FromDiv>
  )
}

export default Login