import React, { useEffect } from 'react'
import { useSetAuth } from 'state/hooks'

const ExpandableSectionButton: React.FC = () => {
  const userInfo = { useremail: '', userrole: '' }
  useSetAuth(userInfo)

  useEffect(() => {
    localStorage.removeItem('auth_token')
  }, [])
  return <div> </div>
}

export default ExpandableSectionButton
