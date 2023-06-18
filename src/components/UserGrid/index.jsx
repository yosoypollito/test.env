import { Box } from "@mui/material";
import Filters from "../filters";
import GridContent from "./Grid";

export default function UserGrid() {
  return (
    <Box padding="8px" sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
    }}>
      <Filters />
      <GridContent />
    </Box>
  )
}