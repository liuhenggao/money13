import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
    height: 20%;
    width: inherit;
    position: fixed;
    background: rgba(29,161,242);
    > .title{
        color: white;
        text-align: center;
        font-size: 18px;
        padding-top: 1em;
    }
`

function Header() {
    return (<Wrapper>
        <div className="title">天天记账</div>
    </Wrapper>)
}

export default Header