import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Content from './Content'

export interface ITableProps {
  data?: ''
  columns?: []
  userDataReady?: boolean
  sortColumn?: string
}

const Container = styled.div`
  filter: ${({ theme }) => theme.card.dropShadow};
  width: 100%;
  background: ${({ theme }) => theme.card.background};
  border-radius: 16px;
  margin: 16px 0px;
`

const TableWrapper = styled.div`
  overflow: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledTable = styled.div`
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const TableContainer = styled.div`
  position: relative;
`

const UserTable: React.FC<ITableProps> = (props) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { data, columns } = props

  return (
    <Container>
      <TableContainer>
        <TableWrapper ref={tableWrapperEl}>
          <StyledTable>
            <Content />
          </StyledTable>
        </TableWrapper>
      </TableContainer>
    </Container>
  )
}

export default UserTable
