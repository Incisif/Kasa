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
  transform: rotate(${({ arrowRotation }) => arrowRotation}deg);
  transition: transform 0.2s ease-in-out;
`;

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
  transform-origin: top;
  transform: translateY(${({ collapsed }) => (collapsed ? '-100%' : '0')});
  transition: transform 0.3s ease-in-out;
`

function Collapse({ title, children }) {
  const [collapsed, setCollapsed] = useState(true)
  const [arrowRotation, setArrowRotation] = useState(0);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    setArrowRotation(arrowRotation === 0 ? 180 : 0);
  };
  
  return (
    <CollapseWrapper>
      <ClickableBar onClick={toggleCollapse}>
        <CollapseTitle>{title}</CollapseTitle>
        <Arrow arrowRotation={arrowRotation}>
          <i className="fa-solid fa-chevron-up"></i>
        </Arrow>
      </ClickableBar>
      {!collapsed && <AdditionalContent collapsed={collapsed}>{children}</AdditionalContent>}
    </CollapseWrapper>
  )
}
export default Collapse
