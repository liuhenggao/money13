import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    width: 100%;
    margin-bottom: 4px;
    > button{
        font-size: 1.3em;
        border: 2px solid rgb(250,250,250);
        background: white;
        outline: none;
        &:active{
            background: rgba(29,161,242,.2);
            -webkit-tap-highlight-color:transparent;
        }
    }
    > .number{
        width: 25%;
        height: 64px;
    }
    > .confirm{
        float: right;
        width: 25%;
        height: 192px;
    }
    > .zero{
        width: 50%;
    }
    > .delete{
        background: rgba(29,161,242,.7);
        color: white;
    }
`

function NumberPad(props: any) {
    return (<Wrapper>
        <button className="number">1</button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button className="number delete" style={{ background: props.isTypes ? '#1da1f2' : '#e1251b' }}>DEL</button>
        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number">6</button>
        <button className="confirm">OK</button>
        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
        <button className="number zero">0</button>
        <button className="number">.</button>


    </Wrapper>)
}

export default NumberPad