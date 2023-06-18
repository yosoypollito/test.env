import { Box, FormControl, InputAdornment, InputBase, InputLabel, MenuItem, Select, TextField } from "@mui/material"

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import GroupsIcon from '@mui/icons-material/Groups';

import styled from "@mui/styled-engine";
import { Search } from "@mui/icons-material";

const FiltersContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '140px 140px 1fr',
  alignItems: 'center',
  gap: '8px',
  padding: '16px',
  backgroundColor: '#ffb691',
  borderRadius: '8px 8px 0 0',
}))

const StyledLabel = styled(InputLabel)({
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  gap: "8px",
  color: '#000',
  borderColor: 'lime',
})

const StyledTextField = styled(TextField)({
  width: '100%',
  borderRadius: '8px',
  background: '#ffdecc',
  border: '0px',
  opacity: 1,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '0px',
    }
  },

  '& .MuiInputBase-input': {
    color: 'black',
  },

  '& .MuiInputBase-input::placeholder': {
    color: 'black',
    opacity: 1,
  },
  "& svg": {
    color: '#000',
  },
  "&:before, &:after": {
    display: 'none'
  }
})

const StyledSelect = styled(Select)({
  display: 'flex',
  alignItems: 'center',
  background: '#ffdecc',
})

const StyledFormControl = styled(FormControl)({
  outline: 'none',
})

const StyledInput = styled(InputBase)(({ theme }) => ({
  borderRadius: '4px',
  '& .MuiInputBase-input': {
    padding: '8px',
    border: '0px',
  }
}))

export default function Filters() {
  return (
    <FiltersContainer className='filters'>
      <StyledFormControl>
        <Box>
          <StyledLabel id="filters-label" size="small">
            <FilterAltIcon fontSize="16px" />
            Filters
          </StyledLabel>
        </Box>
        <StyledSelect input={<StyledInput />} labelId="filters-label" label="Filters" size="small">
          <MenuItem>
            Hello
          </MenuItem>
        </StyledSelect>
      </StyledFormControl>

      <StyledFormControl>
        <StyledLabel id="groups-label" size="small">
          <GroupsIcon />
          Group
        </StyledLabel>
        <StyledSelect input={<StyledInput />} labelId="groups-label" label="Groups" size="small">
          <MenuItem>
            Hello
          </MenuItem>
        </StyledSelect>
      </StyledFormControl>

      <StyledFormControl fullWidth>
        <StyledTextField size="small" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search fontSize="small" />
            </InputAdornment>
          )
        }}
          placeholder="Search"
        />
      </StyledFormControl>
    </FiltersContainer>
  )
}