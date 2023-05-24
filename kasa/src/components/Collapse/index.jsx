import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CollapseWrapper = styled.div``
const ClickableBar = styled.div``

function Collapse({title, children}) {
  const [collapsed, setCollapsed] = useState(true)
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }
  return (
    <CollapseWrapper>
      <ClickableBar onClick={toggleCollapse}><h2>{title}</h2></ClickableBar>
    </CollapseWrapper>
  )
}
export default Collapse
