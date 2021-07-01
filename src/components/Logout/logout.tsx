import React, { useEffect } from 'react'
import { useSetAuth } from 'state/hooks'
import setAuthToken from 'utils/setAuthToken'
import { auth } from 'firebaseClient/firebase'

const ExpandableSectionButton: React.FC = () => {
  const userInfo = { useremail: '', userrole: '' }
  useSetAuth(userInfo)
  setAuthToken('')
  useEffect(() => {
    auth.signOut()
    localStorage.removeItem("auth_token");
  }, [])
  return <div> </div>
}

export default ExpandableSectionButton
