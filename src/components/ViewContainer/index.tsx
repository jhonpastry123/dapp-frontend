import React from 'react'
import PageLoader from 'components/PageLoader'
import Menu from 'components/Menu'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'

const ViewContainer: React.FC = ({ children }) => {
  return (
    <Menu>
      <SuspenseWithChunkError fallback={<PageLoader />}>{children}</SuspenseWithChunkError>
    </Menu>
  )
}

export default ViewContainer
