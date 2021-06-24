import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Text } from '@pancakeswap/uikit'
import { useSetUserList, useGetUserList } from 'state/hooks'
import { isEmpty } from 'utils/form-validation'
import VerifyCell from './VerifyCell'
import StatusCell from './StatusCell'
import SettingCell from './SettingCell'

export default function DataTable() {
  const [reload, setReload] = useState(true)
  useSetUserList(reload)
  const { users } = useGetUserList()
  const handleReload = () => {
    setReload(!reload)
  }
  const renderHeader = ({ colDef }) => {
    return <Text>{colDef.headerName}</Text>
  }
  const renderCell = ({ row, field }) => {
    return <Text small>{row[field]}</Text>
  }

  const renderCellToken = () => {
    return <Text small>0</Text>
  }
  const renderCellLastLogin = ({ row, field }) => {
    const data = isEmpty(row[field]) ? 'Not logged yet' : new Date(row[field])

    return <Text small>{data.toString()}</Text>
  }

  const renderVerifyStatus = ({ row }) => {
    const { verKYC, verEmail } = row
    return <VerifyCell verKYC={verKYC} verEmail={verEmail} />
  }
  const renderSetting = ({ row }) => {
    return <SettingCell data={row} handleReload={handleReload} />
  }
  const renderStatus = ({ row }) => {
    const { status } = row
    return <StatusCell status={status} />
  }

  const columns = [
    {
      field: 'name',
      headerName: 'USER',
      width: 110,
      renderHeader,
      renderCell,
    },
    { field: 'email', headerName: 'EMAIL', width: 190, renderHeader, renderCell },
    { field: 'tokens', headerName: 'TOKENS', width: 120, renderHeader, renderCell: renderCellToken },
    {
      field: 'verifiedStatus',
      headerName: 'VERIFIED STATUS',
      width: 190,
      renderHeader,
      renderCell: renderVerifyStatus,
      filterable: false,
    },
    { field: 'lastLogin', headerName: 'LAST LOGIN', width: 220, renderHeader, renderCell: renderCellLastLogin },
    { field: 'role', headerName: 'ROLE', width: 100, renderHeader, renderCell },
    { field: 'status', headerName: 'STATUS', width: 120, renderHeader, renderCell: renderStatus },
    {
      field: 'action',
      headerName: '',
      width: 80,
      filterable: false,
      sortable: false,
      renderHeader,
      renderCell: renderSetting,
    },
  ]
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={users} columns={columns} pageSize={10} scrollbarSize={1} hideFooterRowCount />
    </div>
  )
}
