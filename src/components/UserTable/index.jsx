import { Box } from "@mui/material";
import Filters from "../filters";
import Table from "./Table";

export default function UserTable() {
  return (
    <Box padding="8px" sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
    }}>
      <Filters />
      <Table />
    </Box>
  )
}