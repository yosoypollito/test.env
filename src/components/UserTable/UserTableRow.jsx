import { MoreVert, AccountCircle } from "@mui/icons-material";
import { TableRow, TableCell } from "@mui/material";
import styled from "@mui/styled-engine";

const StyledTableRow = styled(TableRow)(({ table }) => ({
  backgroundColor: '#ffede5',
  '& .MuiTableCell-root': {
    color: '#5f5752',
    borderBottom: '2px solid #ffb691',
    verticalAlign: 'middle',
    alignItems: 'center',
    alignmentBaseline: 'middle',
  },
  '& .MuiTableCell-root:first-child': {
    borderRadius: '4px 0px 0px 4px',
  },
  '& .MuiTableCell-root:last-child': {
    borderRadius: '0px 4px 4px 0px',
  }
}))

export default function UserTableRow({ firstName, secondName, role, startDate, active }) {
  return (
    <StyledTableRow>
      <TableCell>
        <input type="checkbox" />
      </TableCell>

      <TableCell>
        <AccountCircle />
      </TableCell>

      <TableCell>
        {firstName}
      </TableCell>

      <TableCell>
        {secondName}
      </TableCell>

      <TableCell>
        {role}
      </TableCell>

      <TableCell>
        {startDate}
      </TableCell>

      <TableCell>
        {active.toString()}
      </TableCell>

      <TableCell>
        <MoreVert />
      </TableCell>

    </StyledTableRow >
  )
}