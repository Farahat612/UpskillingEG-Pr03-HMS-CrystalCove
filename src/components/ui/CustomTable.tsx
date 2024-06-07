import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import { Ad, Booking, Column, Facility, Room, User } from '../../types'

import { Delete } from '@mui/icons-material'
import { useModalsContext } from '../../contexts/global/ModalsContext'
import { DeleteModal } from '../modals'
import { useState } from 'react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.textLight?.main,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

interface CustomTableProps {
  columns: Column[]
  rows: User[] | Room[] | Facility[] | Ad[] | Booking[]
  page: string
}

export default function CustomTable({ columns, rows, page }: CustomTableProps) {
  const { deleteModalOpened, setDeleteModalOpened } = useModalsContext()
  const [itemIdToDelete, setItemIdToDelete] = useState('')

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell key={column.id} align='center'>
                  {column.label}
                </StyledTableCell>
              ))}
              {page !== 'users' && (
                <StyledTableCell key='actions' align='center'>
                  Actions
                </StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                {columns.map((column) => (
                  <StyledTableCell key={column.id} align='center'>
                    {row[column.id]}
                  </StyledTableCell>
                ))}
                {page !== 'users' && (
                  <StyledTableCell key='actions' align='center'>
                    <Delete
                      onClick={() => {
                        setDeleteModalOpened(true)
                        setItemIdToDelete(row._id)
                      }}
                      color='error'
                      sx={{ cursor: 'pointer' }}
                    />
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteModal
        open={deleteModalOpened}
        setOpen={setDeleteModalOpened}
        itemId={itemIdToDelete}
        endpoint={page}
      />
    </>
  )
}
