import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CollapseWrapper = styled.div`
  margin-bottom: 20px;
`
const ClickableBar = styled.div`
  display: flex;
  background-color: ${colors.primaryColor};
  height: 30px;

  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  padding: 0 11px;
`
const Arrow = styled.span`
  color: white;
`

const CollapseTitle = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: white;
`
const AdditionalContent = styled.div`
  height: 100px;
  background-color: ${colors.secondaryColor};
  color: ${colors.primaryColor};
  height: 100%;
  border-radius: 5px;
  padding: 20px 11px 50px 11px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`

function Collapse({ title, children }) {
  const [collapsed, setCollapsed] = useState(true)
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }
  return (
    <CollapseWrapper>
      <ClickableBar onClick={toggleCollapse}>
        <CollapseTitle>{title}</CollapseTitle>
        <Arrow>
          <i class="fa-solid fa-chevron-up"></i>
        </Arrow>
      </ClickableBar>
      {!collapsed && <AdditionalContent>{children}</AdditionalContent>}
    </CollapseWrapper>
  )
}
export default Collapse
