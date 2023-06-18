import { Grid } from "@mui/material";
import UserRow from "./UserRow";
import { Row, RowItem } from "./styled";

export default function GridContent() {

  return (
    <Grid container gap="6px">

      <Row head>
        <RowItem>
          <input type="checkbox" />
        </RowItem>

        <RowItem></RowItem>

        <RowItem>
          First Name
        </RowItem>

        <RowItem>
          Second Name
        </RowItem>

        <RowItem>
          Role
        </RowItem>

        <RowItem>Starting date</RowItem>

        <RowItem>Active</RowItem>

        <RowItem></RowItem>
      </Row>
      <UserRow {...{
        firstName: 'Madelyn',
        secondName: 'Donin',
        role: 'Judge',
        startDate: '15/08/2017',
        active: true,
        head: true
      }} />
      <UserRow {...{
        firstName: 'Madelyn',
        secondName: 'Donin',
        role: 'Judge',
        startDate: '15/08/2017',
        active: true
      }} />
    </Grid>
  )
}