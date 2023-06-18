import UserTableRow from "./UserTableRow";

import { TableHead, TableBody, TableContainer, TableRow, TableCell, Table } from "@mui/material";
import styled from "@mui/styled-engine";

const StyledTableHead = styled(TableHead)(({ table }) => ({
  width: '100%',
  '& .MuiTableCell-root': {
    padding: '8px 16px',
  }
}))

const StyledTableRow = styled(TableRow)(({ table }) => ({
  backgroundColor: '#ffb691',
  '& .MuiTableCell-root': {
    color: 'white',
    fontWeight: 'bold',
  }
}))

const StyledTable = styled(Table)(({ table }) => ({
  borderCollapse: 'separate',
}))


export default function UserTable() {
  return (
    <TableContainer>
      <StyledTable>

        <StyledTableHead>
          <StyledTableRow>
            <TableCell>
              <input type="checkbox" />
            </TableCell>

            <TableCell></TableCell>

            <TableCell>
              First Name
            </TableCell>

            <TableCell>
              Second Name
            </TableCell>

            <TableCell>
              Role
            </TableCell>

            <TableCell>Starting date</TableCell>

            <TableCell>Active</TableCell>

            <TableCell></TableCell>
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>
          <UserTableRow {...{
            firstName: 'Makenna',
            secondName: 'Rosser',
            role: 'Pianist',
            startDate: '12/06/2020',
            active: true
          }} />

          <UserTableRow {...{
            firstName: 'Madelyn',
            secondName: 'Donin',
            role: 'Judge',
            startDate: '15/08/2017',
            active: true
          }} />

          <UserTableRow {...{
            firstName: 'Madelyn',
            secondName: 'Donin',
            role: 'Judge',
            startDate: '15/08/2017',
            active: true
          }} />
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}