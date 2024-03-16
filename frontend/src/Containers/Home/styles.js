import styled from "styled-components"
import BaseList from "@material-ui/core/List"
import BaseListItem from "@material-ui/core/ListItem"

export const List = styled(BaseList)`
  min-height: 100px;
  max-height: 180px;
  overflow-y: scroll;
  box-shadow: 0px -8px 7px -9px #979292 inset;
  border: 1px solid gray;
  margin-top: 20px !important;
`

export const ListItem = styled(BaseListItem)`
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`

export const HomeWrapper = styled.div`
  width: 75vw;
  height: 90vh;
  display: flex;
  flex-flow: column;
  margin: auto;
  padding: 8px;
`