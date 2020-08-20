import styled from 'styled-components'
import React from 'react'
import { NavLink } from "react-router-dom"
import Icon from 'components/Icon'

const NavWrapper = styled.div`
    box-shadow: 0 0 2px rgba(0,0,0,0.3);
    >ul{
    display:flex;
    align-items:center;
    >li{
      padding: 3px 0 8px 0;
      text-align:center;
      flex-grow:1;
      >a{
        display:flex;
        flex-direction:column;
        align-items:center;
        &.selected{
          color: rgb(29,161,242);
          >.icon{
              fill: rgb(29,161,242);
          }
        }
      }
    }
  }
`

function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li className="active">
                    <NavLink activeClassName="selected" to="/money">
                        <Icon name='money' />
                        明细
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/statistics">
                        <Icon name='count' />
                        统计
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/tags">
                        <Icon name='tags' />
                        标签
                    </NavLink>
                </li>
            </ul>
        </NavWrapper >
    )
}

export default Nav