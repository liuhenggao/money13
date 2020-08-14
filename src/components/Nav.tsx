import styled from 'styled-components'
import React from 'react'
import { Link } from "react-router-dom"

const NavWrapper = styled.div`
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
  > ul{
    display:flex;
    align-items:center;
    >li{
      padding: 16px;
      flex-grow:1;
      text-align:center;
    }
  }
`

function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tag">标签页面</Link>
                </li>
                <li>
                    <Link to="/money">记账页面</Link>
                </li>
                <li>
                    <Link to="/statistics">统计页面</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav