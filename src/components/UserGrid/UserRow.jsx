import { MoreVert, AccountCircle } from "@mui/icons-material";
import { Row, RowItem } from "./styled";

export default function UserRow({ firstName, secondName, role, startDate, active }) {
  return (
    <Row>
      <RowItem>
        <input type="checkbox" />
      </RowItem>

      <RowItem>
        <AccountCircle />
      </RowItem>

      <RowItem>
        {firstName}
      </RowItem>

      <RowItem>
        {secondName}
      </RowItem>

      <RowItem>
        {role}
      </RowItem>

      <RowItem>
        {startDate}
      </RowItem>

      <RowItem>
        {active.toString()}
      </RowItem>

      <RowItem>
        <MoreVert htmlColor="#d8784b" />
      </RowItem>

    </Row>
  )
}