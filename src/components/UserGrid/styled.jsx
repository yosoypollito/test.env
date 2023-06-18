import { Box } from "@mui/material";
import styled from "@mui/styled-engine";
export const Row = styled(Box)(({ theme, head }) => ({
  display: 'grid',
  gridTemplateColumns: '50px 50px repeat(5, 1fr) 50px',
  width: '100%',
  padding: head ? "8px 16px" : '16px',
  background: head ? "#ffb691" : '#ffede5',
  fontWeight: head && 'bold',
  color: head ? 'white' : '#5f5752',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  fontSize: '14px',
  borderBottom: '2px solid #ffb691',
  gap: '8px'
}))

export const RowItem = styled(Box)(({ theme }) => ({

}))