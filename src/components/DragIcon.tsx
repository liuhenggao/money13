import React from 'react'
import Icon from 'components/Icon'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    > .icon{
        fill: rgba(29,161,242,1.00);
        width: 48px;
        height: 48px;
        border-radius:50%;
        background:white;
    }
`
type Props = {
    name: string,
    position: { [key: string]: string }
}

const DragIcon = (props: Props) => {
    let styled: { [key: string]: string } = props.position
    return (<Wrapper style={styled}> <Icon name={props.name}></Icon></Wrapper >)
}

export default DragIcon