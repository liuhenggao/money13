import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    flex: 1;
    > .types{
        display: flex;
        > span{
            width: 50%;
            text-align:center;
            font-size: 1.3em;
            font-weight: 500;
            padding: 12px 0;
        }
        > .active{
            position: relative;
            &::before{
                content: '';
                display: block;
                height: 5px;
                width: 100px;
                left: 50%;
                transform:translateX(-50%);
                bottom: 0;
                border-radius: 4px;
                background: rgb(29,161,242);
                position: absolute;
            }
        }
        > .right{
            &::before{
                background: #e1251b;
            }
        }
    }
    > .amount{
        display: flex;
        margin-top: 24px;
        align-items: center;
        padding: 0 24px;
        > .mark{
            font-size: 40px;
            font-weight: 500;
        }
        > .money{
            flex: 1;
            text-align: right;
            font-size: 32px;
            font-weight: 400;
        }
    }
`

function AmountTags(props: any) {
    const [state, setState] = useState({
        isTypes: true
    })
    function trigger(e: React.MouseEvent) {
        let ec = e.target as HTMLButtonElement
        if (ec.nextSibling !== null && ec.className === '') {
            setState({
                isTypes: true
            })
            props.getTypes(true)
        } else if (ec.previousSibling !== null && ec.className === '') {
            setState({
                isTypes: false
            })
            props.getTypes(false)
        }
    }
    return (<Wrapper>
        <div className="types">
            <span className={state.isTypes ? 'active' : ''} onClick={trigger}>收入</span>
            <span className={state.isTypes ? '' : 'active right'} onClick={trigger}>支出</span>
        </div>
        <div className="amount">
            <span className="mark">￥</span>
            <span className="money">0</span>
        </div>
    </Wrapper>)
}

export default AmountTags