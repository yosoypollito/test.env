import './App.css'
import UserGrid from './components/UserGrid'
import UserTable from './components/UserTable/index'
import styled from '@mui/styled-engine'

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from '@mui/x-date-pickers'

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  '& > .MuiInputBase-root': {
    background: 'lime',
    border: '3px solid red'
  }
}))

function App() {
  return (
    <>
      <UserTable />
      <UserGrid />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker />
      </LocalizationProvider>
    </>
  )
}

export default App
