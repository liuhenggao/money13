import React from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import 'components/drawer.css'

const Wrapper = styled.div`
    position: fixed;
    height: 85%;
    padding: 8px;
    width: inherit;
    background: #fff;
    z-index: 1000;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display:flex;
    flex-direction:column;
    > .icon{
        width: 24px;
        height: 24px;
        fill: #9f9f9f;
        margin: 8px;
        align-self: flex-end;
    }
`
function Drawer(props: any) {
    return (<Wrapper className={props.showEle ? 'popUp' : 'popDown'}>
        <Icon name="close"></Icon>
        {props.children}
    </Wrapper>)
}

export default Drawer